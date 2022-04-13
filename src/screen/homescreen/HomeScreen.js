import React, { memo, useState, useEffect } from "react";
import { View, Text, ScrollView, ScrollViewBase, StatusBar, TouchableOpacity, FlatList } from "react-native";
import { useSelector, useDispatch } from 'react-redux'

import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../component/commonheader/CommonHeader";
import EventSlider from "../../component/homescreen/EventSlider";
import IdealList from "../../component/homescreen/itemList/IdeaList"
import SubIdeasListWithImage from "../../component/homescreen/SubIdeasListWithImage";
import { GetAppColor } from "../../utils/Colors";
import Style from "./HomeScreenStyle";

import ExpertInsightsSlider from '../../component/homescreen/ExpertInsightsSlider'
import FavouriteCategories from "../../component/homescreen/FavouriteCategories";
import { Label } from "../../utils/StringUtil";
import { AppUtil } from "../../utils/AppUtil";
import { Loger } from "../../utils/Loger";
import { Service } from "../../service/Service";
import { EndPoints } from "../../service/EndPoints";
import BannerList from "../../model/BannerList";
import IdeaList from "../../model/IdeaList";
import OpenChallenges from "../../model/OpenChallenges";
import MadarekSportlight from "../../model/MadarekSportlight";



const HomeScreen = (props) => {

    const { themeColor } = useSelector((state) => state)
    const list = DATA.slice(0, 2);

    const [bannerList, setBannerList] = useState([])
    const [ideasList, setIdeasList] = useState(null);
    const [openChallenges, setOpenChallenges] = useState([]);
    const [spotLight, setSpotLight] = useState([]);

    useEffect(() => {
        onSlider();
        onIdeas();
        onOpenChallenge();
        onSpotlight();

    }, []);

    onSlider = () => {
        var banner = [];
        Service.get(EndPoints.bannerList, (res) => {
            res.result.forEach(element => {
                let model = new BannerList(element);
                banner.push(model)
            });
            setBannerList(banner)
        }, (err) => {
        })
    }

    onIdeas = () => {

        const data = new FormData();
        data.append('ideaList', 48);
        data.append('language', "ar");

        Service.post(EndPoints.ideaList, data, (res) => {

            var popularIdeaArr = [];
            var newIdeaArr = [];
            var winningIdeaArr = [];

            res.list.popularIdea.forEach(element => {
                let model = new IdeaList(element);
                popularIdeaArr.push(model);
            });
            res.list.newIdea.forEach(element => {
                let model = new IdeaList(element);
                newIdeaArr.push(model);
            });
            res.list.winningIdea.forEach(element => {
                let model = new IdeaList(element);
                winningIdeaArr.push(model);
            });

            let obj = { popularIdeaArr: popularIdeaArr, newIdeaArr: newIdeaArr, winningIdeaArr: winningIdeaArr };
            setIdeasList(obj)

        }, (err) => {
            Loger.onLog("", err)
        })
    }

    onOpenChallenge = () => {

        const data = new FormData();
        data.append('', '');
        Service.post(EndPoints.openChallenges, data, (res) => {
            var opChallenges = [];
            Loger.onLog("res", res.list);
            res.list.forEach(element => {
                let model = new OpenChallenges(element);
                opChallenges.push(model);
            });

            setOpenChallenges(opChallenges)

        }, (err) => {
            Loger.onLog("", err)
        })
    }

    onSpotlight = () => {
        const data = new FormData();
        data.append('', '');

        Service.post(EndPoints.madarekSpotlight, data, (res) => {
            var spotLight = [];
            Loger.onLog("res", res.list);
            res.list.forEach(element => {
                let model = new MadarekSportlight (element);
                spotLight.push(model);
            });

            setSpotLight(spotLight)

        }, (err) => {
            Loger.onLog("", err)
        })
    }

    const onSetItem = (item) => {


        switch (item) {

            case 'Slider':
                return bannerList.length > 0 && <EventSlider Entries={bannerList} />
                break;

            case 'Tab':
                return ideasList != null && <IdealList data={ideasList} />
                break;

            case 'Challenges':
                return (
                    openChallenges.length > 0 &&
                    <View style={{ backgroundColor: GetAppColor.lightWhite, paddingVertical: AppUtil.getHP(2) }}>
                        <SubIdeasListWithImage data={openChallenges} isTitle={Label.OpenChallenges} isType={"Challenges"} btn={Label.ParticipateNow} />
                    </View>
                )
                break;

            case 'Spotlight':
                return (
                    spotLight.length > 0 &&
                    <View style={{ paddingVertical: AppUtil.getHP(2) }}>
                        <SubIdeasListWithImage data={spotLight.slice(0, 2)} isTitle={Label.MadarekSpotlight} isType={"Spotlight"} />
                    </View>
                )
                break;
            case 'ExpertInsightsSlider':
                return (
                    <View style={{ backgroundColor: GetAppColor.lightWhite, paddingVertical: AppUtil.getHP(2) }}>
                        <ExpertInsightsSlider Entries={expertData} />
                    </View>
                )
                break;
            case 'FavouriteCategories':
                return (
                    <View style={{ backgroundColor: GetAppColor.white, paddingVertical: AppUtil.getHP(2) }}>
                        <FavouriteCategories />
                    </View>
                )
                break;
            case 'Button':
                return (
                    <View style={Style.bottomBarView}>
                        <Text style={Style.txtBtnTitle}>{Label.readyToSubmitYourIdea}</Text>
                        <TouchableOpacity style={[Style.btn, { backgroundColor: themeColor.buttonColor }]} onPress={() => props.navigation.navigate("SubmitIdeaScreen")}>
                            <Text style={Style.txtBtn}>{Label.submitIdea}</Text>
                        </TouchableOpacity>
                    </View>
                )
                break;

            default: null;

        }
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CommonHeader isType={"HomeScreenHeader"} onMenuClick={() => { props.navigation.openDrawer() }} />
            <View style={Style.MainView}>
                <FlatList
                    data={dtList}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => onSetItem(item)}
                />
            </View>
        </SafeAreaView>
    );
}

export default memo(HomeScreen);

const dtList = ["Slider", "Tab", "Challenges", "Spotlight", "ExpertInsightsSlider", "FavouriteCategories", "Button"];

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
        isLike: true,
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
        isLike: false,
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
        isLike: false,
    },

];
const expertData = [
    {
        name: 'Naredra Modi',
        job: 'Game Tester',
        title: 'Clean ocena plastic with HP SS',
        subTitle: "harvesting Hydroelectric Power and Cleaning up Ocean Plastic Global climate change isn't the",
        profilePic: 'https://i.imgur.com/5tj6S7Ol.jpg',
        see: '700',
        like: '210',
        comment: '180',
    },
    {
        name: 'Bhupendra Patel',
        job: 'App Tester',
        title: 'Clean ocena plastic with HP SS',
        subTitle: "harvesting Hydroelectric Power and Cleaning up Ocean Plastic Global climate change isn't the",
        profilePic: 'https://i.imgur.com/5tj6S7Ol.jpg',
        see: '700',
        like: '200',
        comment: '80',
    },
]
