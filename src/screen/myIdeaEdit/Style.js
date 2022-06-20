import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { AppUtil } from '../../utils/AppUtil'
import { GetAppColor } from '../../utils/Colors'
import FONTS from '../../utils/Fonts'
import { buttonHeight } from '../../utils/Constant';
const Style = StyleSheet.create({


    btnView1: {
        width: AppUtil.getWP(30), height: AppUtil.getHP(12),
        justifyContent: 'center', alignItems: 'center',
        marginHorizontal: "1%", marginVertical: '1%',
        borderRadius: 5, borderWidth: 1.5
    },
    btnView2: {
        width: AppUtil.getWP(30), height: AppUtil.getHP(12),
        justifyContent: 'center', alignItems: 'center',
        marginHorizontal: "1%", marginVertical: '1%',
        borderRadius: 5, borderWidth: 1.5, backgroundColor: GetAppColor.lightGreyColor, borderColor: GetAppColor.lightGreyColor
    },

    FlatListStyle: { paddingHorizontal: AppUtil.getWP(2) },
    bgImage: { width: '100%', height: "100%", borderRadius: AppUtil.getHP(2) },

    txtIdeaCoverImage: {
        color: GetAppColor.pincolor,
        fontFamily: FONTS.robotMedium,
        fontSize: AppUtil.getHP(2.1), marginHorizontal: AppUtil.getWP(2), marginVertical: '2%',
    },
    txtIdeaCover: {
        color: GetAppColor.grayBorder,
        fontFamily: FONTS.robotMedium,
        fontSize: AppUtil.getHP(1.3), marginHorizontal: AppUtil.getWP(2), marginVertical: '2%',
    },

    btnAdd1: { marginBottom: AppUtil.getHP(0.5), fontSize: AppUtil.getHP(2.5) },
    btnAdd2: { marginHorizontal: AppUtil.getHP(1), fontSize: AppUtil.getHP(1.5) },

    txt1: {
        color: GetAppColor.pincolor,
        fontFamily: FONTS.robotMedium,
        fontSize: AppUtil.getHP(2.1), marginHorizontal: AppUtil.getWP(2), marginTop: AppUtil.getHP(2.5)
    },
    txt2: {
        color: GetAppColor.acedemyRedtitle,
        fontFamily: FONTS.robotMedium,
        fontSize: AppUtil.getHP(3.1), marginHorizontal: AppUtil.getWP(2), marginVertical: '2%',
    },

    line: { width: "95%", marginHorizontal: "1%", alignSelf: "center", borderWidth: 0.5, borderColor: GetAppColor.grayBorder, },

    dateStyle1: { flexDirection: 'row', marginHorizontal: "2%", justifyContent: 'space-between', },
    dateStyle2: { flexDirection: 'row', paddingVertical: AppUtil.getHP(2), },

    secondCalView: { alignItems: 'center', flexDirection: 'row', marginTop: AppUtil.getHP(1), justifyContent: 'flex-end' },
    secondInnerCalView: { flexDirection: 'row', marginEnd: AppUtil.getHP(2), alignItems: 'center', },
    callIcn: { marginEnd: AppUtil.getHP(1) },

    title: {
        fontSize: AppUtil.getHP(1.8),
        fontFamily: FONTS.robotMedium,
        color: GetAppColor.catBorder,

    },
    txtTitle: {
        fontSize: AppUtil.getHP(1.8), fontFamily: FONTS.robotMedium, color: GetAppColor.catBorder, color: GetAppColor.pincolor, marginHorizontal: '2%'
    },

    selectorSty: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: '1%', marginTop: AppUtil.getHP(1) },

    innerView1: { width: '100%', marginTop: AppUtil.getHP(2), justifyContent: 'center', paddingHorizontal: "2%" },
    txtTitle1: { fontSize: AppUtil.getHP(1.5), color: GetAppColor.textColor, fontFamily: FONTS.robotRegular },


    selectMenuTitle1: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: "flex-end",
        borderBottomWidth: 1, borderBottomColor: GetAppColor.btnBorderColor,
    },
    headerLeftIcn: { marginBottom: "2%" },
    txtDrowerTitle: {
        fontSize: AppUtil.getHP(1.8), marginBottom: AppUtil.getHP(1), fontFamily: FONTS.robotLight,
        color: GetAppColor.pincolor
    },

    butView: { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingVertical: AppUtil.getHP(2) },
    txtMaturation: { fontSize: AppUtil.getHP(1.9), color: GetAppColor.profileYellowBorder, fontFamily: FONTS.robotMedium },
    btnMaturation1: { backgroundColor: GetAppColor.lightblac, width: "41%", height: AppUtil.getHP(5), alignItems: "center", justifyContent: "center", },
    btnMaturation2: { backgroundColor: GetAppColor.lightblac, width: "15.2%", height: AppUtil.getHP(5), marginStart: AppUtil.getWP(2), borderRadius: 4, alignItems: "center", justifyContent: 'center' },
    btnMaturation3: { backgroundColor: GetAppColor.lightblac, width: "15.2%", height: AppUtil.getHP(5), marginStart: AppUtil.getWP(2), borderRadius: 4, alignItems: "center", justifyContent: 'center' },
    btnMaturation4: { backgroundColor: GetAppColor.lightblac, width: "15.2%", height: AppUtil.getHP(5), marginStart: AppUtil.getWP(2), borderRadius: 4, alignItems: "center", justifyContent: 'center' },


    txtDescriptionView: { marginTop: 15, marginHorizontal: "3%", marginBottom: "5%" },
    txtDescription1: { fontSize: AppUtil.getHP(2.5), color: GetAppColor.pincolor, fontFamily: FONTS.robotMedium },
    txtDescription2: { fontSize: AppUtil.getHP(1.9), color: GetAppColor.pincolor, fontFamily: FONTS.robotRegular, marginTop: 7 },



    selectItemButtonView: {
        flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: AppUtil.getWP(3),
        paddingVertical: AppUtil.getWP(1), borderBottomWidth: 0.2,
        borderBottomColor: GetAppColor.borderColor
    },
    selectItemBtn: {
        backgroundColor: GetAppColor.white, marginEnd: AppUtil.getHP(.7),
        marginVertical: AppUtil.getHP(0.7), padding: AppUtil.getHP(0.7), borderColor: GetAppColor.pincolor, borderWidth: 0.4,
        borderRadius: AppUtil.getHP(0.7), flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
    },
    categoryLabel: { color: GetAppColor.pincolor, fontSize: AppUtil.getHP(1.6), fontFamily: FONTS.robotMedium },
    categoryLabel1: { color: GetAppColor.catBorder, fontSize: AppUtil.getHP(1.6), fontFamily: FONTS.robotMedium },

    btnAddMor: {
        width: "30%", height: 40,
        borderColor: GetAppColor.catBorder, marginEnd: AppUtil.getHP(.5), borderWidth: 2,
        marginVertical: AppUtil.getHP(0.7), marginHorizontal: "3%",
        borderRadius: AppUtil.getHP(50 / 2), justifyContent: 'center', alignItems: 'center'
    },
    txtvedioView: { marginTop: AppUtil.getHP(2), marginHorizontal: "3%", marginBottom: "3%" },
    FlatListStyle: { paddingHorizontal: AppUtil.getWP(2), marginBottom: "1%" },

    btnAddMore: {
        width: "20%", height: 30, borderColor: GetAppColor.catBorder, borderWidth: 2, marginHorizontal: "3%",
        borderRadius: AppUtil.getHP(40 / 2), justifyContent: 'center', alignItems: 'center'
    },
    btnView3: {
        width: '100%',
        marginTop: AppUtil.getHP(1),
        backgroundColor: GetAppColor.white,
        borderRadius: AppUtil.getHP(1),
        paddingHorizontal: "5%",
        paddingVertical: "3%",
        flexDirection: 'row',
        justifyContent: "space-between",

        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.10,
        shadowRadius: 4,
        elevation: 1,
    },

    btnAddMore1: {
        width: "30%", height: 30, borderColor: GetAppColor.catBorder, borderWidth: 2, marginHorizontal: "2%",
        borderRadius: AppUtil.getHP(40 / 2), justifyContent: 'center', alignItems: 'center'
    },

    imgChallengeListStyle: {
        width: AppUtil.getHP(18), height: AppUtil.getHP(18), borderRadius: AppUtil.getHP(18 / 2),
        borderColor: GetAppColor.white,
        borderWidth: AppUtil.getHP(0.8),
        marginHorizontal: AppUtil.getHP(1.8)
    },
    profileDetails: {
        alignItems: 'center'
    },
    removeIcnStyle: {
        position: "absolute",
        botom: AppUtil.getHP(3),
        left: AppUtil.getWP(9),

    },
    lisView: { paddingHorizontal: AppUtil.getWP(2), marginBottom: "5%" },

    userTypeButtonView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: AppUtil.getHP(0.6),
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    multiSelectYellowBorderView: {
        height: AppUtil.getHP(2),
        width: AppUtil.getHP(2),
        borderColor: GetAppColor.buttonGreenColor,
        backgroundColor: GetAppColor.buttonGreenColor,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: AppUtil.getHP(0.5),

    },

    multiSelectBorderView: {
        height: AppUtil.getHP(2),
        width: AppUtil.getHP(2),
        borderColor: GetAppColor.grayBorder,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: AppUtil.getHP(0.5),
    },
    userTypeText: {
        fontFamily: FONTS.robotRegular,
        fontSize: AppUtil.getHP(1.6),
        color: GetAppColor.pincolor,
        marginStart: AppUtil.getWP(2),
        marginBottom: AppUtil.getHP(.5)
    },

    btnView: { flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: AppUtil.getHP(1.5) },
    btnLearMore: {
        width: AppUtil.getWP(43), height: buttonHeight, borderWidth: AppUtil.getHP(0.2), borderRadius: AppUtil.getHP(0.5),
        justifyContent: 'center', alignItems: 'center'
    },
    btnApplyNow: { width: AppUtil.getWP(43), height: buttonHeight, borderRadius: AppUtil.getHP(0.5), justifyContent: 'center', alignItems: 'center' },
    txt:{fontSize:buttonFontSize, fontFamily:FONTS.robotMedium},




})


export default Style