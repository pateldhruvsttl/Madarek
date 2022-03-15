import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MyDrawerScreen from '../screen/drawer/MyDrawer';

import SplashScreen from '../screen/splashscreen/SplashScreen';
import LoginScreen from '../screen/loginscreen/LoginScreen';
import Signup from '../screen/signup/Signup';
import SignUpVerify from '../screen/signup/SignUpVerify';

import UserDashboardSceen from '../screen/userDashboard/UserDashboardSceen';

import HomeSceen from '../screen/homescreen/HomeSceen';
import Category from '../screen/category/Category';
import IdeasListScreen from '../screen/ideasList/IdeasListScreen';
import IdeaDetails from '../screen/idea/IdeaDetails';
import ExpertScreen from '../screen/expertscreen/ExpertScreen';
import ExpertDetailsScreen from '../screen/expertscreen/ExpertDetailsScreen';
import ExpertDirectoryScreen from '../screen/expertscreen/ExpertDirectoryScreen'; 


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function ScreenStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, }} initialRouteName={"UserDashboardSceen"}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="SignUpVerify" component={SignUpVerify} />
            <Stack.Screen name="Category" component={Category} />

            <Stack.Screen name="HomeSceen" component={HomeSceen} />
            <Stack.Screen name="IdeasListScreen" component={IdeasListScreen} />
            <Stack.Screen name="IdeaDetails" component={IdeaDetails} />
            
            <Stack.Screen name="ExpertScreen" component={ExpertScreen} />
            <Stack.Screen name="ExpertDetailsScreen" component={ExpertDetailsScreen} />
            <Stack.Screen name="ExpertDirectoryScreen" component={ExpertDirectoryScreen} />

            <Stack.Screen name="UserDashboardSceen" component={UserDashboardSceen} />

        </Stack.Navigator>
    )
}


function MyDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={props => <MyDrawerScreen {...props} />}
            drawerPosition='left'
            screenOptions={{ headerShown: false }}
            useLegacyImplementation={true}>
            <Drawer.Screen name="ScreenStack" component={ScreenStack} options={{
                swipeEnabled: false,
            }} />
        </Drawer.Navigator>
    );
}

const AppRoute = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, }} initialRouteName={"Drawer"}>
                <Stack.Screen name="Drawer" component={MyDrawer} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}
export default AppRoute;

