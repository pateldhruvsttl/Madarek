import { View, Text, StatusBar, TouchableOpacity, ScrollView, Image, TextInput, Keyboard, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GetAppColor } from '../../utils/Colors'
import { GetIcon, GetImage } from '../../utils/Assets'
import CategoryStyle from './CategoryStyle'
import { Label } from '../../utils/StringUtil'
import IcnSearch from '../../assets/svg/IcnSearch'
import { AppUtil } from '../../utils/AppUtil'
import FONTS from '../../utils/Fonts'
import GraySearchIcon from '../../assets/svg/GraySearchIcon'
import CloseIcon from '../../assets/svg/CloseIcon'

import { useSelector, useDispatch } from 'react-redux'
import { updateTheme } from '../../redux/reducers/ThemReducers'
import { blueTheme } from '../../utils/ColorModel'
import { EndPoints } from '../../service/EndPoints'
import { Service } from '../../service/Service'
import Categories from '../../model/Categories'
import { Loger } from '../../utils/Loger'
import { SafeAreaView } from 'react-native-safe-area-context'
import saveUserCategory from '../../service/EndPoints'



// const category = [
//     { id: 0, name: 'Agriculture & Fisheries', isselected: false },
//     { id: 1, name: 'Aviation', isselected: false },
//     { id: 2, name: 'Autism Specialized Centers', isselected: false },
//     { id: 3, name: 'Health', isselected: false },
//     { id: 4, name: 'Banking and Finance', isselected: false },
//     { id: 5, name: 'Cultural Activities', isselected: false },
//     { id: 6, name: 'Culture and Arts', isselected: false },
//     { id: 7, name: 'Development Programs', isselected: false },
//     { id: 8, name: 'Education', isselected: false },
//     { id: 9, name: 'Sports and Recreational Activities', isselected: false },
//     { id: 10, name: 'Volunteering', isselected: false },
//     { id: 11, name: 'Information Technology', isselected: false },
//     { id: 12, name: 'Handicapped Rehabilitation Centers', isselected: false },
//     { id: 13, name: 'Renewable Energy', isselected: false },
//     { id: 14, name: 'Entrepreneurship', isselected: false },
//     { id: 15, name: 'Construction and Infrastructure', isselected: false },
//     { id: 16, name: 'Strategic Planning', isselected: false },
//     { id: 17, name: 'Special Education', isselected: false },
//     { id: 18, name: 'Skills and Competencies', isselected: false },
//     { id: 19, name: 'Private Sector', isselected: false },
//     { id: 20, name: 'Quality of Living', isselected: false },
//     { id: 21, name: 'Entertainment Activities', isselected: false },
//     { id: 22, name: 'Youth Development and Support', isselected: false },
// ]

const Category = (props) => {
    const [category, setCategory] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([])
    const [isSearch, setSearch] = useState(false);
    const [searchStr, setSearchStr] = useState("")
    const [selectedCategoriesId, setSelectedCategoriesId] = useState([])


    const { themeColor } = useSelector((state) => state)
    const dispatch = useDispatch()

    useEffect(() => {
        var cat = [];
        Service.post(EndPoints.categories, {}, (res) => {
            Loger.onLog('category categorylist Response of category list ========>', JSON.stringify(res.result))
            res.data.forEach(element => {
                let model = new Categories(element);
                cat.push(model)
            });
            setCategories(cat)
            setCategory(cat)
        }, (err) => {
            Loger.onLog('category bannerlist error ========>', err)
        })

    }, []);

    const navigateToHomeScreen = () => {


        var selCat = [];
        const data = {
            'user_id': 48,
            'category_id': selectedCategoriesId,
            'status': 1
        };

        Service.post(EndPoints.saveUserCategory, data, (res) => {
            if (res.statusCode == 1) {
                //  Prompt success message
                props.navigation.navigate("ChallengeDetail");
            } else {
                //  Prompt failure message
            }
        }, (err) => {
            Loger.onLog('category bannerlist error ========>', err)
        })
    }

    const onPressCategory = (index) => {
        var cat = [...categories];

        var selectedCat = [...selectedCategories];
        if (!selectedCat.includes(cat[index])) {
            selectedCat.push(cat[index])
        } else {
            let idx = selectedCat.indexOf(cat[index])
            selectedCat.splice(idx, 1)
        }
        setSelectedCategories(selectedCat)

        setCategories(cat)
        for (let i = 0; i < selectedCat.length; i++) {

            if (!selectedCategoriesId.includes(JSON.stringify(selectedCat[i].id))) {
                selectedCategoriesId.push(JSON.stringify(selectedCat[i].id));
            }
        }
    }
    const onWriteText = (text) => {
        if (text === "") {
            setSearch(false)
        } else {
            setSearch(true)
        }
        setSearchStr(text)
        const searchData = category.filter(task => task.categoryName.includes(text))
        var cat = []
        searchData.forEach(obj => {
            cat.push(obj)
        });
        setCategories(cat)
    }
    const onCloseSearch = () => {

        onWriteText("")
        Keyboard.dismiss()
    }

    const onSkip = () => {
        // dispatch(updateTheme(blueTheme))
        props.navigation.navigate('HomeScreen')
    }

    return (
        <View style={{ height: '100%', backgroundColor: '#F5F7FB' }}>
            <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={false} />
            <SafeAreaView backgroundColor={GetAppColor.statusBarYellow} />

            <View style={[CategoryStyle.headerView, { backgroundColor: themeColor.headerColor }]}>
                <Text style={CategoryStyle.headerText}>{Label.CatTitle}</Text>
                <TouchableOpacity onPress={() => onSkip()} style={CategoryStyle.skipBtn}>
                    <Text style={CategoryStyle.skipText}>{Label.Skip}</Text>
                </TouchableOpacity>
            </View>

            <View style={CategoryStyle.searchView}>
                <TextInput
                    placeholder={Label.WhatdoyouPrefertosee}
                    placeholderTextColor={GetAppColor.borderGray}
                    style={CategoryStyle.input}
                    value={searchStr}
                    onChangeText={(txt) => onWriteText(txt)}
                />

                {
                    isSearch ?
                        <TouchableOpacity onPress={() => onCloseSearch()} style={{ position: 'absolute', end: 25, top: 15, alignSelf: 'center' }}>
                            {/* <Image style={{ width: 25, height: 25 }} source={GetIcon.searchIcon} /> */}
                            <CloseIcon height={25} width={25} />
                        </TouchableOpacity>
                        :
                        <View style={{ position: 'absolute', end: 25, top: 15, alignSelf: 'center' }}>
                            <GraySearchIcon height={25} width={25} />
                        </View>
                }

            </View>
            <ScrollView style={CategoryStyle.scroll}>
                <View style={CategoryStyle.scrollSubView}>
                    {
                        categories.map((item, index) => {
                            return (
                                <TouchableOpacity onPress={() => onPressCategory(index)} style={[CategoryStyle.categoryButton, { borderColor: selectedCategories.includes(item) ? GetAppColor.borderRed : GetAppColor.borderGray, }]}>
                                    <Text
                                        style={{
                                            color: selectedCategories.includes(item) ? GetAppColor.categoryTextSelected : GetAppColor.categoryText,
                                            fontSize: AppUtil.getHP(1.8),
                                            fontFamily: selectedCategories.includes(item) ? FONTS.robotMedium : FONTS.robotRegular
                                        }}
                                    >
                                        {item.categoryName}
                                    </Text>
                                </TouchableOpacity>
                            )
                        })
                    }

                </View>
            </ScrollView>

            <TouchableOpacity style={[CategoryStyle.continueButton, { backgroundColor: themeColor.headerColor }]}
                onPress={() => { navigateToHomeScreen() }}
            >
                <Text style={CategoryStyle.continueText}>{Label.Continue}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Category

