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
        fontFamily: FONTS.robotRegular,
        fontSize: AppUtil.getHP(2.1),
        width:'70%', 
    },
    searchBtnStyle:{width:'20%'},
    rightSingleIcnView: { alignItems: 'flex-end', flexDirection:'row' },
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
    },
    cateButton:{
        paddingHorizontal:AppUtil.getWP(3),
        paddingVertical:AppUtil.getHP(1),
        borderRadius:25,
        marginHorizontal:AppUtil.getWP(1),
        marginVertical:AppUtil.getHP(1),
    },
    catTextRegular:{
        fontSize:AppUtil.getHP(1.5),
        color:GetAppColor.textColor
    },
    catTextMedium:{
        fontSize:AppUtil.getHP(1.5),
        fontFamily:FONTS.robotMedium,
        color:GetAppColor.white
    },
    renderMainView: {
        margin:'2%',
        padding: '4%', borderRadius: AppUtil.getHP(1),
        alignItems: "center", backgroundColor: GetAppColor.white, flexDirection: 'row', justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 2.84,
        elevation: 2,
    },

    img: { width: "100%", height: AppUtil.getHP(13), borderRadius: AppUtil.getHP(1), borderWidth:0.5, borderColor:GetAppColor.disableBorder,overflow:'hidden' },

    rightItems: { width: '40%', },
    leftItems: { width: '55%'},

    calView: { flexDirection: 'row', alignItems: 'center' },
    
    callIcn: { marginEnd: AppUtil.getHP(1) },
    callLeftIcn: { marginEnd: AppUtil.getHP(1), marginStart:AppUtil.getHP(1), },

    title: { fontSize: AppUtil.getHP(1.3), fontFamily:FONTS.robotMedium, color:GetAppColor.textColor},
    
    SubTitle: { fontSize: AppUtil.getHP(1.9), fontFamily:FONTS.robotMedium, color: GetAppColor.borderRed, marginVertical: AppUtil.getHP(0.7) },

    secondCalView: { alignItems:'center', flexDirection: 'row', marginTop: AppUtil.getHP(1), justifyContent: 'flex-start'},
    secondInnerCalView: {flexDirection: 'row', marginEnd: AppUtil.getHP(2), alignItems:'center' },

    bottomBtn: {
        height: AppUtil.getHP(5), borderColor: GetAppColor.lightOrange, backgroundColor:GetAppColor.white,
        borderRadius: AppUtil.getHP(1), borderWidth: AppUtil.getHP(0.1), justifyContent: 'center', alignItems: 'center', margin: AppUtil.getHP(2),
    },
    txtBottomBtn: { fontSize: AppUtil.getHP(2), color: GetAppColor.lightOrange, fontFamily:FONTS.robotMedium },

    likeUnlikeIcn: { paddingHorizontal: AppUtil.getHP(2), position: 'absolute', end: 0, top: 5 },

    rewordView: {
        width: '100%', height: AppUtil.getWP(7), bottom: 0, borderBottomEndRadius: AppUtil.getHP(1),
        borderBottomStartRadius: AppUtil.getHP(1),
        position: 'absolute', backgroundColor: GetAppColor.blackTransperent, flexDirection:'row',
        alignItems:'center'
    },

    winningIcn: { marginStart: AppUtil.getHP(1)},

})

export default Style;