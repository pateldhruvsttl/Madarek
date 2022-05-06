import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil'
import { GetAppColor } from '../../utils/Colors'
import FONTS from '../../utils/Fonts'

const STYLE = StyleSheet.create({
    container: {
        backgroundColor: GetAppColor.white,
        justifyContent: 'center',
        flex: 1
    },
    listing: {
        width: '100%',
        marginBottom: AppUtil.getHP(10)
    },
    textArea: {
        width: '100%',
        height: AppUtil.getHP(10),
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: AppUtil.getWP(55),
        borderRadius: AppUtil.getHP(3),
        backgroundColor: GetAppColor.chatInputColor,
        height: AppUtil.getHP(5.5),
        paddingStart: AppUtil.getWP(5),
        marginStart: AppUtil.getWP(4),
        justifyContent: 'space-between'
    },
    chatInput: {
        color: GetAppColor.pincolor,
        fontSize: AppUtil.getHP(1.8),
        width: AppUtil.getWP(40),
    },
    icnContainer: {
        marginStart: AppUtil.getWP(4),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icons: {
        marginEnd: AppUtil.getWP(4)
    },
    menuDocument: {
        marginEnd: AppUtil.getWP(2)
    },
    leftMsg: {
        backgroundColor: GetAppColor.chatInputColor,
        width: AppUtil.getWP(50),
        borderBottomRightRadius: AppUtil.getHP(2),
        borderTopLeftRadius: AppUtil.getHP(2),
        borderTopRightRadius: AppUtil.getHP(2),
        padding: AppUtil.getHP(1.5),

    },
    rightMsg: {
        backgroundColor: GetAppColor.chatInputColor,
        width: AppUtil.getWP(50),
        borderTopLeftRadius: AppUtil.getHP(2),
        borderTopRightRadius: AppUtil.getHP(2),
        borderBottomLeftRadius: AppUtil.getHP(2),
        padding: AppUtil.getHP(1.5),
        paddingStart: AppUtil.getHP(2.5),
    },
    messageContainer: {
        // margin: 20,
        marginHorizontal :  AppUtil.getHP(1.5), 
        flex: 1,
    },
    leftLabel: {
        color: GetAppColor.pincolor,
        fontFamily: FONTS.robotRegular,
        fontSize: AppUtil.getHP(1.8)
    },
    time: {
        fontFamily: FONTS.robotRegular,
        fontSize: AppUtil.getHP(1.6),
        color: GetAppColor.timeTxtColor,
        paddingTop: AppUtil.getHP(0.5)
    }
})

export default STYLE
