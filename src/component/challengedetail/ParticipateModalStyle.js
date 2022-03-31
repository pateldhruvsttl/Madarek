import { StyleSheet } from "react-native"
import { buttonFontSize } from "../../utils/Constant"
import { buttonHeight } from "../../utils/Constant"
import { AppUtil } from "../../utils/AppUtil"
import FONTS from "../../utils/Fonts"
import { GetAppColor } from "../../utils/Colors"
import { buttonBorderRadius } from "../../utils/Constant"

const Style = StyleSheet.create({
    modalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        justifyContent: "center",
         backgroundColor: "rgba(0,0,0,0.5)",
         padding:AppUtil.getHP(5),

    },
    modalHeaderTitle : {
        marginBottom: 15,
        textAlign: "center", 
        fontFamily:FONTS.robotLight,
        fontSize:AppUtil.getHP(3),
        color:GetAppColor.pincolor
    },
    squareArea : {
       
        width:'100%',
        backgroundColor: GetAppColor.white,
        borderRadius: AppUtil.getHP(3.5),
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    
    bottomSelectBtn: {
        height: buttonHeight,
        borderRadius: buttonBorderRadius,
        justifyContent: 'center', alignItems: 'center', 
        backgroundColor:GetAppColor.white,
        borderWidth:1,
        marginTop:AppUtil.getHP(5),
        width:'100%'

    },
    bottomBtn: {
        height: buttonHeight,
        borderRadius:buttonBorderRadius,
        justifyContent: 'center', alignItems: 'center', 
        marginBottom:AppUtil.getHP(3),
        marginTop:AppUtil.getHP(2.8),
        width:'100%'

    },
    closeIcon : {
        // alignItems: 'flex-end',
        position:'absolute',
        top:AppUtil.getHP(21.5),
        right:AppUtil.getHP(3),
    },

    txtBottomBtn: { fontSize: buttonFontSize, fontFamily: FONTS.robotMedium},
    txtSelectBtn : {fontSize: buttonFontSize, fontFamily: FONTS.robotMedium,color:GetAppColor.lightOrange}

})

export default Style