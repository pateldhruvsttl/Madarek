import React, { memo, useEffect,useState } from "react";
import { View, Text, ScrollView, ScrollViewBase, StatusBar, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from 'react-redux'

import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../component/commonheader/CommonHeader";
import Style from "./UserDashboardStyle";
import { Label } from "../../utils/StringUtil";
import { AppUtil } from "../../utils/AppUtil";

import UserDashboardIdeasList from "../../component/dashboard/UserDashboardIdeasList";
import UserDetails from "../../component/dashboard/UserDetails";
import { Service } from "../../service/Service";
import { Loger } from "../../utils/Loger";
import { EndPoints } from "../../service/EndPoints";
import Dashboard from "../../model/Dashboard";
import { UserManager } from "../../manager/UserManager";

const UserDashboardScreen = (props) => {

    const { themeColor } = useSelector((state) => state)
    const [dahboardData, setdahboardData] = useState([])
    const [requestData, setrequestData] = useState([])
    const [favouriteData, setfavouriteData] = useState([])

    const list = DATA.slice(0, 2);
    
    
    useEffect(() => {
        onUserDashboard();
    },[])
    
    const onUserDashboard = () => {
        const data = { "frontuser_id": UserManager.userId }
        Service.post(EndPoints.dashboard, data, (res) => {
            Loger.onLog('dashboard Response  ========>', JSON.stringify(res.data))
            if (res?.statusCode === "1") {
                const dashboardArr = []
                const joinRequest = []
                const favouriteIdeas = []
                
                res.data.Dashboard.dashboard_data.map((ele) => {
                    const model = new Dashboard(ele)
                    dashboardArr.push(model)//{title: model.title, count: model.count}
                    setdahboardData(dashboardArr)
                })
                res.data.Join_Request.map((ele) => {
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
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CommonHeader isType={"UserDashboardScreen"} onMenuClick={() => { props.navigation.openDrawer() }} />

            <View style={Style.MainView}>
                <ScrollView>
                    <View style={Style.firstPos}>
                        <UserDetails data={dahboardData}/>
                    </View>

                    <View style={Style.secondPos}>
                        <UserDashboardIdeasList data={requestData} isTitle={Label.MyIdeaJointRequest} isType={"Request"} />
                    </View>

                    {/* <View style={Style.firstPos}>
                        <UserDashboardIdeasList data={favouriteData.slice(0, 2)} isTitle={Label.IdeaMaturation} isType={"Maturation"} />
                    </View> */}

                    <View style={Style.bottomBarView}>
                            <Text style={Style.txtBtnTitle}>{Label.readyToSubmitYourIdea}</Text>
                            <TouchableOpacity style={[Style.btn, { backgroundColor: themeColor.buttonColor }]}>
                                <Text style={Style.txtBtn}>{Label.submitIdea}</Text>
                            </TouchableOpacity>
                        </View>

                </ScrollView >
            </View>
        </SafeAreaView>
    );
}

export default memo(UserDashboardScreen);

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
const SmeDetailsData = [
    {
        title: 'My Need SME Idea',
        no:"04"
    },
    {
        title: 'My Favorite Ideas',
        no:"09"
    },
    {
        title: 'My Submitted Ideas',
        no:"21"
    },
    {
        title: 'Favourite Challenges',
        no:"08"
    },
    {
        title: 'Challenge Participation',
        no:"11"
    },
    {
        title: 'Contest Panel Request',
        no:"08"
    },
    
];