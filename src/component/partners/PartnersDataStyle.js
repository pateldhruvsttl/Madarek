import { StyleSheet } from 'react-native'
import { GetAppColor } from '../../utils/Colors'
import { AppUtil } from '../../utils/AppUtil'
import FONTS from '../../utils/Fonts'
import { Platform } from 'react-native'

const STYLE = StyleSheet.create({
    mainView: {
        backgroundColor: GetAppColor.lightGrey,
        width: '100%',
        paddingHorizontal: AppUtil.getWP(3.5),
        flex:1
    },
    listing: {
        marginTop: AppUtil.getHP(1), paddingBottom: AppUtil.getHP(2)
    },
    img: {
        width:Platform.OS == "android" ? AppUtil.getWP(36) : AppUtil.getWP(34),
        height:Platform.OS == "android" ? AppUtil.getHP(9) : AppUtil.getHP(8),
        borderRadius: AppUtil.getHP(1),
        marginHorizontal: AppUtil.getWP(4),
        marginVertical: AppUtil.getHP(1),

    },
    line: {
        borderColor: GetAppColor.grayShadeBorder,
        borderWidth: 0.2,
        width: '100%',
    },
    renderView: (index) => ({
        width: AppUtil.getWP(45),
        height: AppUtil.isPortrait() ? AppUtil.getHP(22) : AppUtil.getHP(40),
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: (index % 2 == 0) ? AppUtil.getWP(2) : 0,
        marginEnd: !((index % 2) == 0) ? AppUtil.getWP(2) : 0,
        marginVertical: AppUtil.getHP(1),
        borderRadius: 10,
        backgroundColor: GetAppColor.white,
        shadowColor: "#0000001A",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }),
    labelTxt: {
        color: GetAppColor.pincolor,
        fontFamily: FONTS.robotRegular,
        fontSize: 14,
        textAlign: 'center',

    },
    labelView: {
        height: AppUtil.getHP(5),
        width: AppUtil.getWP(30),
        marginVertical: AppUtil.getHP(1),
        alignItems: 'center',
        justifyContent: 'center'
    }

})

export default STYLE