import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';

const Style = StyleSheet.create({
    MainView: { flex:1, width: '100%',  backgroundColor:GetAppColor.white},
    tabBarTxt : {fontSize: 15,textTransform: 'capitalize'},
    tabBarItem : { width: AppUtil.getWP(50) },
    barBorder : { backgroundColor: GetAppColor.innovationGrey }
});

export default Style;
