import React, { memo, useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
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


const IdeaDetails = (props) => {

  const navigation = useNavigation();
  const item = props.route.params
  const [expertInsight, setExpertInsight] = useState([]);

  useEffect(() => {
    onExpertInsights();

    Loger.onLog("------------>", item)
  }, []);

  const onExpertInsights = () => {
    const data = { "frontuser_id": UserManager.userId }

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


  const testData = [
    {
      url: 'https://i.imgur.com/SsJmZ9jl.jpg'
    },
    {
      url: 'https://i.imgur.com/5tj6S7Ol.jpg'
    },
    {
      url: 'https://i.imgur.com/pmSqIFZl.jpg'
    },
    {
      url: 'https://i.imgur.com/cA8zoGel.jpg'
    },
    {
      url: 'https://i.imgur.com/pewusMzl.jpg'
    },
    {
      url: 'https://i.imgur.com/l49aYS3l.jpg'
    }
  ];

  const userProfile = [
    {
      url: 'https://ath2.unileverservices.com/wp-content/uploads/sites/3/2017/09/professional-mens-hairstyles-combed-min-1024x683.jpg',
      name: 'Yashpal Sinha'
    },
    {
      url: 'https://ath2.unileverservices.com/wp-content/uploads/sites/3/2017/09/professional-mens-hairstyles-light-styling-min-532x355.jpg',
      name: 'Aadrsh Acharya'
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9QdsoL3XdTix4C40wyn5XpV3nUoC2phXcxQ&usqp=CAU',
      name: 'Abhimayu Laghari'
    },
  ];

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
            <IdeaSlider Entries={[item.ideaImage]} />

            <IdeaContent data={item} />

            <View style={IdeaStyle.contentBox}>
              <Text style={IdeaStyle.heading}>{Label.Description}</Text>
              <Text style={IdeaStyle.descriptionContent}>{item.ideaDescription}</Text>
            </View>

            {item.team && <UserProfileList profileData={item.team} />}

            {item.video &&
              <View style={IdeaStyle.videoPlay}>
                <VideoPlayer />
              </View>}

            <Resources resource={resource} />

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