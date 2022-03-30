import { StyleSheet, Text, View } from 'react-native'
import { GetAppColor } from '../../utils/Colors'
import { AppUtil } from '../../utils/AppUtil'
import FONTS from '../../utils/Fonts'

const InfoStyle = StyleSheet.create({
    mainView: {
        backgroundColor: GetAppColor.white,
        paddingHorizontal: AppUtil.getWP(5),
        paddingTop: AppUtil.getHP(2.2),
        paddingBottom: AppUtil.getHP(2.2),
        marginBottom:AppUtil.getHP(2.2)
    },
    container: {
        borderBottomColor: GetAppColor.grayShadeBorder,
        borderBottomWidth: 0.8,
        paddingBottom: AppUtil.getHP(1.5)
    },
    containerFooter : {
        paddingBottom: AppUtil.getHP(1.5)
    },
    spacing: {
        paddingTop: AppUtil.getHP(2),
    },
    spacingSchedule :{
        paddingTop: AppUtil.getHP(2),
        paddingEnd:AppUtil.getWP(6)
    },
    objectiveTxt: {
        fontFamily: FONTS.robotRegular,
        color: GetAppColor.grayBorder,
        fontSize: AppUtil.getHP(1.7),
        textAlign: 'left',
        paddingBottom:AppUtil.getHP(0.5)
    },
    scheduleDate: {
        color: GetAppColor.pincolor,
        fontSize: AppUtil.getHP(1.7),
        fontFamily: FONTS.robotRegular,
    },
    subObjectiveTxt: {
        color: GetAppColor.pincolor,
        fontSize: AppUtil.getHP(1.7),
        fontFamily: FONTS.robotRegular,
        textAlign: 'left'
    },
    submissionDetail: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingBottom:AppUtil.getHP(1)
    }
})
export default InfoStyle