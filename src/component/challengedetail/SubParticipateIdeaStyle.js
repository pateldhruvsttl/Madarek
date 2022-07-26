import { StyleSheet, Dimensions, Platform } from 'react-native';
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';

const STYLE = StyleSheet.create({
    MainView: { width: '100%',paddingHorizontal: AppUtil.getWP(3), },

    titleView: {
        marginHorizontal: AppUtil.getHP(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: "center",
        marginBottom: AppUtil.getHP(1)
    },

    titleAnotherScreen: {
        color: GetAppColor.pincolor,
        fontFamily: FONTS.robotBold,
        fontSize: AppUtil.getHP(2.2),
        textAlign: 'left',
    },
    seeMoreAnotherScreen: {
        fontSize: AppUtil.getHP(1.7),
        color: GetAppColor.pincolor,
        fontFamily: FONTS.robotRegular
    },


    txtTitle: { fontSize: AppUtil.getHP(2.1), color: GetAppColor.textColor, fontFamily: FONTS.robotBold },
    txtSeeMore: { fontSize: AppUtil.getHP(1.7), color: GetAppColor.textColor, fontFamily: FONTS.robotRegular },

    renderMainView: {
        margin: '2%',
        padding: '4%', borderRadius: AppUtil.getHP(1),backgroundColor: GetAppColor.white, flexDirection: 'row', justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 2.84,

        elevation: 2,

    },
    boldView :{
        fontFamily:FONTS.robotMedium,
        color:GetAppColor.pincolor,
        fontSize: AppUtil.getHP(1.3),
    },

    img: { width: "100%", height: AppUtil.getHP(13), borderRadius: AppUtil.getHP(1) },

    rightItems: { width: '40%', },
    leftItems: { width: '55%' },

    calView: { flexDirection: 'row', alignItems: 'center'},

    callIcn: { marginEnd: AppUtil.getHP(0.8) },
    callLeftIcn: { marginEnd: AppUtil.getHP(0.8), marginStart: AppUtil.getHP(1), },

    title: {
        fontSize: AppUtil.getHP(1.3),
        fontFamily: FONTS.robotRegular,
        color: GetAppColor.textColor
    },
    inerContentLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        marginEnd:AppUtil.getHP(1.2)
    },
    inerContentRight: {
        flexDirection: 'row',
        alignItems:'center'
    },


    SubTitle: {
        fontSize: AppUtil.getHP(1.9),
        fontFamily: FONTS.robotMedium,
        color: GetAppColor.borderRed,
        marginVertical: AppUtil.getHP(0.7)
    },

    secondCalView: { alignItems: 'center', flexDirection: 'row', marginTop: AppUtil.getHP(1), justifyContent: 'flex-start' },
    secondInnerCalView: {
        flexDirection: 'column',
        borderEndWidth: 1,
        borderEndColor: GetAppColor.grayShadeBorder,
        flex: 1,
    },
    secondInnerCalViewLast: {
        flexDirection: 'column',
        flex: 1,
        alignItems:'center'
    },
    totalScoree: {
        flexDirection: 'column',
        borderEndWidth: 1,
        borderEndColor: GetAppColor.grayShadeBorder,
        flex: 1.5,
        alignItems:'center'
    },

    bottomBtn: {
        height: AppUtil.getHP(5), borderColor: GetAppColor.lightOrange, backgroundColor: GetAppColor.white,
        borderRadius: AppUtil.getHP(1), borderWidth: AppUtil.getHP(0.1), justifyContent: 'center', alignItems: 'center', margin: AppUtil.getHP(2),
    },
    heading: {
        color: GetAppColor.pincolor,
        fontFamily: FONTS.robotBold,
        fontSize: AppUtil.getHP(2.2),
        textAlign: 'left',
        marginBottom: AppUtil.getHP(1),
        marginStart:AppUtil.getWP(2)
    },
    txtBottomBtn: { fontSize: AppUtil.getHP(2), color: GetAppColor.lightOrange, fontFamily: FONTS.robotMedium },

    likeUnlikeIcn: { paddingHorizontal: AppUtil.getHP(2), position: 'absolute', end: 0, top: 5 },

    rewordView: {
        width: '100%', height: AppUtil.getWP(7), bottom: 0, borderBottomEndRadius: AppUtil.getHP(1),
        borderBottomStartRadius: AppUtil.getHP(1),
        position: 'absolute', backgroundColor: GetAppColor.blackTransperent, flexDirection: 'row',
        alignItems: 'center'
    },

    winningIcn: { marginStart: AppUtil.getHP(1) },
});

export default STYLE;