import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';
import { buttonFontSize } from '../../utils/Constant';
import { buttonHeight } from '../../utils/Constant';

const IdeaStyle = StyleSheet.create({
    container: {
        height: '100%', width: '100%',
        backgroundColor: GetAppColor.lightGrey,
        paddingBottom: AppUtil.getHP(3)
    },
    MainView: {
        width: '100%',
        // flex: 1,
        backgroundColor: GetAppColor.white,
        paddingBottom: AppUtil.getHP(5)
    },
    academyTitle: {
        fontFamily: FONTS.robotMedium,
        color: GetAppColor.acedemyRedtitle,
        fontSize: AppUtil.getWP(6)
    },
    headerAcademyContainer: {
        width: "75%",
        marginVertical: AppUtil.getHP(3),
        marginHorizontal: AppUtil.getWP(5)
    },
    subIdeaList: {
        backgroundColor: GetAppColor.white,
        paddingTop: AppUtil.getHP(3),
        paddingBottom: AppUtil.getHP(8),
        height: '100%',
        marginTop: AppUtil.getHP(2)
    },
    descriptionContent: {
        color: GetAppColor.pincolor,
        fontFamily: FONTS.robotRegular,
        fontSize: AppUtil.getHP(1.7),
        textAlign: 'left'
    },
    heading: {
        color: GetAppColor.pincolor,
        fontFamily: FONTS.robotBold,
        fontSize: AppUtil.getHP(2.2),
        textAlign: 'left',
        marginBottom: AppUtil.getHP(1),
    },
    contentBox: {
        width: '100%',
        paddingHorizontal: AppUtil.getWP(5),

    },
    videoPlay: {
        width: '100%', height: AppUtil.getHP(30),
        paddingHorizontal: AppUtil.getWP(5),
        // marginBottom: AppUtil.getHP(1),
        marginTop: AppUtil.getHP(1),
    },

    img: { width: '100%', height: AppUtil.getHP(32),},

    imgStyle: {
        width: '100%', height: AppUtil.getHP(32), backgroundColor: GetAppColor.lightWhite1, justifyContent:'center', alignItems:'center', backgroundColor:"red"
    }
})

export default IdeaStyle;