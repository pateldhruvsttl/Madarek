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
import { AppConfig, getLanguage } from '../../manager/AppConfig'
import { Service } from '../../service/Service'
import { EndPoints } from '../../service/EndPoints'
import FONTS from '../../utils/Fonts'

import IdeaListModel from '../../model/IdeaList'

import SubIdeasListWithImage from "../../component/homescreen/SubIdeasListWithImage";
import OpenChallengeModel from '../../model/OpenChallengesModel'
import SimilarExperts from '../../component/expertscreen/SimilarExperts'
import ExpertDirectoryModel from '../../model/ExpertDirectoryModel'
import MadarekSportlight from '../../model/MadarekSportlight'
import SpotlightListImage from '../../component/spotlightList/SpotlightListImage'
import ExpertInsightList from '../../model/ExpertInsightList'
import IdeaExpert from '../expertinsight/IdeaExpert'
import { deviceId } from '../../utils/Constant'


const SearchLabel = (props) => {

    const [isCurrentScreen, setCurrentScreen] = useState(props?.route?.params?.screen)
    const [isId, setId] = useState(props?.route?.params?.id)

    const [isSearchActive, setSearchActive] = useState(false)
    const textInput = useRef(null);
    const [searchStr, setSearchStr] = useState("")
    const [isData, setData] = useState([]);
    const [isType, setType] = useState([Label.IdeasSearch, Label.ChallengeSearch, Label.ExpertDirectorySearch, Label.ExpertInsightSearch, "SPOTLIGHT"]);
    const [isSelectIndex, setSelectIndex] = useState(0);
    const [isPageNo, setPageNo] = useState(1);

    useState(() => {

        if (isCurrentScreen === "HomeScreen")
            setSelectIndex(0);
        else if (isCurrentScreen === "CHALLENGE")
            setSelectIndex(1);
        else if (isCurrentScreen === "EXPERT DIRECTORY")
            setSelectIndex(2);
        else if (isCurrentScreen === "EXPERT INSIGHTS")
            setSelectIndex(3);
        else if (isCurrentScreen === "SPOTLIGHT")
            setSelectIndex(4);


    }, [])

    const onChangeText = (text) => {
        setSearchStr(text);
        text.length > 0 && setData([]);
    }

    const onCurrentType = (item, index) => {

        setPageNo(1);
        setSelectIndex(index)
        setData([]);
        switch (item) {
            case 'IDEAS':
                onGetIdeasList(1);
                break
            case 'CHALLENGE':
                onGetChallengeList(1);
                break
            case 'EXPERT DIRECTORY':
                onGetExpertDirectory(1);
                break
            case 'EXPERT INSIGHTS':
                onGetExpertInsight(1);
                break
            case 'SPOTLIGHT':
                onGetSpotlightList(1);
                break
            default: null;
        }
    }

    const onPressSearchButton = () => {

        setPageNo(1);
        if (isSelectIndex === 0) {
            onGetIdeasList(1);
        }
        else if (isSelectIndex === 1) {
            onGetChallengeList(1);
        }
        else if (isSelectIndex === 2) {
            onGetExpertDirectory(1);
        }
        else if (isSelectIndex === 3) {
            onGetExpertInsight(1);
        }
        else if (isSelectIndex === 4) {
            onGetSpotlightList(1);
        }
    }

    const onGetPaginations = (type) => {

        Loger.onLog("12312313213213213132")
        if (isData.length > (AppConfig.pageLimit - 1)) {
            switch (type) {
                case 'IDEAS':
                    onGetIdeasList(isPageNo + 1);
                    break
                case 'CHALLENGE':
                    onGetChallengeList(isPageNo + 1);
                    break
                case 'EXPERT DIRECTORY':
                    onGetExpertDirectory(isPageNo + 1);
                    break
                case 'EXPERT INSIGHTS':
                    onGetExpertInsight(isPageNo + 1);
                    break
                case 'SPOTLIGHT':
                    onGetSpotlightList(isPageNo + 1);
                    break
                default: null;
            }
            setPageNo(isPageNo + 1);
        }
    }

    const onGetIdeasList = (pageNo) => {
        if (searchStr.length == 0)
            return

        const data = {
            "frontuser_id": UserManager.userId,
            "limit": AppConfig.pageLimit,
            "language": getLanguage(),
            "listtype": "all",
            "searchkeywords": searchStr,
            "limit": AppConfig.pageLimit,
            "page": pageNo
        }
        Service.post(EndPoints.ideaList, data, (res) => {

            let _isAllIdeas = [];
            res?.data?.allIdea.map((element) => {
                let model = new IdeaListModel(element);
                _isAllIdeas.push(model);
            })
            if (pageNo == 1) setData(_isAllIdeas);
            else setData([...isData, ..._isAllIdeas]);

        }, (err) => {
            Loger.onLog("err", err)
        })
    }

    const onGetChallengeList = (pageNo) => {
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
            "limit": AppConfig.pageLimit,
            "page": pageNo
        }

        Service.post(EndPoints.openChallenges, data, (res) => {

            let _isAllIdeas = [];
            res.data.forEach(element => {
                let model = new OpenChallengeModel(element);
                _isAllIdeas.push(model);
            });

            setData(_isAllIdeas); if (pageNo == 1) setData(_isAllIdeas);
            else setData([...isData, ..._isAllIdeas]);
        }, (err) => {
            Loger.onLog("###", err)
        })
    }

    const onGetExpertDirectory = (pageNo) => {

        if (searchStr.length == 0)
            return

        var data = {
            "frontuser_id": UserManager.userId,
            "language": getLanguage(),
            "categories_id": 0,
            "keyword": searchStr,
            "limit": AppConfig.pageLimit,
            "page": pageNo
        }

        Service.post(EndPoints.experts, data, (res) => {

            let _isAllIdeas = [];
            res.data.forEach(element => {
                let model = new ExpertDirectoryModel(element);
                _isAllIdeas.push(model)
            });

            if (pageNo == 1) setData(_isAllIdeas);
            else setData([...isData, ..._isAllIdeas]);


        }, (err) => {
        })
    }

    const onGetExpertInsight = (pageNo) => {
        if (searchStr.length == 0)
            return
        const data = {
            "device_id": deviceId,
            "token": AppConfig.token,
            "frontuser_id": UserManager.userId,
            "language": getLanguage(),
            "globalkeywords": "",
            "page": pageNo,
            "limit": AppConfig.pageLimit,
            "sector": "",
            "searchkeywords": searchStr,
        }
        Service.post(EndPoints.expertInsightsList, data, (res) => {
            let _isAllIdeas = [];
            res?.data?.map((element) => {
                let model = new ExpertInsightList(element);
                _isAllIdeas.push(model);
            })
            if (pageNo == 1) setData(_isAllIdeas);
            else setData([...isData, ..._isAllIdeas]);
        },
            (err) => {
                Loger.onLog("", err);
            })
    }

    const onGetSpotlightList = (pageNo) => {
        if (searchStr.length == 0)
            return
        const data = {
            "frontuser_id": UserManager.userId,
            "searchkeywords": searchStr,
            'limit': AppConfig.pageLimit,
            'page': pageNo,
            'spotlight_type': "",
            'keywords': "",
        }

        Service.post(EndPoints.madarekSpotlight, data, (res) => {
            let _isAllIdeas = [];
            res?.data?.map((element) => {
                let model = new MadarekSportlight(element);
                _isAllIdeas.push(model);
            })
            if (pageNo == 1) setData(_isAllIdeas);
            else setData([...isData, ..._isAllIdeas]);

        },
            (err) => {
                Loger.onLog("", err);
            }
        );
    };
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
        else if (isSelectIndex === 3)
            return renderExpertInsight();
        else if (isSelectIndex === 4)
            return renderSpotlight()

    };

    const renderIdea = () => {
        return (
            <SubIdeasListWithImage
                data={isData}
                scrollEnabled={true}
                isType={"Ideas"}
                onLikeIdeas={(id) => onLikeIdeas(id)}
                onFavoriteIdeas={(id) => onFavoriteIdeas(id)}
                onItemPress={(item) => { props.navigation.navigate("IdeaDetails", { item: item }) }}
                paginations={() => onGetPaginations("IDEAS")}
                navigateToComment={(item) => props.navigation.navigate("CommentScreen", { item: item })}
            />
        )
    }

    const renderChallenge = () => {
        return (
            <SubIdeasListWithImage
                data={isData}
                scrollEnabled={true}
                isType={"Challenges"}
                onLikeIdeas={(id) => onLikeChallenge(id)}
                onFavoriteIdeas={(id) => onFavoriteChallenge(id)}
                onItemPress={(id) => { props.navigation.navigate("ChallengeDetail", { id: id }) }}
                paginations={() => onGetPaginations("CHALLENGE")}
                navigateToComment={(item) => props.navigation.navigate("CommentScreen", { item: item })}
                isComment={"Challenges"}
            />
        )

    }

    const renderExpertDirectory = () => {
        return (
            <SimilarExperts data={isData} maxLimit={0}
                navigateDetail={(id) => props.navigation.navigate("ExpertDetailsScreen", { id: id })}
                onGetPaginations={() => onGetPaginations("EXPERT DIRECTORY")}
                navigateToComment={(item) => props.navigation.navigate("CommentScreen", { item: item })}
            />
        )
    }

    const renderExpertInsight = () => {
        return (
            <IdeaExpert data={isData} maxLimit={0}
                navigateScreen={(id, type) => onExpertInsightNavigations(type, id)}
                onGetPaginations={() => onGetPaginations("EXPERT INSIGHTS")}
                navigateToComment={(item) => props.navigation.navigate("CommentScreen", { item: item })}
                isSearch={"Expert Insight"}
            />
        )
    }

    const renderSpotlight = () => {
        return (
            <SpotlightListImage
                data={isData}
                scrollEnabled={true}
                isType={"Spotlight"}
                navigateDetail={(id) => { props.navigation.navigate("SpotlightDetail", { id: id }) }}
                paginations={() => onGetPaginations("SPOTLIGHT")}
            />
        )

    }
    const onExpertInsightNavigations = (type, id) => {
        if (type != "General")
            return props.navigation.navigate("ExpertInsightTypeDetail", { id: id })
        else
            return props.navigation.navigate("ExpertInsightDetailWithComment", { id: id })

    }


    const _lang = getLanguage();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={Style.MainView}>
                <View style={Style.centerIcnView}>
                    <TouchableOpacity style={Style.LeftIcnView} onPress={() => props.navigation.goBack()}>
                        <IcnBack style={{ transform: [{ rotate: _lang == 'ar' ? '180deg' : '0deg' }] }} color={GetAppColor.black} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
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

            </View>
            <View style={{ flex: 1 }}>
                {renderResultCell()}
            </View>

        </SafeAreaView>
    )
}

export default SearchLabel
