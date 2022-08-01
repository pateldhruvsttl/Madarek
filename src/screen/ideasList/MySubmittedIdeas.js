import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import CommonHeader from '../../component/commonheader/CommonHeader'
import AllIdeas from '../../component/homescreen/itemList/ViewMoreIdeas'
import Style from "./IdeasListStyle";
import IdeasFilter from '../../component/filter/IdeasFilter';


const MySubmittedIdeas = () => {

    const [isFilterVisible, setFilterVisible] = useState(false);
    const [isFilter, setFilter] = useState(false);

    return (
        <SafeAreaView style={Style.container}>
            <CommonHeader isType={"MySubmittedIdea"} onMenuClick={() => { props.navigation.openDrawer() }}
                onFilter={() => setFilterVisible(!isFilterVisible)} />

            <AllIdeas navigateDetail={() => props.navigation.navigate('IdeaDetails')}
                isMySubmitType={true} propName={{ type: "AllIdeas", data: sliderdata }} />
            <IdeasFilter type="SubmitIdea" visible={isFilterVisible} onClose={() => setFilterVisible(!isFilterVisible)} isFilter={isFilter} />
        </SafeAreaView>
    )
}

export default MySubmittedIdeas

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
    },

];