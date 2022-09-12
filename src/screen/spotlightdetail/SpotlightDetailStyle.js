import { StyleSheet } from "react-native";
import { AppUtil } from "../../utils/AppUtil";
import { GetAppColor } from "../../utils/Colors";

const STYLE = StyleSheet.create({
    MainView: {
        width: '100%',
        // flex: 1,
        height: '100%',
        backgroundColor: GetAppColor.white,
        paddingBottom: AppUtil.getHP(5)
    },
    container: {
        height: '100%', width: '100%',
        backgroundColor: GetAppColor.lightGrey,
        paddingBottom: AppUtil.getHP(3)
    },
    img: { width: '100%', height: AppUtil.getHP(32), borderRadius: AppUtil.getHP(1), },
    imgcopy: { width:'100%', height: AppUtil.getHP(28), borderRadius: AppUtil.getHP(1), },

    imgStyle: {
        width: '100%', height: AppUtil.getHP(32),
        justifyContent: 'center', alignItems: 'center',
        // paddingHorizontal: AppUtil.getWP(5),
    },
    imgCopyStyle: {
        width: '100%', height: AppUtil.getHP(32),
        justifyContent: 'center', alignItems: 'center',
        paddingHorizontal: AppUtil.getWP(5),
    }
})
export default STYLE;