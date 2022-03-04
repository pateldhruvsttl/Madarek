import { StyleSheet, Dimensions, Platform } from 'react-native';
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';

const Style = StyleSheet.create({
    MainView: { width: '100%', marginVertical: AppUtil.getHP(0.5) },

    titleView: {
        marginHorizontal: AppUtil.getHP(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: "center",
        marginBottom: AppUtil.getHP(1)
    },

    txtTitle: { fontSize: AppUtil.getHP(2.1), color: GetAppColor.black, fontWeight: "bold" },
    txtSeeMore: { fontSize: AppUtil.getHP(1.7) },

    renderMainView: {
        padding: '4%', borderRadius: AppUtil.getHP(1),
        alignItems: "center", backgroundColor: GetAppColor.white, flexDirection: 'row', justifyContent: "space-between",

        shadowColor: GetAppColor.white,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,

    },

    img: { width: "100%", height: AppUtil.getHP(13), borderRadius: AppUtil.getHP(1) },

    rightItems: { width: '45%', },
    leftItems: { width: '50%' },

    calView: { flexDirection: 'row', alignItems: 'center' },
    callIcn: { marginEnd: AppUtil.getHP(1) },

    title: { fontSize: AppUtil.getHP(1.4) },
    SubTitle: { fontSize: AppUtil.getHP(1.9), fontWeight: 'bold', color: GetAppColor.borderRed, marginVertical: AppUtil.getHP(0.7) },

    secondCalView: { flexDirection: 'row', marginTop: AppUtil.getHP(1), justifyContent: 'flex-start' },
    secondInnerCalView: { flexDirection: 'row', marginRight: AppUtil.getHP(2) },

    bottomBtn: {
        height: AppUtil.getHP(5), borderColor: GetAppColor.skipBorderColor,
        borderRadius: AppUtil.getHP(1), borderWidth: AppUtil.getHP(0.1), justifyContent: 'center', alignItems: 'center', margin: AppUtil.getHP(2),
    },
    txtBottomBtn: { fontSize: AppUtil.getHP(2), color: GetAppColor.headerYellow, fontWeight: 'bold' },

    likeUnlikeIcn: { paddingHorizontal: AppUtil.getHP(2), position: 'absolute', end: 0, top: 5 },

    rewordView: {
        width: '100%', height: AppUtil.getWP(7), bottom: 0, borderBottomRightRadius: AppUtil.getHP(1),
        borderBottomLeftRadius: AppUtil.getHP(1),
        position: 'absolute', backgroundColor: GetAppColor.blackTransperent, flexDirection:'row',
        alignItems:'center'
    },

    winningIcn: { marginStart: AppUtil.getHP(1)},
});

export default Style;