import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';
import { buttonFontSize } from '../../utils/Constant';
import { buttonHeight } from '../../utils/Constant';

const Style = StyleSheet.create({
    SafeAryView: { flex: 1, backgroundColor: GetAppColor.lightWhite },
    MainView: { width: '100%', flex: 1, backgroundColor: GetAppColor.lightWhite },

    footerView: { paddingVertical: AppUtil.getHP(2), backgroundColor: GetAppColor.lightWhite },
    btnView: { flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: AppUtil.getHP(1.5) },

    btnLearMore: { width: AppUtil.getWP(43), height: buttonHeight, borderWidth: AppUtil.getHP(0.2), borderRadius: AppUtil.getHP(0.5), justifyContent: 'center', alignItems: 'center' },
    btnApplyNow: { width: AppUtil.getWP(43), height: buttonHeight, borderRadius: AppUtil.getHP(0.5), justifyContent: 'center', alignItems: 'center' },

    txtTitle: { width: '100%', textAlign: 'center', fontSize: buttonFontSize, fontFamily: FONTS.robotMedium, color: GetAppColor.innovationGrey },
    txt: { fontSize: buttonFontSize, fontFamily: FONTS.robotMedium },
    emptyView: {
        height: AppUtil.getHP(20),
        margin: '2%',
        padding: '4%',
        borderRadius: AppUtil.getHP(1),
        alignItems: "center",
        justifyContent: "center"
    },
    txtNoDataFound: { color: GetAppColor.black, fontSize: AppUtil.getHP(1.8) }
});

export default Style;