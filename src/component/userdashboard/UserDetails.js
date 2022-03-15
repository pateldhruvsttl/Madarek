import React, { memo, useState } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { useSelector } from 'react-redux'
import styles from "./UserDetailsStyle";
import { Label } from '../../utils/StringUtil'
import { AppUtil } from "../../utils/AppUtil";
import IcnInformationTechnology from "../../assets/svg/IcnInformationTechnology"


const UserDetails = ({ Entries }) => {

    const { themeColor } = useSelector((state) => state)
   
    const renderItem = ({ item }) => {

        return (
            <TouchableOpacity style={[styles.btnView,{borderColor:themeColor.buttonColor}]}>
               <Text style={[styles.txtTitle, {color:themeColor.buttonColor}]}>{item.no}</Text>
                <Text style={styles.txtBtn}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.MainView}>
            <FlatList
                data={testData.slice(0, 6)}
                contentContainerStyle={{alignItems:'flex-end'}}
                numColumns={'3'}
                scrollEnabled={false}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}
export default memo(UserDetails);





const testData = [
    {
        title: 'My Need SME Ideas',
        no:"04"
    },
    {
        title: 'My Favourite',
        no:"09"
    },
    {
        title: 'My Submitted Ideas',
        no:"21"
    },
    {
        title: 'Favourite Challenges',
        no:"08"
    },
    {
        title: 'Challenge Participation',
        no:"11"
    },
    {
        title: 'Connected Experts',
        no:"08"
    }
];
