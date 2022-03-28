import { StyleSheet, Text, View } from 'react-native'
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';
import { buttonBorderRadius, buttonHeight } from '../../utils/Constant';
import { buttonFontSize } from '../../utils/Constant';


const IdeaContentStyle = StyleSheet.create({
    heading: {
        color: GetAppColor.pincolor,
        fontFamily: FONTS.robotBold,
        fontSize: AppUtil.getHP(2.2),
        textAlign: 'left',
        marginBottom: AppUtil.getHP(2)
    },
    contentBox: {
        width: '100%',
        paddingHorizontal: AppUtil.getWP(5),
        marginBottom: AppUtil.getHP(1),
        backgroundColor : GetAppColor.white,
        marginTop : AppUtil.getHP(1),
        paddingVertical:AppUtil.getHP(2)
    },
    resourceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: GetAppColor.white,
        alignItems: 'center',
        height: AppUtil.getHP(7),
        // paddingHorizontal: AppUtil.getWP(3),
        marginBottom: AppUtil.getHP(2),
        shadowColor: "#000",
        borderRadius:buttonBorderRadius,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
    },
    resourceSubTitle : 
    { flex: 1,paddingStart:AppUtil.getWP(3) },

    downloadIcon : {
        right:AppUtil.getWP(3)
    },

    resourceTitle: {
        fontSize: AppUtil.getHP(1.7),
        color: GetAppColor.pincolor,
        fontFamily: FONTS.robotRegular
    }
})


export default IdeaContentStyle