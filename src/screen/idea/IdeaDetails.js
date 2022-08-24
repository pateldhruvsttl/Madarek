import React, { memo, useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import ImageLoad from "react-native-image-placeholder";
import CommonHeader from '../../component/commonheader/CommonHeader'
import IdeaStyle from './IdeaDetailsStyle'
import { ScrollView } from 'react-native-gesture-handler'
import { GetAppColor } from '../../utils/Colors'
import IdeaSlider from '../../component/detailsidea/IdeaSlider'
import { Label } from '../../utils/StringUtil'
import IdeaContent from '../../component/detailsidea/IdeaContent'
import { AppUtil } from '../../utils/AppUtil'
import UserProfileList from '../../component/detailsidea/UserProfileList'
import Resources from '../../component/detailsidea/Resources'
import ExpertInsightsSlider from '../../component/homescreen/ExpertInsightsSlider'
import SubIdeasList from '../../component/homescreen/SubIdeasList'
import VideoPlayer from '../../component/detailsidea/VideoPlayer'
import SubIdeasListWithImage from '../../component/homescreen/SubIdeasListWithImage'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Loger } from '../../utils/Loger';
import { UserManager } from '../../manager/UserManager';
import { EndPoints } from '../../service/EndPoints';
import ExpertInsight from '../../model/ExpertInsights';
import { Service } from '../../service/Service';
import { AppConfig, getLanguage } from '../../manager/AppConfig';
import DeviceInfo from "react-native-device-info";
import IdeaListModel from "../../model/IdeaList";
export const deviceId = DeviceInfo.getUniqueId()
import WebViewComp from '../../component/webview/WebViewComp';
import VideosPlayer from '../videoplayer/VideosPlayer';
import { set } from 'react-native-reanimated';

const IdeaDetails = (props) => {



  const navigation = useNavigation();
  const item = props.route.params
  const [expertInsight, setExpertInsight] = useState([]);
  const [isAllIdeas, setAllIdeas] = useState([]);

  useEffect(() => {
    onExpertInsights();
    onIdeas()
  }, []);

  const onExpertInsights = () => {
    const data = {
      "frontuser_id": UserManager.userId,
      "language": getLanguage(),
      "device_id": deviceId,
    }
    Service.post(EndPoints.expertInsights, data, (res) => {
      if (res?.statusCode === "1") {
        const expertInsightArr = [];
        res.data.map((ele) => {
          const model = new ExpertInsight(ele)
          expertInsightArr.push(model);
        })
        setExpertInsight(expertInsightArr)

      }

    }, (err) => {
      Loger.onLog('expertInsights  error ========>', err)
    })
  }

  const onIdeas = () => {
    const data = {
      "frontuser_id": UserManager.userId,
      "limit": 10,
      "language": getLanguage(),
      "listtype": "all",
      "searchkeywords": "",
    }
    Service.post(EndPoints.ideaList, data, (res) => {
      let _isAllIdeas = [];
      setAllIdeas([]);

      res?.data?.allIdea.map((element) => {
        let model = new IdeaListModel(element);
        _isAllIdeas.push(model);
      })
      setAllIdeas(_isAllIdeas)

    }, (err) => {
      Loger.onLog("err", err)
    })
  }

  const onFavoriteIdeas = (id) => {
    var data = {
      "field_name": "idea_id",
      "id": id,
      "frontuser_id": UserManager.userId,
      "model": 'FavoriteIdeas'
    }
    Service.post(EndPoints.ideaLikeUnlike, data, (res) => {

      const likeDislike = res?.data === 'dislike' ? true : false;
      const _isAllIdeas = isAllIdeas

      _isAllIdeas.map((ele, index) => {
        if (ele.id == id) {
          _isAllIdeas[index].favorite = likeDislike;
        }
      })
      setAllIdeas([..._isAllIdeas]);

    }, (err) => {
      Loger.onLog("err of likeUnlike", err)
    })
  }
  const onLikeIdeas = (id) => {
    var data = {
      "field_name": "idea_id",
      "id": id,
      "frontuser_id": UserManager.userId,
      "model": 'LikedislikeIdeas'
    }
    
    Service.post(EndPoints.ideaLikeUnlike, data, (res) => {

      const likeDislike = res?.data === 'dislike' ? 1 : 0;
      const _isAllIdeas = isAllIdeas
      _isAllIdeas.map((ele, index) => {
        if (ele.id == id) {
          if (likeDislike == 1) {
            _isAllIdeas[index].like = likeDislike
            _isAllIdeas[index].totalLike = Number(_isAllIdeas[index].totalLike) + 1;
          }
          else {
            _isAllIdeas[index].like = likeDislike
            _isAllIdeas[index].totalLike = Number(_isAllIdeas[index].totalLike) - 1;
          }
        }
      })
      setAllIdeas([..._isAllIdeas]);

    }, (err) => {
      Loger.onLog("err of likeUnlike", err)
    })
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CommonHeader isType={"IdeaDetails"} />
      <View style={IdeaStyle.MainView}>
        <ScrollView>

          <View style={IdeaStyle.container}>
            {item?.additionalImages.length > 0 ?
              <IdeaSlider Entries={item?.additionalImages} />
              :
              <View style={IdeaStyle.imgStyle}>
                <ImageLoad style={IdeaStyle.img} resizeMode='cover' source={{ uri: item?.ideaImage }} />
              </View>
            }

            <IdeaContent data={item} />

            <View style={IdeaStyle.contentBox}>
              <Text style={IdeaStyle.heading}>{Label?.Description}</Text>
              {/* <Text style={IdeaStyle.descriptionContent}>{item?.ideaDescription}</Text> */}
              <WebViewComp data={item?.ideaDescription} />
            </View>

            {item.team && item?.team.length > 0 && <UserProfileList profileData={item?.team} />}

            {item.ideaVideo ?
              <View style={IdeaStyle.videoPlay}>
                <Text style={IdeaStyle.heading}>{Label.Video}</Text>

                <VideosPlayer path={item?.ideaVideo} navi={props.navigation} />
                {/* <VideoPlayer path={item?.ideaVideo} /> */}
              </View> : null}

            {item?.resources.length > 0 && <Resources resource={item?.resources} />}

            {expertInsight.length > 0 && <ExpertInsightsSlider Entries={expertInsight} screen="IdeaDetail" />}

            <View style={IdeaStyle.subIdeaList}>
              <SubIdeasListWithImage
                data={isAllIdeas.splice(1,2)}
                isType="Ideas"
                onFavoriteIdeas={(id) => onFavoriteIdeas(id)}
                onLikeIdeas={(id) => onLikeIdeas(id)}
                isTitle={Label.MayAlsoInterested} screen="IdeaDetail"
                onSeeMorePress={() => { navigation.navigate("IdeasListScreen") }}
                onItemPress={(item) => { navigation.replace("IdeaDetails", item) }} />

            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default memo(IdeaDetails)