import { StyleSheet, Dimensions, Platform } from 'react-native';
import { AppUtil } from '../../utils/AppUtil'
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';

const slideWidth = AppUtil.getWP(75);
const itemHorizontalMargin = AppUtil.getWP(2);
const { width: viewportWidth } = Dimensions.get('window');
export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 10;

const Style = StyleSheet.create({
    MainView: { width: '100%', flex:1, marginVertical:AppUtil.getHP(2), backgroundColor: GetAppColor.white},
   
    titleView:{flexDirection:'row', justifyContent:'space-between', marginHorizontal:AppUtil.getHP(2), marginVertical:AppUtil.getHP(2),alignItems:'center'},
    
    txtTitle: { fontSize: AppUtil.getHP(2.1), color: GetAppColor.textColor, fontFamily:FONTS.robotBold },
    txtSeeMore: { fontSize: AppUtil.getHP(1.7), color: GetAppColor.textColor, fontFamily:FONTS.robotRegular},

    // txtseeMoewView:{fontSize:AppUtil.getHP(2.6), fontWeight:'bold', color:GetAppColor.categoryText},
    // txtSubSeeMoewView:{fontSize:AppUtil.getHP(1.5), color:GetAppColor.categoryText},

    innerView1:{marginHorizontal:AppUtil.getHP(2), flexDirection:'row', justifyContent:'space-around'},
    innerView2:{marginHorizontal:AppUtil.getHP(2), flexDirection:'row', justifyContent:'space-around', marginTop:AppUtil.getHP(1.5)},
    btnView:{width:'30%', height:AppUtil.getHP(12), borderWidth:AppUtil.getHP(.1),
    borderBottomWidth:AppUtil.getHP(.4),justifyContent:'center', alignItems:'center',
    borderColor:GetAppColor.catBorder,
    borderRadius:5},

    txtBtn:{fontSize:AppUtil.getHP(1.6), marginTop:AppUtil.getHP(0.9), color:GetAppColor.textColor, fontFamily:FONTS.robotRegular, textAlign:'center'},
});

export default Style;