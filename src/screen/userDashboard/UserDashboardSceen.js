import React, { memo } from "react";
import { View, Text, ScrollView, ScrollViewBase, StatusBar, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from 'react-redux'

import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../component/commonheader/CommonHeader";
import Style from "./UserDashboardSceenStyle";
import { Label } from "../../utils/StringUtil";
import { AppUtil } from "../../utils/AppUtil";

import UserDashboardIdeasList from "../../component/userdashboard/UserDashboardIdeasList";
import UserDetails from "../../component/userdashboard/UserDetails";


const UserDashboardSceen = (porps) => {

    const { themeColor } = useSelector((state) => state)
    const list = DATA.slice(0, 2);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CommonHeader isType={"UserDashboardSceen"} onManuClick={() => { porps.navigation.openDrawer() }} />

            <View style={Style.MainView}>
                <ScrollView>
                    <View style={Style.firstPos}>
                        <UserDetails />
                    </View>

                    <View style={Style.secondPos}>
                        <UserDashboardIdeasList data={list} isTitle={Label.MyIdeaJointRequest} isType={"Request"} />
                    </View>

                    <View style={Style.firstPos}>
                        <UserDashboardIdeasList data={MaturationData.slice(0, 2)} isTitle={Label.IdeaMaturation} isType={"Maturation"} />
                    </View>

                    <View style={Style.bottomBarView}>
                            <Text style={Style.txtBotamBarTitil}>{Label.readyToSubmitYourIdea}</Text>
                            <TouchableOpacity style={[Style.btn, { backgroundColor: themeColor.buttonColor }]}>
                                <Text style={Style.txtBtn}>{Label.submitIdea}</Text>
                            </TouchableOpacity>
                        </View>

                </ScrollView >
            </View>
        </SafeAreaView>
    );
}

export default memo(UserDashboardSceen);

const MaturationData = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Family business',
        subTitle: 'Children Omani Dress Competition',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "22 Jan 22",
        see: '700',
        like: '200',
        comment: '80',
        isLike: true,
        name:'Jainam Kumar',
        btn:"Completed"
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        subTitle: 'Children Omani Dress Competition',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "22 Jan 22",
        see: '700',
        like: '200',
        comment: '80',
        isLike: false,
        name:'Jainam Kumar',
        btn:"Completed"
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        subTitle: 'Children Omani Dress Competition',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "22 Jan 22",
        see: '700',
        like: '200',
        comment: '80',
        isLike: false,
        name:'Jainam Kumar',
    },

];
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Family business',
        subTitle: 'Children Omani Dress Competition',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "22 Jan 22",
        see: '700',
        like: '200',
        comment: '80',
        isLike: true,
        name:'Jainam Kumar',
        btn:"Accepted"
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        subTitle: 'Children Omani Dress Competition',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "22 Jan 22",
        see: '700',
        like: '200',
        comment: '80',
        isLike: false,
        name:'Jainam Kumar',
        btn:"Rejected"
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        subTitle: 'Children Omani Dress Competition',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "22 Jan 22",
        see: '700',
        like: '200',
        comment: '80',
        isLike: false,
        name:'Jainam Kumar',
    },

];