import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';
import { buttonFontSize } from '../../utils/Constant';
import { buttonHeight } from '../../utils/Constant';
import { useSelector, useDispatch } from 'react-redux'
import { buttonBorderRadius } from '../../utils/Constant';

const IdeaContentStyle = StyleSheet.create({
    academyTitle: {
        fontFamily: FONTS.robotMedium,
        color: GetAppColor.acedemyRedtitle,
        fontSize: AppUtil.getHP(2.3)
    },
    headerAcademyContainer: {
        width: "100%",
        marginVertical: AppUtil.getHP(3),
        // marginHorizontal:AppUtil.getWP(5),
        // paddingHorizontal: AppUtil.getWP(5),
    },
    headerAcademyTitle: {
        width: '100%',
        paddingHorizontal: AppUtil.getWP(5),
    },
    dateContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: AppUtil.getHP(1),
        paddingHorizontal: AppUtil.getWP(5),
    },
    contentTitle: {
        fontFamily: FONTS.robotRegular,
        fontSize: AppUtil.getHP(1.8), //2.5
        marginStart: AppUtil.getWP(1.5),
        color: GetAppColor.textColor,
        textAlign:'center'
    },
    contentTitleSecond: {
        fontFamily: FONTS.robotRegular,
        fontSize: AppUtil.getHP(1.8), //2.5
        color: GetAppColor.textColor
    },
    profileArea: {
        marginStart: AppUtil.getWP(5),
        flexDirection: 'row',
        alignItems:'center'
    },
    sectorCategoryArea: {
        marginTop: AppUtil.getHP(1),
        paddingHorizontal: AppUtil.getWP(5),
    },
    winningIcn: { marginEnd: AppUtil.getWP(1.5) },
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
        alignItems:'center'
    },
    secondInnerCalViewOne : {
        flexDirection: 'row', justifyContent: 'flex-end',
        alignItems:'center'
    },
    btnArea: {
        paddingHorizontal: AppUtil.getWP(4),
        width: '100%',
        marginTop: AppUtil.getHP(2),
        flexDirection: 'row'
    },
    rightSide : {
        flexDirection:'row',right:0
    },
    leftSide : { flex:1 },
    votingBtn: {
        height: buttonHeight,
        // width: AppUtil.getWP(45),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: buttonBorderRadius,
        // marginEnd: AppUtil.getHP(1),
       
    },
    voteNowBtnTitle: {
        // color:GetAppColor.white,
        fontSize: buttonFontSize,
        fontFamily: FONTS.robotMedium
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
})

export default IdeaContentStyle;