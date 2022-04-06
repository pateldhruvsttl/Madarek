import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';

const HomeStyle = StyleSheet.create({
    MainView: { flex:1, width: '100%',  backgroundColor:GetAppColor.white},
    txtTitle:{flexDirection:'row', paddingHorizontal:AppUtil.getWP(2.5), paddingVertical:AppUtil.getHP(2.5), justifyContent:'space-between', backgroundColor:GetAppColor.lightGrey},
    notificationsCounter:{fontSize:AppUtil.getHP(2), fontFamily:FONTS.robotBold},

    renderMainView:{paddingHorizontal:AppUtil.getWP(2), paddingVertical:AppUtil.getHP(1), borderBottomWidth:0.5, borderBottomColor:GetAppColor.disableBorder},
    txtRenderTitle:{fontSize:AppUtil.getHP(2), fontFamily:FONTS.robotBold},
});

export default HomeStyle;