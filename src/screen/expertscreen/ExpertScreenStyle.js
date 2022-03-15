import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';
import { buttonFontSize } from '../../utils/Constant';
import { buttonHeight } from '../../utils/Constant';

const HomeStyle = StyleSheet.create({
    MainView: { width: '100%', flex: 1, backgroundColor: GetAppColor.white },
    favouriteCategoriesView: { backgroundColor: GetAppColor.lightWhite, paddingVertical: AppUtil.getHP(2) },
    similarExpertView: { backgroundColor: GetAppColor.white, paddingVertical: AppUtil.getHP(2) },
    popularExpertView: { backgroundColor: GetAppColor.lightWhite, paddingVertical: AppUtil.getHP(2) },



    footerView:{paddingVertical:AppUtil.getHP(2), backgroundColor:GetAppColor.lightWhite},
    btnView:{flexDirection:'row', justifyContent:'space-evenly', marginVertical:AppUtil.getHP(1.5)},
    btnLearMore:{width:AppUtil.getWP(43), height:buttonHeight, borderWidth:AppUtil.getHP(0.2), borderRadius:AppUtil.getHP(0.5), justifyContent:'center', alignItems:'center'},
    btnApplyNow:{width:AppUtil.getWP(43), height:buttonHeight, borderRadius:AppUtil.getHP(0.5), justifyContent:'center', alignItems:'center'},
    txtTitle:{width: '100%', textAlign:'center',fontSize:buttonFontSize, fontFamily:FONTS.robotMedium, color:GetAppColor.innovationGrey},
    txt:{fontSize:buttonFontSize, fontFamily:FONTS.robotMedium},

});

export default HomeStyle;