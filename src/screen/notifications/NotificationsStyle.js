import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';
import { buttonFontSize } from '../../utils/Constant';
import { buttonHeight } from '../../utils/Constant';

const HomeStyle = StyleSheet.create({
    MainView: { backgroundColor:GetAppColor.white},

    bodyView:{flexDirection:'row', paddingHorizontal:AppUtil.getWP(2.5), paddingVertical:AppUtil.getHP(2.5), 
    justifyContent:'space-between', backgroundColor:GetAppColor.lightGrey},
    
    txtTitle:{fontSize:AppUtil.getHP(2), fontFamily:FONTS.robotBold, color:GetAppColor.commonBorderGrey},
    notificationsCounter:{fontSize:AppUtil.getHP(2), fontFamily:FONTS.robotBold},

    clearView:{color:GetAppColor.borderRed, fontFamily:FONTS.robotBold, borderBottomColor:GetAppColor.innovationGrey, borderBottomWidth:1.5},
    txtClear:{color:GetAppColor.innovationGrey, fontFamily:FONTS.robotRegular, borderBottomColor:GetAppColor.innovationGrey, borderBottomWidth:1.2},

    renderMainView:{paddingHorizontal:AppUtil.getWP(2), paddingVertical:AppUtil.getHP(1.8), borderBottomWidth:0.5, borderBottomColor:GetAppColor.disableBorder},
    
    txtRenderTitle:{fontSize:AppUtil.getHP(2.5), fontFamily:FONTS.robotBold,},
    
    txtRenderDes:{fontSize:AppUtil.getHP(2), color:GetAppColor.textColor, fontFamily:FONTS.robotRegular,marginTop:AppUtil.getHP(1.2)},
    dateView:{flexDirection:'row', alignItems:'center'},
    icnCal:{marginTop:AppUtil.getHP(1),marginEnd:4},

    btnView:{flexDirection:'row', justifyContent:'flex-start',marginTop:AppUtil.getHP(1.5), marginTop:AppUtil.getHP(1.5) },
    btnLearMore:{width:AppUtil.getWP(30), height:AppUtil.getHP(4.8), borderWidth:AppUtil.getHP(0.2), borderRadius:AppUtil.getHP(0.5), justifyContent:'center', alignItems:'center', marginStart:AppUtil.getHP(1.5)},
    btnApplyNow:{width:AppUtil.getWP(30), height:AppUtil.getHP(4.8), borderRadius:AppUtil.getHP(0.5), justifyContent:'center', alignItems:'center'},
    txt:{fontSize:buttonFontSize, fontFamily:FONTS.robotMedium},
});

export default HomeStyle;