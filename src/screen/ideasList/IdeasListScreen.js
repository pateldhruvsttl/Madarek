import React, { memo, useEffect } from "react";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../component/commonheader/CommonHeader";
import Style from "./IdeasListStyle";

import AllIdeas from '../../component/homescreen/itemList/ViewMoreIdeas'
import { Label } from "../../utils/StringUtil";
import { useState } from "react";
import IdeaList from "../../model/IdeaList";
import { EndPoints } from "../../service/EndPoints";
import { Service } from "../../service/Service";
import { Loger } from "../../utils/Loger";
import { AppConfig } from "../../manager/AppConfig";
import IdeasFilter from "../../component/filter/IdeasFilter";
import { UserManager } from "../../manager/UserManager";

const Tab = createMaterialTopTabNavigator();

const IdeasListScreen = (props) => {
   
    const [allIdeaArr, setaAllIdeaArr] = useState([]);
    const [newIdeaArr, setNewIdeaArr] = useState([]);
    const [popularIdeaArr, setPopularIdeaArr] = useState([]);
    const [winningIdeaArr, setWinningIdeaArr] = useState([]);
    const [isFilterVisible, setFilterVisible] = useState(false);

    useEffect(() => {
        onIdeas('all');
        onIdeas('latest');
        onIdeas('popular');
        onIdeas('winning');
    }, []);


    const onIdeas = (tabType = "all") => {
        const data = {
            frontuser_id: UserManager.userId,
            limit: AppConfig.pageLimit,
            categories: "",
            sectors: "6,7",
            listtype: tabType,
            language: AppConfig.lang
        }

        Service.post(EndPoints.ideaList, data, (res) => {

            if (tabType === "all") {
                const allIdeaArrTmp = []
                res?.data?.allIdea.map((element) => {
                    let model = new IdeaList(element);
                    allIdeaArrTmp.push(model);
                })
                setaAllIdeaArr(allIdeaArrTmp)

            }
            else if (tabType === "latest") {
                const newIdeaArrTmp = [];
                res?.data?.newIdea.map((element) => {
                    let model = new IdeaList(element);
                    newIdeaArrTmp.push(model);
                });
                setNewIdeaArr(newIdeaArrTmp)
            }
            else if (tabType === "popular") {
                const popularIdeaArrTmp = [];
                res?.data?.popularIdea.map((element) => {
                    let model = new IdeaList(element);
                    popularIdeaArrTmp.push(model);
                });
                setPopularIdeaArr(popularIdeaArrTmp);
            }
            else if (tabType === "winning") {
                const winningIdeaArrTmp = []
                res?.data?.winningIdea.map((element) => {
                    let model = new IdeaList(element);
                    winningIdeaArrTmp.push(model);
                });
                setWinningIdeaArr(winningIdeaArrTmp);
            }


        }, (err) => {
            // Loger.onLog(" ideaList error ------->", err)
        })
    }

    const likeIdea = (id) => {
        var data = {
            "field_name": "idea_id",
            "id": id,
            "frontuser_id": UserManager.userId,
            "model": 'LikedislikeIdeas'
        }

        Service.post(EndPoints.ideaLikeUnlike, data, (res) => {

            const likeDislike = res?.data === 'dislike' ? false : true;

            let newAllIdeasArr = [];
            newAllIdeasArr = allIdeaArr;
            newAllIdeasArr.map((ele, index) => {
                if (ele.id == id) {
                    newAllIdeasArr[index].like = likeDislike;
                }
            });
            setaAllIdeaArr([...newAllIdeasArr]);

            let updateNewIdeaArr = [];
            updateNewIdeaArr = newIdeaArr;
            updateNewIdeaArr.map((ele, index) => {
                if (ele.id == id) {
                    updateNewIdeaArr[index].like = likeDislike;
                }
            });
            setNewIdeaArr([...updateNewIdeaArr]);

            let updatePopularIdeaArr = [];
            updatePopularIdeaArr = popularIdeaArr;
            updatePopularIdeaArr.map((ele, index) => {
                if (ele.id == id) {
                    updatePopularIdeaArr[index].like = likeDislike;
                }
            });
            setPopularIdeaArr([...updatePopularIdeaArr]);

            let updateWinningIdeaArr = [];
            updateWinningIdeaArr = winningIdeaArr;
            updateWinningIdeaArr.map((ele, index) => {
                if (ele.id == id) {
                    updateWinningIdeaArr[index].like = likeDislike;
                }
            });
            setWinningIdeaArr([...updateWinningIdeaArr]);




        }, (err) => {
        })
    }

    const navigateDetail = (item) => {
        props.navigation.navigate('IdeaDetails',item)
    }
    
    return (
        <SafeAreaView style={Style.container}>
            <CommonHeader isType={"IdeasListScreen"} onMenuClick={() => { props.navigation.openDrawer() }} onFilter={() => setFilterVisible(!isFilterVisible)} />
            <View style={Style.MainView}>
                <NavigationContainer independent={true}>
                    <Tab.Navigator screenOptions={{
                        tabBarLabelStyle: Style.tabHeader,
                        tabBarItemStyle: Style.tabBarItem,
                        tabBarIndicatorStyle: Style.itemBorder,
                        tabBarScrollEnabled: true
                    }}>
                        <Tab.Screen name={Label.All} children={() => <AllIdeas propName={{ type: "AllIdeas", data: allIdeaArr, likeIdea: likeIdea, navigateDetail:navigateDetail}} />}  />
                        <Tab.Screen name={Label.Latest} children={() => <AllIdeas propName={{ type: "LatestIdeas", data: newIdeaArr,likeIdea: likeIdea, navigateDetail:navigateDetail }} />}/>
                        <Tab.Screen name={Label.Popular} children={() => <AllIdeas propName={{ type: "PopularIdeas", data: popularIdeaArr, likeIdea: likeIdea, navigateDetail:navigateDetail }} />} />
                        <Tab.Screen name={Label.Winning} children={() => <AllIdeas propName={{ type: "WinningIdeas", data: winningIdeaArr, likeIdea: likeIdea, navigateDetail:navigateDetail }} />} />
                    </Tab.Navigator>
                </NavigationContainer>
            </View>
            <IdeasFilter visible={isFilterVisible} onClose={() => setFilterVisible(!isFilterVisible)} />
        </SafeAreaView>
    );
}

export default memo(IdeasListScreen);











