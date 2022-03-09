import { View, Text, StatusBar, SafeAreaView, TouchableOpacity, ScrollView, Image, TextInput, Keyboard } from 'react-native'
import React, { useState } from 'react'
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


const category = [
    { id: 0, name: 'Agriculture & Fisheries', isselected: false },
    { id: 1, name: 'Aviation', isselected: false },
    { id: 2, name: 'Autism Specialized Centers', isselected: false },
    { id: 3, name: 'Health', isselected: false },
    { id: 4, name: 'Banking and Finance', isselected: false },
    { id: 5, name: 'Cultural Activities', isselected: false },
    { id: 6, name: 'Culture and Arts', isselected: false },
    { id: 7, name: 'Development Programs', isselected: false },
    { id: 8, name: 'Education', isselected: false },
    { id: 9, name: 'Sports and Recreational Activities', isselected: false },
    { id: 10, name: 'Volunteering', isselected: false },
    { id: 11, name: 'Information Technology', isselected: false },
    { id: 12, name: 'Handicapped Rehabilitation Centers', isselected: false },
    { id: 13, name: 'Renewable Energy', isselected: false },
    { id: 14, name: 'Entrepreneurship', isselected: false },
    { id: 15, name: 'Construction and Infrastructure', isselected: false },
    { id: 16, name: 'Strategic Planning', isselected: false },
    { id: 17, name: 'Special Education', isselected: false },
    { id: 18, name: 'Skills and Competencies', isselected: false },
    { id: 19, name: 'Private Sector', isselected: false },
    { id: 20, name: 'Quality of Living', isselected: false },
    { id: 21, name: 'Entertainment Activities', isselected: false },
    { id: 22, name: 'Youth Development and Support', isselected: false },
]

const Category = () => {
    const [categories, setCategories] = useState(category)
    const [selectedCategories, setSelectedCategories] = useState([])
    const [isSearch, setSearch] = useState(false);
    const [searchStr, setSearchStr] = useState("")


    const {themeColor} = useSelector((state) => state)
    console.log('theme color is', themeColor);
    const dispatch = useDispatch()

    const onPressCategory = (index) => {
        var cat = [...categories];
        var selectedCat = [...selectedCategories];
        cat[index].isselected = !cat[index].isselected
        if (cat[index].isselected) {
            if (!selectedCat.includes(cat[index])) {
                selectedCat.push(cat[index])
            }
        } else {
            if (selectedCat.includes(cat[index])) {
                let idx = selectedCat.indexOf(cat[index])
                selectedCat.splice(idx, 1)
            }
        }
        console.log('selected category', selectedCat);
        setSelectedCategories(selectedCat)
        setCategories(cat)
    }

    const onWriteText = (text) => {
        if (text === "") {
            setSearch(false)
        } else {
            setSearch(true)
        }
        setSearchStr(text)
        const searchData = category.filter(task => task.name.includes(text))
        var cat = []
        searchData.forEach(obj => {
            if (selectedCategories.includes(obj)) {
                obj.isselected = true

            } else {
                obj.isselected = false

            }
            cat.push(obj)
        });
        setCategories(cat)
    }
    const onCloseSearch = () => {

        onWriteText("")
        Keyboard.dismiss()
    }

    const onSkip = () => {
        dispatch(updateTheme(blueTheme))
    }
    return (
        <View style={{ height: '100%', backgroundColor: '#F5F7FB' }}>
            <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={false} />
            <SafeAreaView backgroundColor={GetAppColor.statusBarYellow} />
            <View style={[CategoryStyle.headerView,{backgroundColor:themeColor.headerColor}]}>
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
                                <TouchableOpacity onPress={() => onPressCategory(index)} style={[CategoryStyle.categoryButton, { borderColor: item.isselected ? GetAppColor.borderRed : GetAppColor.borderGray, }]}>
                                    <Text
                                        style={{
                                            color: item.isselected ? GetAppColor.categoryTextSelected : GetAppColor.categoryText,
                                            fontSize: AppUtil.getHP(1.8),
                                            fontFamily: item.isselected ? FONTS.robotMedium : FONTS.robotRegular
                                        }}
                                    >
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                            )
                        })
                    }

                </View>
            </ScrollView>

            <TouchableOpacity style={[CategoryStyle.continueButton,{backgroundColor:themeColor.headerColor}]}>
                <Text style={CategoryStyle.continueText}>{Label.Continue}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Category

