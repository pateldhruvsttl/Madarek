import { View, Text,TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import CommonHeader from '../../component/commonheader/CommonHeader'
import { ScrollView } from 'react-native-gesture-handler'
import IdeaSlider from '../../component/detailsidea/IdeaSlider'
import { Label } from '../../utils/StringUtil'
import IdeaContent from '../../component/detailsidea/IdeaContent'
import { AppUtil } from '../../utils/AppUtil'
import UserProfileList from '../../component/detailsidea/UserProfileList'
import PAGESTYLE from './ChallengeDetailStyle'
import CategoryChallenge from '../../component/challengedetail/CategoryChallenge'
import SubInformation from '../../component/challengedetail/SubInformation'
import SubParticipateIdeas from '../../component/challengedetail/SubParticipateIdeas'
import IcnLoadMore from '../../assets/svg/IcnLoadMore'
import ResourceChallenge from '../../component/challengedetail/ResourceChallenges'
import { SafeAreaView } from 'react-native-safe-area-context'


const ChallengeDetail = (props) => {

  const title = "ChallengeDetail"
  const item = props.route.params
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CommonHeader isType={title} />

      <View style={PAGESTYLE.MainView}>
        <ScrollView>
          <View style={PAGESTYLE.subMainView}>

            <IdeaSlider Entries={testData} />
            <IdeaContent data={item} isType={title} />

            <View style={PAGESTYLE.contentBoxChallenge}>
              <Text style={PAGESTYLE.heading}>{Label.Description}</Text>
              <Text style={PAGESTYLE.descriptionContent}>{item.categoryDetails}</Text>
              <Text style={PAGESTYLE.termsAndConTitle}>{Label.TermsAndCondition}</Text>
            </View>

            <CategoryChallenge isType={title} />
            <SubInformation />

            <View style={PAGESTYLE.subIdeaList}>
              <SubParticipateIdeas data={DATAPERSON} />
            </View>

            <View style={PAGESTYLE.loadMoreView}>
              <TouchableOpacity style={PAGESTYLE.loadingMore}>
                <View style={PAGESTYLE.spacing}>
                  <IcnLoadMore width={AppUtil.getHP(1.2)} height={AppUtil.getHP(1.2)} />
                </View>
                <Text style={PAGESTYLE.txtLoadMore}>{Label.LoadMore}</Text>
              </TouchableOpacity>
            </View>

            <ResourceChallenge resource={resource} isType={title} />
            <UserProfileList profileData={userProfile} isType={title} />

          </View>
        </ScrollView>

      </View>
    </SafeAreaView>
  )
}

export default memo(ChallengeDetail)

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
  title: 'Green Mountain Power & Energy Transformation',
  sector: 'Sector A',
  category: 'Banking and Finance',
  url: 'https://i.imgur.com/5tj6S7Ol.jpg',
  date: "03 Mar 22 - 23 Mar 22",
  name: "Mitansh Bhavsar",
  see: '700',
  like: '200',
  comment: '80',
  isLike: true,
  Description: 'Idea description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at iaculis eu at Idea description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at iaculis eu at Idea description Lorem ipsum dolor sit amet, consectetur adielit. Ultricies at iaculis eu at Idea description Lorem ipsudjm dolor sit amet, consectetur adipiscing elit. Ultricies at iaculis eu at description. Lorem ipsum dolor sit amet. consectetur adipiscing elit. Ultricies at iaculis eu at Idea description Lorem ipsum dolor sit amet. consectetur adipiscing elit. Ultricies at iaculis eu at Idea description Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}

const userProfile = [
  {
    url: 'https://ath2.unileverservices.com/wp-content/uploads/sites/3/2017/09/professional-mens-hairstyles-combed-min-1024x683.jpg',
    name: 'Yashpal Sinha',
    occupation: "Senior Manager"
  },
  {
    url: 'https://ath2.unileverservices.com/wp-content/uploads/sites/3/2017/09/professional-mens-hairstyles-light-styling-min-532x355.jpg',
    name: 'Aadrsh Acharya',
    occupation: "Senior Manager"
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9QdsoL3XdTix4C40wyn5XpV3nUoC2phXcxQ&usqp=CAU',
    name: 'Abhimayu Laghari',
    occupation: "Senior Manager"
  },
];

const resource = [{
  resourceName: "Idea module lorem ipsum",
  url: "https://onlinejpgtools.com/images/examples-onlinejpgtools/ice-cream.jpg"
},
{
  resourceName: "Idea module lorem",
  url: "https://onlinejpgtools.com/images/examples-onlinejpgtools/ice-cream.jpg"
},
{
  resourceName: "Idea module lorem ipsum doler",
  url: "https://onlinejpgtools.com/images/examples-onlinejpgtools/ice-cream.jpg"
}
];

const DATAPERSON = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Family business',
    subTitle: 'Responsability Renewable Energy Holding',
    url: 'https://i.imgur.com/5tj6S7Ol.jpg',
    date: "25 Dec 21",
    rank: '01',
    totalScore: '850',
    votes: '360',
    isLike: true,
    name: "Mitansh Bhavsar",
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    subTitle: 'ReNew Power is a Wind Energy',
    url: 'https://i.imgur.com/5tj6S7Ol.jpg',
    date: "25 Dec 21 ",
    rank: '03',
    totalScore: '519',
    votes: '190',
    isLike: false,
    name: "Abhimayu Laghari"
  },
];