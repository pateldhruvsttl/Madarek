import { StyleSheet } from 'react-native'
import { GetAppColor } from '../../utils/Colors';

const CommonHeaderStyle = StyleSheet.create({
    MainView: { width: '100%', height: 50, flexDirection:'row', justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:5,
    backgroundColor:GetAppColor.orange },
});

export default CommonHeaderStyle;