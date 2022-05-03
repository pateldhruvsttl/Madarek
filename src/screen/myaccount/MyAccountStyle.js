import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { AppUtil } from '../../utils/AppUtil'
import { buttonBorderRadius, buttonFontSize, buttonHeight, inputFieldHight } from '../../utils/Constant'
import { GetAppColor } from '../../utils/Colors'
import FONTS from '../../utils/Fonts'

const MyAccountStyle = StyleSheet.create({
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
    subbTitleText:{
        fontFamily:FONTS.robotMedium,
        fontSize:AppUtil.getHP(1.8),
        color:GetAppColor.pincolor,
        marginStart:AppUtil.getWP(2.5),
    },
    topMargin:{
        marginTop:AppUtil.getHP(3),
    },

    // User Profile view.

    cornerView:{
        borderRadius:10,
        backgroundColor:GetAppColor.white,
        shadowColor:GetAppColor.grayBorder,
        shadowOpacity:0.2,
        elevation:5,
        paddingHorizontal:AppUtil.getWP(2.5),
        paddingVertical:AppUtil.getHP(2.5),
        marginHorizontal:AppUtil.getWP(2.5),
        marginVertical:AppUtil.getHP(7),
        marginTop:AppUtil.getHP(10),
        

    },
    userImage:{
        height:AppUtil.getHP(14),
        width:AppUtil.getHP(14),
        borderRadius:AppUtil.getHP(7),
         backgroundColor:'red', 
          alignSelf:'center',
          marginTop:AppUtil.getHP(-9)
    },
    titleText:{
        color:GetAppColor.grayBorder,
        fontSize:AppUtil.getHP(1.5),
        fontFamily:FONTS.robotRegular,
        marginTop:AppUtil.getHP(3),
    },
    subTitleText:{
        color:GetAppColor.pincolor,
        fontSize:AppUtil.getHP(2),
        fontFamily:FONTS.robotRegular,
        marginTop:AppUtil.getHP(0.7),
    },
    flexView:{
        flexDirection:'row'
    },
    partView:{
        width:'50%',
    },
    scrollSubView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop:AppUtil.getHP(1)
    },
    catView:{
        marginEnd:AppUtil.getWP(2),
        marginVertical:AppUtil.getHP(0.40),
        borderRadius:10,
        borderWidth:1,
        borderColor:GetAppColor.borderGray
    },
    catText:{
        fontSize:AppUtil.getHP(2),
        fontFamily:FONTS.robotRegular,
        marginHorizontal:AppUtil.getHP(2),
        marginVertical:AppUtil.getHP(1)
    },

       // Edit User Profile view.

       imageView:{
         marginTop:AppUtil.getHP(2),
        alignSelf:'center',

       },
       userEditImage:{
        height:AppUtil.getHP(18),
        width:AppUtil.getHP(18),
        borderWidth:5,
        borderColor:GetAppColor.white,
        borderRadius:AppUtil.getHP(9),
        backgroundColor:'red', 
    },
    cameraIconBtn:{
        height:AppUtil.getHP(5),
        width:AppUtil.getHP(5),
        borderRadius:AppUtil.getHP(2.5),
        // backgroundColor:GetAppColor.catBorder,
        position:'absolute',
        bottom:0,
        end:0,
        alignItems:'center',
        justifyContent: 'center',
    },

    contentView:{
        paddingHorizontal:AppUtil.getWP(2.5),
    },
    input:{
        borderBottomWidth:1,
        borderBottomColor:GetAppColor.editProfBorder,
        height:AppUtil.getHP(4),
        fontFamily:FONTS.robotMedium,
        fontSize:AppUtil.getHP(1.8),
        padding:0,
        color:GetAppColor.pincolor
    },
    editPartView:{
        width:'45%',
    },
    editFlexView:{
       flexDirection:'row',
       justifyContent:'space-between'
    },
    submitButton: {
        width: '100%',
        height: buttonHeight,
        backgroundColor: GetAppColor.headerYellow,
        borderRadius: buttonBorderRadius,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: AppUtil.getHP(2.5),
         marginBottom:AppUtil.getHP(1.5)
    },
    submitText:{ color: GetAppColor.white, fontFamily:FONTS.robotMedium, fontSize:buttonFontSize },
    catView1:{
        marginEnd:AppUtil.getWP(2),
        marginVertical:AppUtil.getHP(0.40),
        borderRadius:5,
        borderWidth:1,
        borderColor:GetAppColor.borderGray,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:AppUtil.getHP(1),
        backgroundColor:GetAppColor.white
    },
    catText1:{
        fontSize:AppUtil.getHP(2),
        fontFamily:FONTS.robotRegular,
        marginEnd:AppUtil.getHP(1),
        marginVertical:AppUtil.getHP(1),
        color:GetAppColor.textColor
    },
    addMoreButton:{
        width:AppUtil.getWP(30),
        height:AppUtil.getHP(4),
        borderRadius:AppUtil.getHP(2),
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:GetAppColor.catBorder,
         marginTop:AppUtil.getHP(1)
    },
    addMoreText:{
        color:GetAppColor.catBorder,
        fontFamily:FONTS.robotMedium,
        fontSize:AppUtil.getHP(1.8),
    },
    myAccountScrollStyle:{
        height:'100%',
        width:'100%'
    }
})
export default MyAccountStyle