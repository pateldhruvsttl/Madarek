import { StyleSheet, Dimensions, Platform } from 'react-native';
import { AppUtil } from '../../utils/AppUtil'
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';

const slideWidth = AppUtil.getWP(75);
const itemHorizontalMargin = AppUtil.getWP(2);
const { width: viewportWidth } = Dimensions.get('window');
export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 10;

const EventSliderStyle = StyleSheet.create({
    MainView: { width: '100%', flex: 1, backgroundColor: GetAppColor.lightWhite },

    sliderContainer: { marginBottom: AppUtil.getHP(5), backgroundColor: GetAppColor.lightWhite },
    paginView: { width: '100%', marginVertical: AppUtil.getHP(1), position: 'absolute', bottom: AppUtil.getHP(-2), },

    titleView: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: AppUtil.getHP(2), marginVertical: AppUtil.getHP(2) },

    txtTitleOne: {
        color: GetAppColor.pincolor,
        fontFamily: FONTS.robotBold,
        fontSize: AppUtil.getHP(2.2),
        textAlign: 'left',
    },
    txtSeeMoreOne: {
        fontSize: AppUtil.getHP(1.7),
        color: GetAppColor.pincolor,
        fontFamily: FONTS.robotRegular
    },
    txtTitle: { fontSize: AppUtil.getHP(2.1), color: GetAppColor.textColor, fontFamily: FONTS.robotBold },
    txtSeeMore: { fontSize: AppUtil.getHP(1.7), color: GetAppColor.textColor, fontFamily: FONTS.robotRegular },

    // txtseeMoewView:{fontSize:AppUtil.getHP(2.6), fontFamily:FONTS.robotBold, color:GetAppColor.categoryText},
    // txtSubSeeMoewView:{fontSize:AppUtil.getHP(1.5),fontFamily:FONTS.robotRegular, color:GetAppColor.categoryText},

    renderMainView: { width: '100%', height: "93%", borderRadius: AppUtil.getHP(2), alignItems: 'center' },
    renderProfileView: { width: AppUtil.getHP(15), height: AppUtil.getHP(15), borderRadius: AppUtil.getHP(15), alignSelf: 'center' },
    profilePicView: { width: AppUtil.getHP(15), height: AppUtil.getHP(15), borderRadius: AppUtil.getHP(15), },



    txtNameView: { fontSize: AppUtil.getHP(2), fontFamily: FONTS.robotMedium, color: GetAppColor.pincolor, marginTop: AppUtil.getHP(1), textAlign: 'center' },
    txtSubNameView: { fontSize: AppUtil.getHP(1.5), fontFamily: FONTS.robotMedium, color: GetAppColor.textColor, marginTop: AppUtil.getHP(1), textAlign: 'center' },

    borderLine: { width: AppUtil.getHP(7), borderWidth: AppUtil.getHP(.2), borderColor: GetAppColor.lightBlue, marginTop: AppUtil.getHP(1), borderRadius: AppUtil.getHP(1) },

    txtTitleView: { fontSize: AppUtil.getHP(2), fontFamily: FONTS.robotBold, marginTop: AppUtil.getHP(1), color: GetAppColor.lightBlue, },
    txtSubtitleView: { fontSize: AppUtil.getHP(1.5), fontFamily: FONTS.robotRegular, color: GetAppColor.categoryText, marginTop: AppUtil.getHP(1), textAlign: 'center' },

    btnGrp: { flexDirection: 'row' },
    txtBtn: { fontSize: AppUtil.getHP(1.5), fontFamily: FONTS.robotRegular, color: GetAppColor.textColor, textAlign: 'center' },
    btn: { borderWidth: 1, borderColor: GetAppColor.textColor, margin: AppUtil.getHP(0.7), padding: AppUtil.getHP(0.7), borderRadius: AppUtil.getHP(0.7) },

    secondCalView: { flexDirection: 'row', marginTop: AppUtil.getHP(1), justifyContent: 'flex-start' },
    secondInnerCalView: { flexDirection: 'row', marginEnd: AppUtil.getHP(2) },
    calView: { flexDirection: 'row', alignItems: 'center' },
    callIcn: { marginEnd: AppUtil.getHP(1) },
    title: { fontSize: AppUtil.getHP(1.4), fontFamily: FONTS.robotRegular },


    paginationContainer: { paddingVertical: 1, marginBottom: AppUtil.getHP(1), backgroundColor: GetAppColor.lightWhite },

    paginationDot: {
        width: AppUtil.getHP(1.2),
        height: AppUtil.getHP(1.2),
        borderRadius: AppUtil.getHP(1.2),
    },

    sliderRendTitleView: { position: 'absolute', top: AppUtil.getHP(17), marginStart: AppUtil.getWP(4) },
    txtsliderRendTitle: { color: GetAppColor.white, fontSize: AppUtil.getHP(2.3), fontWeight: 'bold' },
    btnSliderRend: {
        width: AppUtil.getWP(22), marginVertical: AppUtil.getHP(0.5),
        padding: AppUtil.getHP(0.5), backgroundColor: GetAppColor.headerYellow, borderRadius: AppUtil.getHP(0.6)
    },
    txtsliderRendBtnTitle: { color: GetAppColor.white, fontSize: AppUtil.getHP(1.4) },







});

export default EventSliderStyle;