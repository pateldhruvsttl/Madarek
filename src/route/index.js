import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screen/SplashScreen';
import LoginScreen from '../screen/LoginScreen';
import HomeSceen from '../screen/homescreen/HomeSceen';
import Category from '../screen/category/Category';

const Stack = createStackNavigator();


export default function index() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Category"}>
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="HomeSceen" component={HomeSceen} />
                <Stack.Screen name="Category" component={Category} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}