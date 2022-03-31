import { StyleSheet, Dimensions, Platform } from 'react-native';
import { AppUtil } from '../../utils/AppUtil'
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';

const STYLE = StyleSheet.create({
    MainView: { width: '100%', flex: 1, },
    subMainView: {
        width: '100%', flex: 1, flexDirection: 'row',
        paddingTop:AppUtil.getHP(1),
        paddingBottom:AppUtil.getHP(1.5),
        alignItems: 'center', justifyContent: 'center'
    },

    btnView: {
        width: AppUtil.getWP(30), height: AppUtil.getHP(12), borderWidth: 0.5,
        borderBottomWidth: AppUtil.getHP(.4), justifyContent: 'center', alignItems: 'center',
        marginHorizontal: "1%", marginVertical: '1%',
        borderRadius: 5,
        backgroundColor:GetAppColor.white
    },
    count: {
        fontSize: AppUtil.getHP(2),
        marginTop: AppUtil.getHP(0.5),
        color: GetAppColor.textColor,
        fontFamily: FONTS.robotMedium,
        textAlign: 'center'
    },
    txtBtn: { fontSize: AppUtil.getHP(1.6), marginTop: AppUtil.getHP(0.5), color: GetAppColor.textColor, fontFamily: FONTS.robotRegular, textAlign: 'center' },
});

export default STYLE;