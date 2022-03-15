import React, { memo, useState } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { useSelector } from 'react-redux'
import styles from "./UserDetailsStyle";
import { Label } from '../../utils/StringUtil'
import { AppUtil } from "../../utils/AppUtil";
import IcnInformationTechnology from "../../assets/svg/IcnInformationTechnology"


const UserDetails = (props) => {

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
                data={props.data}
                contentContainerStyle={{alignItems:'flex-start', justifyContent:'center'}}
                numColumns={'3'}
                scrollEnabled={false}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}
export default memo(UserDetails);






