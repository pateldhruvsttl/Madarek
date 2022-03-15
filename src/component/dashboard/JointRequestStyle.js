import { StyleSheet, Dimensions, Platform } from 'react-native';
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';

const Style = StyleSheet.create({
    MainView: { width: '100%',},

    titleView: {
        marginHorizontal: AppUtil.getHP(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: "center",
        marginBottom: AppUtil.getHP(1)
    },

    txtTitle: { fontSize: AppUtil.getHP(2.1), color: GetAppColor.textColor, fontFamily:FONTS.robotBold },
    txtSeeMore: { fontSize: AppUtil.getHP(1.7), color: GetAppColor.textColor, fontFamily:FONTS.robotRegular},

    renderMainView: {
        margin:'2%',
        padding: '4%', borderRadius: AppUtil.getHP(1),
        alignItems: "center", backgroundColor: GetAppColor.white, flexDirection: 'row', justifyContent: "flex-start",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 2.84,
        
        elevation: 2,

    },

    rightItems: { width: '20%'},
    leftItems: { width: '50%'},
    endItems: { width: '30%', alignItems:'flex-end'},

    img: { width: AppUtil.getHP(7), height: AppUtil.getHP(7), borderRadius: AppUtil.getHP(7) },
    txtTitle: { fontSize: AppUtil.getHP(1.9), fontFamily:FONTS.robotMedium, color: GetAppColor.black, marginVertical: AppUtil.getHP(0.7) },
   
    btnView:{flexDirection:'row', justifyContent:'space-evenly'},
    btnAccept:{width:AppUtil.getWP(25), borderWidth:AppUtil.getHP(0.1), borderColor:GetAppColor.dotGreen, borderRadius:AppUtil.getHP(0.5), alignItems:'center', paddingVertical:AppUtil.getHP(0.2)},
    txtBtnAccept:{fontSize: AppUtil.getHP(1.8), color: GetAppColor.dotGreen, fontFamily:FONTS.robotRegular},

    btnReject:{width:AppUtil.getWP(25), borderWidth:AppUtil.getHP(0.1), borderColor:GetAppColor.borderRed, borderRadius:AppUtil.getHP(0.5), alignItems:'center', paddingVertical:AppUtil.getHP(0.2)},
    txtBtnReject:{fontSize: AppUtil.getHP(1.8), color: GetAppColor.borderRed, fontFamily:FONTS.robotRegular},
   






    

    title: { fontSize: AppUtil.getHP(1.3), fontFamily:FONTS.robotMedium, color:GetAppColor.textColor},

    calView: { flexDirection: 'row', alignItems: 'center' },
    callIcn: { marginEnd: AppUtil.getHP(1) },
    callLeftIcn: { marginEnd: AppUtil.getHP(1), marginStart:AppUtil.getHP(1), },

    
    secondCalView: { flexDirection: 'row', marginTop: AppUtil.getHP(1), justifyContent: 'flex-start' },

    bottomBtn: {
        height: AppUtil.getHP(5), borderColor: GetAppColor.lightOrange,
        borderRadius: AppUtil.getHP(1), borderWidth: AppUtil.getHP(0.1), justifyContent: 'center', alignItems: 'center', margin: AppUtil.getHP(2),
    },
    txtBottomBtn: { fontSize: AppUtil.getHP(2), color: GetAppColor.lightOrange, fontFamily:FONTS.robotMedium },
    
   
    

});

export default Style;