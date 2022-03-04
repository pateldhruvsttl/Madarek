import { StyleSheet } from "react-native";
import { AppUtil } from "../../utils/AppUtil";
import { GetAppColor } from "../../utils/Colors";
import FONTS from "../../utils/Fonts";

const STYLES = StyleSheet.create({
    backgroundImage: {
        justifyContent: 'center',
        flex: 1
    },
    madarekSplace: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 35
    },
    logoDetails: {
        flexDirection: 'row',
        marginBottom: 12,
        marginTop: 12

    },
    logoText: {
        fontSize: 35,
        letterSpacing: 10,
        fontFamily: FONTS.trajanProRegular,
        color: GetAppColor.splashLogoColor
    },
    innovationDetails: {
        marginHorizontal: 15,
        flexDirection: 'column'
    },
    innovationDetailsText: {
        fontSize: AppUtil.getWP(5),
        color: GetAppColor.innovationGrey,
        fontFamily: FONTS.robotRegular
    },
    splaceArea: {
        alignItems: 'center',
        flex: 1
    },
    splashImageArea: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        paddingTop: AppUtil.getHP(4),
    },
    splashHeader: {
        paddingTop: AppUtil.getHP(9),
        alignItems: 'center',
    }


})
export default STYLES;