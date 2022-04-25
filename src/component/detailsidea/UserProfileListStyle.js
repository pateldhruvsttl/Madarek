import { StyleSheet } from 'react-native'
import { GetAppColor } from '../../utils/Colors'
import { AppUtil } from '../../utils/AppUtil'
import FONTS from '../../utils/Fonts'
import { buttonHeight } from '../../utils/Constant'
import { buttonFontSize } from '../../utils/Constant'

const styles = StyleSheet.create({
    profileContainer: {
        backgroundColor: GetAppColor.white,
        width: '100%',
        paddingHorizontal: AppUtil.getWP(5),
        paddingBottom: AppUtil.getHP(4)
    },
    profileChallenge: {
        backgroundColor: GetAppColor.lightGrey,
        width: '100%',
        paddingBottom: AppUtil.getHP(4),

    },
    profileSubChallenge: {
        backgroundColor: GetAppColor.lightGrey,
        paddingHorizontal: AppUtil.getWP(5),
    },
    bottomBtn: {
        height: buttonHeight,
        borderRadius: AppUtil.getHP(1),
        justifyContent: 'center', alignItems: 'center', margin: AppUtil.getHP(2),

    },
    footerbtnView: {
        backgroundColor: GetAppColor.white,
        marginTop: AppUtil.getHP(5),
        paddingVertical: AppUtil.getHP(1.5),
        paddingHorizontal:AppUtil.getWP(1)
    },
    txtBottomBtn: { fontSize: buttonFontSize, fontFamily: FONTS.robotMedium },
    heading: {
        color: GetAppColor.pincolor,
        fontFamily: FONTS.robotBold,
        fontSize: AppUtil.getHP(2.2),
        textAlign: 'left',
        marginBottom: AppUtil.getHP(1),
        paddingVertical: AppUtil.getHP(3)
    },
    imgStyle: {
        width: AppUtil.getHP(18), height: AppUtil.getHP(18), borderRadius: AppUtil.getHP(18 / 2),
        // borderColor: GetAppColor.borderImgShadow,
        // borderWidth: AppUtil.getHP(0.8),
        marginHorizontal: AppUtil.getHP(1.8),
        shadowColor: GetAppColor.borderImgShadow,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        
        elevation: 27,
    },
    imgChallengeListStyle: {
        width: AppUtil.getHP(18), height: AppUtil.getHP(18), borderRadius: AppUtil.getHP(18 / 2),
        borderColor: GetAppColor.white,
        borderWidth: AppUtil.getHP(0.8),
        marginHorizontal: AppUtil.getHP(1.8)
    },
    profileDetails: {
        alignItems: 'center'
    },
    personName: {
        color: GetAppColor.pincolor,
        fontFamily: FONTS.robotMedium,
        fontSize: AppUtil.getHP(1.9),
        marginTop: AppUtil.getHP(1),
    },
    personOccupation: {
        color: GetAppColor.commonBorderGrey,
        fontFamily: FONTS.robotRegular,
        fontSize: AppUtil.getHP(1.7),
        marginTop: AppUtil.getHP(1),
    }
})

export default styles