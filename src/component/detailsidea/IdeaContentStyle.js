import { Platform, StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';
import { buttonFontSize } from '../../utils/Constant';
import { buttonHeight } from '../../utils/Constant';
import { useSelector, useDispatch } from 'react-redux'
import { buttonBorderRadius } from '../../utils/Constant';

const IdeaContentStyle = StyleSheet.create({
    line: { height: 1, width: AppUtil.getWP(90), alignSelf: "center", marginTop: AppUtil.getHP(1.5), backgroundColor: GetAppColor.barGrey, paddingHorizontal: AppUtil.getWP(5) },
    academyTitle: {
        fontFamily: FONTS.robotMedium,
        fontSize: AppUtil.getHP(2.3)
    },
    headerAcademyContainer: {
        width: "100%",
        paddingVertical: AppUtil.getHP(2),
    },
    headerAcademyTitle: {
        width: '100%',
        paddingHorizontal: AppUtil.getWP(5),
    },
    dateContentChallenge: {
        marginTop: AppUtil.getHP(0.5),
        paddingHorizontal: AppUtil.getWP(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    openBtn: {
        backgroundColor: GetAppColor.buttonGreenColor,
        borderRadius: AppUtil.getHP(3),
        paddingHorizontal: AppUtil.getHP(1),
        paddingVertical: AppUtil.getHP(0.2),
        alignItems: 'center', justifyContent: 'center',
        marginStart: 5,
        // width:'30%'
    },
    openBtnTitle: {
        color: GetAppColor.white,
        fontFamily: FONTS.robotMedium,
        fontSize: AppUtil.getHP(1.6),
       
    },
    dateContentIdea: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Platform.OS === "android" ? AppUtil.getHP(0.5) : AppUtil.getHP(1),
        paddingHorizontal: AppUtil.getWP(5),
    },
    dateSubContain: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '70%',
    },

    contentTitle: {
        fontFamily: FONTS.robotRegular,
        fontSize: AppUtil.getHP(1.8), //2.5
        marginStart: AppUtil.getWP(1.5),
        color: GetAppColor.textColor,
        textAlign: 'center',
    },
    otherSpace: {
        alignItems: 'flex-start',
        width: AppUtil.getWP(40), fontFamily: FONTS.robotRegular,
        fontSize: AppUtil.getHP(1.8), //2.5
        marginStart: AppUtil.getWP(1.5),
        color: GetAppColor.textColor,
    },
    contentTitleSecond: {
        fontFamily: FONTS.robotRegular,
        fontSize: AppUtil.getHP(1.8), //2.5
        color: GetAppColor.textColor,

    },
    profileArea: {
        marginStart: AppUtil.getWP(5),
        flexDirection: 'row',
        alignItems: 'center',
    },
    sectorCategoryArea: {
        marginTop: Platform.OS === "android" ? AppUtil.getHP(0.5) : AppUtil.getHP(1),
        paddingHorizontal: AppUtil.getWP(5),
    },
    winningIcn: { marginEnd: AppUtil.getWP(1.8) },
    spacetoLeft: {
        marginStart: AppUtil.getWP(1.3),
    },
    winningIcnContainerLeft: {
        flexDirection: 'row', marginEnd: AppUtil.getWP(4.5), alignItems: 'center',
        justifyContent: 'center'
    },
    winningIcnContainerRight: {
        flexDirection: 'row',
    },
    performanceContainer: {
        flexDirection: 'row',
        paddingHorizontal: AppUtil.getWP(5),
        marginTop: AppUtil.getHP(2), width: '100%',
        justifyContent: 'space-between'

    },
    secondInnerCalView: {
        flexDirection: 'row', marginEnd: AppUtil.getHP(1.3), justifyContent: 'flex-end',
        alignItems: 'center'
    },
    secondInnerCalViewOne: {
        flexDirection: 'row', justifyContent: 'flex-end',
        alignItems: 'center'
    },
    btnArea: {
        paddingHorizontal: AppUtil.getWP(4),
        width: '100%',
        marginTop: AppUtil.getHP(2),
        flexDirection: 'row'
    },
    rightSide: {
        flexDirection: 'row', right: 0
    },
    leftSide: { flex: 1 },
    votingBtn: {
        height: buttonHeight,
        // width: AppUtil.getWP(45),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: buttonBorderRadius,
        // marginEnd: AppUtil.getHP(1),

    },
    followBtn: {
        height: buttonHeight,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: buttonBorderRadius,
        flexDirection: 'row',
        borderColor: GetAppColor.grayBorder,
        borderWidth: 1,
        backgroundColor: GetAppColor.white
    },
    voteNowBtnTitle: {
        fontSize: buttonFontSize,
        fontFamily: FONTS.robotMedium
    },
    followBtnTitle: {
        color: GetAppColor.grayBorder,
        fontSize: buttonFontSize,
        fontFamily: FONTS.robotMedium,
        paddingStart: AppUtil.getWP(3)

    },
    likeBtn: {
        height: buttonHeight,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: buttonBorderRadius,
        borderWidth: 1,
        width: AppUtil.getWP(12),
        borderColor: GetAppColor.grayBorder,
        backgroundColor: GetAppColor.white,
        marginStart: AppUtil.getHP(1),
        // right:5
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
        backgroundColor: GetAppColor.white,
        marginTop: AppUtil.getHP(2),
    },
})

export default IdeaContentStyle;