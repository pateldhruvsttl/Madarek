import React, { memo } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../component/commonheader/CommonHeader";
import EventSlider from "../../component/homescreen/EventSlider";
import IdealList from "../../component/homescreen/itemList/IdeaList"
import SubIdeasList from "../../component/homescreen/SubIdeasList";
import HomeStyle from "./HomeScreenStyle";

const testData = [
    {
        title: 'Favourites landscapes 1',
        subtitle: 'Lorem ipsum dolor sit amet',
        url: 'https://i.imgur.com/SsJmZ9jl.jpg'
    },
    {
        title: 'Favourites landscapes 2',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg'
    },
    {
        title: 'Favourites landscapes 3',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat',
        url: 'https://i.imgur.com/pmSqIFZl.jpg'
    },
    {
        title: 'Favourites landscapes 4',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        url: 'https://i.imgur.com/cA8zoGel.jpg'
    },
    {
        title: 'Favourites landscapes 5',
        subtitle: 'Lorem ipsum dolor sit amet',
        url: 'https://i.imgur.com/pewusMzl.jpg'
    },
    {
        title: 'Favourites landscapes 6',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat',
        url: 'https://i.imgur.com/l49aYS3l.jpg'
    }
];

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

const HomeScreen = () => {

    return (

        <SafeAreaView style={{ flex: 1 }}>
            <CommonHeader isType={"HomeScreenHeader"} onManuClick={() => null} />

            <View style={HomeStyle.MainView}>

                <ScrollView style={{ flex: 1 }}>
                    <View style={{ height: '100%' }}>
                        <EventSlider Entries={testData} />

                        <IdealList />

                        {/* <View>
                            <SubIdeasList data={DATA} isTitle={"1 Open challanges"} />
                            <SubIdeasList data={DATA} isTitle={"2 Open challanges"} btn={"See All Ideas"} />
                        </View> */}
                    </View>
                </ScrollView >
            </View>
        </SafeAreaView>
    );
}
export default memo(HomeScreen);





