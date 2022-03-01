import { View, Text, StatusBar, SafeAreaView, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { GetAppColor } from '../../utils/Colors'
import { GetIcon, GetImage } from '../../utils/Assets'
import CategoryStyle from './CategoryStyle'
import { Label } from '../../utils/StringUtil'

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

    return (
        <View>
            <StatusBar barStyle="light-content" hidden={false} backgroundColor={GetAppColor.statusBarYellow} translucent={true} />
            <SafeAreaView backgroundColor={GetAppColor.statusBarYellow} />
            <View style={CategoryStyle.headerView}>
                <Text style={CategoryStyle.headerText}>{Label.CatTitle}</Text>
                <TouchableOpacity style={CategoryStyle.skipBtn}>
                    <Text style={CategoryStyle.skipText}>SKIP</Text>
                </TouchableOpacity>
            </View>

            <View style={CategoryStyle.searchView}>
                <TextInput
                    placeholder='What do you prefer to see?'
                    style={CategoryStyle.input}
                    onChangeText={(txt) => onWriteText(txt)}
                />

                <TouchableOpacity>
                    <Image style={{ width: 25, height: 25 }} source={GetIcon.searchIcon} />
                </TouchableOpacity>
            </View>
            <ScrollView style={CategoryStyle.scroll}>
                <View style={CategoryStyle.scrollSubView}>
                    {
                        categories.map((item, index) => {
                            return (
                                <TouchableOpacity onPress={() => onPressCategory(index)} style={[CategoryStyle.categoryButton, { borderColor: item.isselected ? GetAppColor.borderRed : GetAppColor.borderGray, }]}>
                                    <Text style={{ color: item.isselected ? GetAppColor.categoryTextSelected : GetAppColor.categoryText, fontSize: 17 }}>{item.name}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }

                </View>
            </ScrollView>

            <TouchableOpacity style={CategoryStyle.continueButton}>
                <Text style={{ color: GetAppColor.white, fontWeight: '700' }}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Category

