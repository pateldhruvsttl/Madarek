import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';
import { buttonBorderRadius } from '../../utils/Constant';

const Style = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: GetAppColor.backGround,
        flex: 1,
        paddingHorizontal: AppUtil.getWP(4),
        paddingVertical :  AppUtil.getHP(3),
    },
    items: {
        backgroundColor: GetAppColor.white,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: AppUtil.getHP(0.8),
        height: AppUtil.getHP(9),
        alignItems: 'center',
        paddingHorizontal: AppUtil.getWP(3),
        borderRadius:AppUtil.getHP(1.3),
        shadowColor: "#0000001A",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,

    },
    itemTxt: {
        fontFamily: FONTS.robotMedium,
        color: GetAppColor.pincolor,
        fontSize: AppUtil.getHP(2),
        paddingStart : AppUtil.getWP(3)
    }
})
export default Style;