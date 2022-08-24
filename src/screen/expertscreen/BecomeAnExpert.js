import React, { memo } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSelector } from 'react-redux';
import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../component/commonheader/CommonHeader";
import Style from "./BecomeAnExpertStyle";
import { Label } from "../../utils/StringUtil";
import { GetAppColor } from "../../utils/Colors";
const Tab = createMaterialTopTabNavigator();

const BecomeAnExpert = (props) => {
    const { themeColor } = useSelector((state) => state);

    return (
        <SafeAreaView style={Style.safeView}>
            <CommonHeader isType={"BecomeAnExpert"} onMenuClick={() => { props.navigation.openDrawer() }} />

            <ScrollView style={Style.innerView}>
                <Text style={Style.txtTitle}>{Label.WantBecomeExpert}</Text>
                <Text style={Style.txtDes}>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}</Text>
                <Text style={Style.txtDes1}>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}</Text>
                <Text style={Style.txtDes1}>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}</Text>

                <TouchableOpacity style={[Style.btnApplyNow, { backgroundColor: themeColor.buttonColor }]}>
                    <Text style={[Style.txt, { color: GetAppColor.white }]}>{Label.ApplyNow}</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

export default memo(BecomeAnExpert);












