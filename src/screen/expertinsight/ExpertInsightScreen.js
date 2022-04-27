import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CommonHeader from '../../component/commonheader/CommonHeader'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ExpertInsightStyle from './ExpertInsightStyle';
import IdeaExpert from './IdeaExpert';
import GeneralExpert from './GeneralExpert';
import ContestExpert from './ContestExpert';
import { Label } from '../../utils/StringUtil';


const Tab = createMaterialTopTabNavigator();


const ExpertInsightScreen = (props) => {
  return (
    <SafeAreaView>
        <CommonHeader isType={'ExpertInsight'} />
        <View style={[ExpertInsightStyle.MainView,{ height:'95%'}]}>
                    <Tab.Navigator screenOptions={{
                        tabBarLabelStyle: ExpertInsightStyle.tabHeader,
                        tabBarItemStyle: ExpertInsightStyle.tabBarItem,
                        tabBarIndicatorStyle: ExpertInsightStyle.itemBorder,
                    }}>
                        <Tab.Screen name={Label.Ideas} children={() => <IdeaExpert />} />
                        <Tab.Screen name={"Contest"} children={() => <ContestExpert />} />
                        <Tab.Screen name={"General"} children={() => <GeneralExpert />} />
                    </Tab.Navigator>
            </View>
    </SafeAreaView>
  )
}

export default ExpertInsightScreen