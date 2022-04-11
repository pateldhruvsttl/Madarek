import React, { memo } from "react";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../component/commonheader/CommonHeader";
import Partners from "../../component/partners/PartnersData";
import Style from "./PartnerScreenStyle";
import { Label } from "../../utils/StringUtil";

const Tab = createMaterialTopTabNavigator();

const PartnerScreen = (props) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CommonHeader isType={"Partners"} onMenuClick={() => { props.navigation.openDrawer() }} />

            <View style={Style.MainView}>
                <NavigationContainer independent={true}>
                    <Tab.Navigator screenOptions={{
                        tabBarLabelStyle: Style.tabBarTxt,
                        tabBarItemStyle: Style.tabBarItem,
                        tabBarIndicatorStyle: Style.barBorder,
                        tabBarScrollEnabled:true
                   }}>
                        <Tab.Screen name={Label.Sponsors} children={() => <Partners propName={{ type: "Sponsors", data: sliderdata }} />} />
                        <Tab.Screen name={Label.EducationResearch} children={() => <Partners propName={{ type: "Education & Research", data: sliderdata }} />} />
                      </Tab.Navigator>
                </NavigationContainer>
            </View>
        </SafeAreaView>
    );
}

export default memo(PartnerScreen);

const sliderdata = [
    {
        url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS87pyIQtlZbkutJq1l57d2MMPUCrnthttn5-RcnBBvHZHpyHwrMMoIONgGELLww6qMafw&usqp=CAU',
        label : "Sultan Qaboos University"
       
    },
    {
        url : 'https://cdn.designcrowd.com/blog/Oct2012/Indian-Logos/8-50-foreign-brands-logos.png',
        label : "Oman Ministry Of Sports Affairs"
    },
    {
        url : 'https://cdn.designcrowd.com/blog/Oct2012/Indian-Logos/9-50-foreign-brands-logos.png',
        label : "Oman Ministry Of Sports Affairs"
       
    },
    {
        url : 'https://cdn.designcrowd.com/blog/Oct2012/Indian-Logos/17-50-foreign-brands-logos.png',
        label : "Sultan Qaboos University"
    },
    {
        url : 'https://cdn.designcrowd.com/blog/Oct2012/Indian-Logos/14-50-foreign-brands-logos.png',
        label : "Sultan Qaboos University"
       
    },
    {
        url : 'https://cdn.designcrowd.com/blog/Oct2012/Indian-Logos/12-50-foreign-brands-logos.png',
        label : "Oman Ministry Of Sports Affairs"
    },
    {
        url : 'https://cdn.designcrowd.com/blog/Oct2012/Indian-Logos/9-50-foreign-brands-logos.png',
        label : "Oman Ministry Of Sports Affairs"
       
    },
    {
        url : 'https://cdn.designcrowd.com/blog/Oct2012/Indian-Logos/6-50-foreign-brands-logos.png',
        label : "Sultan Qaboos University"
    },
 
];










