import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';

const Style = StyleSheet.create({
    MainView: { flex: 1, marginVertical: '5%',  backgroundColor: GetAppColor.white },
    headerView: {width:'100%', height:50, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:'5%', backgroundColor:GetAppColor.lightWhite},
    txtTitle:{fontFamily:FONTS.robotMedium , fontSize:AppUtil.getHP(2.5)},
    txtClose:{fontFamily:FONTS.robotMedium , fontSize:AppUtil.getHP(2.5), color:GetAppColor.grayBorder},

    userTypeButtonView:{
        flexDirection:'row',
        alignItems:'center',
         marginTop:AppUtil.getHP(1.5),
         justifyContent:'space-between'
    },
    yellowBorderView:{
        height:AppUtil.getHP(2.71),
        width:AppUtil.getHP(2.71),
        borderRadius:AppUtil.getHP(2.71/2),
        borderColor:GetAppColor.headerYellow,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
         marginBottom:AppUtil.getHP(0.5),
    },
    yellowFillView:{
        height:AppUtil.getHP(1.79),
        width:AppUtil.getHP(1.79),
        borderRadius:AppUtil.getHP(1.79/2),
        backgroundColor:GetAppColor.headerYellow,
        alignItems:'center',
        justifyContent:'center'
    },
    grayBorderView:{
        height:AppUtil.getHP(2.71),
        width:AppUtil.getHP(2.71),
        borderRadius:AppUtil.getHP(2.71/2),
        borderColor:GetAppColor.grayBorder,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
         marginBottom:AppUtil.getHP(0.5),
    },
});

export default Style;