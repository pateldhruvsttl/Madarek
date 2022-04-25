import { View, Text , SafeAreaView} from 'react-native'
import React from 'react'
import CommonHeader from '../../component/commonheader/CommonHeader'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import UserProfileStyle from './UserProfileStyle';
import Personal from './Personal';
import OtherDetail from './OtherDetail';
import Expert from './Expert';

const Tab = createMaterialTopTabNavigator();
const UserProfileView = (props) => {
    return (

        <View style={{ flex: 1 }}>
            <SafeAreaView>
                <CommonHeader isType={"UserProfile"} onEditProfile={() => props.navigation.navigate('EditUserProfileView')}  />

                <View style={[UserProfileStyle.MainView,{ height:'95%'}]}>
                {/* <NavigationContainer > */}
                    <Tab.Navigator screenOptions={{
                        tabBarLabelStyle: UserProfileStyle.tabHeader,
                        tabBarItemStyle: UserProfileStyle.tabBarItem,
                        tabBarIndicatorStyle: UserProfileStyle.itemBorder,
                        // tabBarScrollEnabled: true
                    }}>
                        <Tab.Screen name={"Personal"} children={() => <Personal />} />
                        <Tab.Screen name={"Other Detail"} children={() => <OtherDetail />} />
                        <Tab.Screen name={"Expert"} children={() => <Expert />} />
                    </Tab.Navigator>
                {/* </NavigationContainer> */}
            </View>
            </SafeAreaView>
        </View>
    )
}

export default UserProfileView