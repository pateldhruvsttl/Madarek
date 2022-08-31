import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';

const Style = StyleSheet.create({
    MainView: { width: '100%', flex: 1, backgroundColor: GetAppColor.lightWhite, paddingVertical: AppUtil.getHP(2) },
    titleView: { marginHorizontal: AppUtil.getHP(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" },

    txtTitle: { fontSize: AppUtil.getHP(2.2), color: GetAppColor.textColor, fontFamily: FONTS.robotBold },
    txtSeeMore: { fontSize: AppUtil.getHP(1.7), color: GetAppColor.textColor, fontFamily: FONTS.robotRegular },

    renderMainView: {
        width:AppUtil.getWP(80),
        height:AppUtil.getHP(14),
        marginStart: AppUtil.getHP(2), 
        marginVertical: AppUtil.getHP(2), 
        padding: AppUtil.getHP(1.5), 
        borderRadius: AppUtil.getHP(1),
        alignItems: "center", backgroundColor: GetAppColor.white, flexDirection: 'row', justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 2.84,

        elevation: 2,

    },


    rightItems: { width: '40%', },
    rewordView: {
        width: '100%', height: AppUtil.getWP(7), bottom: 0, 
        
        borderBottomStartRadius: AppUtil.getHP(1),
        borderBottomEndRadius: AppUtil.getHP(1),
        
        position: 'absolute', backgroundColor: GetAppColor.blackTransperent, flexDirection: 'row',
        alignItems: 'center'
    },
    img: { width: "100%", height: AppUtil.getHP(11), borderRadius: AppUtil.getHP(1) },
    winningIcn: { marginStart: AppUtil.getHP(1) },


    leftItems: { width: '55%' },
    title: { fontSize: AppUtil.getHP(1.3), fontFamily: FONTS.robotMedium, color: GetAppColor.textColor },
    SubTitle: { fontSize: AppUtil.getHP(1.7), fontFamily: FONTS.robotMedium, color: GetAppColor.black, marginVertical: AppUtil.getHP(0.7) },
    calView: { flexDirection: 'row', alignItems: 'center',justifyContent:'space-around',
     width: '40%',  height: AppUtil.getWP(10) },
    txtTime:{marginHorizontal:AppUtil.getHP(0.5),fontSize: AppUtil.getHP(1.3), fontFamily: FONTS.robotMedium, color: GetAppColor.textColor},

    secondCalView:{flexDirection:'row', marginTop:AppUtil.getHP(0.5)},
    txtName: { fontSize: AppUtil.getHP(1.3), fontFamily: FONTS.robotMedium, marginStart:AppUtil.getHP(0.5), color: GetAppColor.black },
    secondInnerCalView: { flexDirection: 'row', alignItems: 'center' },
    callInnerIcn: { marginEnd: AppUtil.getHP(1) },



});

export default Style;