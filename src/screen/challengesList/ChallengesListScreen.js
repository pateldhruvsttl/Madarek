import React, { memo, useEffect, useState } from "react";
import { View, Text, ScrollView, ScrollViewBase, StatusBar, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../component/commonheader/CommonHeader";
import ListStyle from "./ChallengesListStyle";
import ViewMoreChallenges from "../../component/challengelist/listing/ViewMoreChallenges"
import { Label } from "../../utils/StringUtil";
import { Service } from "../../service/Service";
import { EndPoints } from "../../service/EndPoints";
import OpenChallenge from "../../model/OpenChallenges";
import IdeasFilter from "../../component/filter/IdeasFilter";


const Tab = createMaterialTopTabNavigator();

const ChallengesListScreen = (props) => {
    const [openChallenge, setOpenChallenge] = useState([])
    const [isFilterVisible, setFilterVisible] = useState(false);

    useEffect(() => {
        onOpenChallenge()
    }, [])

    const onOpenChallenge = () => {
        const data = '';
        Service.post(EndPoints.openChallenges, data, (res) => {
            var opChallenges = [];
            res.data.forEach(element => {
                let model = new OpenChallenge(element);
                opChallenges.push(model);
            });
            setOpenChallenge(opChallenges)
        }, (err) => {
            Loger.onLog("", err)
        })
    }

    // const data = props?.route?.params?.data ? props?.route?.params?.data : sliderdata

    return (
        <SafeAreaView style={ListStyle.container}>
            <CommonHeader isType={"ChallengesListing"} onMenuClick={() => { props.navigation.openDrawer() }}  onFilter={() => setFilterVisible(!isFilterVisible)}/>

            <View style={ListStyle.MainView}>
                <NavigationContainer independent={true}>
                    <Tab.Navigator screenOptions={{
                        tabBarLabelStyle: ListStyle.tabHeader,
                        tabBarItemStyle: ListStyle.tabBarItem,
                        tabBarIndicatorStyle: ListStyle.itemBorder,
                        tabBarScrollEnabled: true
                    }}>
                        <Tab.Screen name={Label.Open} children={() => <ViewMoreChallenges propName={{ type: "OpenChallenge", data: openChallenge }}  navigateDetail={(item) => props.navigation.navigate("ChallengeDetail",item)} />} />
                        <Tab.Screen name={Label.Upcoming} children={() => <ViewMoreChallenges propName={{ type: "UpcomingChallenge", data: openChallenge }} navigateDetail={(item) => props.navigation.navigate("ChallengeDetail",item)} />} />
                        <Tab.Screen name={Label.Closed} children={() => <ViewMoreChallenges propName={{ type: "ClosedChallenge", data: openChallenge }} navigateDetail={(item) => props.navigation.navigate("ChallengeDetail",item)} />} />
                        <Tab.Screen name={Label.Voting} children={() => <ViewMoreChallenges propName={{ type: "Challenge", data: openChallenge }} navigateDetail={(item) => props.navigation.navigate("ChallengeDetail",item)} />} />
                    </Tab.Navigator>
                </NavigationContainer>
            </View>
            <IdeasFilter visible={isFilterVisible} onClose={() => setFilterVisible(!isFilterVisible)} />

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










