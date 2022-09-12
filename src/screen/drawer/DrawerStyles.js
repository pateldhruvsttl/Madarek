import { StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated'
import { useSelector } from 'react-redux'
import { AppUtil } from '../../utils/AppUtil'
import { GetAppColor } from '../../utils/Colors'
import FONTS from '../../utils/Fonts'


const drawerStyles = StyleSheet.create({
  headerProfileIcn: { marginHorizontal: AppUtil.getHP(1) },
  txtMenuOptions: { color: GetAppColor.pincolor, fontFamily: FONTS.robotRegular },
  menuView: { flexDirection: 'column', justifyContent: 'center' },
  selectItem: {
    borderBottomWidth: AppUtil.getWP(0.2),
    borderBottomColor: GetAppColor.backColor,
    paddingStart: AppUtil.getWP(5),
    paddingTop: AppUtil.getHP(1),
    paddingBottom: AppUtil.getHP(1),
    color:GetAppColor.pincolor
  },
  moreView: { alignItems: 'flex-end', flex: 1 },
  optionsView: {
    backgroundColor: GetAppColor.white,
    borderRadius: AppUtil.getHP(1),
    shadowColor: GetAppColor.pincolor,
    shadowOffset: { width: 0, height: AppUtil.getHP(1) },
    shadowOpacity: 0.05,
    shadowRadius: AppUtil.getHP(1),
  },
  headerView: { marginHorizontal: AppUtil.getWP(4), marginTop: AppUtil.getHP(1) },
  centerIcnView: { width: '100%', alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'space-between', marginTop: AppUtil.getHP(1) },
 
  menuContainer: { marginEnd: AppUtil.getWP(2), alignItems: 'center', justifyContent: 'center' },
  profileImageView: { height: AppUtil.getHP(5), width: AppUtil.getHP(5), borderRadius: AppUtil.getHP(5 / 2), borderWidth: 1, borderColor: 'white', overflow: 'hidden' },
  profileImage: { height: AppUtil.getHP(4), width: AppUtil.getHP(4), },

  yellowLineView: { width: '100%', height: 1, opacity: 0.5, marginTop: AppUtil.getHP(1) },
  profileView: { flexDirection: "row", marginHorizontal: AppUtil.getWP(4), marginTop: AppUtil.getHP(2), alignItems: 'center' },
  welcomeText: { fontFamily: FONTS.robotRegular, fontSize: AppUtil.getHP(1.7), color: GetAppColor.white },
  userNameText: { fontFamily: FONTS.robotMedium, fontSize: AppUtil.getHP(2), color: GetAppColor.white },
  dsButtonView: { flexDirection: 'row', marginHorizontal: AppUtil.getWP(16), marginTop: AppUtil.getHP(1), marginBottom: AppUtil.getHP(1) },
  bothSideView: {
    flexDirection: 'row', marginTop: AppUtil.getHP(1),
    marginBottom: AppUtil.getHP(1), justifyContent: 'space-between'
  },
  leftItem: { flexDirection: 'row', marginHorizontal: AppUtil.getWP(16) },
  dashBoardButton: { borderColor: GetAppColor.white, borderWidth: 0.8, borderRadius: 5 },
  dashText: { fontFamily: FONTS.robotRegular, fontSize: AppUtil.getHP(1.5), color: GetAppColor.white, marginHorizontal: AppUtil.getHP(1), marginVertical: AppUtil.getHP(0.5) },
  menuButton: { marginHorizontal: AppUtil.getWP(4), height: AppUtil.getHP(6), borderBottomColor: GetAppColor.borderGray, borderBottomWidth: 1, flexDirection: 'row', alignItems: 'center', },
  subMenuButton: { marginHorizontal: AppUtil.getWP(10), height: AppUtil.getHP(4), flexDirection: 'row', alignItems: 'center', },
  bottomView: { position: 'absolute', bottom: 0, height: AppUtil.getHP(6), backgroundColor: GetAppColor.backGround, width: '100%', flexDirection: 'row' },
  settingButton: { width: '50%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' },
  settingText: { fontFamily: FONTS.robotRegular, fontSize: AppUtil.getHP(2.05), color: GetAppColor.pincolor, marginStart: AppUtil.getWP(2), },
  menuText: { fontSize: AppUtil.getHP(2), color: GetAppColor.pincolor, marginStart: AppUtil.getWP(2), },
  line: { width: 1, backgroundColor: GetAppColor.borderGray, height: '60%', alignSelf: 'center' },
  greyLine: { marginHorizontal: AppUtil.getWP(4), borderBottomColor: GetAppColor.borderGray, borderBottomWidth: 1, },

})
export default drawerStyles
