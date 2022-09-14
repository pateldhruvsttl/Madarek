import { StyleSheet } from "react-native";
import { AppUtil } from "../../utils/AppUtil";
import { GetAppColor } from "../../utils/Colors";
import FONTS from "../../utils/Fonts";

const STYLE = StyleSheet.create({
    MainView: {
        width: '100%',
        // flex: 1,
        height: '100%',
        backgroundColor: GetAppColor.white,
        paddingBottom: AppUtil.getHP(5)
    },
    iconContainer : {
       flexDirection:'row',
        alignItems:'center',
        // justifyContent:'center'
    },
    commentBox : {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginStart:AppUtil.getHP(1.8) 
    },
    callIcn: { marginEnd: AppUtil.getHP(0.8) },
    container: {
        height: '100%', width: '100%',
        backgroundColor: GetAppColor.lightGrey,
        paddingBottom: AppUtil.getHP(3)
    },
    img: { width: '100%', height: AppUtil.getHP(32), borderRadius: AppUtil.getHP(1), },
    imgcopy: { width:'100%', height: AppUtil.getHP(28), borderRadius: AppUtil.getHP(1),borderColor:GetAppColor.borderImgShadow,
    borderWidth:1 },

    imgStyle: {
        width: '100%', height: AppUtil.getHP(32),
        justifyContent: 'center', alignItems: 'center',
        // paddingHorizontal: AppUtil.getWP(5),
    },
    imgCopyStyle: {
        width: '100%', height: AppUtil.getHP(32),
        justifyContent: 'center', alignItems: 'center',
        paddingHorizontal: AppUtil.getWP(5),
    },
    mainView: {
        width: '100%',
        paddingHorizontal: AppUtil.getWP(5),
        marginTop: AppUtil.getHP(2),
        marginBottom:AppUtil.getHP(2),
    },
    calViewOne: {
        flexDirection: 'row',
        width:'100%'
    },
    calViewTwo : {
        flexDirection: 'row',
        marginTop: AppUtil.getHP(2)
    },
    sector: {
        flexDirection: 'column',
        borderRightWidth: AppUtil.getWP(0.3),
        borderRightColor: GetAppColor.grayShadeBorder,
        paddingEnd: AppUtil.getWP(5),
    },
    category: {
        flexDirection: 'column',
        paddingStart: AppUtil.getWP(5),
    },
    title: {
        fontSize: AppUtil.getHP(1.8),
        fontFamily: FONTS.robotRegular,
        color: GetAppColor.textColor
    },
    subTitle: {
        fontSize: AppUtil.getHP(1.8),
        fontFamily: FONTS.robotMedium,
        color: GetAppColor.borderRed
    },
    headings : {
        marginTop: AppUtil.getHP(2)
    },
    label : {
        fontSize: AppUtil.getHP(2.7),
        fontFamily: FONTS.robotMedium,
        color: GetAppColor.borderRed
    },
    contentBox: {
        marginTop: AppUtil.getHP(1),
    },
    description :{
        marginTop: AppUtil.getHP(2),
    },
    redLabel : {
        color : GetAppColor.borderRed
    },
    label : {
        fontSize: AppUtil.getHP(2.9),
        fontFamily: FONTS.robotMedium,
        color: GetAppColor.pincolor
    },
    icnTitle : {
        fontSize: AppUtil.getHP(1.8),
        fontFamily: FONTS.robotMedium,
        color: GetAppColor.pincolor,
        paddingStart: AppUtil.getWP(1),
    },
    dateAuthor : {
        fontSize: AppUtil.getHP(2),
        fontFamily: FONTS.robotMedium,
        color: GetAppColor.pincolor,
        marginTop: AppUtil.getHP(1),
        marginBottom: AppUtil.getHP(1),
    },
    icnView : {
        flexDirection:'row',
        alignItems:'center',
        marginTop: AppUtil.getHP(1),
        marginBottom: AppUtil.getHP(1),
    },
    heading: {
        color: GetAppColor.pincolor,
        fontFamily: FONTS.robotBold,
        fontSize: AppUtil.getHP(2.2),
        textAlign: 'left',
        marginBottom: AppUtil.getHP(1),
        
    },
    line :{
        backgroundColor:GetAppColor.borderRed,
        padding:AppUtil.getWP(0.4),
        width:AppUtil.getWP(18),
        borderRadius:3
    },
    detailView : {
        width:'100%',
        paddingHorizontal: AppUtil.getWP(5),
        marginTop: AppUtil.getHP(2),
        marginBottom:AppUtil.getHP(2),
        backgroundColor:GetAppColor.lightGrey
    }
})
export default STYLE;