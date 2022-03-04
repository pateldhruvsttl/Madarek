import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';

const CommonHeaderStyle = StyleSheet.create({
    MainView: { width: '100%', height: AppUtil.getHP(7), flexDirection:'row', justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:AppUtil.getHP(2),
    backgroundColor:GetAppColor.headerYellow },

    headerProfile:{width:AppUtil.getHP(1), height:AppUtil.getHP(1)},
    
    leftMultiIcnView:{flexDirection:'row', justifyContent:'space-between'},
    headerProfileIcn:{paddingHorizontal:AppUtil.getHP(2),},
});

export default CommonHeaderStyle;