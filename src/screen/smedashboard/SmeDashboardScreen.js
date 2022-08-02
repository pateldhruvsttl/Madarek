import React, { memo, useState, useEffect } from "react";
import { View, Text, ScrollView, ScrollViewBase, StatusBar, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from 'react-redux'

import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../component/commonheader/CommonHeader";
import Style from "./SmrDashboardStyle";
import { Label } from "../../utils/StringUtil";

import UserDashboardIdeasList from "../../component/dashboard/UserDashboardIdeasList";
import UserDetails from "../../component/dashboard/UserDetails";
import JointRequest from "../../component/dashboard/JointRequest";
import { Service } from "../../service/Service";
import { EndPoints } from "../../service/EndPoints";
import { Loger } from "../../utils/Loger";
import Dashboard from "../../model/Dashboard";
import { UserManager } from "../../manager/UserManager";
import { deviceId } from "../../utils/Constant";
import { AppConfig } from "../../manager/AppConfig";


const SmeDashboardScreen = (props) => {
    const [dahboardData, setdahboardData] = useState([])
    const [requestData, setrequestData] = useState([])
    const [favouriteData, setfavouriteData] = useState([])

    // const list = DATA.slice(0, 2);


    useEffect(() => {
        onSmeDashboard();
    }, [])

    const onSmeDashboard = () => {
        const data = {
            "frontuser_id":UserManager.userId,
            "device_id": deviceId,
            "token": AppConfig.token
        }
        Service.post(EndPoints.dashboard, data, (res) => {
            Loger.onLog('dashboard Response  ========>', res.data)
            if (res?.statusCode === "1") {
                const dashboardArr = []
                const joinRequest = []
                const favouriteIdeas = []

                res.data.Dashboard.dashboard_data.map((ele) => {
                    const model = new Dashboard(ele)
                    dashboardArr.push(model)//{title: model.title, count: model.count}
                    setdahboardData(dashboardArr)
                })
                res?.data?.Join_Request.map((ele) => {
                    const model = new Dashboard(ele)
                    joinRequest.push(model);
                    setrequestData(joinRequest)
                })
                res.data.Favourite_Ideas.map((ele) => {
                    const model = new Dashboard(ele)
                    favouriteIdeas.push(model);
                    setfavouriteData(favouriteIdeas)
                })
            }

        }, (err) => {
            Loger.onLog('dashboard  error ========>', err)
        })
    }

    const { themeColor } = useSelector((state) => state)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CommonHeader isType={"SmeDashboardScreen"} onMenuClick={() => { props.navigation.openDrawer() }} />

            <View style={Style.MainView}>
                <ScrollView>
                    <View style={Style.firstPos}>
                        <UserDetails data={dahboardData} />
                    </View>

                    <View style={Style.secondPos}>
                        <JointRequest data={requestData} isTitle={Label.UserJoinRequest} />
                    </View>

                    {/* <View style={Style.firstPos}>
                        <UserDashboardIdeasList data={favouriteData.slice(0, 2)} isTitle={Label.IdeaMaturation} isType={"Maturation"} />
                    </View> */}
                </ScrollView >
            </View>
        </SafeAreaView>
    );
}

export default memo(SmeDashboardScreen);

const SmeDetailsData = [
    {
        title: 'User Need SME Idea',
        no: "14"
    },
    {
        title: 'My Favorite Ideas',
        no: "08"
    },
    {
        title: 'My Submitted Ideas',
        no: "05"
    },
    {
        title: 'Favourite Challenges',
        no: "02"
    },
    {
        title: 'Challenge Participation',
        no: "08"
    },
    {
        title: 'Contest Panel Request',
        no: "01"
    },
    {
        title: 'Expert Insights',
        no: "01"
    },
    {
        title: 'Connected Experts',
        no: "04"
    },
    {
        title: 'User Join Request',
        no: "05"
    }
];

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
        name: 'Jainam Kumar',
        btn: "Completed"
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
        name: 'Jainam Kumar',
        btn: "Completed"
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
        name: 'Jainam Kumar',
    },

];
const DATA = [
    {
        id: 0,
        title: 'Family business',
        subTitle: 'Children Omani Dress Competition',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "22 Jan 22",
        see: '700',
        like: '200',
        comment: '80',
        isLike: true,
        name: 'Jainam Kumar',
        btn: "Accepted"
    },
    {
        id: 1,
        title: 'Second Item',
        subTitle: 'Children Omani Dress Competition',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "22 Jan 22",
        see: '700',
        like: '200',
        comment: '80',
        isLike: false,
        name: 'Jainam Kumar',
        btn: "Rejected"
    },
    {
        id: 2,
        title: 'Second Item',
        subTitle: 'Children Omani Dress Competition',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "22 Jan 22",
        see: '700',
        like: '200',
        comment: '80',
        isLike: false,
        name: 'Jainam Kumar',
    },

];