import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';

const HomeStyle = StyleSheet.create({

    container : { flex: 1 },
    MainView: { flex:1, width: '100%', backgroundColor:GetAppColor.borderRed},
    tabHeader: { fontSize: 15, textTransform: 'capitalize', width: AppUtil.getWP(25) },
    tabBarItem: { width: 100 },
    itemBorder: { backgroundColor: GetAppColor.innovationGrey }
});

export default HomeStyle;