import { StyleSheet, Text, View } from 'react-native'
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';
import { buttonBorderRadius, buttonHeight } from '../../utils/Constant';
import { buttonFontSize } from '../../utils/Constant';


const Style = StyleSheet.create({
    heading: {
        color: GetAppColor.pincolor,
        fontFamily: FONTS.robotBold,
        fontSize: AppUtil.getHP(2.2),
        textAlign: 'left',
        marginBottom: AppUtil.getHP(2)
    },
    contentBox: {
        width: '100%',
        paddingHorizontal: AppUtil.getWP(5),
        marginBottom: AppUtil.getHP(1),
        backgroundColor: GetAppColor.white,
        marginTop: AppUtil.getHP(1),
        paddingTop:AppUtil.getHP(2),
        paddingBottom:AppUtil.getHP(3),
    },
    resourceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: GetAppColor.white,
        alignItems: 'center',
        height: AppUtil.getHP(5),
        borderRadius:buttonBorderRadius,
        marginBottom: AppUtil.getHP(2),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,
    },
    resourceSubTitle:
        { flex: 1, paddingStart: AppUtil.getWP(3) },

    resourceChallenge:
        { flex: 1, paddingStart: AppUtil.getWP(3), flexDirection: 'row',alignItems:'center' },

    downloadIcon: {
        right: AppUtil.getWP(5)
    },
    img: {
        width: AppUtil.getWP(30),
        height: AppUtil.getHP(13),
        borderRadius: AppUtil.getHP(1),
        marginEnd: AppUtil.getHP(1.2)
    },
    imgView: {
        flexDirection: 'row',

    },
    resourceTitle: {
        fontSize: AppUtil.getHP(1.7),
        color: GetAppColor.pincolor,
        fontFamily: FONTS.robotRegular
    },
    icnDocument: {
        marginEnd: AppUtil.getWP(1.5)
    }
})


export default Style