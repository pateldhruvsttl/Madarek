import React, { memo, useState } from "react";
import { View, Image, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PopularIdeas from "./TabPopularIdeas";
import { AppUtil } from "../../../utils/AppUtil";

const Tab = createMaterialTopTabNavigator();

function TestScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

const IdeaList = () => {
    return (
        <View style={{ width:'100%',backgroundColor:'pink'}}>
            <NavigationContainer independent={true}>
                <Tab.Navigator>
                    <Tab.Screen name="Popular Ideas" component={PopularIdeas} />
                    <Tab.Screen name="New Ideas" component={TestScreen} />
                    <Tab.Screen name="Winning Ideas" component={TestScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    );
}
export default memo(IdeaList);





