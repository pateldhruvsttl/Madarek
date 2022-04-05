import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import CommonHeader from '../../component/commonheader/CommonHeader'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Label } from '../../utils/StringUtil';
import PartnerStyle from './PartnerStyle';
import { GetAppColor } from '../../utils/Colors';
import Sponsors from '../../component/partnersComp/Sponsors';
import { AppUtil } from '../../utils/AppUtil';
import FONTS from '../../utils/Fonts';

const Tab = createMaterialTopTabNavigator();
const Partner = (props) => {
  return (
    <SafeAreaView>
      <CommonHeader isType={"Partner"} onMenuClick={() => { props.navigation.openDrawer() }} />
      <View style={PartnerStyle.MainView}>
                <NavigationContainer independent={true}>
                    <Tab.Navigator screenOptions={{
                        tabBarLabelStyle: { fontSize: AppUtil.getHP(1.5), fontFamily:FONTS.robotRegular },
                        tabBarItemStyle: { width: AppUtil.getWP(50), },
                        tabBarIndicatorStyle: { backgroundColor: GetAppColor.innovationGrey, width:'30%',marginHorizontal:AppUtil.getWP(10) },
                    }}
                    >
                        <Tab.Screen name={Label.Sponsors} children={() => <Sponsors />} /> 
                         <Tab.Screen name={Label.EducationResearch} children={() => <Sponsors />} />
                       
                    </Tab.Navigator>
                </NavigationContainer>
            </View>
    </SafeAreaView>
  )
}

export default Partner
