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
export const deviceId = DeviceInfo.getUniqueId()

const IdeaDetails = (props) => {

  const navigation = useNavigation();
  const item = props.route.params
  const [expertInsight, setExpertInsight] = useState([]);

  useEffect(() => {
    onExpertInsights();

    Loger.onLog("------------>", item)
  }, []);

  const onExpertInsights = () => {
    const data = {
      "frontuser_id": UserManager.userId,
      "language": AppConfig.lang,
      "device_id": deviceId,
    }
    Service.post(EndPoints.expertInsights, data, (res) => {
      console.log('response of idea detail api calling==============>>>>>',res.data);
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


  const resource = [{
    resourceName: "Idea module lorem ipsum",
  }, {
    resourceName: "Idea module lorem",
  }, {
    resourceName: "Idea module lorem ipsum doler",
  }, {
    resourceName: "Idea module lorem ipsum",
  }];

  const DATAPERSON = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Family business',
      subTitle: 'Children Omani Dress Competition',
      url: 'https://i.imgur.com/5tj6S7Ol.jpg',
      date: "25 Dec 21 - 29 Dec 21",
      see: '700',
      like: '200',
      comment: '80',
      isLike: true,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      subTitle: 'Children Omani Dress Competition',
      url: 'https://i.imgur.com/5tj6S7Ol.jpg',
      date: "25 Dec 21 - 29 Dec 21",
      see: '700',
      like: '200',
      comment: '80',
      isLike: false,
    },

  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CommonHeader isType={"IdeaDetails"} />
      <View style={IdeaStyle.MainView}>
        <ScrollView>

          <View style={IdeaStyle.container}>
            {item.additional_images ? 
            <IdeaSlider Entries={item.additional_images} />
             :
             <View style={IdeaStyle.imgStyle}>
               <ImageLoad style={IdeaStyle.img} resizeMode='cover' source={{ uri: item.user_photo }} isShowActivity={false} />
             </View>
             }

            <IdeaContent data={item} />

            <View style={IdeaStyle.contentBox}>
              <Text style={IdeaStyle.heading}>{Label.Description}</Text>
              <Text style={IdeaStyle.descriptionContent}>{item.ideaDescription}</Text>
            </View>

            {item.team &&<UserProfileList profileData={item.team} />}

            {item.video &&
              <View style={IdeaStyle.videoPlay}>
                <VideoPlayer />
              </View>}

            {item.resources && <Resources resource={item.resources} />}

            {expertInsight.length > 0 && <ExpertInsightsSlider Entries={expertInsight} screen="IdeaDetail" />}

            <View style={IdeaStyle.subIdeaList}>
              <SubIdeasListWithImage data={DATAPERSON} isTitle={Label.MayAlsoInterested} screen="IdeaDetail" isType="Ideas"
                onSeeMorePress={() => { navigation.navigate("IdeasListScreen") }}
                onItemPress={() => { navigation.navigate("IdeaDetails") }} />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default memo(IdeaDetails)