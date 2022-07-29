import { View, ScrollView, TouchableOpacity, Text } from 'react-native'
import React, { memo, useState } from 'react'
import { useSelector } from 'react-redux'

import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../component/commonheader/CommonHeader";
import SimilarExperts from '../../component/expertscreen/SimilarExperts';
import Style from './ExpertDirectoryStyle';
import IdeasFilter from '../../component/filter/IdeasFilter';

function ExpertDirectoryScreen(props) {
    const { themeColor } = useSelector((state) => state)
    const [isFilterVisible, setFilterVisible] = useState(false);
    return (
        <SafeAreaView style={Style.SafeAryView}>
            <CommonHeader isType={"ExpertDirectoryScreen"} onMenuClick={() => null} onFilter={() => setFilterVisible(!isFilterVisible)} />
            <View style={Style.MainView}>
                <SimilarExperts data={expertInsightsData} navigateDetail={() => props.navigation.navigate("ExpertDetailsScreen")} />
            </View>
            <IdeasFilter type="ExpertDirectory" visible={isFilterVisible} onClose={() => setFilterVisible(!isFilterVisible)} />
        </SafeAreaView>
    )
}
export default memo(ExpertDirectoryScreen);

const expertInsightsData = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        firstName: "Khalid",
        lastName:"AI Rahbi",
        post: 'Senior Manager, Insights',
        jobTitle: 'Special Education',
        subTitle: 'Supporting Autism Children Development Development Development Development Development Development Development Development',
        ideaDescription: "Innovation and Creativty Private Sector Quality of Living, Remewable Energy",
        profilePhoto: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "25 Jan 22",
        min: "57 min read",
        totalViews: '700',
        totalLikes: '200',
        totalComments: '80',
        isLike: true,
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        firstName: "Khalid",
        lastName:"AI Rahbi",
        post: 'Senior Manager, Insights',
        jobTitle: 'Special Education',
        subTitle: 'Supporting Autism Children Development Development Development Development Development Development Development Development',
        ideaDescription: "Innovation and Creativty Private Sector Quality of Living, Remewable Energy",
        profilePhoto: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "25 Jan 22",
        min: "57 min read",
        totalViews: '700',
        totalLikes: '200',
        totalComments: '80',
        isLike: true,
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        firstName: "Khalid",
        lastName:"AI Rahbi",
        post: 'Senior Manager, Insights',
        jobTitle: 'Special Education',
        subTitle: 'Supporting Autism Children Development Development Development Development Development Development Development Development',
        ideaDescription: "Innovation and Creativty Private Sector Quality of Living, Remewable Energy",
        profilePhoto: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "25 Jan 22",
        min: "57 min read",
        totalViews: '700',
        totalLikes: '200',
        totalComments: '80',
        isLike: true,
    },
]