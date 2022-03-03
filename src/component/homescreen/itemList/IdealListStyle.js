import { StyleSheet, Dimensions, Platform } from 'react-native';
import { AppUtil } from '../../utils/AppUtil'
import { GetAppColor } from '../../utils/Colors';

const EventSliderStyle = StyleSheet.create({
    MainView: { width: '100%', height: AppUtil.getHP(30), backgroundColor: GetAppColor.lightWhite },

   
});

export default EventSliderStyle;