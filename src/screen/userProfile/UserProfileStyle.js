import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil'
import { GetAppColor } from '../../utils/Colors'
import FONTS from '../../utils/Fonts'


const UserProfileStyle = StyleSheet.create({
    MainView: {  width: '100%', backgroundColor: GetAppColor.white },
    tabHeader: { fontSize: 15, textTransform: 'capitalize', width: AppUtil.getWP(33.33) },
    tabBarItem: { width:AppUtil.getWP(33) },
    itemBorder: { backgroundColor: GetAppColor.innovationGrey },

    cornerView:{
        borderRadius:10,
        backgroundColor:GetAppColor.white,
        shadowColor:GetAppColor.grayBorder,
        shadowOpacity:0.2,
        elevation:5,
        paddingHorizontal:AppUtil.getWP(2.5),
        paddingVertical:AppUtil.getHP(2.5),
        marginHorizontal:AppUtil.getWP(2.5),
        marginVertical:AppUtil.getHP(7),
        marginTop:AppUtil.getHP(10),
        

    },
    userImage:{
        height:AppUtil.getHP(14),
        width:AppUtil.getHP(14),
        borderRadius:AppUtil.getHP(7),
          alignSelf:'center',
          marginTop:AppUtil.getHP(-9)
    },
    titleText:{
        alignSelf:'flex-start',
        color:GetAppColor.grayBorder,
        fontSize:AppUtil.getHP(1.5),
        fontFamily:FONTS.robotRegular,
        marginTop:AppUtil.getHP(1.5),
    },
    subTitleText:{
        alignSelf:'flex-start',
        color:GetAppColor.pincolor,
        fontSize:AppUtil.getHP(2),
        fontFamily:FONTS.robotRegular,
        marginTop:AppUtil.getHP(0.2),
    },
    flexView:{
        flexDirection:'row'
    },
    partView:{
        width:'50%',
    },
    scrollSubView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop:AppUtil.getHP(1)
    },
    catView:{
        marginEnd:AppUtil.getWP(2),
        marginVertical:AppUtil.getHP(0.40),
        borderRadius:10,
        borderWidth:1,
        borderColor:GetAppColor.borderGray
    },
    catText:{
        fontSize:AppUtil.getHP(2),
        fontFamily:FONTS.robotRegular,
        marginHorizontal:AppUtil.getHP(2),
        marginVertical:AppUtil.getHP(1)
    },
})
export default UserProfileStyle