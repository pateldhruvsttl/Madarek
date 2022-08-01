import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';
import { buttonFontSize } from '../../utils/Constant';
import { buttonHeight } from '../../utils/Constant';

const PAGESTYLE = StyleSheet.create({
    MainView: {
        width: '100%',
        // flex: 1,
        backgroundColor: GetAppColor.lightGrey
    },
    subMainView: {
        height: '100%', width: '100%', backgroundColor: GetAppColor.lightGrey, paddingBottom: AppUtil.getHP(3),
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
        backgroundColor: GetAppColor.lightGrey,
        // paddingTop: AppUtil.getHP(3),
        // paddingBottom: AppUtil.getHP(2),
        // height: '100%',
        // marginTop: AppUtil.getHP(2)
    },
    loadingMore: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadMoreView :{
        marginTop:AppUtil.getHP(1),
        marginBottom:AppUtil.getHP(1.5)
    },
    spacing: {
        backgroundColor: GetAppColor.white,
        width: AppUtil.getHP(2.5),
        height: AppUtil.getHP(2.5),
        borderRadius: AppUtil.getHP(2.5 / 2),
        justifyContent: 'center', alignItems: 'center', marginEnd: AppUtil.getWP(1.8)
    },
    txtLoadMore: {
        color: GetAppColor.textColor,
        fontFamily: FONTS.robotRegular,
        fontSize: AppUtil.getHP(1.6)
    },
    descriptionContent: {
        color: GetAppColor.pincolor,
        fontFamily: FONTS.robotRegular,
        fontSize: AppUtil.getHP(1.7),
        textAlign: 'left'
    },
    termsAndConTitle: {
        color: GetAppColor.grayBorder,
        fontFamily: FONTS.robotMedium,
        fontSize: AppUtil.getHP(1.7),
        textAlign: 'left',
        marginTop: AppUtil.getHP(2),
    },
    heading: {
        color: GetAppColor.pincolor,
        fontFamily: FONTS.robotBold,
        fontSize: AppUtil.getHP(2.2),
        textAlign: 'left',
        marginBottom: AppUtil.getHP(1),
    },
    contentBoxChallenge: {
        width: '100%',
        paddingHorizontal: AppUtil.getWP(5),
        marginBottom: AppUtil.getHP(1),
        paddingBottom: AppUtil.getHP(2),
        backgroundColor: GetAppColor.white
    },
    videoPlay: { width: '100%', paddingHorizontal: AppUtil.getWP(5), height: AppUtil.getHP(40), marginBottom: AppUtil.getHP(1), marginTop: AppUtil.getHP(1) },

    img: { width: '100%', height: AppUtil.getHP(32),},

    imgStyle: {
        width: '100%', height: AppUtil.getHP(32), backgroundColor: GetAppColor.lightWhite1, justifyContent:'center', alignItems:'center',
    }

})

export default PAGESTYLE;