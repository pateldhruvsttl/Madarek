import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import { hederHeight } from '../../utils/Constant';

const CommonHeaderStyle = StyleSheet.create({
    MainView: { width: '100%', height:hederHeight,  flexDirection:'row', alignItems:'center', backgroundColor:GetAppColor.headerLightYellow },

    LeftIcnView:{width: '15%',alignItems:'center'},
    centerIcnView:{width: '65%', alignItems:'center'},
    rightIcnView:{width: '20%',  flexDirection:'row', justifyContent:'space-around'},

    headerProfile:{},
    headerLeftIcn:{},
});

export default CommonHeaderStyle;