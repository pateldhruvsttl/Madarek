import { StyleSheet } from "react-native";
import App from "../../../App";
import { AppUtil } from "../../utils/AppUtil";
import { GetAppColor } from "../../utils/Colors";
import FONTS from "../../utils/Fonts";

const SignupStyles=StyleSheet.create({
    headerView: {
        width: '100%',
        height: 60,
        backgroundColor: GetAppColor.headerYellow,
        justifyContent: 'center',
    },
    headerText: {
        color: GetAppColor.white,
        // fontWeight: '900',
        fontSize: AppUtil.getHP(3.07),
        alignSelf: 'center',
        fontFamily:FONTS.robotBold
    },
    backButton:{
        position:'absolute',
        start:10,
       
    },
    roundMainView:{
        marginHorizontal:AppUtil.getHP(2.5),
        marginVertical:AppUtil.getHP(2.5),
        backgroundColor:GetAppColor.white,
        borderRadius:25,
        width:AppUtil.getWP(90),
        height:AppUtil.getHP(80),
        padding:AppUtil.getWP(5)

    },
    userTypeText:{
        fontFamily:FONTS.robotRegular,
        fontSize:AppUtil.getHP(1.84),
        color:GetAppColor.textColor,
         marginTop:AppUtil.getHP(1),
    },
    userTypeButtonView:{
        flexDirection:'row',
        alignItems:'center',
         marginTop:AppUtil.getHP(1.5),
         justifyContent:'space-between'
    },
    yellowBorderView:{
        height:AppUtil.getHP(2.71),
        width:AppUtil.getHP(2.71),
        borderRadius:AppUtil.getHP(2.71/2),
        borderColor:GetAppColor.headerYellow,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
         marginBottom:AppUtil.getHP(0.5),
    },
    grayBorderView:{
        height:AppUtil.getHP(2.71),
        width:AppUtil.getHP(2.71),
        borderRadius:AppUtil.getHP(2.71/2),
        borderColor:GetAppColor.grayBorder,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
         marginBottom:AppUtil.getHP(0.5),
    },
    yellowFillView:{
        height:AppUtil.getHP(1.79),
        width:AppUtil.getHP(1.79),
        borderRadius:AppUtil.getHP(1.79/2),
        backgroundColor:GetAppColor.headerYellow,
        alignItems:'center',
        justifyContent:'center'
    },
    nameView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:AppUtil.getHP(3.17)
    },
    titleText:{
        fontFamily:FONTS.robotRegular,
        fontSize:AppUtil.getHP(1.84),
        color:GetAppColor.textColor,
        marginBottom:AppUtil.getHP(0.82)
    },
    inputstyle:{
        width:AppUtil.getWP(38),
        height:AppUtil.getHP(5.63),
        borderWidth:1,
        borderColor:GetAppColor.borderGray,
        borderRadius:5,
        padding:5

    },
    codeinputstyle:{
        width:AppUtil.getWP(18.52),
        height:AppUtil.getHP(5.63),
        borderWidth:1,
        borderColor:GetAppColor.borderGray,
        borderRadius:5,
        alignItems:'center', justifyContent:'space-between', flexDirection:'row', paddingHorizontal:AppUtil.getWP(2)
    },
    numberinputstyle:{
        width:AppUtil.getWP(59.41),
        height:AppUtil.getHP(5.63),
        borderWidth:1,
        borderColor:GetAppColor.borderGray,
        borderRadius:5,
        padding:5

    },
    signupButton: {
        width: '100%',
        height: AppUtil.getHP(6.14),
        backgroundColor: GetAppColor.headerYellow,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: AppUtil.getHP(2.5)
    },
    signupText:{ color: GetAppColor.white, fontFamily:FONTS.robotMedium, fontSize:AppUtil.getHP(2.66) },

    numberAreaOne: {
        borderWidth: 1,
        borderColor: GetAppColor.disableBorder,
        borderRadius: 5,
        padding: 8,
        marginEnd: 5,
        fontFamily: FONTS.robotRegular,
        width:AppUtil.getWP(18.52),
        height:AppUtil.getHP(5.63),
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
    
})
export default SignupStyles;