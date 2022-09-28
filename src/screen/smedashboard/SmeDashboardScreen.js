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
import { AppConfig, getLanguage } from "../../manager/AppConfig";


const SmeDashboardScreen = (props) => {
    const [dahboardData, setdahboardData] = useState([])
    const [requestData, setrequestData] = useState([])
    const [favouriteData, setfavouriteData] = useState([])
    const [requestPending, setRequestPending] = useState([])

    // const list = DATA.slice(0, 2);

    useEffect(() => {
        onSmeDashboard();
    }, [])
    const onSmeDashboard = () => {
        const data = {
            "frontuser_id": UserManager.userId,
            "device_id": deviceId,
            "token": AppConfig.token,
            "language": getLanguage()
        }
        Service.post(EndPoints.dashboard, data, (res) => {
            if (res?.statusCode === "1") {
                const dashboardArr = []
                const joinRequest = []
                const joinRequestPending = []
                const favouriteIdeas = []

                res.data.Dashboard.dashboard_data.map((ele) => {
                    const model = new Dashboard(ele)
                    dashboardArr.push(model)//{title: model.title, count: model.count}
                    setdahboardData(dashboardArr)
                })
                res?.data?.Join_Request && res?.data?.Join_Request.map((ele) => {
                    const model = new Dashboard(ele)
                    const modelPending = new Dashboard(ele)

                    joinRequest.push(model);
                    setrequestData(joinRequest)
                    
                    if (ele.joinstatus == 'Pending') {
                        joinRequestPending.push(modelPending)
                        setRequestPending(joinRequestPending)
                    }
                    
                })
                res.data.Favourite_Ideas && res.data.Favourite_Ideas.map((ele) => {
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
                        {dahboardData && dahboardData.length > 0 && <UserDetails data={dahboardData}  {...props} />}
                    </View>

                    <View style={Style.secondPos}>
                        <JointRequest data={requestData} isTitle={Label.UserJoinRequest}
                            navigateScreen={(data) => props.navigation.navigate("AllRequestStatus", data)}
                            dataPending={requestPending}
                        />
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

