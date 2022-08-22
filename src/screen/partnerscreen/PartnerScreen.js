import React, { memo, useEffect, useState } from "react";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../component/commonheader/CommonHeader";
import Partners from "../../component/partners/PartnersData";
import Style from "./PartnerScreenStyle";
import { Label } from "../../utils/StringUtil";
import { deviceId } from "../../utils/Constant";
import { AppConfig } from "../../manager/AppConfig";
import { EndPoints } from "../../service/EndPoints";
import { Service } from "../../service/Service";
import { showMessageWithCallBack } from "../../utils/Constant";
import { showMessage } from "../../utils/Constant";
import { Loger } from "../../utils/Loger";
import Partner from "../../model/Partners";

const Tab = createMaterialTopTabNavigator();

const PartnerScreen = (props) => {

    const [partnerData, setPartnerData] = useState([])

    useEffect(() => {
        partnerRender();
    }, [])

    const partnerRender = () => {

        const data =
        {
            device_id: deviceId,
            token: AppConfig.token,
            lang: AppConfig.lang,
        }

        Service.post(EndPoints.partner, data, (res) => {
            Loger.onLog('res of partners', res);
            const data = []
            if (res.statusCode == "1") {
                res.data.map((ele, index) => {
                    let model = new Partner(ele)
                    data.push(model)
                })

                setPartnerData(data)
            }
            else (
                showMessage(res.message)
            )
        },
            (error) => {
                Loger.onLog(error);
            }
        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CommonHeader isType={"Partners"} onMenuClick={() => { props.navigation.openDrawer() }} />

            <View style={Style.MainView}>
                {
                    partnerData.length !== 0 &&
                <NavigationContainer independent={true}>
                    <Tab.Navigator screenOptions={{
                        tabBarLabelStyle: Style.tabBarTxt,
                        tabBarItemStyle: Style.tabBarItem,
                        tabBarIndicatorStyle: Style.barBorder,
                        tabBarScrollEnabled: true
                    }}>
                        {partnerData.length !== 0 && partnerData.map((ele) => {
                            return (
                                <Tab.Screen name={ele.categoryName} children={() => <Partners propName={{ type: "Education & Research", data: ele.items }} />} />

                            )
                        })}
                        {/* <Tab.Screen name={Label.Sponsors} children={() => <Partners propName={{ type: "Sponsors", data: partnerData }} />} /> */}
                    </Tab.Navigator>
                </NavigationContainer>
                }
            </View>
        </SafeAreaView>
    );
}

export default memo(PartnerScreen);













