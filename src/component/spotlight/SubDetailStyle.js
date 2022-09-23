import { StyleSheet } from "react-native";
import { AppUtil } from "../../utils/AppUtil";
import FONTS from "../../utils/Fonts";
import { GetAppColor } from "../../utils/Colors";
import { buttonHeight } from "../../utils/Constant";
import { buttonBorderRadius } from "../../utils/Constant";

const Style = StyleSheet.create({
    contentBox: {
        marginTop: AppUtil.getHP(1),
    },
    description: {
        marginTop: AppUtil.getHP(1),
    },
    redLabel: {
        color: GetAppColor.pincolor,
        fontSize: AppUtil.getHP(2),
        fontFamily: FONTS.robotRegular,
        marginStart:AppUtil.getWP(1),
    },
    areaCover: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:AppUtil.getHP(1.5)

    },
    label: {
        fontSize: AppUtil.getHP(2.4),
        fontFamily: FONTS.robotMedium,
        color: GetAppColor.pincolor
    },
    icnTitle: {
        fontSize: AppUtil.getHP(1.8),
        fontFamily: FONTS.robotMedium,
        color: GetAppColor.pincolor,
        paddingStart: AppUtil.getWP(1),
    },
    dateAuthor: {
        fontSize: AppUtil.getHP(2),
        fontFamily: FONTS.robotMedium,
        color: GetAppColor.pincolor,
      marginStart:AppUtil.getWP(2),
        marginEnd:AppUtil.getWP(5),
    },
    icnView: {
        flexDirection: 'row',
        alignItems: 'center',
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
    line: {
        backgroundColor: GetAppColor.borderRed,
        padding: AppUtil.getWP(0.4),
        width: AppUtil.getWP(18),
        borderRadius: 3
    },
    detailView: {
        width: '100%',
        paddingHorizontal: AppUtil.getWP(5),
        marginTop: AppUtil.getHP(2),
        marginBottom: AppUtil.getHP(2),
        backgroundColor: GetAppColor.lightGrey
    },
    likeBtn: {
        height: buttonHeight,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: buttonBorderRadius,
        borderWidth: 1,
        marginTop: AppUtil.getHP(1.5),
        width: AppUtil.getWP(12),
        borderColor: GetAppColor.grayBorder,
        backgroundColor: GetAppColor.white,
        // marginStart: AppUtil.getHP(1),
        // right:5
    },
})

export default Style