import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';
import { buttonFontSize } from '../../utils/Constant';
import { buttonHeight } from '../../utils/Constant';

const Style = StyleSheet.create({
    SafeAryView:{ flex: 1 },
    MainView: { width: '100%', flex:1, backgroundColor:GetAppColor.white},

    footerView:{paddingVertical:AppUtil.getHP(2), backgroundColor:GetAppColor.lightWhite},
    btnView:{
        // flexDirection:'row', 
    // justifyContent:'space-evenly',
    alignItems:'center',
     marginVertical:AppUtil.getHP(1.5),
     justifyContent:'center'
    },
   
    btnLearMore:{width:AppUtil.getWP(43), height:buttonHeight, borderWidth:AppUtil.getHP(0.2), borderRadius:AppUtil.getHP(0.5), justifyContent:'center'
    , alignItems:'center'},
    btnApplyNow:{width:'90%', height:buttonHeight, borderRadius:AppUtil.getHP(0.5), justifyContent:'center', alignItems:'center'},

    txtTitle:{width: '100%', textAlign:'center',fontSize:buttonFontSize, fontFamily:FONTS.robotMedium, color:GetAppColor.innovationGrey},
    txt:{fontSize:buttonFontSize, fontFamily:FONTS.robotMedium},

    similarExpertView:{ backgroundColor: GetAppColor.white, paddingVertical: AppUtil.getHP(1) },
});

export default Style;