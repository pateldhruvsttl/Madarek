import React, { memo } from "react";
import { View, Text, ScrollView, ScrollViewBase, StatusBar, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../component/commonheader/CommonHeader";
import EventSlider from "../../component/homescreen/EventSlider";
import IdealList from "../../component/homescreen/itemList/IdeaList"
import SubIdeasList from "../../component/homescreen/SubIdeasList";
import { GetAppColor } from "../../utils/Colors";
import HomeStyle from "./HomeScreenStyle";

import ExpertInsights from '../../component/homescreen/ExpertInsights'
import FavouriteCategories from "../../component/homescreen/FavouriteCategories";
import { Label } from "../../utils/StringUtil";
import { AppUtil } from "../../utils/AppUtil";

import { DrawerActions } from '@react-navigation/native';

const testData = [
    {
        title: 'Favourites landscapes 1',
        subtitle: 'Lorem ipsum dolor sit amet',
        url: 'https://i.imgur.com/SsJmZ9jl.jpg'
    },
    {
        title: 'Favourites landscapes 2',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg'
    },
    {
        title: 'Favourites landscapes 3',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat',
        url: 'https://i.imgur.com/pmSqIFZl.jpg'
    },
    {
        title: 'Favourites landscapes 4',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        url: 'https://i.imgur.com/cA8zoGel.jpg'
    },
    {
        title: 'Favourites landscapes 5',
        subtitle: 'Lorem ipsum dolor sit amet',
        url: 'https://i.imgur.com/pewusMzl.jpg'
    },
    {
        title: 'Favourites landscapes 6',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat',
        url: 'https://i.imgur.com/l49aYS3l.jpg'
    }
];
const sliderdata = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Poonam Madhav',
        title: 'Banking and Finance',
        subTitle: 'Children Omani Dress Competition',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "25 Jan 22",
        see: '700',
        like: '200',
        comment: '80',
        isLike: true,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Mitansh Bhavsar',
        title: 'Banking and Finance',
        subTitle: 'Children Omani Dress Competition',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "25 Jan 22",
        see: '700',
        like: '200',
        comment: '80',
        isLike: false,
    },

];

const DATA = [
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

const HomeScreen = (props) => {
console.log('pros of render in homescreen', props);
    return (

        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" hidden={false} backgroundColor={GetAppColor.statusBarYellow} translucent={true} />
            <CommonHeader isType={"HomeScreenHeader"} onManuClick={() => null} openDrawer={()=>{props.navigation.openDrawer()}} />
            <View style={HomeStyle.MainView}>
                <ScrollView>
                    <View style={{ height: '100%', backgroundColor: GetAppColor.greyBg }}>
                        <EventSlider Entries={testData} />
                        <IdealList data={sliderdata} />

                        <View style={{ backgroundColor: GetAppColor.lightWhite, paddingVertical: AppUtil.getHP(2) }}>
                            <SubIdeasList data={DATA} isTitle={"Open Challenges"} isType={"Challenges"} btn={"Participaate Now"}/>
                        </View>

                        <View style={{paddingVertical: AppUtil.getHP(2) }}>
                            <SubIdeasList data={DATA} isTitle={"Madarek Spotlight"} isType={"Spotlight"} />
                        </View>

                        <ExpertInsights Entries={expertData} />
                        <FavouriteCategories />

                        <View style={HomeStyle.bottomBarView}>
                            <Text style={HomeStyle.txtBotamBarTitil}>{Label.readyToSubmitYourIdea}</Text>
                            <TouchableOpacity style={HomeStyle.btn}>
                                <Text style={HomeStyle.txtBtn}>{Label.submitIdea}</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView >
            </View>
        </SafeAreaView>
    );
}
export default memo(HomeScreen);





