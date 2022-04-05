import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { AppUtil } from '../../utils/AppUtil'
import { buttonBorderRadius } from '../../utils/Constant'
import { GetAppColor } from '../../utils/Colors'
import FONTS from '../../utils/Fonts'

const Sponsors = () => {

    const renderCell = () => {
        return (

            <TouchableOpacity style={styles.cellBtn}>
                <Image style={styles.cellImage} />
                <View style={styles.cellLine} />
                <Text style={styles.cellText}>Sultan Qaboos UniversitySultan </Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                style={{ alignSelf: 'center' }}
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                renderItem={renderCell}
                numColumns={2}
            />
        </View>
    )
}

export default Sponsors

const styles = StyleSheet.create({
    cellBtn: {
        height: AppUtil.getHP(17),
        width: AppUtil.getHP(19),
        borderRadius: buttonBorderRadius,
        backgroundColor: GetAppColor.white,
        shadowColor: GetAppColor.grayShadeBorder,
        shadowOpacity: 0.2,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    cellImage: {
        width: '80%',
        height: '50%',
        backgroundColor: 'red'
    },
    cellLine: {
        height: 1,
        width: '100%',
        backgroundColor: GetAppColor.borderGray,
        marginTop: AppUtil.getHP(1),
    },
    cellText: {
        fontFamily: FONTS.robotRegular,
        fontSize: AppUtil.getHP(1.4),
        marginTop: AppUtil.getHP(1),
        color:GetAppColor.pincolor,
        textAlign:'center'
    }
})