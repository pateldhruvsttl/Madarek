import { StyleSheet, Dimensions, Platform } from 'react-native';
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';
import { buttonHeight } from '../../utils/Constant';
import { buttonFontSize } from '../../utils/Constant';

const Style = StyleSheet.create({

    MainView: { width: '100%' },
    titleView: {
        marginHorizontal: AppUtil.getHP(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: "center",
        marginBottom: AppUtil.getHP(1)
    },
    txtTitle: { fontSize: AppUtil.getHP(2.1), color: GetAppColor.textColor, fontFamily:FONTS.robotBold },
    txtSeeMore: { fontSize: AppUtil.getHP(1.7), color: GetAppColor.textColor, fontFamily:FONTS.robotRegular},

    renderMainView: {
        margin: '2%',
        padding: '3%', borderRadius: AppUtil.getHP(1),
        alignItems: "center", backgroundColor: GetAppColor.white, flexDirection: 'row', justifyContent: "space-between",
        shadowColor: GetAppColor.black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 2.84,

        elevation: 2,

    },

    itemsView: { width: '100%' },
    TitleView: { flexDirection: 'row', justifyContent: 'space-between' },
    title: { fontSize: AppUtil.getHP(1.3), fontFamily: FONTS.robotMedium, color: GetAppColor.textColor },
    SubTitle: { fontSize: AppUtil.getHP(1.9), fontFamily: FONTS.robotMedium, color: GetAppColor.borderRed, marginVertical: AppUtil.getHP(0.7) },

    calView: { flexDirection: 'row', alignItems: 'center' },
    callIcn: { marginEnd: AppUtil.getHP(1) },
    callLeftIcn: { marginEnd: AppUtil.getHP(1), marginStart: AppUtil.getHP(1), },

    icnView: { height: AppUtil.getWP(7), alignItems: 'center', flexDirection: 'row', justifyContent: "space-between",marginTop: AppUtil.getHP(0.7) },
    winningIcn: { marginEnd: AppUtil.getHP(1) },

    
    rowLeftView: { width: '50%', height: AppUtil.getWP(7), flexDirection: 'row', alignItems: 'center' },
    
    rowRightView: { width: '53%', height: AppUtil.getWP(7), flexDirection: 'row', justifyContent:'flex-end',},
    secondInnerCalView: { flexDirection: 'row', marginEnd: AppUtil.getHP(2), alignItems: 'center' },

    bottomBtn: {
        height: buttonHeight, borderColor: GetAppColor.lightOrange,
        borderRadius: AppUtil.getHP(1), borderWidth: AppUtil.getHP(0.1), justifyContent: 'center', alignItems: 'center', margin: AppUtil.getHP(2),
    },
    txtBottomBtn: { fontSize:buttonFontSize, color: GetAppColor.lightOrange, fontFamily:FONTS.robotMedium },



});

export default Style;