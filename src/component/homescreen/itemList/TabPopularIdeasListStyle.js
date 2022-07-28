import { StyleSheet, Dimensions, Platform } from 'react-native';
import { AppUtil } from '../../../utils/AppUtil';
import { GetAppColor } from '../../../utils/Colors';

const Style = StyleSheet.create({
    MainView: { width: '100%'},
    emptyView:{
        height:AppUtil.getHP(10),
        margin:'2%',
        padding: '4%', borderRadius: AppUtil.getHP(1),
        alignItems: "center", 
        backgroundColor: GetAppColor.white,
         justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 3,
        elevation: 3,
        justifyContent:"center"
    },
    txtNoDataFound:{color:GetAppColor.black, fontSize:AppUtil.getHP(1.6)}
   
});

export default Style;