import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
// import Colors from "../../utils/Colors",
import { GetAppColor } from "../../utils/Colors";
import FONTS from "../../utils/Fonts"

const PAGESTYLE = StyleSheet.create({
    mainView: {
        backgroundColor: GetAppColor.lightGrey,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%', width: '100%'
    },
    headingMain: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerPart : {
        width: '100%',
         paddingHorizontal: 15 
    },
    headingMainText: {
        fontSize: 25,
    },
    signView: {
        backgroundColor: GetAppColor.lightWhite,
        borderRadius: 20,
        paddingHorizontal: 25,
        paddingVertical: 10,
        shadowColor: GetAppColor.commonBorderGrey,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        
        elevation: 11,
    },
    signText: {
        color: GetAppColor.lightOrange,
        fontFamily: FONTS.robotMedium,
        fontSize: 25
    },
    userInformation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderColor: GetAppColor.disableBorder,
        borderRadius: 20,
        // padding:5,
        marginTop: 10
    },
    loginEmailCredential: {
        padding: 6,
        // backgroundColor:'red'
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        borderTopEndRadius: 20,
        borderBottomEndRadius: 20
    },
    loginMobileCredential: {
        padding: 6,
        // backgroundColor:'red'
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        borderTopStartRadius: 20,
        borderBottomStartRadius: 20
    },
    emailCredential: {
        backgroundColor: GetAppColor.disableGrey
    },
    mobileLoginText: {
        fontFamily: FONTS.robotMedium,
        fontSize: 18,
        // color: GetAppColor.black,
    },
    emailLoginText: {
        fontFamily: FONTS.robotRegular,
        fontSize: 18,
        // color: GetAppColor.commonBorderGrey
    },
    isEnableText: {
        color: GetAppColor.black,
        fontFamily: FONTS.robotMedium,
        fontSize: 18,
    },
    isDisableText: {
        color: GetAppColor.commonBorderGrey,
        fontFamily: FONTS.robotRegular,
        fontSize: 18,
    },
    middleLine: {
        borderWidth: 1,
        borderColor: GetAppColor.disableBorder
    },
    numberArea: {
        flexDirection: 'row',
        marginTop: 25,
        marginBottom: 10
    },
    toggleNumber: {
        justifyContent: 'center', width: 70
    },
    numberAreaOne: {
        borderWidth: 1,
        borderColor: GetAppColor.disableBorder,
        borderRadius: 5,
        padding: 8,
        marginEnd: 5,
        fontFamily: FONTS.robotRegular,
        width: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    codePickerArea: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    backIcon: {
        position: 'absolute',
        right: 10,
    },
    showEmailDetail: {
        borderWidth: 1,
        borderColor: GetAppColor.disableBorder,
        borderRadius: 5,
        padding: 8,
        width: '100%',
        paddingStart: 15
    },
    showMobileDetail: {
        borderWidth: 1,
        borderColor: GetAppColor.disableBorder,
        borderRadius: 5,
        padding: 8,
        // width: '100%',
        flex:1,
        paddingStart: 15,
        fontFamily: FONTS.robotRegular
    },
    otpArea: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 5

    },
    getOtpArea: {
        right: 0, position: 'absolute',
        backgroundColor: GetAppColor.lightOrange,
        borderRadius: 5,
        paddingHorizontal: 8,
        paddingVertical: 2

    }, getOtpText: {
        color: GetAppColor.white,
        fontWeight: '600'
    },
    addOtp: {
        fontSize: 16,
        fontFamily: FONTS.robotRegular
    },
    resendOtpArea: {
        flexDirection: 'row',
        marginVertical: 10
    },
    otpSquareArea: {
        flexDirection: 'row',
        marginBottom: 5
    },
    showPassword: {
        width: '100%',
        height: 45,
        borderColor: GetAppColor.disableBorder,
        borderWidth: 1,
        borderRadius: 5,
        paddingStart: 15
    },
    resendText: {
        fontFamily: FONTS.robotMedium,
        color: GetAppColor.black,
        fontSize: 13
    },
    resendTextFirst: {
        fontSize: 13,
        fontFamily: FONTS.robotMedium,

    },
    resendTextSecond: {
        fontSize: 13,
        fontWeight: '400',
        color: GetAppColor.black,
    },
    passwordView: {
        flexDirection: 'row',
        position: 'absolute',
        right: 0,
    },
    signInButton: {
        // backgroundColor: '#f9b52b',
        backgroundColor: GetAppColor.lightOrange,
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
    accountPart: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 15
    },
    signUptext: {
        fontWeight: '600',
        color: GetAppColor.black,
        fontFamily: FONTS.robotMedium,
    },
    reciveAccount: {
        fontFamily: FONTS.robotMedium,
    },
    continueArea: {
        marginTop: 50
    },
    squreBox: {
        flex:1,
        height:40,
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
    },
    usePassword: {
        color: GetAppColor.black,
        fontFamily: FONTS.robotMedium,
    },
    hidePascod: {
        position: 'absolute',
        right: 0
    }

})

export default PAGESTYLE