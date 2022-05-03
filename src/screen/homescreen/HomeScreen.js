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
import ParticipateModal from "../../component/challengedetail/ParticipateModal";
import ExpertInsight from "../../model/ExpertInsights";
import category from "../../model/FavouriteCategories";



const HomeScreen = (props) => {

    const { themeColor } = useSelector((state) => state)
    const list = DATA.slice(0, 2);

    const [modalVisible, setModalVisible] = useState(false);
    const [bannerList, setBannerList] = useState([])
    const [ideasList, setIdeasList] = useState(null);
    const [openChallenges, setOpenChallenges] = useState([]);
    const [spotLight, setSpotLight] = useState([]);
    const [expertInsight, setExpertInsight] = useState([]);
    const [favouriteCategories, setFavouriteCategories] = useState([]);

    useEffect(() => {
        onSlider();
        onIdeas();
        onOpenChallenge();
        onSpotlight();
        onFavouriteCategories();
        onExpertInsights();

    }, []);

    const likeIdea = (id) => {
        var data = {
            "field_name": "idea_id",
            "id": id,
            "frontuser_id": 48,
            "model": 'LikedislikeIdeas'
        }
        Service.post(EndPoints.ideaLikeUnlike, data, (res) => {

            const likeDislike = res?.data === 'dislike' ? false : true;
            const popularListArr = ideasList.popularIdeaArr
            const newListArr = ideasList.newIdeaArr
            const winningListArr = ideasList.winningIdeaArr

            popularListArr.map((ele, index) => {
                if (ele.id == id) {
                    popularListArr[index].like = likeDislike;
                }
            })
            newListArr.map((ele, index) => {
                if (ele.id == id) {
                    newListArr[index].like = likeDislike;
                }
            })
            winningListArr.map((ele, index) => {
                if (ele.id == id) {
                    winningListArr[index].like = likeDislike;
                }
            })
            setIdeasList({ ...ideasList, popularIdeaArr: popularListArr, newIdeaArr: newListArr, winningIdeaArr: winningListArr })

        }, (err) => {
            Loger.onLog("err of likeUnlike", err)
        })
    }

    const likeChallenge = (id) => {
        var data =
        {
            "field_name": "contest_id",
            "id": id,
            "frontuser_id": 48,
            "model": "LikedislikeContests"
        }

        Service.post(EndPoints.challengeLikeUnlike, data, (res) => {

            //     const likeDislike = res?.data === "dislike" ? false : true
            //     const challengeArr = openChallenges
            //     challengeArr.map((ele,index) => {
            //         if(ele.id == id){
            //             challengeArr[index].like = likeDislike
            //         }
            //     })
            //    setOpenChallenges([...openChallenges,challengeArr])

            onOpenChallenge()

        }, (err) => {
            Loger.onLog("err of challengeLikeUnlike", err)
        })
    }
    const likeSpotLight = (id) => {
        var data =
        {
            "field_name": "formdata_id",
            "id": id,
            "frontuser_id": 48,
            "model": "LikedislikeGeneral",
            "general_status": "spotlight"
        }

        Service.post(EndPoints.spotlightLikeUnlike, data, (res) => {

            // const likeDislike = res?.data === 'dislike' ? false : true
            // const spotLightArr = spotLight
            // spotLightArr.map((ele,index) => {
            //     if(ele.id == id){
            //         spotLightArr[index].like = likeDislike
            //     }
            // })
            // setSpotLight([...spotLight,spotLightArr])

            onSpotlight()
        }, (err) => {
            Loger.onLog("err of spotlightLikeUnlike", err)
        })
    }

    const onSlider = () => {
        var banner = [];
        Service.get(EndPoints.bannerList, (res) => {
            res.data.forEach(element => {
                let model = new BannerList(element);
                if (banner.length < 5) {
                    banner.push(model)
                }else{
                    return;
                }
            });
            setBannerList(banner)
        }, (err) => {
            Loger.onLog("bannerList error ------>", err)
        })
    }

    const onIdeas = () => {
        const data = {
            "frontuser_id": 48,
            "limit": 2
        }
        Service.post(EndPoints.ideaList, data, (res) => {

            var popularIdeaArr = [];
            var newIdeaArr = [];
            var winningIdeaArr = [];

            res.data.popularIdea.forEach(element => {
                let model = new IdeaList(element);
                popularIdeaArr.push(model);
            });
            res.data.newIdea.forEach(element => {
                let model = new IdeaList(element);
                newIdeaArr.push(model);
            });
            res.data.winningIdea.forEach(element => {
                let model = new IdeaList(element);
                winningIdeaArr.push(model);
            });

            let obj = { popularIdeaArr: popularIdeaArr, newIdeaArr: newIdeaArr, winningIdeaArr: winningIdeaArr };
            setIdeasList(obj)

        }, (err) => {
            Loger.onLog(" ideaList error ------->", err)
        })
    }

    const onOpenChallenge = () => {
        const data = '';
        Service.post(EndPoints.openChallenges, data, (res) => {
            var opChallenges = [];
            res.data.forEach(element => {
                let model = new OpenChallenges(element);
                opChallenges.push(model);
            });
            setOpenChallenges(opChallenges)
        }, (err) => {
            Loger.onLog("", err)
        })
    }
    const onSpotlight = () => {
        const data = JSON.stringify({
            "frontuser_id": 48
        });

        Service.post(EndPoints.madarekSpotlight, data, (res) => {
            var spotLight = [];
            Loger.onLog("res madarekSpotlight", res);
            res.data.forEach(element => {
                let model = new MadarekSportlight(element);
                spotLight.push(model);
            });

            setSpotLight(spotLight)

        }, (err) => {
            Loger.onLog("", err)
        })
    }


    const onExpertInsights = () => {
        const data = { "frontuser_id": 48 }
        Service.post(EndPoints.expertInsights, data, (res) => {
            Loger.onLog('expertInsights Response  ========>', JSON.stringify(res.data))
            if (res?.statusCode === "1") {
                const expertInsightArr = [];
                res.data.map((ele) => {
                    const model = new ExpertInsight(ele)
                    expertInsightArr.push(model);

                })
                setExpertInsight(expertInsightArr)
            }

        }, (err) => {
            Loger.onLog('expertInsights  error ========>', err)
        })
    }

    const onFavouriteCategories = () => {
        const data = { "id": 48 }
        Service.post(EndPoints.favouriteCategories, data, (res) => {
            Loger.onLog('favouriteCategories Response ========>', res.data[0].category_info)
            if (res?.statusCode === "1") {
                const favouriteCategoriesArr = [];
                res?.data[0]?.category_info.map((ele) => {
                    const model = new category(ele);
                    favouriteCategoriesArr.push(model);
                })
                setFavouriteCategories(favouriteCategoriesArr);
            }


        }, (err) => {
            Loger.onLog('favouriteCategories  error ========>', err)
        })
    }


    const onSetItem = (item) => {

        switch (item) {

            case 'Slider':
                return bannerList.length > 0 && <EventSlider Entries={bannerList} />
                break;

            case 'Tab':
                return ideasList != null && <IdealList data={ideasList} likeIdea={(id) => likeIdea(id)} />
                break;

            case 'Challenges':
                return (
                    openChallenges.length > 0 &&
                    <View style={{ backgroundColor: GetAppColor.lightWhite, paddingVertical: AppUtil.getHP(2) }}>
                        <SubIdeasListWithImage data={openChallenges} isTitle={Label.OpenChallenges}
                            isType={"Challenges"} btn={Label.ParticipateNow}
                            likeChallenge={() => likeChallenge()}
                            onButtonPress={() => { setModalVisible(true) }}
                            onSeeMorePress={() => { props.navigation.navigate("ChallengesListScreen") }}
                            onItemPress={() => { props.navigation.navigate("ChallengeDetail") }} />
                    </View>
                )
                break;

            case 'Spotlight':
                return (
                    spotLight.length > 0 &&
                    <View style={{ paddingVertical: AppUtil.getHP(2) }}>
                        <SubIdeasListWithImage data={spotLight.slice(0, 2)} isTitle={Label.MadarekSpotlight} isType={"Spotlight"}
                            likeSpotLight={likeSpotLight}
                            onButtonPress={() => { setModalVisible(true) }}
                            onSeeMorePress={() => { props.navigation.navigate("ChallengesListScreen") }}
                            onItemPress={() => { props.navigation.navigate("ChallengeDetail") }} />
                    </View>
                )
                break;
            case 'ExpertInsightsSlider':
                return (
                    <View style={{ backgroundColor: GetAppColor.lightWhite, paddingVertical: AppUtil.getHP(2) }}>
                        <ExpertInsightsSlider Entries={expertInsight.slice(0, 2)} />
                    </View>
                )
                break;
            case 'FavouriteCategories':
                return (
                    <View style={{ backgroundColor: GetAppColor.white, paddingVertical: AppUtil.getHP(2), }}>
                        <FavouriteCategories data={favouriteCategories.slice(0, 6)} />
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
            <CommonHeader isType={"HomeScreenHeader"} />

            <View style={Style.MainView}>
                <FlatList
                    data={dtList}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => onSetItem(item)}
                />
                <ParticipateModal modalVisible={modalVisible} setModalVisible={setModalVisible} />

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
