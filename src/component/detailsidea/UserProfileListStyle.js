import { StyleSheet } from 'react-native'
import { GetAppColor } from '../../utils/Colors'
import { AppUtil } from '../../utils/AppUtil'
import FONTS from '../../utils/Fonts'

const styles = StyleSheet.create({
    profileContainer: {
        backgroundColor: GetAppColor.white,
        width: '100%',
        paddingHorizontal: AppUtil.getWP(5),
        paddingBottom:AppUtil.getHP(4)
    },
    heading: {
        color: GetAppColor.pincolor,
        fontFamily: FONTS.robotBold,
        fontSize: AppUtil.getHP(2.2),
        textAlign: 'left',
        marginBottom: AppUtil.getHP(1),
        paddingVertical: AppUtil.getHP(3)
    },
    imgStyle: {
        width: AppUtil.getHP(18), height: AppUtil.getHP(18), borderRadius: AppUtil.getHP(18/2),
        borderColor:GetAppColor.profileYellowBorder,
        borderWidth:AppUtil.getHP(0.8),
        marginHorizontal:AppUtil.getHP(1.8)
    },
    profileDetails : {
        alignItems:'center'
    },
    personName : {
        color: GetAppColor.pincolor,
        fontFamily: FONTS.robotMedium,
        fontSize:AppUtil.getHP(1.7),
        marginTop: AppUtil.getHP(1),
    }
})

export default styles