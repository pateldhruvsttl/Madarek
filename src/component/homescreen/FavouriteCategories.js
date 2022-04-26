import React, { memo, useState } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { useSelector } from 'react-redux'
import styles from "./FavouriteCategoriesStyle";
import { Label } from '../../utils/StringUtil'
import { AppUtil } from "../../utils/AppUtil";
import IcnInformationTechnology from "../../assets/svg/IcnInformationTechnology"


const FavouriteCategories = (props) => {
    console.log('props.data',props.data);
    const navigation = useNavigation();
    const { themeColor } = useSelector((state) => state)

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={[styles.btnView, { borderColor: themeColor.buttonColor }]} onPress={()=> navigation.navigate("ExpertDirectoryScreen")}>
                <IcnInformationTechnology fill={themeColor.buttonColor} height={AppUtil.getHP(3.6)} width={AppUtil.getHP(3.6)} />
                <Text style={styles.txtBtn}>{item.categoryName}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.MainView}>
            <View style={styles.titleView}>
                <Text style={[styles.txtTitle, { color: themeColor.buttonColor }]}>{Label.favouriteCategories}</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate("UserCategory")}}>
                    <Text style={styles.txtSeeMore}> {Label.viewAll}</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={props.data}
                contentContainerStyle={styles.lisView}
                numColumns={'3'}
                scrollEnabled={false}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

        </View>
    );
}
export default memo(FavouriteCategories);

