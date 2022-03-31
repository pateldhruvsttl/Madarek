import React, { memo } from "react";
import { View, Text, ScrollView, ScrollViewBase, StatusBar, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../component/commonheader/CommonHeader";
import ListStyle from "./ChallengesListStyle";
import AllChallenge from "../../component/challengelist/listing/ViewMoreChallenges"
import { Label } from "../../utils/StringUtil";
import { GetAppColor } from "../../utils/Colors";
import { AppUtil } from "../../utils/AppUtil";

const Tab = createMaterialTopTabNavigator();

const ChallengesListScreen = (props) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CommonHeader isType={"ChallengesListing"} onMenuClick={() => { props.navigation.openDrawer() }} />

            <View style={ListStyle.MainView}>
                <NavigationContainer independent={true}>
                    <Tab.Navigator screenOptions={{
                        tabBarLabelStyle: { fontSize: 14,textTransform: 'capitalize',width:AppUtil.getWP(25) },
                        tabBarItemStyle: { width: 100 },
                        tabBarIndicatorStyle: { backgroundColor: GetAppColor.innovationGrey },
                        tabBarScrollEnabled:true
                   }}>
                        <Tab.Screen name={Label.Open} children={() => <AllChallenge propName={{ type: "OpenChallenge", data: sliderdata }} />} />
                        <Tab.Screen name={Label.Upcoming} children={() => <AllChallenge propName={{ type: "UpcomingChallenge", data: sliderdata }} />} />
                        <Tab.Screen name={Label.Closed} children={() => <AllChallenge propName={{ type: "ClosedChallenge", data: sliderdata }} />} />
                        <Tab.Screen name={Label.Voting} children={() => <AllChallenge propName={{ type: "Challenge", data: sliderdata }} />} />
                    </Tab.Navigator>
                </NavigationContainer>
            </View>
        </SafeAreaView>
    );
}

export default memo(ChallengesListScreen);

const sliderdata = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Poonam Madhav',
        title: 'Family Business',
        subTitle: 'Organize Specialty Travel Tours',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "15 Mar 22 - 29 Mar 22",
        see: '700',
        like: '200',
        comment: '80',
        isLike: true,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Mitansh Bhavsar',
        title: 'Renewable Energy',
        subTitle: 'Green Mountain Power & Energy Transformation',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "03 Mar 22 - 23 Mar 22",
        see: '700',
        like: '200',
        comment: '80',
        isLike: false,
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Poonam Madhav',
        title: 'Banking and Finance',
        subTitle: 'Create an Airport-Centric Application',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "20 Mar 22 - 30 Mar 22",
        see: '700',
        like: '200',
        comment: '80',
        isLike: true,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Mitansh Bhavsar',
        title: 'Family Business',
        subTitle: 'Become a Destination Wedding Planner',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "15 Mar 22 - 29 Mar 22",
        see: '700',
        like: '200',
        comment: '80',
        isLike: false,
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Poonam Madhav',
        title: 'Family Business',
        subTitle: 'Create a Local Grocery Delivery Service',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "15 Mar 22 - 29 Mar 22",
        see: '700',
        like: '200',
        comment: '80',
        isLike: true,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Mitansh Bhavsar',
        title: 'Family Business',
        subTitle: 'Children Omani Dress Competition',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "15 Mar 22 - 29 Mar 22",
        see: '700',
        like: '200',
        comment: '80',
        isLike: false,
    },

];










