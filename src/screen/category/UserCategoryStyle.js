import { StyleSheet } from "react-native"
import { GetAppColor } from "../../utils/Colors"
import { AppUtil } from "../../utils/AppUtil"
import FONTS from "../../utils/Fonts"

const Style = StyleSheet.create({
    btnView: {
        width: AppUtil.getWP(30),
        height: AppUtil.getHP(12),
        borderWidth: 0.5,
        borderBottomWidth: AppUtil.getHP(.4),
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: "1%",
        marginVertical: '1%',
        borderRadius: 5,
        backgroundColor: GetAppColor.white,
        borderColor: GetAppColor.catBorder,
        paddingHorizontal : AppUtil.getWP(1)
        
    },
    heartView: { alignSelf: 'flex-end', end: 5, position:'absolute', top:5 },
    input: { width: '90%', padding: 0, height: '100%', padding:0, color:GetAppColor.textColor },
    searchView: { flexDirection: 'row', width: '100%', alignItems: 'center', paddingHorizontal: AppUtil.getWP(5), height: 50, backgroundColor: GetAppColor.white, justifyContent: 'space-between' },
    txtBtn: {
        fontSize: AppUtil.getHP(1.6),
        marginTop: AppUtil.getHP(0.9),
        color: GetAppColor.textColor,
        fontFamily: FONTS.robotRegular,
        textAlign: 'center',
    },
    lisView: {
        justifyContent: 'center',
        paddingHorizontal:AppUtil.getWP(2)
        // alignItems: 'center',
        
    },
    flatelist:{
        marginTop:AppUtil.getHP(1.6),
        height : '100%',
        backgroundColor : GetAppColor.lightWhite
    }

})

export default Style