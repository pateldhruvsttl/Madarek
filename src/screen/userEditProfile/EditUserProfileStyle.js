import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil'
import { GetAppColor } from '../../utils/Colors'
import { buttonBorderRadius, buttonFontSize, buttonHeight } from '../../utils/Constant'
import FONTS from '../../utils/Fonts'

const EditUserProfileStyle = StyleSheet.create({
    slideView: {
        height: AppUtil.getHP(10),
        width: '100%',
        backgroundColor: GetAppColor.headerYellow,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
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
    roundSlide:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
    },
    rightCheckView:{
        height:AppUtil.getHP(4),
        width:AppUtil.getHP(4),
        borderRadius:AppUtil.getHP(2),
        backgroundColor:GetAppColor.editRoundColor,
        alignItems:'center',
        justifyContent: 'center',
    },
    line:{
        height:1,
        width:AppUtil.getWP(27),
        backgroundColor:GetAppColor.editRoundColor,
    },
    textLineView:{
        justifyContent: 'space-around',
        alignItems:'center',
        flexDirection:'row',
        width:'100%',
marginTop:AppUtil.getHP(1),

    },
    slideText:{
        fontFamily:FONTS.robotRegular,
        fontSize:AppUtil.getHP(1.8),
        color:GetAppColor.white,
    },
    imageView:{
        marginTop:AppUtil.getHP(-11),
       alignSelf:'center',

      },
      userEditImage:{
       height:AppUtil.getHP(18),
       width:AppUtil.getHP(18),
       borderWidth:5,
       borderColor:GetAppColor.white,
       borderRadius:AppUtil.getHP(9),
       backgroundColor:'red', 
   },
   cameraIconBtn:{
       height:AppUtil.getHP(5),
       width:AppUtil.getHP(5),
       borderRadius:AppUtil.getHP(2.5),
       // backgroundColor:GetAppColor.catBorder,
       position:'absolute',
       bottom:0,
       end:0,
       alignItems:'center',
       justifyContent: 'center',
   },

   contentView:{
       paddingHorizontal:AppUtil.getWP(2.5),
   },
   input:{
       borderBottomWidth:1,
       borderBottomColor:GetAppColor.editProfBorder,
       height:AppUtil.getHP(4),
       fontFamily:FONTS.robotMedium,
       fontSize:AppUtil.getHP(1.8),
       padding:0,
       color:GetAppColor.pincolor
   },
   editPartView:{
       width:'45%',
   },
   editFlexView:{
      flexDirection:'row',
      justifyContent:'space-between'
   },
   submitButton: {
       width: '100%',
       height: buttonHeight,
       backgroundColor: GetAppColor.headerYellow,
       borderRadius: buttonBorderRadius,
       alignItems: 'center',
       justifyContent: 'center',
       alignSelf: 'center',
       marginTop: AppUtil.getHP(2.5),
        marginBottom:AppUtil.getHP(1.5)
   },
   submitText:{ color: GetAppColor.white, fontFamily:FONTS.robotMedium, fontSize:buttonFontSize },
   catView1:{
       marginEnd:AppUtil.getWP(2),
       marginVertical:AppUtil.getHP(0.40),
       borderRadius:5,
       borderWidth:1,
       borderColor:GetAppColor.borderGray,
       flexDirection:'row',
       alignItems:'center',
       paddingHorizontal:AppUtil.getHP(1),
       backgroundColor:GetAppColor.white
   },
   catText1:{
       fontSize:AppUtil.getHP(2),
       fontFamily:FONTS.robotRegular,
       marginEnd:AppUtil.getHP(1),
       marginVertical:AppUtil.getHP(1),
       color:GetAppColor.textColor
   },
   addMoreButton:{
       width:AppUtil.getWP(30),
       height:AppUtil.getHP(4),
       borderRadius:AppUtil.getHP(2),
       justifyContent:'center',
       alignItems:'center',
       borderWidth:1,
       borderColor:GetAppColor.catBorder,
        marginTop:AppUtil.getHP(1)
   },
   addMoreText:{
       color:GetAppColor.catBorder,
       fontFamily:FONTS.robotMedium,
       fontSize:AppUtil.getHP(1.8),
   },
   titleText:{
    color:GetAppColor.grayBorder,
    fontSize:AppUtil.getHP(1.6),
    fontFamily:FONTS.robotRegular,
    marginTop:AppUtil.getHP(3),
},
subTitleText:{
    color:GetAppColor.pincolor,
    fontSize:AppUtil.getHP(2),
    fontFamily:FONTS.robotRegular,
    marginTop:AppUtil.getHP(0.7),
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

export default EditUserProfileStyle