import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';
import { buttonFontSize } from '../../utils/Constant';
import { buttonHeight } from '../../utils/Constant';

const HomeStyle = StyleSheet.create({
    MainView: { backgroundColor: GetAppColor.white, alignItems: 'center' },

    innerFirstView: { width: '100%', marginTop: AppUtil.getHP(2) },
    innerSecondView1: { width: '100%', marginTop: AppUtil.getHP(6) },
    innerSecondView2: { width: '100%', marginTop: AppUtil.getHP(2) },
    
    innerView1: { width: '100%', marginTop: AppUtil.getHP(6), justifyContent: 'center' },
    innerView2: { width: '100%', marginTop: AppUtil.getHP(2.5), justifyContent: 'center' },

    txtStar: { fontSize: AppUtil.getHP(1.7), color: GetAppColor.borderRed, fontFamily: FONTS.robotRegular },
    txtTitle: { fontSize: AppUtil.getHP(1.5), color: GetAppColor.textColor, fontFamily: FONTS.robotRegular },
    txtPlus: { fontSize: AppUtil.getHP(4), color: GetAppColor.textColor, fontFamily: FONTS.robotLight },

    txtInputTitle: {
        fontSize: AppUtil.getHP(3), marginVertical: AppUtil.getHP(1), fontFamily: FONTS.robotLight,
        color: GetAppColor.pincolor, borderBottomWidth: 1, borderBottomColor: GetAppColor.btnBorderColor
    },
    
    txtIdeasTitle: {
        fontSize: AppUtil.getHP(2.2), marginTop: AppUtil.getHP(0.5), fontFamily: FONTS.robotRegular,
        color: GetAppColor.pincolor, paddingEnd:AppUtil.getWP(5)
    },

    selectMenuTitle1: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
        borderBottomWidth: 1, borderBottomColor: GetAppColor.btnBorderColor,
    },
    selectMenuTitle2: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},

    selectGender: { flexDirection: 'row', alignItems: 'center', marginTop: AppUtil.getHP(0.5), marginBottom: AppUtil.getHP(1) },
    yellowBorderView: {
        height: AppUtil.getHP(2),
        width: AppUtil.getHP(2),
        borderRadius: AppUtil.getHP(2 / 2),
        borderColor: GetAppColor.headerYellow,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    grayBorderView: {
        height: AppUtil.getHP(2),
        width: AppUtil.getHP(2),
        borderRadius: AppUtil.getHP(2 / 2),
        borderColor: GetAppColor.grayBorder,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    yellowFillView: {
        height: AppUtil.getHP(1.3),
        width: AppUtil.getHP(1.3),
        borderRadius: AppUtil.getHP(1.3 / 2),
        backgroundColor: GetAppColor.headerYellow,
        alignItems: 'center',
        justifyContent: 'center'
    },

    tcOptions: { marginHorizontal: AppUtil.getWP(2), flexDirection: 'row', alignItems: 'center' },
    txtOptions: { fontSize: AppUtil.getHP(2.5), marginStart: AppUtil.getWP(1), color: GetAppColor.pincolor, fontFamily: FONTS.robotLight },

    txtInputMobile: {
        width: '70%', height: AppUtil.getHP(5),
        fontSize: AppUtil.getHP(3), marginHorizontal: AppUtil.getHP(1), fontFamily: FONTS.robotLight,
        color: GetAppColor.pincolor, borderBottomWidth: 1, borderBottomColor: GetAppColor.btnBorderColor
    },
    txtInputMobile2: {
        width: '70%', height: AppUtil.getHP(5),fontSize: AppUtil.getHP(2.2), marginHorizontal: AppUtil.getHP(1), fontFamily: FONTS.robotRegular, color: GetAppColor.pincolor
    },

    numberAreaOne1: {
        width: '25%',
        borderBottomWidth: 1,
        borderColor: GetAppColor.disableBorder,
        fontFamily: FONTS.robotRegular,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    numberAreaOne2: {
        fontFamily: FONTS.robotRegular,
        flexDirection: 'row',
        alignItems: 'center'
    },
    codePickerArea: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    backIcon: {
        position: 'absolute',
        right: 10,
    },

    addImageView: {
        width: AppUtil.getWP(25), height: AppUtil.getHP(8), borderWidth: 1, borderColor: GetAppColor.disableBorder, borderRadius: 3,
        justifyContent: 'center', alignItems: 'center', margin:5
    },
    imageContainer: { marginVertical: AppUtil.getHP(2), flexDirection: 'row', flexWrap: 'wrap' },
    imgStyle:{width: AppUtil.getWP(25), height: AppUtil.getHP(8), borderRadius: 3},
    removeIcnStyle:{position: 'absolute', right:-5, top:-5},

    txtNameView:{flexDirection:'row', marginTop:AppUtil.getHP(2.5)},
    txtName:{width:'50%'},
    btn: {
        width: '95%', height: buttonHeight, justifyContent: 'center', alignItems: 'center', marginTop: AppUtil.getHP(6), borderRadius: AppUtil.getHP(0.7),
        backgroundColor: GetAppColor.lightOrange
    },
    txtBtn: { fontSize: buttonFontSize, color: GetAppColor.white, fontFamily: FONTS.robotMedium },



   
    
});

export default HomeStyle;