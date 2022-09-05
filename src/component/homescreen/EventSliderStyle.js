import { StyleSheet, Dimensions, Platform } from 'react-native';
import { AppUtil } from '../../utils/AppUtil'
import { GetAppColor } from '../../utils/Colors';

const slideWidth = AppUtil.getWP(75);
const itemHorizontalMargin = AppUtil.getWP(2);
const { width: viewportWidth } = Dimensions.get('window');
export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 6;

const EventSliderStyle = StyleSheet.create({
    MainView: { width: '100%', height: AppUtil.getHP(32), backgroundColor: GetAppColor.lightWhite },

    sliderContainer: { marginTop: AppUtil.getHP(2), marginBottom: AppUtil.getHP(1) },
    paginationContainer: { paddingVertical: 1, backgroundColor: GetAppColor.lightWhite },

    paginationDot: { width: AppUtil.getHP(1.2), height: AppUtil.getHP(1.2), borderRadius: AppUtil.getHP(1.2), },

    renderMainView: { width: '100%', height: "93%", borderRadius: AppUtil.getHP(2) },
    bgImage: { width: '100%', height: "100%", borderRadius: AppUtil.getHP(1.7), overflow: 'hidden' },
    sliderRendTitleView: {
        position: 'absolute',
        // top: AppUtil.getHP(17),
        top: AppUtil.getHP(20),
        marginStart: AppUtil.getWP(4)
    },
    txtsliderRendTitle: { color: GetAppColor.white, fontSize: AppUtil.getHP(2.3), fontWeight: 'bold', paddingEnd: 30 },

    btnSliderRend: {
        flex: 1, marginVertical: AppUtil.getHP(0.5), top: AppUtil.getHP(20), marginStart: AppUtil.getWP(4),
        position: 'absolute', backgroundColor: GetAppColor.headerYellow, borderRadius: AppUtil.getHP(0.6),
    },
    txtsliderRendBtnTitle: { color: GetAppColor.white, fontSize: AppUtil.getHP(1.2), paddingHorizontal: 5, paddingVertical: 4 },

});

export default EventSliderStyle;