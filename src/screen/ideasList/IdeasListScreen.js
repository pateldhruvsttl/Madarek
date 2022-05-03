import React, { memo ,useEffect} from "react";
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

const Tab = createMaterialTopTabNavigator();

const IdeasListScreen = (props) => {
    const [popularIdeaArr, setpopularIdeaArr] = useState()
    const [newIdeaArr, setnewIdeaArr] = useState()
    const [winningIdeaArr, setwinningIdeaArr] = useState()
    const [allIdeaArr, setallIdeaArr] = useState()
    const [count, setCount] = useState('25')
    
    useEffect(() => {
        onIdeas('all');
        onIdeas('latest');
        onIdeas('popular');
        onIdeas('winning');
    },[])
   
    const onIdeas = (tabType = "all") => {
        const data = {
            "frontuser_id": 48,
            "limit": count,
            "categories": "",
            "sectors": "6,7",
            "listtype": tabType ,
            "language": "ar"
        }
        // alert(JSON.stringify(data))

        Service.post(EndPoints.ideaList, data, (res) => {

            setCount(res.totalcount)

            if (tabType === "all") {
                const allIdeaArrTmp = []
                res?.data?.allIdea.map((element) => {
                    let model = new IdeaList(element);
                    allIdeaArrTmp.push(model);
                })
                setallIdeaArr(allIdeaArrTmp)
            } 
            else if (tabType === "popular") {
                const popularIdeaArrTmp = [];
                res?.data?.popularIdea.map((element) => {
                    let model = new IdeaList(element);
                    popularIdeaArrTmp.push(model);
                })
                setpopularIdeaArr(popularIdeaArrTmp)

            } else if (tabType === "latest") {
                const newIdeaArrTmp = [];
                res?.data?.newIdea.map((element) => {
                    let model = new IdeaList(element);
                    newIdeaArrTmp.push(model);
                });
                setnewIdeaArr(newIdeaArrTmp)

            } else if (tabType === "winning") {
                const winningIdeaArrTmp = []
                res?.data?.winningIdea.map((element) => {
                    let model = new IdeaList(element);
                    winningIdeaArrTmp.push(model);
                });
                setwinningIdeaArr(winningIdeaArrTmp)
            }


        }, (err) => {
            Loger.onLog(" ideaList error ------->", err)
        })
    }
    const likeIdea = (id) => {
        var data = {
            "field_name": "idea_id",
            "id": id,
            "frontuser_id": 48,
            "model": 'LikedislikeIdeas'
        }
        Service.post(EndPoints.ideaLikeUnlike, data, (res) => {

            const likeDislike = res?.data === 'dislike' ? false : true;
            const popularListArr = popularIdeaArr
            const newListArr = newIdeaArr
            const winningListArr = winningIdeaArr
            const allListArr = allIdeaArr

            allListArr.map((ele, index) => {
                if (ele.id == id) {
                    allListArr[index].like = likeDislike;
                }
            })
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
          setallIdeaArr({...allIdeaArr,allIdeaArr:allListArr})
          setpopularIdeaArr({...popularIdeaArr,popularIdeaArr:popularListArr});
          setnewIdeaArr({...newIdeaArr,newIdeaArr:newListArr});
          setwinningIdeaArr({...winningIdeaArr,winningIdeaArr:winningListArr})

        }, (err) => {
            Loger.onLog("err of likeUnlike", err)
        })
    }

    return (
        <SafeAreaView style={Style.container}>
            <CommonHeader isType={"IdeasListScreen"} onMenuClick={() => { props.navigation.openDrawer() }} />

            <View style={Style.MainView}>
                <NavigationContainer independent={true}>
                    <Tab.Navigator screenOptions={{
                        tabBarLabelStyle: Style.tabHeader,
                        tabBarItemStyle: Style.tabBarItem,
                        tabBarIndicatorStyle: Style.itemBorder,
                        tabBarScrollEnabled: true
                    }}
                    >
                        <Tab.Screen name={Label.All} children={() => <AllIdeas navigateDetail={() => props.navigation.navigate('IdeaDetails')} propName={{ type: "AllIdeas", data:allIdeaArr ,count:count,likeIdea:likeIdea  }} />} />
                        <Tab.Screen name={Label.Latest} children={() => <AllIdeas navigateDetail={() => props.navigation.navigate('IdeaDetails')} propName={{ type: "LatestIdeas", data:newIdeaArr,count:count,likeIdea:likeIdea }} />} />
                        <Tab.Screen name={Label.Popular} children={() => <AllIdeas navigateDetail={() => props.navigation.navigate('IdeaDetails')} propName={{ type: "PopularIdeas",  data:popularIdeaArr,count:count ,likeIdea:likeIdea }} />} />
                        <Tab.Screen name={Label.Winning} children={() => <AllIdeas navigateDetail={() => props.navigation.navigate('IdeaDetails')} propName={{ type: "WinningIdeas",  data:winningIdeaArr ,count:count ,likeIdea:likeIdea }} />} />
                    </Tab.Navigator>
                </NavigationContainer>
            </View>
        </SafeAreaView>
    );
}

export default memo(IdeasListScreen);











