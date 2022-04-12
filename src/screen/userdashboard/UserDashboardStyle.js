import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';
import { buttonFontSize } from '../../utils/Constant';
import { buttonHeight } from '../../utils/Constant';

const HomeStyle = StyleSheet.create({
    MainView: { width: '100%', flex:1, backgroundColor:GetAppColor.white},

    firstPos:{ backgroundColor: GetAppColor.lightWhite, paddingVertical: AppUtil.getHP(2) },
    secondPos:{ paddingVertical: AppUtil.getHP(2) },

    bottomBarView:{width: '100%',  paddingVertical:AppUtil.getHP(3), alignItems:'center',backgroundColor:GetAppColor.white},
    txtBtnTitle:{fontSize:AppUtil.getHP(2), fontFamily: FONTS.robotMedium, color:GetAppColor.innovationGrey},
    btn:{width:'90%',height:buttonHeight, justifyContent:'center', alignItems:'center', marginTop:AppUtil.getHP(2), borderRadius:AppUtil.getHP(1), marginHorizontal:AppUtil.getHP(2), backgroundColor:GetAppColor.lightOrange},
    txtBtn:{fontSize:buttonFontSize, color:GetAppColor.white, fontFamily:FONTS.robotMedium},

});

export default HomeStyle; 