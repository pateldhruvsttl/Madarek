import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';
import { buttonFontSize } from '../../utils/Constant';
import { buttonHeight } from '../../utils/Constant';

const HomeStyle = StyleSheet.create({
    MainView: { width: '100%', flex:1, backgroundColor:GetAppColor.white},
    userDetailsView:{ backgroundColor: GetAppColor.lightWhite, paddingVertical: AppUtil.getHP(2) },

    
});

export default HomeStyle;