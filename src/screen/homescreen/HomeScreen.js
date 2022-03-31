import React, { memo } from "react";
import { View, Text, ScrollView, ScrollViewBase, StatusBar, TouchableOpacity, FlatList } from "react-native";
import { useSelector, useDispatch } from 'react-redux'

import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../component/commonheader/CommonHeader";
import EventSlider from "../../component/homescreen/EventSlider";
import IdealList from "../../component/homescreen/itemList/IdeaList"
import SubIdeasListWithImage from "../../component/homescreen/SubIdeasListWithImage";
import { GetAppColor } from "../../utils/Colors";
import Style from "./HomeScreenStyle";

import ExpertInsightsSlider from '../../component/homescreen/ExpertInsightsSlider'
import FavouriteCategories from "../../component/homescreen/FavouriteCategories";
import { Label } from "../../utils/StringUtil";
import { AppUtil } from "../../utils/AppUtil";
import { Loger } from "../../utils/Loger";



const HomeScreen = (props) => {

    const { themeColor } = useSelector((state) => state)
    const list = DATA.slice(0, 2);

    const onSetItem = (item) => {
        if (item === "Slider") {
            return <EventSlider Entries={testData} />
        }
        else if (item === "Tab") {
            return <IdealList data={sliderdata} />
        }
        else if (item === "Challenges") {
            return (
                <View style={{ backgroundColor: GetAppColor.lightWhite, paddingVertical: AppUtil.getHP(2) }}>
                    <SubIdeasListWithImage data={list} isTitle={Label.OpenChallenges} isType={"Challenges"} btn={Label.ParticipateNow} />
                </View>
            )
        }
        else if (item === "Spotlight") {
            return (
                <View style={{ paddingVertical: AppUtil.getHP(2) }}>
                    <SubIdeasListWithImage data={list} isTitle={Label.MadarekSpotlight} isType={"Spotlight"} />
                </View>
            )
        }
        else if (item === "ExpertInsightsSlider") {
            return (
                <View style={{ backgroundColor: GetAppColor.lightWhite, paddingVertical: AppUtil.getHP(2) }}>
                    <ExpertInsightsSlider Entries={expertData} />
                </View>
            )
        }
        else if (item === "FavouriteCategories") {
            return (
                <View style={{ backgroundColor: GetAppColor.white, paddingVertical: AppUtil.getHP(2) }}>
                    <FavouriteCategories />
                </View>
            )
        }
        else if (item === "Button") {
            return (
                <View style={Style.bottomBarView}>
                    <Text style={Style.txtBtnTitle}>{Label.readyToSubmitYourIdea}</Text>
                    <TouchableOpacity style={[Style.btn, { backgroundColor: themeColor.buttonColor }]} onPress={()=> props.navigation.navigate("SubmitIdeaScreen")}>
                        <Text style={Style.txtBtn}>{Label.submitIdea}</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CommonHeader isType={"HomeScreenHeader"} onMenuClick={() => { props.navigation.openDrawer() }} />

            <View style={Style.MainView}>
                <FlatList
                    data={dtList}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => onSetItem(item)}
                />
            </View>
        </SafeAreaView>
    );
}

export default memo(HomeScreen);

const dtList = ["Slider", "Tab", "Challenges","Spotlight","ExpertInsightsSlider","FavouriteCategories","Button"];

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
