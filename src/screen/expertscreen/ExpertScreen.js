import React, { memo } from "react";
import { View, Text, ScrollView, ScrollViewBase, StatusBar, TouchableOpacity } from "react-native";
import { useSelector } from 'react-redux'

import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../component/commonheader/CommonHeader";
import { GetAppColor } from "../../utils/Colors";
import Style from ".//ExpertScreenStyle";

import ExpertInsightsSlider from '../../component/homescreen/ExpertInsightsSlider'
import FavouriteCategories from "../../component/homescreen/FavouriteCategories";
import { Label } from "../../utils/StringUtil";
import { AppUtil } from "../../utils/AppUtil";

import { DrawerActions } from '@react-navigation/native';
import SimilarExperts from "../../component/expertscreen/SimilarExperts";

const ExpertScreen = (porps) => {

    const { themeColor } = useSelector((state) => state)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            
            <CommonHeader isType={"ExpertScreen"} onMenuClick={() => { porps.navigation.openDrawer() }} />
            <View style={Style.MainView}>
                <ScrollView>
                    <View style={{ height: '100%', backgroundColor: GetAppColor.greyBg }}>

                        <View style={Style.favouriteCategoriesView}>
                            <FavouriteCategories />
                        </View>

                        <View style={Style.similarExpertView}>
                            <SimilarExperts data={expertInsightsData} maxLimit={2} title={Label.ConnectedExperts} type={"ExpertScreen"}/>
                        </View>

                        <View style={Style.popularExpertView}>
                            <SimilarExperts data={populerExpertData} maxLimit={3} title={Label.PopularExperts} type={"ExpertScreen"}/>
                        </View>

                        <View style={Style.similarExpertView}>
                            <ExpertInsightsSlider Entries={expertData} />
                        </View>

                        <View style={Style.footerView}>
                            <Text style={Style.txtTitle}>{Label.ExpertDes}</Text>
                            <View style={Style.btnView}>
                                <TouchableOpacity style={[Style.btnLearMore, { borderColor: themeColor.buttonColor }]}>
                                    <Text style={[Style.txt, { color: themeColor.buttonColor }]}>{Label.LearnMore}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[Style.btnApplyNow, { backgroundColor: themeColor.buttonColor }]}>
                                    <Text style={[Style.txt, { color: GetAppColor.white }]}>{Label.ApplyNow}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </ScrollView >
            </View>
        </SafeAreaView>
    );
}

export default memo(ExpertScreen);

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
const expertInsightsData = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: "Khalid AI Rahbi",
        post: 'Senior Manager, Insights',
        title: 'Special Education',
        subTitle: 'Supporting Autism Children Development Development Development Development Development Development Development Development',
        des: "Innovation and Creativty Private Sector Quality of Living, Remewable Energy",
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "25 Jan 22",
        min: "57 min read",
        see: '700',
        like: '200',
        comment: '80',
        isLike: true,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: "Khalid AI Rahbi",
        post: 'Senior Manager, Insights',
        title: 'Special Education',
        subTitle: 'Supporting Autism Children Development',
        des: "Innovation and Creativty Private Sector Quality of Living, Remewable Energy",
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "25 Jan 22",
        min: "57 min read",
        see: '700',
        like: '200',
        comment: '80',
        isLike: false,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: "Khalid AI Rahbi",
        post: 'Senior Manager, Insights',
        title: 'Special Education',
        subTitle: 'Supporting Autism Children Development',
        des: "Innovation and Creativty Private Sector Quality of Living, Remewable Energy",
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "25 Jan 22",
        min: "57 min read",
        see: '700',
        like: '200',
        comment: '80',
        isLike: false,
    },
]

const populerExpertData = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: "Khalid AI Rahbi",
        post: 'Senior Manager, Insights',
        title: 'Special Education',
        subTitle: 'Supporting Autism Children Development Development Development Development Development Development Development Development',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "25 Jan 22",
        min: "57 min read",
        see: '700',
        like: '200',
        comment: '80',
        isLike: true,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: "Khalid AI Rahbi",
        post: 'Senior Manager, Insights',
        title: 'Special Education',
        subTitle: 'Supporting Autism Children Development',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "25 Jan 22",
        min: "57 min read",
        see: '700',
        like: '200',
        comment: '80',
        isLike: false,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: "Khalid AI Rahbi",
        post: 'Senior Manager, Insights',
        title: 'Special Education',
        subTitle: 'Supporting Autism Children Development',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "25 Jan 22",
        min: "57 min read",
        see: '700',
        like: '200',
        comment: '80',
        isLike: false,
    },
]