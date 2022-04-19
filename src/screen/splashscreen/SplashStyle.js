import { StyleSheet } from "react-native";
import { AppUtil } from "../../utils/AppUtil";
import { GetAppColor } from "../../utils/Colors";
import FONTS from "../../utils/Fonts";

const STYLES = StyleSheet.create({
    backgroundImage: {
        justifyContent: 'center',
        flex: 1
    },
    madarekSplace: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 35
    },
    logoDetails: {
        flexDirection: 'row',
        marginBottom: 12,
        marginTop: 12

    },
    logoText: {
        fontSize: 35,
        letterSpacing: 10,
        fontFamily: FONTS.trajanProRegular,
        color: GetAppColor.splashLogoColor
    },
    innovationDetails: {
        marginHorizontal: 15,
        flexDirection: 'column',
    },
    innovationDetailsText: {
        fontSize: AppUtil.getWP(4),
        color: GetAppColor.innovationGrey,
        fontFamily: FONTS.robotRegular,
        textAlign: 'center'
    },
    splaceArea: {
        alignItems: 'center',
        flex: 1
    },
    splashImageArea: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        paddingTop: AppUtil.getHP(4),
    },
    splashHeader: {
        paddingTop: AppUtil.getHP(9),
        alignItems: 'center',
    },
    selectText: {
        color: GetAppColor.pincolor,
        fontFamily: FONTS.robotMedium,
        flex: 1
    },
    upArrowIcon: {
        flex: 1,
        alignItems: 'flex-end',
        paddingEnd: 10,
    },

    itemPicker: {
        marginStart: AppUtil.getWP(8),
        fontFamily: FONTS.robotMedium,
    },
    container: {
        borderBottomColor: GetAppColor.disableBorder, borderBottomWidth: 1.5,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    langIcon: {
        flex: 0.2, alignItems: 'center',
    },
    selections: {
        borderBottomColor: GetAppColor.borderGray, borderBottomWidth: 1,
        paddingVertical: 20,
        backgroundColor: GetAppColor.white,
    },
    dropDown: {
        marginBottom: AppUtil.getHP(1),
        backgroundColor: GetAppColor.grayShadeBorder,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
        position: 'absolute',
        bottom: AppUtil.getHP(6),
        width: '90%',
        zIndex: 9,
        right: AppUtil.getWP(6),

    },
    splashView: {
        flex: 1, width: '100%'
    },
    bottomMenu: {
        backgroundColor: GetAppColor.white, paddingBottom: 10,
        paddingBottom: AppUtil.getHP(1.8),
    },
    content: {
        color: GetAppColor.commonBorderGrey,
        paddingStart: AppUtil.getWP(6),
        paddingTop: AppUtil.getHP(1.5),
    },
    subMenuButton: {
        marginHorizontal: AppUtil.getWP(10),
        height: AppUtil.getHP(5),
        flexDirection: 'row', alignItems: 'center',
    },
    menuText: {
        fontSize: AppUtil.getHP(2), color: GetAppColor.pincolor,
        marginStart: AppUtil.getWP(1),
    },

    greyLine: {
        marginHorizontal: AppUtil.getWP(4),
        borderBottomColor: GetAppColor.borderGray, borderBottomWidth: 1,
    },

})
export default STYLES;