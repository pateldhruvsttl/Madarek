import { StyleSheet } from 'react-native'
import { hederHeight } from '../../utils/Constant';
import { GetAppColor } from '../../utils/Colors';
import { AppUtil } from '../../utils/AppUtil'
import FONTS from '../../utils/Fonts';

const Style = StyleSheet.create({

    MainView: {
        width: '100%', height: hederHeight,
        flexDirection: 'row', alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: GetAppColor.white
    },
    LeftIcnView: {
        alignItems: 'center',
        marginStart: AppUtil.getWP(4),
        marginEnd: AppUtil.getWP(5),
    },
    centerIcnView: { alignItems: 'center', flexDirection: 'row' },

    txtHeader: {
        fontFamily: FONTS.robotMedium,
        fontSize: AppUtil.getHP(2.3),
        width:'70%'
    }
    ,
    rightSingleIcnView: { alignItems: 'flex-end', marginEnd: AppUtil.getWP(3) },
    listing: {
        backgroundColor: GetAppColor.backGround,

    },
    subListing: {
        backgroundColor: GetAppColor.white,
        marginTop: AppUtil.getHP(1),
        paddingBottom: AppUtil.getHP(2),
        shadowColor: "#00000012",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    title: {
        color: GetAppColor.pincolor,
        fontFamily: FONTS.robotMedium,
        paddingStart: AppUtil.getWP(4),
        paddingTop: AppUtil.getHP(2),
        fontSize: AppUtil.getHP(2),
        paddingBottom: AppUtil.getHP(1)
    },
    clear : {
        color:GetAppColor.clearColor,
        paddingEnd : AppUtil.getWP(5)
    },
    header : {
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    seachView: {
        backgroundColor: GetAppColor.white,
        paddingHorizontal: AppUtil.getWP(5),
        paddingVertical: AppUtil.getHP(0.8),
        flexDirection:'row',
        alignItems:'center',
      
    },
    subLabel: {
        color: GetAppColor.textColor,
        fontFamily: FONTS.robotRegular,
        fontSize: AppUtil.getHP(1.8),
    },
    recent : {
       marginEnd : AppUtil.getWP(3)
    }

})

export default Style;