 import {StyleSheet} from 'react-native'
import { getAppInfo } from 'react-native/Libraries/LogBox/Data/LogBoxData'
import { AppUtil } from '../../utils/AppUtil'
import { GetAppColor } from '../../utils/Colors'
import FONTS from '../../utils/Fonts'
 
 const CategoryListStyle = StyleSheet.create({
    headerView:{
        height:AppUtil.getHP(9),
        width:'100%',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:AppUtil.getWP(5),
        backgroundColor:GetAppColor.backGround,
    },
    headerText:{
        color:GetAppColor.pincolor,
        fontFamily:FONTS.robotMedium,
        fontSize:AppUtil.getHP(2.5),
    },
    flatStyle:{
        paddingHorizontal:AppUtil.getWP(5),
        backgroundColor:GetAppColor.white
    },
    catBtn:{
       paddingVertical:AppUtil.getHP(1.5),
       borderBottomWidth:1,
       borderBottomColor:GetAppColor.barGrey
    },
    selectedCatBtn:{
        paddingVertical:AppUtil.getHP(1.5),
        backgroundColor:GetAppColor.backGround,
        borderBottomWidth:1,
        borderBottomColor:GetAppColor.barGrey
     },
    cellText:{
        fontFamily:FONTS.robotRegular,
        fontSize:AppUtil.getHP(2.2),
        color:GetAppColor.pincolor,
        marginStart:AppUtil.getWP(2)
    },
    selectCellText:{
        fontFamily:FONTS.robotBold,
        fontSize:AppUtil.getHP(2.2),
        color:GetAppColor.headerYellow,
        marginStart:AppUtil.getWP(2)
    }
})
export default CategoryListStyle