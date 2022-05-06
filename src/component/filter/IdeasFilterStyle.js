import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';

const Style = StyleSheet.create({
    MainView: { flex: 1, marginVertical: '5%', backgroundColor: GetAppColor.white },
    headerView: {
        width: '100%', height: 50, flexDirection: 'row', justifyContent: 'space-between',
        alignItems: 'center', paddingHorizontal: AppUtil.getWP(3), backgroundColor: GetAppColor.lightWhite
    },
    txtTitle: { fontFamily: FONTS.robotMedium, fontSize: AppUtil.getHP(2.5) },
    bodyView: { paddingHorizontal: AppUtil.getWP(3), marginVertical: AppUtil.getWP(3) },
    txtSortBy: {
        fontFamily: FONTS.robotMedium,
        fontSize: AppUtil.getHP(1.9),
        color: GetAppColor.pincolor,
        marginVertical: AppUtil.getHP(.7)
    },

    userTypeButtonView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: AppUtil.getHP(0.6),
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    yellowBorderView: {
        height: AppUtil.getHP(2),
        width: AppUtil.getHP(2),
        borderRadius: AppUtil.getHP(2 / 2),
        borderColor: GetAppColor.headerYellow,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: AppUtil.getHP(0.5),
    },
    yellowFillView: {
        height: AppUtil.getHP(1.2),
        width: AppUtil.getHP(1.2),
        borderRadius: AppUtil.getHP(1.2 / 2),
        backgroundColor: GetAppColor.headerYellow,
        alignItems: 'center',
        justifyContent: 'center'
    },
    grayBorderView: {
        height: AppUtil.getHP(2),
        width: AppUtil.getHP(2),
        borderRadius: AppUtil.getHP(2 / 2),
        borderColor: GetAppColor.grayBorder,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: AppUtil.getHP(0.5),
    },
    userTypeText: {
        fontFamily: FONTS.robotRegular,
        fontSize: AppUtil.getHP(1.6),
        color: GetAppColor.pincolor,
        marginStart: AppUtil.getWP(2),
        marginBottom: AppUtil.getHP(.5)
    },

    buttonView: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: AppUtil.getWP(3), paddingVertical: AppUtil.getWP(3), backgroundColor: GetAppColor.lightWhite },
    btn: { borderWidth: 1, borderColor: GetAppColor.editProfBorder, marginEnd: AppUtil.getHP(.7), marginVertical: AppUtil.getHP(0.7), padding: AppUtil.getHP(0.7), borderRadius: AppUtil.getHP(0.7) },

    btnSelect: {
        borderWidth: 1, borderColor: GetAppColor.headerYellow, backgroundColor: GetAppColor.headerYellow, marginEnd: AppUtil.getHP(.7),
        marginVertical: AppUtil.getHP(0.7), padding: AppUtil.getHP(0.7), borderRadius: AppUtil.getHP(0.7)
    },

    categoryLabel: { color: GetAppColor.pincolor, fontSize: AppUtil.getHP(1.6), fontFamily: FONTS.robotRegular },
    selectCategoryLabel: { color: GetAppColor.white, fontSize: AppUtil.getHP(1.6), fontFamily: FONTS.robotRegular },

    menuButton: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: AppUtil.getWP(3), marginVertical: AppUtil.getWP(3) },
    multiButtonView: { paddingHorizontal: AppUtil.getWP(3) },

    multiSelectYellowBorderView: {
        height: AppUtil.getHP(2),
        width: AppUtil.getHP(2),
        borderColor: GetAppColor.buttonGreenColor,
        backgroundColor: GetAppColor.buttonGreenColor,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: AppUtil.getHP(0.5),

    },
    multiSelectBorderView: {
        height: AppUtil.getHP(2),
        width: AppUtil.getHP(2),
        borderColor: GetAppColor.grayBorder,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: AppUtil.getHP(0.5),
    },
    btnApply: {
        width: '100%', height: AppUtil.getHP(5), marginTop: AppUtil.getHP(15), position: 'absolute', bottom: 0,
        justifyContent: 'center', alignItems: 'center', backgroundColor: GetAppColor.headerYellow,
    },
    txtButton: { color: GetAppColor.white, fontSize: AppUtil.getHP(2), fontFamily: FONTS.robotMedium },


    selectItemButtonView: {
        flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: AppUtil.getWP(3),
        paddingVertical: AppUtil.getWP(3), backgroundColor: GetAppColor.white, borderBottomWidth: 0.2, borderBottomColor: GetAppColor.borderColor
    },
    selectItemBtn: {
        backgroundColor: GetAppColor.lightOrange1, marginEnd: AppUtil.getHP(.7),
        marginVertical: AppUtil.getHP(0.7), padding: AppUtil.getHP(0.7),
        borderRadius: AppUtil.getHP(0.7), flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
    },

    bottomBlacker: {
        width: '100%', height: AppUtil.getHP(6),}
    });

export default Style;