import { StyleSheet, Dimensions, Platform } from 'react-native';
import { AppUtil } from '../../utils/AppUtil'
import { GetAppColor } from '../../utils/Colors';

const slideWidth = AppUtil.getWP(100);
// const slideWidthOne = AppUtil.getWP(100);
// export const sliderWidthOne = viewportWidth;
// export const itemWidthOne = slideWidthOne ;
const itemHorizontalMargin = AppUtil.getWP(0);
const { width: viewportWidth } = Dimensions.get('window');
export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 6;

const IdeaSliderStyle = StyleSheet.create({
    MainView: { width: '100%', height: AppUtil.getHP(32), backgroundColor: GetAppColor.lightWhite },
    
    sliderContainer: { marginTop: AppUtil.getHP(2), marginBottom: AppUtil.getHP(1) },
    paginationContainer: { position:'absolute',bottom:0,alignSelf:'center'},

    paginationDot: {
        width: AppUtil.getHP(1.2),
        height: AppUtil.getHP(1.2),
        borderRadius: AppUtil.getHP(1.2),
       
    },

    sliderRendTitleView: { position: 'absolute', top: AppUtil.getHP(17), marginStart: AppUtil.getWP(4) },
    txtsliderRendTitle: { color: GetAppColor.white, fontSize: AppUtil.getHP(2.3), fontWeight: 'bold' },

    btnSliderRend: {
        flex: 1, marginVertical: AppUtil.getHP(0.5), top: AppUtil.getHP(20), marginStart: AppUtil.getWP(4),
        position: 'absolute', backgroundColor: GetAppColor.headerYellow, borderRadius: AppUtil.getHP(0.6),
    },
    txtsliderRendBtnTitle: { color: GetAppColor.white, fontSize: AppUtil.getHP(1.2) , paddingHorizontal:5, paddingVertical: 4},
    
});

export default IdeaSliderStyle;