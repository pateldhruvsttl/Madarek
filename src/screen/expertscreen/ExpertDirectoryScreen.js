import { View, ScrollView, TouchableOpacity, Text } from 'react-native'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../component/commonheader/CommonHeader";
import SimilarExperts from '../../component/expertscreen/SimilarExperts';
import Style from './ExpertDirectoryStyle';

function ExpertDirectoryScreen() {
    const { themeColor } = useSelector((state) => state)

    return (
        <SafeAreaView style={Style.SafeAryView}>
            <CommonHeader isType={"ExpertDirectoryScreen"} onMenuClick={() => null} />
            <View style={Style.MainView}>
                <SimilarExperts data={expertInsightsData} maxLimit={0} />
            </View>
        </SafeAreaView>
    )
}
export default memo(ExpertDirectoryScreen);

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

];