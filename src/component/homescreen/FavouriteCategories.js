import React, { memo, useState } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { useSelector } from 'react-redux'
import styles from "./FavouriteCategoriesStyle";
import { Label } from '../../utils/StringUtil'
import { AppUtil } from "../../utils/AppUtil";
import IcnInformationTechnology from "../../assets/svg/IcnInformationTechnology"


const FavouriteCategories = ({ Entries }) => {

    const { themeColor } = useSelector((state) => state)
   
    const renderItem = ({ item }) => {

        return (
            <TouchableOpacity style={styles.btnView}>
                <IcnInformationTechnology height={AppUtil.getHP(3.6)} width={AppUtil.getHP(3.6)} />
                <Text style={styles.txtBtn}>{Label.informationTechnology}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.MainView}>
            <View style={styles.titleView}>
                <Text style={[styles.txtTitle, { color: themeColor.buttonColor }] }>{Label.favouriteCategories}</Text>
                <Text style={styles.txtSeeMore}> {Label.viewAll}</Text>
            </View>

            <FlatList
                data={testData.slice(0, 6)}
                contentContainerStyle={{alignItems:'flex-end'}}
                numColumns={'3'}
                scrollEnabled={false}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

            {/* <View style={styles.innerView1}>
                <TouchableOpacity style={styles.btnView}>
                    <IcnInformationTechnology height={AppUtil.getHP(3.6)} width={AppUtil.getHP(3.6)} />
                    <Text style={styles.txtBtn}>{Label.informationTechnology}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnView}>
                    <IcnAviation height={AppUtil.getHP(3.6)} width={AppUtil.getHP(3.6)} />
                    <Text style={styles.txtBtn}>{Label.aviation}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnView}>
                    <IcnAgricultureFisheriesy height={AppUtil.getHP(3.6)} width={AppUtil.getHP(3.6)} />
                    <Text style={styles.txtBtn}>{Label.agricultureFisheriesy}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.innerView2}>
                <TouchableOpacity style={styles.btnView}>
                    <IcnHealth height={AppUtil.getHP(3.6)} width={AppUtil.getHP(3.6)} />
                    <Text style={styles.txtBtn} >{Label.health}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnView}>
                    <IcnEducation height={AppUtil.getHP(3.6)} width={AppUtil.getHP(3.6)} />
                    <Text style={styles.txtBtn}>{Label.education}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnView}>
                    <IcnConstructionInfrastructure height={AppUtil.getHP(3.6)} width={AppUtil.getHP(3.6)} />
                    <Text style={styles.txtBtn}>{Label.constructionInfrastructure}</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    );
}
export default memo(FavouriteCategories);





const testData = [
    {
        title: 'Favourites landscapes 1',
    },
    {
        title: 'Favourites landscapes 2',
    },
    {
        title: 'Favourites landscapes 3',
    },
    {
        title: 'Favourites landscapes 4',
    },
    {
        title: 'Favourites landscapes 5',
    },
    {
        title: 'Favourites landscapes 6',
    },
    {
        title: 'Favourites landscapes 6',
    }
];
