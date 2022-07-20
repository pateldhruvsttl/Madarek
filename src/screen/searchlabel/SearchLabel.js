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
import IdeaListModel from '../../model/IdeaList'

const Item = ({ title, index }) => (


    <View style={Style.seachView}>
        {
            index == 0 && <IcnRecentIcon style={Style.recent} height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
        }
        <Text style={Style.subLabel} >{title}</Text>
    </View>

)

const RenderItem = ({ item, index, clearData }) => (

    <View style={Style.subListing}>
        <SectionList
            sections={item}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item} index={index} />}
            renderSectionHeader={({ section: { title } }) => (
                <View style={Style.header}>
                    <Text style={Style.title}>{title}</Text>

                    {
                        index == 0 ? <TouchableOpacity onPress={clearData}>
                            <Text style={[Style.title, Style.clear]}>{Label.Clear}</Text>
                        </TouchableOpacity> :
                            null
                    }
                </View>
            )}
        />

    </View>

)

const SearchLabel = (props) => {

    const [isCurrentScreen, setCurrentScreen] = useState(props?.route?.params?.screen)

    const [isSearchActive, setSearchActive] = useState(false)
    const textInput = useRef(null);
    const [searchStr, setSearchStr] = useState("")
    const [labels, setLabels] = useState(search)
    const [isSugestions, setSugestions] = useState(false)

    const [isAllIdeas, setAllIdeas] = useState([]);



    const onChangeText = (text) => {
        setSearchStr(text); 
        text.length > 0 ? setSugestions(true) : setSugestions(false)
        text.length > 0 && setAllIdeas([]);
    }
    const onCurrentType = (item) => {
        switch (item) {

            case 'IDEAS':
                onGetIdeasList();
                break
            default: null;
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
            setAllIdeas([]);

            res?.data?.allIdea.map((element) => {
                let model = new IdeaListModel(element);
                _isAllIdeas.push(model);
            })
            setAllIdeas(_isAllIdeas)

        }, (err) => {
            Loger.onLog("err", err)
        })
    }

    const onPressSearchButton = () => {
        if (isCurrentScreen === "HomeScreen") {

        }
        else if (isCurrentScreen === "") {

        }
    }
    const onPressCloseButton = () => {
        setAllIdeas([]);
        setSearchActive(false);
        setTimeout(() => {
            setSearchStr('')
            textInput.current.clear()
        }, 500);
    }
    const clearData = () => {
        setLabels([])
    }
    const renderResultCell = ({ item }) => (

        <TouchableOpacity onPress={() => props.onItemPress()} style={Style.renderMainView}>

            <View style={Style.rightItems}>

                <View style={Style.img}>
                    <ImageLoad style={Style.img} source={{ uri: item.ideaImage }} isShowActivity={false} />
                </View>
                {
                    item.like ?
                        <IcnSelectedHeart style={Style.likeUnlikeIcn} height={AppUtil.getHP(2.7)} width={AppUtil.getHP(2.7)} />
                        :
                        <IcnUnSelectedHeart style={Style.likeUnlikeIcn} height={AppUtil.getHP(2.7)} width={AppUtil.getHP(2.7)} />
                }
                <View style={Style.rewordView}>
                    {<IcnTrophy style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />}
                    {<IcnStar style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />}
                    {<IcnRewordComment style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />}
                    {<IcnRewordLight style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />}
                </View>

            </View>

            <View style={Style.leftItems}>

                <Text numberOfLines={1} style={Style.title}>{item.ideaTitle}</Text>
                <Text numberOfLines={2} style={[Style.SubTitle, { color: props.isType == 'Challenges' ? GetAppColor.black : GetAppColor.borderRed }]}>{item.categoryName}</Text>

                {
                    props.isType == "Ideas" ?

                        <View style={Style.calView}>
                            <IcnClander style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                            <Text style={Style.title}>{item.createDate ? moment(item.createDate).format("DD MMM YY") : "No date"}</Text>

                            <IcnAvtarBg style={Style.callLeftIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                            <Text style={Style.title}>{item.firstName + " " + item.lastName}</Text>
                        </View>

                        :

                        props.isType == "Spotlight" ?

                            <View style={Style.calView}>
                                <IcnClander style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                                <Text style={Style.title}>{item.createDate ? moment(item.createDate).format("DD MMM YY") : "No date"}</Text>

                                <IcnAvtarBg style={Style.callLeftIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                                <Text style={Style.title}>{item.name}</Text>
                            </View>

                            :

                            <View style={Style.calView}>
                                <IcnClander style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                                <Text style={Style.title}>{item.createDate ? moment(item.createDate).format("DD MMM YY") : "No date"}</Text>
                            </View>

                }

                <View style={Style.secondCalView}>
                    <View style={Style.secondInnerCalView}>
                        <IcnWatchDone style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={Style.title}>{item?.totalView ? item.totalView : 0}</Text>
                    </View>
                    <View style={Style.secondInnerCalView}>
                        <IcnThumsUp style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={Style.title}>{item?.totalLike ? item.totalLike : 0}</Text>
                    </View>
                    <View style={Style.secondInnerCalView}>
                        <IcnComment style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={Style.title}>{item?.totalComments ? item.totalComments : 0}</Text>
                    </View>
                    <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }}>
                        <IcnMenu fill={GetAppColor.textColor} height={AppUtil.getHP(1.8)} width={AppUtil.getHP(1.8)} />
                    </TouchableOpacity>
                </View>

            </View>

        </TouchableOpacity>
    );


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
            {/* {
                searchStr.length > 0 &&
                <View style={Style.listing}>
                    <FlatList
                        data={labels}
                        renderItem={({ item, index }) => <RenderItem item={item} index={index} clearData={clearData} />}
                        keyExtractor={item => item.key}
                    />
                </View>
            } */}
            <View>
                {
                    isCurrentScreen === "HomeScreen" &&
                    <ScrollView contentContainerStyle={{ paddingStart: AppUtil.getWP(3) }} horizontal={true} showsHorizontalScrollIndicator={false}>
                        {
                            ["IDEAS", "CHALLENGE", "EXPERT DIRECTORY", "EXPERT INSIGHTS"].map((item, index) => {
                                return (
                                    <TouchableOpacity onPress={() => onCurrentType(item)} style={[Style.cateButton, { backgroundColor: GetAppColor.white }]}>
                                        <Text style={Style.catTextRegular}>{item}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                }

                <FlatList
                    data={isAllIdeas}
                    renderItem={renderResultCell}
                />

            </View>


        </SafeAreaView>
    )
}

export default SearchLabel


const search = [

    [{

        title: "Recent Searches",
        data: [
            "Technology Equipment Service",
            "IT Support Company",
            "Internet Infrastructure Building",
            "Mobile Wallet Payment Solution Company",
            "SEO Specialist Company"
        ],
    }],

    [{

        title: "Popular Searches",
        data: [
            "Banking and Finance",
            "Vikash Agrawal",
            "Corporate",
            "Renewable Energy",
            "Quality of Living",
        ]
    }]

]
const sliderdata = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        firstName: 'Poonam',
        lastName: 'Madhav',
        ideaTitle: 'Banking and Finance',
        categoryName: 'Children Omani Dress Competition',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "25 Jan 22",
        see: '700',
        like: '200',
        comment: '80',
        isLike: true,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        firstName: 'Poonam',
        lastName: 'Madhav',
        ideaTitle: 'Banking and Finance',
        categoryName: 'Children Omani Dress Competition',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "25 Jan 22",
        see: '700',
        like: '200',
        comment: '80',
        isLike: false,
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        firstName: 'Poonam',
        ideaTitle: 'Banking and Finance',
        categoryName: 'Children Omani Dress Competition',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "25 Jan 22",
        see: '700',
        like: '200',
        comment: '80',
        isLike: true,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        firstName: 'Poonam',
        lastName: 'Madhav',
        ideaTitle: 'Banking and Finance',
        categoryName: 'Children Omani Dress Competition',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "25 Jan 22",
        see: '700',
        like: '200',
        comment: '80',
        isLike: false,
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        lastName: 'Madhav',
        ideaTitle: 'Banking and Finance',
        categoryName: 'Children Omani Dress Competition',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "25 Jan 22",
        see: '700',
        like: '200',
        comment: '80',
        isLike: true,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        firstName: 'Poonam',
        lastName: 'Madhav',
        ideaTitle: 'Banking and Finance',
        categoryName: 'Children Omani Dress Competition',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "25 Jan 22",
        see: '700',
        like: '200',
        comment: '80',
        isLike: false,
    }]