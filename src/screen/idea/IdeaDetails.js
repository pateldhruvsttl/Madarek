import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CommonHeader from '../../component/commonheader/CommonHeader'
import IdeaStyle from './IdeaDetailsStyle'
import { ScrollView } from 'react-native-gesture-handler'
import { GetAppColor } from '../../utils/Colors'
import IdeaSlider from '../../component/detailsidea/IdeaSlider'
import { Label } from '../../utils/StringUtil'
import IdeaContent from '../../component/detailsidea/IdeaContent'
import { AppUtil } from '../../utils/AppUtil'
import UserProfileList from './UserProfileList'
import Resources from './Resources'
import ExpertInsights from '../../component/homescreen/ExpertInsights'
import SubIdeasList from '../../component/homescreen/SubIdeasList'
import VideoPlayer from '../../component/detailsidea/VideoPlayer'


const IdeaDetails = () => {
  const { themeColor } = useSelector((state) => state)

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
  const DATA =
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Academy of Development Research and Training Consulting Pvt Ltd',
    sector: 'Sector A',
    category: 'Banking and Finance',
    url: 'https://i.imgur.com/5tj6S7Ol.jpg',
    date: "25 Nov 21",
    name: "Mitansh Bhavsar",
    see: '700',
    like: '200',
    comment: '80',
    isLike: true,
    Description: 'Idea description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at iaculis eu at Idea description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at iaculis eu at Idea description Lorem ipsum dolor sit amet, consectetur adielit. Ultricies at iaculis eu at Idea description Lorem ipsudjm dolor sit amet, consectetur adipiscing elit. Ultricies at iaculis eu at description. Lorem ipsum dolor sit amet. consectetur adipiscing elit. Ultricies at iaculis eu at Idea description Lorem ipsum dolor sit amet. consectetur adipiscing elit. Ultricies at iaculis eu at Idea description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at iaculis eu at Idea description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at iaculis eu at description.'
  }

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

  const expertData = [
    {
      name: 'Naredra Modi',
      job: 'Game Tester',
      title: 'Clean ocena plastic with HP SS',
      subTitle: "harvesting Hydroelectric Power and Cleaning up Ocean Plastic Global climate change isn't the",
      profilePic: 'https://i.imgur.com/5tj6S7Ol.jpg',
      see: '700',
      like: '210',
      comment: '180',
    },
    {
      name: 'Bhupendra Patel',
      job: 'App Tester',
      title: 'Clean ocena plastic with HP SS',
      subTitle: "harvesting Hydroelectric Power and Cleaning up Ocean Plastic Global climate change isn't the",
      profilePic: 'https://i.imgur.com/5tj6S7Ol.jpg',
      see: '700',
      like: '200',
      comment: '80',
    },
  ]
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
        <StatusBar barStyle="light-content"  backgroundColor={themeColor.statusBarColor} translucent={false} />
        <CommonHeader isType={"IdeaDetails"} />
        <View style={IdeaStyle.MainView}>
          <ScrollView>
            <View style={{ height: '100%',width:'100%', backgroundColor: GetAppColor.lightGrey ,paddingBottom:AppUtil.getHP(3),
         
          }}>
              <IdeaSlider Entries={testData} />
              <IdeaContent data={DATA} />
              <View style={IdeaStyle.contentBox}>
                <Text style={IdeaStyle.heading}>{Label.Description}</Text>
                <Text style={IdeaStyle.descriptionContent}>{DATA.Description}</Text>
              </View>
              <UserProfileList profileData={userProfile} />
              <View style={IdeaStyle.videoPlay}>
                <VideoPlayer />
              </View>
              <Resources resource={resource} />
              <ExpertInsights Entries={expertData} screen="IdeaDetail"/>
              <View style={IdeaStyle.subIdeaList}>
                <SubIdeasList data={DATAPERSON} isTitle={"You May Also be Interested in "} screen="IdeaDetail" />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
  )
}

export default memo(IdeaDetails)