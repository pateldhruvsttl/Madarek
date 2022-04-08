import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';
import { buttonFontSize } from '../../utils/Constant';
import { buttonHeight } from '../../utils/Constant';

const HomeStyle = StyleSheet.create({
    MainView: { flex:1, width: '100%',  backgroundColor:GetAppColor.white},
    safeView:{flex:1},

    innerView: {
        margin:'4%',
        padding: '4%', borderRadius: AppUtil.getHP(1),
        backgroundColor: GetAppColor.white, 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 2.84,
        elevation: 2,

    },

    txtTitle:{fontFamily:FONTS.robotBold, fontSize:AppUtil.getHP(2.2), color:GetAppColor.innovationGrey},
    txtDes:{fontFamily:FONTS.robotRegular, fontSize:AppUtil.getHP(1.8), color:GetAppColor.pincolor, marginTop:AppUtil.getHP(1)},
    txtDes1:{fontFamily:FONTS.robotRegular, fontSize:AppUtil.getHP(1.6), color:GetAppColor.textColor, marginTop:AppUtil.getHP(1)},

    btnApplyNow:{ height:buttonHeight, marginTop:AppUtil.getHP(2), borderRadius:AppUtil.getHP(0.5), justifyContent:'center', alignItems:'center'},
    txt:{fontSize:buttonFontSize, fontFamily:FONTS.robotMedium},
});

export default HomeStyle;