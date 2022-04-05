import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil'
import { GetAppColor } from '../../utils/Colors'
import FONTS from '../../utils/Fonts'
import { buttonHeight } from '../../utils/Constant'
import { buttonBorderRadius } from '../../utils/Constant'
import { buttonFontSize } from '../../utils/Constant'


const STYLE = StyleSheet.create({
    container: {
        backgroundColor: GetAppColor.backGround,
        width: '100%',
        height: '100%'
    },
    txtBox: {
        backgroundColor: GetAppColor.white,
        marginHorizontal: AppUtil.getWP(5),
        marginTop: AppUtil.getHP(2),
        paddingHorizontal: AppUtil.getHP(2.5),
        paddingVertical: AppUtil.getHP(2),
        borderRadius: AppUtil.getHP(2),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    bold : { fontWeight: 'bold', fontFamily: FONTS.robotItalic },
    title: {
        color: GetAppColor.pincolor,
        fontFamily: FONTS.robotBold,
        fontSize:AppUtil.getHP(2),
        paddingTop:AppUtil.getHP(0.8),
    },
    subTitleOne : {
        fontFamily:FONTS.robotRegular,
        color:GetAppColor.pincolor,
        fontSize : AppUtil.getHP(1.8),
        paddingTop:AppUtil.getHP(0.8),
        paddingBottom:AppUtil.getHP(0.8)
    },
    subTitleTwo : {
        fontFamily:FONTS.robotRegular,
        color:GetAppColor.textColor,
        fontSize : AppUtil.getHP(1.7),
        paddingTop:AppUtil.getHP(0.8),
        textAlign:'left'
    },
    btn : {
        height : buttonHeight,
        borderRadius : buttonBorderRadius,
        justifyContent:'center',
        alignItems:'center',
        marginTop : AppUtil.getHP(3),
        marginBottom : AppUtil.getHP(1)
    },
    btnTxt : {
        fontFamily : FONTS.robotMedium,
        fontSize : buttonFontSize
    }
})

export default STYLE