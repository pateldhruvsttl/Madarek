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


const SearchLabel = (props) => {

    const [isCurrentScreen, setCurrentScreen] = useState(props?.route?.params?.screen)

    const [isSearchActive, setSearchActive] = useState(false)
    const textInput = useRef(null);
    const [searchStr, setSearchStr] = useState("")
    const [isData, setData] = useState([]);
    const [isType, setType] = useState(["IDEAS", "CHALLENGE", "EXPERT DIRECTORY", "EXPERT INSIGHTS"]);
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
        if (isCurrentScreen === "HomeScreen") {
            onGetIdeasList();
        }
        else if (isCurrentScreen === "CHALLENGE") {
            onGetChallengeList();
        }
        else if (isCurrentScreen === "EXPERT DIRECTORY") {
            onGetExpertDirectory();
        }
    }

    const onGetIdeasList = () => {
        if (searchStr.length == 0)
            return

        const data = {
            "frontuser_id": UserManager.userId,
            "limit": 2,
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

        Service.get(EndPoints.openChallenges, (res) => {

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
                likeChallenge={(id) => likeChallenge(id)}
                onItemPress={(item) => { navigation.navigate("IdeaDetails", item) }} />
        )
    }
    const renderChallenge = () => {
        return (
            <SubIdeasListWithImage
                data={isData}
                isType={"Challenges"}
                likeChallenge={(id) => likeChallenge(id)}
                onItemPress={(item) => { props.navigation.navigate("ChallengeDetail", item) }}
            />
        )

    }
    const renderExpertDirectory = () => {
        return (
            <SimilarExperts data={isData} maxLimit={3} title={Label.PopularExperts} type={"ExpertScreen"} />
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
                        placeholder={"Information Technology"}
                        value={searchStr}
                        style={Style.txtHeader}
                        placeholderTextColor={GetAppColor.pincolor}
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

                {renderResultCell()}
                {/* <FlatList
                    data={isData}
                    renderItem={renderResultCell}
                /> */}

            </View>


        </SafeAreaView>
    )
}

export default SearchLabel
