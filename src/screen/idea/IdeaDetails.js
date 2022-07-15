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
import { AppConfig } from '../../manager/AppConfig';
import DeviceInfo from "react-native-device-info";
import IdeaListModel from "../../model/IdeaList";
export const deviceId = DeviceInfo.getUniqueId()

const IdeaDetails = (props) => {

  

  const navigation = useNavigation();
  const item = props.route.params
  const [expertInsight, setExpertInsight] = useState([]);
  const [isAllIdeas, setAllIdeas] = useState([]);
  console.log("item", item)
  useEffect(() => {
    onExpertInsights();
    onIdeas()

   
  }, []);

  const onExpertInsights = () => {
    const data = {
      "frontuser_id": UserManager.userId,
      "language": AppConfig.lang,
      "device_id": deviceId,
    }
    Service.post(EndPoints.expertInsights, data, (res) => {
      console.log('response of idea detail api calling==============>>>>>', res.data);
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
      "limit": 2,
      "language": AppConfig.lang,
      "listtype": "all",
      "searchkeywords": "",
    }
    Service.post(EndPoints.ideaList, data, (res) => {

      Loger.onLog("res", res)
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

  const onLikeIdeas = (id) => {
    var data = {
      "field_name": "idea_id",
      "id": id,
      "frontuser_id": UserManager.userId,
      "model": 'LikedislikeIdeas'
    }
    Service.post(EndPoints.ideaLikeUnlike, data, (res) => {

      const likeDislike = res?.data === 'dislike' ? false : true;
      const _isAllIdeas = isAllIdeas

      _isAllIdeas.map((ele, index) => {
        if (ele.id == id) {
          _isAllIdeas[index].like = likeDislike;
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
            {item?.additional_images ?
              <IdeaSlider Entries={item?.additional_images} />
              :
              <View style={IdeaStyle.imgStyle}>
                <ImageLoad style={IdeaStyle.img} resizeMode='cover' source={{ uri: item?.user_photo }} isShowActivity={false} />
              </View>
            }

            <IdeaContent data={item} />

            <View style={IdeaStyle.contentBox}>
              <Text style={IdeaStyle.heading}>{Label?.Description}</Text>
              <Text style={IdeaStyle.descriptionContent}>{item?.ideaDescription}</Text>
            </View>

            {item?.team.length > 0 && <UserProfileList profileData={item?.team} />}

            {item?.video &&
              <View style={IdeaStyle.videoPlay}>
                <VideoPlayer />
              </View>}

            {item?.resources && <Resources resource={item?.resources} />}

            {expertInsight.length > 0 && <ExpertInsightsSlider Entries={expertInsight} screen="IdeaDetail" />}

            <View style={IdeaStyle.subIdeaList}>
              <SubIdeasListWithImage
                data={isAllIdeas}
                isType="Ideas"
                likeIdea={onLikeIdeas}
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