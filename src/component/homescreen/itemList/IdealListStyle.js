import { StyleSheet, Dimensions, Platform } from 'react-native';
import { AppUtil } from '../../../utils/AppUtil'
import { GetAppColor } from '../../../utils/Colors';

const EventSliderStyle = StyleSheet.create({
    MainView: { width: '100%', height: AppUtil.getHP(30), backgroundColor: GetAppColor.lightWhite },

    tabStly:{ height:AppUtil.getHP(4.5), justifyContent:'center', alignItems:'center', borderBottomColor:GetAppColor.innovationGrey},
    txtCat:{fontSize:AppUtil.getHP(2)}
});

export default EventSliderStyle;