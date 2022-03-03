import React, { memo } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import SubIdeasList from "../SubIdeasList";
import Style from "./TabPopularIdeasListStyle";



const PopularIdeasListScreen = () => {

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Family business',
            subTitle: 'Children Omani Dress Competition',
            url: 'https://i.imgur.com/5tj6S7Ol.jpg',
            date: "25 Dec 21 - 29 Dec 21",
            see: '700',
            like: '200',
            comment: '80',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
            subTitle: 'Children Omani Dress Competition',
            url: 'https://i.imgur.com/5tj6S7Ol.jpg',
            date: "25 Dec 21 - 29 Dec 21",
            see: '700',
            like: '200',
            comment: '80',
        },

    ];

    return (
        <View style={Style.MainView}>
            <SubIdeasList data={DATA} btn={"See All Ideas"} />
        </View>
    );
}
export default memo(PopularIdeasListScreen);





