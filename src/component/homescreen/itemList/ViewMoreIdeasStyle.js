import { StyleSheet } from 'react-native'
import { AppUtil } from '../../../utils/AppUtil';
import { GetAppColor } from '../../../utils/Colors';

const Style = StyleSheet.create({
    MainView: { flex:1, width: '100%',  backgroundColor:GetAppColor.white},
    HeaderBtn: {width:'100%', flexDirection:'row', justifyContent:'flex-end'},
    btnView:{borderWidth:1, marginEnd:AppUtil.getHP(1), marginVertical:AppUtil.getHP(1), padding:AppUtil.getHP(1.1), borderRadius:AppUtil.getHP(0.5), borderColor:GetAppColor.btnBorderColor},
});

export default Style;