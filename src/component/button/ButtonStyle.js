import { StyleSheet } from 'react-native'
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';
import {headerFontSize} from '../../utils/Constant'
import { hederHeight } from '../../utils/Constant';
import { AppUtil } from '../../utils/AppUtil';

const Style = StyleSheet.create({
    icnProp:{marginEnd:AppUtil.getWP(3)},
    LeftIcnView:{alignItems:'center', marginStart:AppUtil.getWP(3)},
    headerProfile:{alignSelf:'center'},
});

export default Style;