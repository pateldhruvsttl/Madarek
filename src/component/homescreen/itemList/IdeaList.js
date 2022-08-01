import React, { memo, useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { AppUtil } from "../../../utils/AppUtil";
import { GetAppColor } from "../../../utils/Colors";
import FONTS from "../../../utils/Fonts";
import { Loger } from "../../../utils/Loger";
import { Label } from "../../../utils/StringUtil";
import Style from './IdealListStyle'

import TabPopularIdeas from "./TabPopularIdeas";
import { Service } from "../../../service/Service";
import { EndPoints } from "../../../service/EndPoints";
import IdeaListModel from "../../../model/IdeaList";
import { AppConfig } from "../../../manager/AppConfig";
import { UserManager } from "../../../manager/UserManager";

const IdeaList = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [popularIdeasList, setPopularIdeasList] = useState([])
    const [newIdeasList, setNewIdeasList] = useState([])
    const [winningIdeaList, setWinningIdeaList] = useState([])

    useEffect(() => {
        onSelectTab(0, "popular")
    }, [])

    const onSelectTab = (value, type) => {

        const data = {
            "frontuser_id": UserManager.userId,
            "limit": AppConfig.pageLimit,
            "language": AppConfig.lang,
            "listtype": type,
            "searchkeywords": "",
        }
        Service.post(EndPoints.ideaList, data, (res) => {

            let popularIdeaArrTmp = [];
            let newIdeaArrTmp = [];
            let winningIdeaArrTmp = [];
            setPopularIdeasList([]);
            setNewIdeasList([]);
            setWinningIdeaList([winningIdeaArrTmp]);


            if (type === "popular") {
                res?.data?.popularIdea.map((element) => {
                    let model = new IdeaListModel(element);
                    popularIdeaArrTmp.push(model);
                })
            }
            else if (type === "latest") {
                res?.data?.newIdea.map((element) => {
                    let model = new IdeaListModel(element);
                    newIdeaArrTmp.push(model);
                });
            }
            else if (type === "winning") {

                res?.data?.winningIdea.map((element) => {
                    let model = new IdeaListModel(element);
                    winningIdeaArrTmp.push(model);
                });
            }

            setPopularIdeasList(popularIdeaArrTmp);
            setNewIdeasList(newIdeaArrTmp);
            setWinningIdeaList(winningIdeaArrTmp);
            setSelectedIndex(value);

        }, (err) => {
        })
    }
    const onLikeIdeas = (id) => {
        var data = {
            "field_name": "idea_id",
            "id": id,
            "frontuser_id": UserManager.userId,
            "model": 'LikedislikeIdeas'
        }
        Service.post(EndPoints.ideaLikeUnlike, data, (res) => {

            const likeDislike = res?.data === 'dislike' ? 1 : 0;
            const popularListArr = popularIdeasList
            const newListArr = newIdeasList
            const winningListArr = winningIdeaList
            
            popularListArr.map((ele, index) => {
                if (ele.id == id) {
                    if (likeDislike == 1) {
                        popularListArr[index].like = likeDislike
                        popularListArr[index].totalLike = Number(popularListArr[index].totalLike) + 1;
                    }
                    else {
                        popularListArr[index].like = likeDislike
                        popularListArr[index].totalLike = Number(popularListArr[index].totalLike) - 1;
                    }
                }
            })
            newListArr.map((ele, index) => {
                if (ele.id == id) {
                    if (likeDislike == 1) {
                        newListArr[index].like = likeDislike
                        newListArr[index].totalLike = Number(newListArr[index].totalLike) + 1;
                    }
                    else {
                        newListArr[index].like = likeDislike
                        newListArr[index].totalLike = Number(newListArr[index].totalLike) - 1;
                    }
                }
            })
            winningListArr.map((ele, index) => {
                if (ele.id == id) {
                    if (likeDislike == 1) {
                        winningListArr[index].like = likeDislike
                        winningListArr[index].totalLike = Number(winningListArr[index].totalLike) + 1;
                    }
                    else {
                        winningListArr[index].like = likeDislike
                        winningListArr[index].totalLike = Number(winningListArr[index].totalLike) - 1;
                    }
                }
            })

            setPopularIdeasList([...popularListArr]);
            setNewIdeasList([...newListArr]);
            setWinningIdeaList([...winningListArr]);

        }, (err) => {
            Loger.onLog("err of likeUnlike", err)
        })
    }
    const onFavoriteIdeas = (id) => {
        var data = {
            "field_name": "idea_id",
            "id": id,
            "frontuser_id": UserManager.userId,
            "model": 'FavoriteIdeas'
        }
        Service.post(EndPoints.ideaLikeUnlike, data, (res) => {

            const likeDislike = res?.data === 'dislike' ? true : false;
            const popularListArr = popularIdeasList
            const newListArr = newIdeasList
            const winningListArr = winningIdeaList
            popularListArr.map((ele, index) => {
                if (ele.id == id) {
                    popularListArr[index].favorite = likeDislike;
                }
            })
            newListArr.map((ele, index) => {
                if (ele.id == id) {
                    newListArr[index].favorite = likeDislike;
                }
            })
            winningListArr.map((ele, index) => {
                if (ele.id == id) {
                    winningListArr[index].favorite = likeDislike;
                }
            })

            setPopularIdeasList([...popularListArr]);
            setNewIdeasList([...newListArr]);
            setWinningIdeaList([...winningListArr]);

        }, (err) => {
            Loger.onLog("err of likeUnlike", err)
        })
    }

    const onTabNavigate = () => {

        return (
            selectedIndex == 0 ? <TabPopularIdeas isType={"Ideas"} data={popularIdeasList.slice(0, 2)} onLikeIdeas={onLikeIdeas} onFavoriteIdeas={onFavoriteIdeas} /> :
                selectedIndex == 1 ? <TabPopularIdeas isType={"Ideas"} data={newIdeasList.slice(0, 2)} onLikeIdeas={onLikeIdeas} onFavoriteIdeas={onFavoriteIdeas} /> :
                    selectedIndex == 2 ? <TabPopularIdeas isType={"Ideas"} data={winningIdeaList.slice(0, 2)} onLikeIdeas={onLikeIdeas} onFavoriteIdeas={onFavoriteIdeas} /> : null
        )
    }

    return (
        <View style={{ width: '100%' }}>

            <View style={{ width: '100%', height: AppUtil.getHP(7), flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => onSelectTab(0, "popular")} style={[{ borderBottomWidth: selectedIndex === 0 ? 2 : 0 }, Style.tabStly]}>
                    <Text style={[{
                        color: selectedIndex === 0 ? GetAppColor.innovationGrey : GetAppColor.grayBorder,
                        fontWeight: selectedIndex === 0 ? 'bold' : 'normal',
                        fontFamily: selectedIndex === 0 ? FONTS.robotBold : FONTS.robotRegular,
                    }, Style.txtCat]}>{Label.PopularIdeas}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onSelectTab(1, "latest")} style={[{ borderBottomWidth: selectedIndex === 1 ? 2 : 0 }, Style.tabStly]}>
                    <Text style={[{
                        color: selectedIndex === 1 ? GetAppColor.innovationGrey : GetAppColor.grayBorder,
                        fontWeight: selectedIndex === 1 ? 'bold' : 'normal',
                        fontFamily: selectedIndex === 1 ? FONTS.robotBold : FONTS.robotRegular,
                    }, Style.txtCat]}>{Label.NewIdeas}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onSelectTab(2, "winning")} style={[{ borderBottomWidth: selectedIndex === 2 ? 2 : 0 }, Style.tabStly]}>
                    <Text style={[{
                        color: selectedIndex === 2 ? GetAppColor.innovationGrey : GetAppColor.grayBorder,
                        fontWeight: selectedIndex === 2 ? 'bold' : 'normal',
                        fontFamily: selectedIndex === 2 ? FONTS.robotBold : FONTS.robotRegular,
                    }, Style.txtCat]}>{Label.WinningIdeas}</Text>
                </TouchableOpacity>
            </View>

            {onTabNavigate()}
        </View>
    );
}
export default memo(IdeaList);





