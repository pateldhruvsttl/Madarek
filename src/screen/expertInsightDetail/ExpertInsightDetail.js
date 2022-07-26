import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import CommonHeader from '../../component/commonheader/CommonHeader'
import IdeaSlider from '../../component/detailsidea/IdeaSlider'
import IdeaContent from '../../component/detailsidea/IdeaContent'
import UserProfileList from '../../component/detailsidea/UserProfileList'
import VideoPlayer from '../../component/detailsidea/VideoPlayer'
import Resources from '../../component/detailsidea/Resources'
import ExpertInsightsSlider from '../../component/homescreen/ExpertInsightsSlider'
import SubIdeasListWithImage from '../../component/homescreen/SubIdeasListWithImage'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { Label } from '../../utils/StringUtil'
import ExpertInsightDetailStyle from './ExpertInsightDetailStyle'

const ExpertInsightDetail = (props) => {
    const navigation = useNavigation();
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
    favourite:"2",
    isLike: true,
    Description: 'Idea description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at iaculis eu at Idea description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at iaculis eu at Idea description Lorem ipsum dolor sit amet, consectetur adielit. Ultricies at iaculis eu at Idea description Lorem ipsudjm dolor sit amet, consectetur adipiscing elit. Ultricies at iaculis eu at description. Lorem ipsum dolor sit amet. consectetur adipiscing elit. Ultricies at iaculis eu at Idea description Lorem ipsum dolor sit amet. consectetur adipiscing elit. Ultricies at iaculis eu at Idea description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at iaculis eu at Idea description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at iaculis eu at description.'
  }

 



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
        <CommonHeader isType={"IdeaDetails"}  />
        <View style={ExpertInsightDetailStyle.MainView}>
          <ScrollView>
            <View style={ExpertInsightDetailStyle.container}>
              <IdeaSlider Entries={testData} />
              <IdeaContent data={DATA} isMyIdeaDetail={true} />
              <View style={ExpertInsightDetailStyle.contentBox}>
                <Text style={ExpertInsightDetailStyle.heading}>{Label.Description}</Text>
                <Text style={ExpertInsightDetailStyle.descriptionContent}>{DATA.Description}</Text>
              </View>
              {/* <UserProfileList profileData={userProfile} /> */}
              {/* <View style={ExpertInsightDetailStyle.videoPlay}> */}
                {/* <VideoPlayer /> */}
              {/* </View> */}
              {/* <Resources resource={resource} /> */}
              <ExpertInsightsSlider Entries={expertData} screen="IdeaDetail"/>
              <View style={ExpertInsightDetailStyle.subIdeaList}>
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

export default ExpertInsightDetail