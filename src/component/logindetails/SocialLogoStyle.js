import { StyleSheet } from "react-native";
import { AppUtil } from "../../utils/AppUtil";
import { GetAppColor } from "../../utils/Colors";
import FONTS from "../../utils/Fonts";

const IconStyle = StyleSheet.create({
    iconsArea : {
        justifyContent: 'center', alignItems: 'center' ,
    },
    textTitle : {
        textAlign:'center',
        color : GetAppColor.commonTextColor,
        fontFamily: FONTS.robotRegular,
    },
    logoContainer : {
        flexDirection:'row',
        marginTop:AppUtil.getHP(1.5)
    },
    socialIconn : {
        paddingHorizontal:AppUtil.getWP(1),
    }
})

export default IconStyle;