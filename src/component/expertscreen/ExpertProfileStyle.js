import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';
import { buttonBorderRadius } from '../../utils/Constant';
import { buttonFontSize } from '../../utils/Constant';
import { buttonHeight } from '../../utils/Constant';

const Style = StyleSheet.create({
    MainView: { width: '100%', flex: 1 },
    FirstView: { width: '100%', flex: 1, paddingBottom: AppUtil.getHP(3), backgroundColor: GetAppColor.lightWhite },

    renderProfileView: {
        width: AppUtil.getHP(24), height: AppUtil.getHP(24), borderRadius: AppUtil.getHP(24),
        justifyContent: 'center', alignItems: 'center', alignSelf: 'center'
    },

    profilePicView: { width: AppUtil.getHP(20), height: AppUtil.getHP(20), borderRadius: AppUtil.getHP(20), },

    expertIcnViewL: {
        width: AppUtil.getHP(5), height: AppUtil.getHP(5), borderRadius: AppUtil.getHP(5), end: AppUtil.getHP(2.5), bottom: AppUtil.getHP(2.5),
        justifyContent: 'center', alignItems: 'center', alignSelf: 'center', backgroundColor: 'blue', position: 'absolute'
    },

    txtNameView: { fontSize: AppUtil.getHP(3), fontFamily: FONTS.robotMedium, color: GetAppColor.pincolor, marginTop: AppUtil.getHP(1), textAlign: 'center' },
    txtSubNameView: { fontSize: AppUtil.getHP(1.8), fontFamily: FONTS.robotRegular, color: GetAppColor.textColor, marginTop: AppUtil.getHP(1), textAlign: 'center' },

    rowRightView: { width: '40%', alignSelf: 'center', height: AppUtil.getWP(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' },
    title: { fontSize: AppUtil.getHP(1.3), fontFamily: FONTS.robotMedium, color: GetAppColor.textColor },

    secondInnerCalView: { flexDirection: 'row', alignItems: 'center' },
    callIcn: { marginEnd: AppUtil.getHP(1) },

    socialIcnView: { width: '100%', justifyContent: 'center', paddingVertical: AppUtil.getHP(1), flexDirection: 'row' },
    socialIcn: { width: AppUtil.getWP(9.5), height: AppUtil.getWP(10), marginHorizontal: AppUtil.getWP(1.2), justifyContent: 'center', alignItems: 'center', borderWidth: AppUtil.getHP(0.1), borderColor: GetAppColor.btnBorderColor },

    scrollSubView: { paddingHorizontal: 15, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: AppUtil.getHP(1) },

    btn: { borderWidth: 1, borderColor: GetAppColor.btnBorderColor, margin: AppUtil.getHP(0.5), padding: AppUtil.getHP(0.7), borderRadius: AppUtil.getHP(0.7) },
    txtBtn: { fontSize: AppUtil.getHP(1.5), fontFamily: FONTS.robotRegular, color: GetAppColor.innovationGrey, textAlign: 'center' },

    btnConnect: {
        width: AppUtil.getWP(60), height: buttonHeight, borderRadius: AppUtil.getHP(0.5), borderWidth: AppUtil.getHP(0.2),
        marginTop: AppUtil.getHP(2), flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', alignItems: 'center'
    },
    btnConnectPending: {
        width: AppUtil.getWP(40), height: buttonHeight, borderRadius: AppUtil.getHP(0.5), borderWidth: AppUtil.getHP(0.2),
        marginTop: AppUtil.getHP(2), flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', alignItems: 'center'
    },
 
    followBtn: {
        height: buttonHeight,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: buttonBorderRadius,
        flexDirection: 'row',
        borderColor: GetAppColor.grayBorder,
        borderWidth: 1,
        backgroundColor: GetAppColor.white,
        marginTop: AppUtil.getHP(2),
        paddingHorizontal: AppUtil.getHP(2),
    },
    followBtnTitle: {
        color: GetAppColor.grayBorder,
        fontSize: buttonFontSize,
        fontFamily: FONTS.robotMedium,
        paddingStart: AppUtil.getWP(3)

    },
    followBtnTitleOne: {
        color: GetAppColor.grayBorder,
        fontSize: buttonFontSize,
        fontFamily: FONTS.robotMedium,
        paddingStart: AppUtil.getWP(3)

    },
    expertBtnOne: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: AppUtil.getWP(5)
    },
    expertBtnTwo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingHorizontal: AppUtil.getWP(2),
    },
    txtBtnInner: { fontSize: buttonFontSize, fontFamily: FONTS.robotMedium, },

    aboutView: { paddingHorizontal: AppUtil.getHP(1.5), paddingVertical: AppUtil.getHP(2) },
    txtAbout: { fontSize: AppUtil.getHP(2.5), fontFamily: FONTS.robotMedium, },
    txtAboutDes: { fontSize: AppUtil.getWP(4), marginTop: AppUtil.getHP(1.5), fontFamily: FONTS.robotRegular, color: GetAppColor.pincolor },

});

export default Style;