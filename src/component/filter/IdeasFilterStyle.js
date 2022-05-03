import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';

const Style = StyleSheet.create({
    MainView: { flex: 1, marginVertical: '5%', alignItems: 'center', backgroundColor: GetAppColor.white },
    headerView: {width:'100%', height:50, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:'5%', backgroundColor:GetAppColor.lightWhite},
    txtTitle:{fontFamily:FONTS.robotMedium , fontSize:AppUtil.getHP(2.5)},
    txtClose:{fontFamily:FONTS.robotMedium , fontSize:AppUtil.getHP(2.5), color:GetAppColor.grayBorder},
});

export default Style;