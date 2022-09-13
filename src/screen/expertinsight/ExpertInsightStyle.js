import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil'
import { GetAppColor } from '../../utils/Colors'
import FONTS from '../../utils/Fonts'
const ExpertInsightStyle = StyleSheet.create({
    
    addSpace: { padding: AppUtil.getHP(0.3) },
    MainView: { width: '100%', backgroundColor: GetAppColor.white },
    tabHeader: { fontSize: 15, textTransform: 'capitalize', width: AppUtil.getWP(33.33) },
    tabBarItem: { width: AppUtil.getWP(33) },
    itemBorder: { backgroundColor: GetAppColor.innovationGrey },

    cellView: {
        marginHorizontal: AppUtil.getWP(2.5),
        marginVertical: AppUtil.getHP(1),
        borderRadius: 10,
        backgroundColor: GetAppColor.white,

    },
    emptyView: {
        height: AppUtil.getHP(20),
        margin: '2%',
        padding: '4%',
        borderRadius: AppUtil.getHP(1),
        alignItems: "center",
        justifyContent: "center"
    },
    txtNoDataFound: { color: GetAppColor.black, fontSize: AppUtil.getHP(1.8) },
    topFlexView: {
        flexDirection: 'row',
        padding: AppUtil.getHP(1.5),
        borderBottomWidth: 1,
        borderBottomColor: GetAppColor.borderGray,
    },
    smallRadiousImage: {
        height: AppUtil.getHP(8),
        width: AppUtil.getHP(8),
        borderRadius: 10,

    },
    subFlexView: {
        marginStart: AppUtil.getWP(2),
    },
    catText: {
        fontFamily: FONTS.robotMedium,
        fontSize: AppUtil.getHP(1.4),
        color: GetAppColor.textColor
    },
    titleText: {
        fontFamily: FONTS.robotMedium,
        fontSize: AppUtil.getHP(2.2),
        color: GetAppColor.acedemyRedtitle,
        width: AppUtil.getWP(60),
        marginTop: AppUtil.getHP(0.5)
    },
    userFlexView: {
        flexDirection: 'row',
        padding: AppUtil.getHP(1.5),

    },
    userImage: {
        width: AppUtil.getHP(4),
        height: AppUtil.getHP(4),
        borderRadius: AppUtil.getHP(2),
        backgroundColor: GetAppColor.borderGray,
        marginEnd: AppUtil.getWP(2)
    },
    userName: {
        fontFamily: FONTS.robotMedium,
        fontSize: AppUtil.getHP(1.8),
        color: GetAppColor.textColor
    },
    userCatName: {
        fontFamily: FONTS.robotMedium,
        fontSize: AppUtil.getHP(1.4),
        color: GetAppColor.textColor
    },
    leftItems: { paddingHorizontal: AppUtil.getWP(4.5), },
    line: { marginVertical: AppUtil.getHP(0.6), height: 1, width: '100%', backgroundColor: GetAppColor.borderGray },

    title: { fontSize: AppUtil.getHP(1.7), fontFamily: FONTS.robotMedium, color: GetAppColor.black },
    SubTitle: { fontSize: AppUtil.getHP(1.5), fontFamily: FONTS.robotRegular, color: GetAppColor.textColor, marginTop: AppUtil.getHP(0.5) },

    calView: { flexDirection: 'row', alignItems: 'center', marginTop: AppUtil.getHP(0.1) },
    icnTitle: { fontSize: AppUtil.getHP(1.5), marginStart: 2, marginEnd: AppUtil.getWP(5), fontFamily: FONTS.robotRegular, color: GetAppColor.textColor },

})
export default ExpertInsightStyle