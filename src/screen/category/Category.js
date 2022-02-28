import { View, Text, StatusBar, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { GetAppColor } from '../../utils/Colors'
import { GetIcon, GetImage } from '../../utils/Assets'

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
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Select Category</Text>
                <TouchableOpacity style={styles.skipBtn}>
                    <Text style={styles.skipText}>SKIP</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.searchView}>
                <TextInput
                    placeholder='What do you prefer to see?'
                    style={styles.input}
                    onChangeText={(txt) => onWriteText(txt)}
                />

                <TouchableOpacity>
                    <Image style={{ width: 25, height: 25 }} source={GetIcon.searchIcon} />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.scroll}>
                <View style={styles.scrollSubView}>
                    {
                        categories.map((item, index) => {
                            return (
                                <TouchableOpacity onPress={() => onPressCategory(index)} style={[styles.categoryButton, { borderColor: item.isselected ? GetAppColor.borderRed : GetAppColor.borderGray, }]}>
                                    <Text style={{ color: item.isselected ? GetAppColor.categoryTextSelected : GetAppColor.categoryText, fontSize: 17 }}>{item.name}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }

                </View>
            </ScrollView>

            <TouchableOpacity style={styles.continueButton}>
                <Text style={{ color: GetAppColor.white, fontWeight: '700' }}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Category

const styles = StyleSheet.create({
    headerView: {
        width: '100%',
        height: 60,
        backgroundColor: GetAppColor.headerYellow,
        justifyContent: 'center',
    },
    headerText: {
        color: GetAppColor.white,
        fontWeight: '900',
        fontSize: 17,
        alignSelf: 'center'
    },
    skipBtn: {
        position: 'absolute',
        end: 10,
        alignSelf: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: GetAppColor.skipBorderColor,
        height: 25,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    skipText: {
        color: GetAppColor.white,
        fontSize: 15,
        fontWeight: '300',
    },
    searchView: { paddingHorizontal: 25, paddingVertical: 15, marginTop: 15, marginBottom: 15, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' },
    scroll: { width: '100%', height: '69%', backgroundColor: GetAppColor.backGround },
    scrollSubView: { paddingHorizontal: 15, flexDirection: 'row', flexWrap: 'wrap', },
    categoryButton: { borderRadius: 25, backgroundColor: GetAppColor.white, borderWidth: 1, paddingHorizontal: 20, paddingVertical: 10, margin: 5 },
    continueButton: { width: '90.74%', height: '4.35%', backgroundColor: GetAppColor.headerYellow, borderRadius: 5, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 5 },
    input: { width: '70%', fontSize: 20, paddingBottom: 15, borderBottomColor: GetAppColor.borderGray, borderBottomWidth: 1 },
}) 