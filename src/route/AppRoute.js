import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from '../screen/splashscreen/SplashScreen';
import LoginScreen from '../screen/loginscreen/LoginScreen';
import HomeSceen from '../screen/homescreen/HomeSceen';
import Category from '../screen/category/Category';
import Signup from '../screen/signup/Signup';
import SignUpVerify from '../screen/signup/SignUpVerify';
import MyDrawerScreen from '../screen/drawer/MyDrawer';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function ScreenStack() {
    return (
        // <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, }} initialRouteName={"HomeSceen"}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="HomeSceen" component={HomeSceen} />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="SignUpVerify" component={SignUpVerify} />
        </Stack.Navigator>
        //  </NavigationContainer>
    )
}


function MyDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={props => <MyDrawerScreen {...props} />}
            drawerPosition='left'
            screenOptions={{
                headerShown: false
            }}
            useLegacyImplementation={true}
            drawerStyle={{ width: '80%' }}
        >
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

