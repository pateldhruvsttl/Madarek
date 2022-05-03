import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { AppUtil } from '../../utils/AppUtil'
import { buttonBorderRadius } from '../../utils/Constant'
import { GetAppColor } from '../../utils/Colors'
import FONTS from '../../utils/Fonts'

const SettingStyle = StyleSheet.create({
    btnView:{
        height:AppUtil.getHP(8),
        marginHorizontal:AppUtil.getWP(5),
        borderRadius:buttonBorderRadius,
        backgroundColor:GetAppColor.white,
        shadowOpacity:0.2,
        shadowColor:GetAppColor.borderGray,
        marginTop:AppUtil.getHP(1.5),
        alignItems:'center',
        justifyContent: 'space-between',
        flexDirection:'row',
        padding:AppUtil.getHP(2)
    },
    iconTextView:{
        flexDirection:'row',
        alignItems:'center',
         justifyContent: 'center',
    },
    subTitleText:{
        fontFamily:FONTS.robotMedium,
        fontSize:AppUtil.getHP(1.8),
        color:GetAppColor.pincolor,
        marginStart:AppUtil.getWP(2.5),
    },
    topMargin:{
        marginTop:AppUtil.getHP(3),
    },
    radioBtnView:{
        flexDirection:'row',
        alignItems:"center"
    },
    yellowBorderView:{
        height:AppUtil.getHP(2.5),
        width:AppUtil.getHP(2.5),
        borderRadius:AppUtil.getHP(2.50/2),
        borderColor:GetAppColor.catBorder,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        //  marginBottom:AppUtil.getHP(0.5),
    },
    grayBorderView:{
        height:AppUtil.getHP(2.3),
        width:AppUtil.getHP(2.3),
        borderRadius:AppUtil.getHP(2.3/2),
        borderColor:GetAppColor.grayBorder,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        //  marginBottom:AppUtil.getHP(0.5),
    },
    yellowFillView:{
        height:AppUtil.getHP(1.6),
        width:AppUtil.getHP(1.6),
        borderRadius:AppUtil.getHP(1.6/2),
        
        alignItems:'center',
        justifyContent:'center'
    },
    userTypeText:{
        fontFamily:FONTS.robotRegular,
        fontSize:AppUtil.getHP(1.84),
        color:GetAppColor.textColor,
        marginStart:AppUtil.getWP(1)
        //  marginTop:AppUtil.getHP(1),
    },
    radioBtn:{ alignItems: 'center', flexDirection:'row', justifyContent:'center', marginEnd:AppUtil.getWP(1.5) },
    offText:{
        color:GetAppColor.grayBorder,
        fontFamily:FONTS.robotRegular,
        fontSize:AppUtil.getHP(1.4),
    },
    settingScrollViewStyle:{
        height:'100%',
        width:'100%'
    }
})

export default SettingStyle