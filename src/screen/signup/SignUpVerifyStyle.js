import { Platform, StyleSheet } from "react-native";
import App from "../../../App";
import { AppUtil } from "../../utils/AppUtil";
import { GetAppColor } from "../../utils/Colors";
import FONTS from "../../utils/Fonts";
import { inputFieldHight } from "../../utils/Constant";

const verifyStyle = StyleSheet.create({
    headerView: {
        width: '100%',
        height: 60,
        backgroundColor: GetAppColor.headerLightYellow,
        justifyContent: 'center',
    },
    signHeaderView : {
        width: "100%", height: '100%' 
    },
    headerText: {
        color: GetAppColor.white,
        fontSize: AppUtil.getHP(3.07),
        alignSelf: 'center',
        fontFamily: FONTS.robotMedium
    },
    backButton: {
        position: 'absolute',
        start: 15,

    },
    headingTitle: {
        color:GetAppColor.headerLightYellow,
        fontFamily:FONTS.robotMedium,
        fontSize:AppUtil.getHP(2.7),
        textAlign:'center'
    },
    oneTimepin:{
        fontSize:15,
        textAlign: 'center',
        fontFamily:FONTS.robotRegular,
        color:GetAppColor.commonBorderGrey
    },
    oneTimePinDetail:{
        marginHorizontal:10,
        marginVertical:15
    },
    mainView: {
        backgroundColor: GetAppColor.lightGrey,
        paddingTop : AppUtil.getHP(4.07),
        alignItems: 'center',
        height: '100%', width: '100%',
        paddingHorizontal:15,
        marginBottom:20
    },
    signView: {
        backgroundColor: GetAppColor.lightWhite,
        borderRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 30,
        shadowColor: GetAppColor.commonBorderGrey,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        
        elevation: 11,
        width:'100%',
       

    },
    otpSquareArea: {
        flexDirection: 'row',
        marginBottom: 5
    },
    squreBox: {
        flex:1,
        height:inputFieldHight,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        margin: 5,
        borderColor: GetAppColor.disableBorder,
        opacity: 1,
        fontFamily: FONTS.robotMedium,
        fontSize: 20,
        textAlign: 'center',
        color:GetAppColor.black
    },
    resendOtpArea: {
        flexDirection: 'row',
        marginVertical: 13,
        alignItems:'center',
        justifyContent:'center'
    },
    resendTextSecond: {
        fontSize: 13,
        color: GetAppColor.black,
    },
    resendTextFirst: {
        fontSize: 14,
        fontFamily: FONTS.robotRegular,
        color:GetAppColor.commonBorderGrey

    },
    resendText: {
        fontFamily: FONTS.robotMedium,
        color: GetAppColor.pincolor,
        fontSize: 14
    },
    signInButton: {
        backgroundColor: GetAppColor.headerLightYellow,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    SignInbuttonText: {
        color: GetAppColor.white,
        fontSize: 20,
        fontFamily: FONTS.robotMedium,
    },
    bottomButtomArea: {
        marginVertical: 15,
    },

})
export default verifyStyle;