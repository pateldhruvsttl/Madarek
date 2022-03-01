import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
// import Colors from "../../utils/Colors",
import { GetAppColor } from "../../utils/Colors";

const PAGESTYLE = StyleSheet.create({
    mainView: {
        backgroundColor:GetAppColor.lightGrey,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%', width: '100%'
    },
    headingMain: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    headingMainText: {
        fontSize: 25,
    },
    signView: {
        backgroundColor: GetAppColor.lightWhite,
        borderRadius: 20,
        paddingHorizontal: 25,
        paddingVertical: 10,
        shadowColor:GetAppColor.commonBorderGrey,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.9,
        shadowRadius: 3,
    },
    signText: {
        color: GetAppColor.lightOrange,
        fontWeight: '600',
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
    loginCredential: {
        padding: 6,
        // backgroundColor:'red'
        flex:1,
        justifyContent:"center",
        alignItems:'center',
       borderTopEndRadius:20,
       borderBottomEndRadius:20
    },
    emailCredential: {
        backgroundColor:GetAppColor.disableGrey
    },
    mobileLoginText: {
        fontWeight: '600',
        fontSize: 18,
        color:GetAppColor.black,
    },
    emailLoginText: {
        fontWeight: '600',
        fontSize: 18,
        color:GetAppColor.commonBorderGrey
    },
    middleLine: {
        borderWidth: 1,
        borderColor:  GetAppColor.disableBorder
    },
    numberArea: {
        flexDirection: 'row',
        marginVertical: 25
    },
    toggleNumber : {
        justifyContent: 'center', width: 70
    },
    numberAreaOne: {
        borderWidth: 1,
        borderColor:GetAppColor.disableBorder,
        borderRadius: 5,
        padding: 8,
        marginEnd: 5,
    },
    backIcon:{
        position:'absolute',
        right:10,
    },
    showEmailDetail: {
        borderWidth: 1,
        borderColor:  GetAppColor.disableBorder,
        borderRadius: 5,
        padding: 8,
        width: '100%',
        paddingStart:15
    },
    showMobileDetail : {
        borderWidth: 1,
        borderColor:  GetAppColor.disableBorder,
        borderRadius: 5,
        padding: 8,
        width: '77%',
        paddingStart:15
    },
    
    otpArea: {
        flexDirection: 'row',
        marginBottom: 15

    },
    getOtpArea: {
        right: 0, position: 'absolute',
        backgroundColor:GetAppColor.lightOrange,
        borderRadius: 5,
        paddingHorizontal: 8,
        paddingVertical: 2

    }, getOtpText: {
        color: GetAppColor.white,
        fontWeight:'600'
    },
    addOtp: {
        fontSize: 16
    },
    resendOtpArea: {
        flexDirection: 'row',
        marginVertical: 10
    },
    otpSquareArea: {
        flexDirection: 'row',
        marginBottom: 10
    },
    showPassword: {
        width: '100%',
        height: 45,
        borderColor:GetAppColor.disableBorder,
        borderWidth: 1,
        borderRadius: 5
    },
    resendText: {
        fontWeight: '600',
        color:GetAppColor.black,
        fontSize: 13
    },
    resendTextFirst: {
        fontSize: 13,

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
        backgroundColor:GetAppColor.lightOrange,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    SignInbuttonText: {
        color: GetAppColor.white,
        fontSize: 20,
        fontWeight: '700'
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
        color: GetAppColor.black
    },
    continueArea: {
        marginTop: 50
    },
    squreBox: {
        height: 43,
        width: 43,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        margin: 5,
        borderColor:GetAppColor.disableBorder,
        opacity:1
    },
    usePassword: {
        fontWeight: '600',
        color:GetAppColor.black
    }

})

export default PAGESTYLE