import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { AppUtil } from '../../utils/AppUtil'
import { GetAppColor } from '../../utils/Colors'
import FONTS from '../../utils/Fonts'

const MessageStyle = StyleSheet.create({

    grayView: {
        height: AppUtil.getHP(5.5),
        backgroundColor: GetAppColor.disableGrey,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: AppUtil.getWP(4)
    },
    notiText: {
        color: GetAppColor.grayBorder,
        fontFamily: FONTS.robotBold,
        fontSize: AppUtil.getHP(1.5),

    },
    markText: {
        color: GetAppColor.pincolor,
        fontFamily: FONTS.robotMedium,
        fontSize: AppUtil.getHP(1.5),
        textDecorationLine: 'underline'
    },
    renderMainView: {
        width: AppUtil.getWP(100),
        padding: AppUtil.getWP(2),
        paddingVertical:AppUtil.getHP(2),
        borderRadius: AppUtil.getHP(1),
        backgroundColor: GetAppColor.white,
        flexDirection: 'row',
        alignSelf: 'center',
        borderBottomWidth: 0.8,
        borderBottomColor:GetAppColor.borderGray
    },

    rightItems: {
        width: AppUtil.getWP(18),
        alignItems: 'center',
    },
    img: {
        width: AppUtil.getHP(6),
        height: AppUtil.getHP(6),
        borderRadius: AppUtil.getHP(3),
        backgroundColor: 'gray'
    },
    leftItems: {
        width: AppUtil.getWP(65),
        marginStart: 6,
        marginTop: AppUtil.getHP(1),
    },

    title: {
        fontSize: AppUtil.getHP(1.8),
        fontFamily: FONTS.robotMedium,
        color: GetAppColor.catBorder,

    },

    subTitle: {
        fontSize: AppUtil.getHP(1.5),
        fontFamily: FONTS.robotRegular,
        color: GetAppColor.textColor,
        marginVertical: AppUtil.getHP(0.5)
    },
    calView: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    callIcn: {
        marginEnd: AppUtil.getHP(1)
    },


})


export default MessageStyle