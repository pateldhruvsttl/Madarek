import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';

const Style = StyleSheet.create({
    MainView: { width: '100%', flex: 1, },
    
    titleView: { marginHorizontal: AppUtil.getHP(2), marginVertical:AppUtil.getHP(1), flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" },

    similerIcnView: { position: 'absolute', margin: AppUtil.getHP(1), end: 0 },

    txtTitle: { fontSize: AppUtil.getHP(2.2), color: GetAppColor.textColor, fontFamily: FONTS.robotBold },
    txtSeeMore: { fontSize: AppUtil.getHP(1.7), color: GetAppColor.textColor, fontFamily: FONTS.robotRegular },

    renderMainView: {
        width: AppUtil.getWP(92),
        padding: AppUtil.getWP(2),
        marginVertical:'2%',
        borderRadius: AppUtil.getHP(1),
        backgroundColor: GetAppColor.white,
        flexDirection: 'row',
        alignSelf: 'center',
        shadowColor: GetAppColor.black,
        shadowOffset: { width: 0, height: 1, },
        shadowOpacity: 0.20,
        shadowRadius: 2.84,
        elevation: 2,
    },
    
    rightItems: { width: AppUtil.getWP(18), alignItems: 'center', marginTop: AppUtil.getHP(0.5), },
    img: { width: AppUtil.getHP(8), height: AppUtil.getHP(8), borderRadius: AppUtil.getHP(4) },
    
    leftItems: { width: AppUtil.getWP(65), marginStart:6, marginTop: AppUtil.getHP(0.5), },

    title: { fontSize: AppUtil.getHP(1.9), fontFamily: FONTS.robotMedium, color: GetAppColor.black },
    SubTitle: { fontSize: AppUtil.getHP(1.7), fontFamily: FONTS.robotRegular, color: GetAppColor.textColor, marginTop: AppUtil.getHP(0.5) },
    
    calView: { flexDirection: 'row', alignItems: 'center', marginTop: AppUtil.getHP(0.5) },
    icnTitle: { fontSize: AppUtil.getHP(1.7), marginStart:2, marginEnd:AppUtil.getWP(5), fontFamily: FONTS.robotRegular, color: GetAppColor.textColor},

    icnDes: { fontSize: AppUtil.getHP(1.7), marginStart:2, marginEnd:AppUtil.getWP(5), fontFamily: FONTS.robotRegular, color: GetAppColor.textColor, margin: AppUtil.getHP(0.5) },


});

export default Style;