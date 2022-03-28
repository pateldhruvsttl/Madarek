import { StyleSheet } from 'react-native'
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';
import {headerFontSize} from '../../utils/Constant'
import { hederHeight } from '../../utils/Constant';
import { AppUtil } from '../../utils/AppUtil';

const CommonHeaderStyle = StyleSheet.create({
    MainView: { width: '100%', height:hederHeight,  flexDirection:'row', alignItems:'center', justifyContent:'space-between', backgroundColor:GetAppColor.headerLightYellow },

    LeftIcnView:{alignItems:'center', marginStart:AppUtil.getWP(3)},
    centerIcnView:{alignItems:'center', position:'absolute', left:0, right:0},
    rightSingleIcnView:{alignItems:'flex-end', marginEnd:AppUtil.getWP(3)},
    rightIcnView:{flexDirection:'row', justifyContent:'space-around', marginEnd:AppUtil.getWP(3)},

    icnEmpty:{alignItems:'flex-end', marginEnd:AppUtil.getWP(3),width: AppUtil.getHP(2.4)},
    

    headerProfile:{},
    headerLeftIcn:{},
    icnProp:{marginEnd:AppUtil.getWP(3)},

    txtHeader:{fontFamily:FONTS.robotMedium, fontSize:headerFontSize, color:GetAppColor.white},

    menuView:{flexDirection:'row', marginTop:'2%'},
    headerProfileIcn:{marginHorizontal:'3%'},

    expertHeader : {
        fontSize:headerFontSize,
        alignSelf: 'center',
        fontFamily:FONTS.robotBold
    }
});

export default CommonHeaderStyle;