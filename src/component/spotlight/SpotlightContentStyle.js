import { StyleSheet } from "react-native";
import { AppUtil } from "../../utils/AppUtil";
import { GetAppColor } from "../../utils/Colors";
import FONTS from "../../utils/Fonts";

const Style = StyleSheet.create({
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
        flex:1.5
    },
    category: {
        flexDirection: 'column',
        paddingStart: AppUtil.getWP(5),
        flex:2
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
        fontSize: AppUtil.getHP(2.4),
        fontFamily: FONTS.robotMedium,
        color: GetAppColor.borderRed
    }
})

export default Style