import { StyleSheet } from "react-native";
import { AppUtil } from "../../utils/AppUtil";
import { GetAppColor } from "../../utils/Colors";
import { buttonBorderRadius } from "../../utils/Constant";
import FONTS from "../../utils/Fonts";

const Style = StyleSheet.create({
  input: {
    borderRadius: buttonBorderRadius,
    height: AppUtil.getHP(10),
    borderWidth: 1,
    borderColor: GetAppColor.pincolor,
    backgroundColor: GetAppColor.lightWhite,
    padding: 0,
    paddingLeft: 5,
    marginTop: AppUtil.getHP(1),
    width: "100%",
    color: GetAppColor.textColor,
    fontSize: AppUtil.getHP(1.8),
  },
  MainView: {
    width: "100%",
    // flex: 1,
    backgroundColor: GetAppColor.white,
    paddingBottom: AppUtil.getHP(5)
  },
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: GetAppColor.white,
    paddingBottom: AppUtil.getHP(3),
  },
  commentListing: {
    marginTop: AppUtil.getHP(1),
    paddingBottom: AppUtil.getHP(1),
  },
  commentView: {
    marginHorizontal: AppUtil.getWP(5),
    marginTop: AppUtil.getHP(1.5),
  },
  commentText: {
    fontFamily: FONTS.robotMedium,
    fontSize: AppUtil.getHP(2),
    color:GetAppColor.textColor
  },
  commentBtn: {
    width: AppUtil.getWP(25),
    height: AppUtil.getHP(4),
    borderRadius: 5,
    backgroundColor: GetAppColor.lightOrange,
    alignItems: "center",
    justifyContent: "center",
  },
  commentBtnText: {
    color: GetAppColor.white,
    fontFamily: FONTS.robotBold,
    fontSize: AppUtil.getHP(1.8),
  },
  middleView: {
    marginHorizontal: AppUtil.getWP(5),
    marginTop: AppUtil.getHP(3),
  },
  middleTitle: {
    color: GetAppColor.pincolor,
    fontFamily: FONTS.robotMedium,
    fontSize: AppUtil.getHP(2),
  },
  middleLine: {
    backgroundColor: GetAppColor.grayShadeBorder,
    padding: AppUtil.getWP(0.2),
    marginTop: AppUtil.getHP(1),
  },
  renderComment: {
    flexDirection: "row",
    paddingHorizontal: AppUtil.getWP(5),
    marginTop: AppUtil.getHP(2),
  },
  renderChildComment: {
    flexDirection: "row",
    paddingStart: AppUtil.getWP(15),
    marginTop: AppUtil.getHP(2),
  },
  userImage: {
    width: AppUtil.getHP(5),
    height: AppUtil.getHP(5),
    borderRadius: AppUtil.getHP(2.5),
    backgroundColor: GetAppColor.borderGray,
    marginEnd: AppUtil.getWP(2),
  },
  leftItems1: {
    marginTop: AppUtil.getHP(1),
    width: AppUtil.getWP(80)
  },
  date: {
    color: GetAppColor.grayShadeBorder,
    fontFamily: FONTS.robotMedium,
    fontSize: AppUtil.getHP(1.8)
  },
  userName: {
    color: GetAppColor.pincolor,
    fontFamily: FONTS.robotBold,
    fontSize: AppUtil.getHP(1.8)
  },
  title: { fontSize: AppUtil.getHP(1.8), fontFamily: FONTS.robotRegular, color: GetAppColor.textColor },
  titleComment: {
    fontSize: AppUtil.getHP(1.8),
    fontFamily: FONTS.robotRegular,
    color: GetAppColor.textColor,
    width:'90%',
  },

  secondInnerCalView: {
    flexDirection: 'row', marginEnd: AppUtil.getHP(2),
    alignItems: 'center'
  },
  icnLikeUp: {
    marginEnd: AppUtil.getHP(0.5),
  },
  replyBtn: {
    marginStart: AppUtil.getHP(1.5),
  },
  replyBtnTxt: {
    color: GetAppColor.borderRed,
    fontSize: AppUtil.getHP(1.8),
    fontFamily: FONTS.robotRegular,
  }

})
export default Style
