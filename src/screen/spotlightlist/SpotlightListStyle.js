import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';

const Style = StyleSheet.create({

    container: { flex: 1 },
    MainView: { flex: 1, width: '100%', backgroundColor: GetAppColor.white },
    tabHeader: { fontSize: 15, textTransform: 'capitalize', width: AppUtil.getWP(25) },
    tabBarItem: { width: AppUtil.getWP(33.33) },
    itemBorder: { backgroundColor: GetAppColor.innovationGrey },

    txtNodata:{position:'absolute', alignSelf:'center', top: AppUtil.getHP(25), color:GetAppColor.black},

});

export default Style;
