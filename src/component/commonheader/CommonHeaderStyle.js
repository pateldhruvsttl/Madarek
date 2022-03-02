import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';

const CommonHeaderStyle = StyleSheet.create({
    MainView: { width: '100%', height: 50, flexDirection:'row', justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:AppUtil.getHP(2),
    backgroundColor:GetAppColor.headerYellow },
    headerProfile:{width:AppUtil.getHP(2), height:AppUtil.getHP(2)},
});

export default CommonHeaderStyle;