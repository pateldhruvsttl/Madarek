import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';
import { buttonFontSize } from '../../utils/Constant';
import { buttonHeight } from '../../utils/Constant';

const HomeStyle = StyleSheet.create({
    MainView: { flex: 1 },
    containerView: {
        width: '90%', padding: 10, margin: AppUtil.getHP(2), backgroundColor: '#fff', borderRadius: AppUtil.getHP(2),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },

    selectPageIndicatorsView: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', position: 'absolute', left: 0, right: 0 },
    selectPageIndicators: { width: AppUtil.getWP(15), height: 4, marginHorizontal: 2, backgroundColor: GetAppColor.btnBorderColor },
});

export default HomeStyle;