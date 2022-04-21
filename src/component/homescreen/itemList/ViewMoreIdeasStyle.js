import { StyleSheet } from 'react-native'
import { AppUtil } from '../../../utils/AppUtil';
import { GetAppColor } from '../../../utils/Colors';
import FONTS from '../../../utils/Fonts';

const Style = StyleSheet.create({
    MainView: { flex:1, width: '100%',  backgroundColor:GetAppColor.lightWhite},
    txt: {fontSize:AppUtil.getHP(1.5), color:GetAppColor.black, fontFamily:FONTS.robotItalic},
    HeadertxtRecodes: {position:'absolute', top:AppUtil.getHP(3.5), start:AppUtil.getHP(1.1),fontSize:AppUtil.getHP(1.5), color:GetAppColor.grayBorder, fontFamily:FONTS.robotBold},
    HeaderBtn: {width:'100%', flexDirection:'row', justifyContent:'flex-end', position:'absolute'},
    btnView:{borderWidth:1, marginEnd:AppUtil.getHP(1), marginVertical:AppUtil.getHP(1), padding:AppUtil.getHP(1.1), 
        borderRadius:AppUtil.getHP(0.5), borderColor:GetAppColor.btnBorderColor},
    selectView:{ marginTop:AppUtil.getHP(6) },
});

export default Style;