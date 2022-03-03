import { StyleSheet, Dimensions, Platform } from 'react-native';
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';

const Style = StyleSheet.create({
    MainView: { width: '100%', marginVertical:AppUtil.getHP(2), paddingHorizontal:AppUtil.getWP(4)},

    titleView:{flexDirection:'row', justifyContent:'space-between', alignItems:"center", marginBottom:AppUtil.getHP(1)},
    txtTitle:{fontSize:AppUtil.getHP(2.1), color:GetAppColor.black, fontWeight:"bold"},
    txtSeeMore:{fontSize:AppUtil.getHP(1.7)},

    renderMainView:{width:'100%', marginBottom:AppUtil.getHP(1),padding:'4%', borderRadius:AppUtil.getHP(1), 
    alignItems:"center",backgroundColor:GetAppColor.white, flexDirection:'row', justifyContent:"space-between"},

    img:{ width:  "100%", height: AppUtil.getHP(13), borderRadius: AppUtil.getHP(1)},

    rightItems:{width:'45%',},
    leftItems:{width:'50%'},

    calView:{flexDirection:'row', alignItems:'center'},
    callIcn:{marginEnd:AppUtil.getHP(1)},

    title:{fontSize:AppUtil.getHP(1.4)},
    SubTitle:{fontSize:AppUtil.getHP(1.9), fontWeight:'bold', color:GetAppColor.borderRed, marginVertical:AppUtil.getHP(0.7)},

    secondCalView:{flexDirection:'row', marginTop:AppUtil.getHP(1), justifyContent:'flex-start'},
    secondInnerCalView:{flexDirection:'row', marginRight:AppUtil.getHP(1)},

    bottomBtn:{width:'100%', height:AppUtil.getHP(5),borderColor:GetAppColor.skipBorderColor,
    borderRadius:AppUtil.getHP(1), borderWidth:AppUtil.getHP(0.1), justifyContent:'center', alignItems:'center'},
    txtBottomBtn:{fontSize:AppUtil.getHP(2),color:GetAppColor.headerYellow,fontWeight:'bold'},
});

export default Style;