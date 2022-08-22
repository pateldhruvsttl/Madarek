import {
    View, Text, TouchableOpacity, FlatList, TextInput,
    SectionList, SafeAreaView, ScrollView
} from 'react-native'
import React, { useRef, useEffect, useSt } from 'react'
import Style from './SearchLabelStyle'
import IcnBack from '../../assets/svg/IcnBack'
import IcnSearch from '../../assets/svg/IcnSearch'
import { AppUtil } from '../../utils/AppUtil'
import { GetAppColor } from '../../utils/Colors'
import IcnRecentIcon from '../../assets/svg/IcnRecentIcon'
import { useState } from 'react'
import IcnClose from '../../assets/svg/IcnClose'
import { Label } from '../../utils/StringUtil'

import IcnSelectedHeart from "../../assets/svg/IcnSelectedHeartWithRound"
import IcnUnSelectedHeart from "../../assets/svg/IcnUnSelectedHeartWithRound"
import IcnClander from "../../assets/svg/IcnClander"
import IcnWatchDone from "../../assets/svg/IcnWatchDone"
import IcnThumsUp from "../../assets/svg/IcnThumsUp"
import IcnComment from "../../assets/svg/IcnComment"

import IcnTrophy from "../../assets/svg/IcnTrophy"
import IcnStar from "../../assets/svg/IcnStar"
import IcnRewordComment from "../../assets/svg/IcnRewordComment"
import IcnRewordLight from "../../assets/svg/IcnRewordLight"
import IcnAvtarBg from "../../assets/svg/IcnAvtarBg"
import IcnMenu from "../../assets/svg/IcnMenuDote"

import moment from "moment";
import ImageLoad from "react-native-image-placeholder";
import { Loger } from '../../utils/Loger'
import { UserManager } from '../../manager/UserManager'
import { AppConfig } from '../../manager/AppConfig'
import { Service } from '../../service/Service'
import { EndPoints } from '../../service/EndPoints'
import FONTS from '../../utils/Fonts'

import IdeaListModel from '../../model/IdeaList'

import SubIdeasListWithImage from "../../component/homescreen/SubIdeasListWithImage";
import OpenChallengeModel from '../../model/OpenChallengesModel'
import SimilarExperts from '../../component/expertscreen/SimilarExperts'


const SearchLabel = (props) => {

    const [isCurrentScreen, setCurrentScreen] = useState(props?.route?.params?.screen)

    const [isSearchActive, setSearchActive] = useState(false)
    const textInput = useRef(null);
    const [searchStr, setSearchStr] = useState("")
    const [isData, setData] = useState([]);
    const [isType, setType] = useState([Label.IdeasSearch, Label.ChallengeSearch, Label.ExpertDirectorySearch, Label.ExpertInsightSearch]);
    const [isSelectIndex, setSelectIndex] = useState(0);


    useState(() => {

        if (isCurrentScreen === "HomeScreen")
            setSelectIndex(0);
        else if (isCurrentScreen === "CHALLENGE")
            setSelectIndex(1);
        else if (isCurrentScreen === "EXPERT DIRECTORY")
            setSelectIndex(2);


    }, [])

    const onChangeText = (text) => {
        setSearchStr(text);
        text.length > 0 && setData([]);
    }

    const onCurrentType = (item, index) => {
        setSelectIndex(index)
        setData([]);
        switch (item) {

            case 'IDEAS':
                onGetIdeasList();
                break
            case 'CHALLENGE':
                onGetChallengeList();
                break
            case 'EXPERT DIRECTORY':
                onGetExpertDirectory(2);
                break
            default: null;
        }
    }

    const onPressSearchButton = () => {

        if (isSelectIndex === 0) {
            onGetIdeasList();
        }
        else if (isSelectIndex === 1) {
            onGetChallengeList();
        }
        else if (isSelectIndex === 2) {
            onGetExpertDirectory();
        }
    }

    const onGetIdeasList = () => {
        if (searchStr.length == 0)
            return

        const data = {
            "frontuser_id": UserManager.userId,
            "limit": AppConfig.pageLimit,
            "language": AppConfig.lang,
            "listtype": "all",
            "searchkeywords": searchStr,
        }
        Service.post(EndPoints.ideaList, data, (res) => {

            let _isAllIdeas = [];
            res?.data?.allIdea.map((element) => {
                let model = new IdeaListModel(element);
                _isAllIdeas.push(model);
            })
            setData(_isAllIdeas)

        }, (err) => {
            Loger.onLog("err", err)
        })
    }

    const onGetChallengeList = () => {
        if (searchStr.length == 0)
            return

        let data = {
            "frontuser_id": UserManager.userId,
            "searchkeywords": searchStr,
            "limit": AppConfig.pageLimit,
            "keywords": "",
            "categories": "",
            "statusinputdata": "",
            "layout": "list",
        }

        Service.post(EndPoints.openChallenges, data, (res) => {

            let _isAllIdeas = [];
            res.data.forEach(element => {
                let model = new OpenChallengeModel(element);
                _isAllIdeas.push(model);
            });

            setData(_isAllIdeas);
        }, (err) => {
            Loger.onLog("###", err)
        })
    }

    const onFavoriteChallenge = (id) => {
        var data = {
            "field_name": "contest_id",
            "id": id,
            "frontuser_id": UserManager.userId,
            "model": 'FavoriteContests'
        }
        Service.post(
            EndPoints.challengeLikeUnlike,
            data,
            (res) => {
                const likeDislike = res?.data === 'dislike' ? true : false;
                const challengeArr = isData;

                challengeArr.map((ele, index) => {
                    if (ele.id == id) {
                        challengeArr[index].favorite = likeDislike;
                    }
                });
                setData([...challengeArr]);


            },
            (err) => {
                Loger.onLog("err of challengeLikeUnlike", err);
            }
        );
    }
    const onLikeChallenge = (id) => {
        var data = {
            "field_name": "contest_id",
            "id": id,
            "frontuser_id": UserManager.userId,
            "model": 'LikedislikeContests'
        }
        Service.post(EndPoints.ideaLikeUnlike, data, (res) => {

            const likeDislike = res?.data === 'dislike' ? 1 : 0;
            const challengeArr = isData;
            challengeArr.map((ele, index) => {
                if (ele.id == id) {

                    if (likeDislike == 1) {
                        challengeArr[index].like = likeDislike
                        challengeArr[index].totalLike = Number(challengeArr[index].totalLike) + 1;
                    }
                    else {
                        challengeArr[index].like = likeDislike
                        challengeArr[index].totalLike = Number(challengeArr[index].totalLike) - 1;
                    }
                }
            });
            setData([...challengeArr]);

        }, (err) => {
            Loger.onLog("err of likeUnlike", err)
        })
    }

    const onGetExpertDirectory = () => {
        if (searchStr.length == 0)
            return

        // Service.get(EndPoints.openChallenges, (res) => {

        //     let _isAllIdeas = [];
        //     res.data.forEach(element => {
        //         let model = new OpenChalangeHomeModel(element);
        //         _isAllIdeas.push(model);
        //     });

        //     setData(_isAllIdeas);
        // }, (err) => {
        //     Loger.onLog("###", err)
        // })
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
            const _isAllIdeas = isData

            _isAllIdeas.map((ele, index) => {
                if (ele.id == id) {
                    _isAllIdeas[index].favorite = likeDislike;
                }
            })
            setData([..._isAllIdeas]);

        }, (err) => {
            Loger.onLog("err of likeUnlike", err)
        })
    }
    const onLikeIdeas = (id) => {
        var data = {
            "field_name": "idea_id",
            "id": id,
            "frontuser_id": UserManager.userId,
            "model": "LikedislikeIdeas"
        }

        Service.post(EndPoints.ideaLikeUnlike, data, (res) => {

            const likeDislike = res?.data === 'dislike' ? 1 : 0;
            const _isAllIdeas = isData
            _isAllIdeas.map((ele, index) => {
                if (ele.id == id) {
                    if (likeDislike == 1) {
                        _isAllIdeas[index].like = likeDislike
                        _isAllIdeas[index].totalLike = Number(_isAllIdeas[index].totalLike) + 1;
                    }
                    else {
                        _isAllIdeas[index].like = likeDislike
                        _isAllIdeas[index].totalLike = Number(_isAllIdeas[index].totalLike) - 1;
                    }
                }
            })
            setData([..._isAllIdeas]);

        }, (err) => {
            Loger.onLog("err of likeUnlike", err)
        })
    }

    const onPressCloseButton = () => {
        setData([]);
        setSearchActive(false);
        setTimeout(() => {
            setSearchStr('')
            textInput.current.clear()
        }, 500);
    }

    const renderResultCell = () => {

        if (isSelectIndex === 0)
            return renderIdea();
        else if (isSelectIndex === 1)
            return renderChallenge();
        else if (isSelectIndex === 2)
            return renderExpertDirectory();

    };

    const renderIdea = () => {
        return (
            <SubIdeasListWithImage
                data={isData}
                isType={"Ideas"}
                onLikeIdeas={(id) => onLikeIdeas(id)}
                onFavoriteIdeas={(id) => onFavoriteIdeas(id)}
                onItemPress={(item) => { props.navigation.navigate("IdeaDetails", item) }} />
        )
    }
    const renderChallenge = () => {
        return (
            <SubIdeasListWithImage
                data={isData}
                isType={"Challenges"}
                onLikeIdeas={(id) => onLikeChallenge(id)}
                onFavoriteIdeas={(id) => onFavoriteChallenge(id)}
                onItemPress={(id) => { props.navigation.navigate("ChallengeDetail", { id: id }) }}
            />
        )

    }
    const renderExpertDirectory = () => {
        return (
            null
            // <SimilarExperts data={isData} maxLimit={3} title={Label.PopularExperts} type={"ExpertScreen"} />
        )

    }


    return (
        <SafeAreaView>
            <View style={Style.MainView}>
                <View style={Style.centerIcnView}>
                    <TouchableOpacity style={Style.LeftIcnView} onPress={() => props.navigation.goBack()}>
                        <IcnBack color={GetAppColor.black} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                    </TouchableOpacity>

                    <TextInput
                        ref={textInput}
                        placeholder={Label.TypeToSearch}
                        value={searchStr}
                        style={Style.txtHeader}
                        placeholderTextColor={GetAppColor.grayBorder}
                        onChangeText={text => { onChangeText(text); }}
                    />
                </View>

                <View style={Style.rightSingleIcnView}>

                    {searchStr.length > 0 ?
                        <TouchableOpacity style={[Style.searchBtnStyle, { marginBottom: 2 }]} onPress={() => { onPressCloseButton() }} >
                            <IcnClose color={GetAppColor.black} height={AppUtil.getHP(1.8)} width={AppUtil.getHP(1.8)} />
                        </TouchableOpacity>
                        :
                        <View style={Style.searchBtnStyle} />
                    }

                    <TouchableOpacity style={Style.searchBtnStyle} onPress={() => { onPressSearchButton() }}>
                        <IcnSearch color={GetAppColor.black} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <ScrollView contentContainerStyle={{ paddingStart: AppUtil.getWP(3) }} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        isType.map((item, index) => {
                            return (
                                <TouchableOpacity onPress={() => onCurrentType(item, index)} style={[Style.cateButton, { backgroundColor: GetAppColor.white }]}>
                                    <Text style={[Style.catTextRegular, { fontFamily: isSelectIndex !== index ? FONTS.robotRegular : FONTS.robotBold, }]}>{item}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
                <ScrollView contentContainerStyle={{ width: '100%', paddingBottom: '50%' }} horizontal={false}>
                    {renderResultCell()}
                </ScrollView>
            </View>


        </SafeAreaView>
    )
}

export default SearchLabel
