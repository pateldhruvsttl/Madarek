import { StyleSheet } from "react-native";
import { AppUtil } from "../../utils/AppUtil";
import { GetAppColor } from "../../utils/Colors";
import FONTS from "../../utils/Fonts";
import { buttonBorderRadius, buttonFontSize } from "../../utils/Constant";
import { buttonHeight } from "../../utils/Constant";

const ExpertInsightDetailStyle = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: GetAppColor.lightGrey,
    paddingBottom: AppUtil.getHP(3),
  },
  MainView: {
    width: "100%",
    // flex: 1,
    backgroundColor: GetAppColor.white,
  },
  academyTitle: {
    fontFamily: FONTS.robotMedium,
    color: GetAppColor.acedemyRedtitle,
    fontSize: AppUtil.getWP(6),
  },
  headerAcademyContainer: {
    width: "75%",
    marginVertical: AppUtil.getHP(3),
    marginHorizontal: AppUtil.getWP(5),
  },
  subIdeaList: {
    backgroundColor: GetAppColor.white,
    paddingTop: AppUtil.getHP(3),
    paddingBottom: AppUtil.getHP(8),
    height: "100%",
    marginTop: AppUtil.getHP(2),
  },
  descriptionContent: {
    color: GetAppColor.pincolor,
    fontFamily: FONTS.robotRegular,
    fontSize: AppUtil.getHP(1.7),
    textAlign: "left",
  },
  heading: {
    color: GetAppColor.pincolor,
    fontFamily: FONTS.robotBold,
    fontSize: AppUtil.getHP(2.2),
    textAlign: "left",
    marginBottom: AppUtil.getHP(1),
  },
  contentBox: {
    width: "100%",
    paddingHorizontal: AppUtil.getWP(5),
    marginBottom: AppUtil.getHP(1),
    paddingBottom: AppUtil.getHP(2),
  },
  videoPlay: {
    width: "100%",
    paddingHorizontal: AppUtil.getWP(5),
    height: AppUtil.getHP(40),
    marginBottom: AppUtil.getHP(1),
    marginTop: AppUtil.getHP(1),
  },
  //
  userFlexView: {
    flexDirection: "row",
    paddingHorizontal: AppUtil.getWP(5),
    alignItems: "center",
  },
  userImage: {
    width: AppUtil.getHP(5),
    height: AppUtil.getHP(5),
    borderRadius: AppUtil.getHP(2.5),
    backgroundColor: GetAppColor.borderGray,
    marginEnd: AppUtil.getWP(2),
  },
  userName: {
    fontFamily: FONTS.robotMedium,
    fontSize: AppUtil.getHP(1.8),
    color: GetAppColor.textColor,
  },
  userCatName: {
    fontFamily: FONTS.robotMedium,
    fontSize: AppUtil.getHP(1.4),
    color: GetAppColor.textColor,
  },
  leftItems: {
    paddingHorizontal: AppUtil.getWP(5),
    marginTop: AppUtil.getHP(1),
  },
  leftItems1: {
    marginTop: AppUtil.getHP(1),
    width:AppUtil.getWP(80)
  },
  line: {
    marginVertical: AppUtil.getHP(1),
    height: 1,
    width: "100%",
    backgroundColor: GetAppColor.borderGray,
  },

  title: {
    fontSize: AppUtil.getHP(1.7),
    fontFamily: FONTS.robotMedium,
    color: GetAppColor.black,
  },
  SubTitle: {
    fontSize: AppUtil.getHP(1.5),
    fontFamily: FONTS.robotRegular,
    color: GetAppColor.textColor,
    marginTop: AppUtil.getHP(0.5),
  },

  calView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: AppUtil.getHP(0.5),
  },
  icnTitle: {
    fontSize: AppUtil.getHP(1.5),
    marginStart: 2,
    marginEnd: AppUtil.getWP(5),
    fontFamily: FONTS.robotRegular,
    color: GetAppColor.textColor,
  },
  resourceContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: GetAppColor.white,
    alignItems: "center",
    height: AppUtil.getHP(5),
    // paddingHorizontal: AppUtil.getWP(3),
    marginBottom: AppUtil.getHP(1),
    shadowColor: "#000",
    borderRadius: buttonBorderRadius,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    marginTop: AppUtil.getHP(1.5),
    elevation: 3,
  },
  resourceSubTitle: { flex: 1, paddingStart: AppUtil.getWP(3) },

  resourceChallenge: {
    flex: 1,
    paddingStart: AppUtil.getWP(3),
    flexDirection: "row",
  },

  downloadIcon: {
    right: AppUtil.getWP(3),
  },
  img: {
    width: AppUtil.getWP(27),
    height: AppUtil.getHP(9),
    borderRadius: AppUtil.getHP(1),
    marginEnd: AppUtil.getHP(1.2),
  },
  imgView: {
    flexDirection: "row",
    marginTop: AppUtil.getHP(1),
  },
  commentView: {
    marginHorizontal: AppUtil.getWP(5),
    marginTop: AppUtil.getHP(1.5),
  },
  commentText: {
    fontFamily: FONTS.robotBold,
    fontSize: AppUtil.getHP(2),
  },
  input: {
    borderRadius: buttonBorderRadius,
    height: AppUtil.getHP(10),
    borderWidth: 1,
    borderColor: GetAppColor.inputBorder,
    backgroundColor: GetAppColor.lightWhite,
    padding: 0,
    paddingLeft: 5,
  },
  commentBtn: {
    width: AppUtil.getWP(25),
    height: AppUtil.getHP(4),
    borderRadius: 5,
    backgroundColor: GetAppColor.lightBlue,
    alignItems: "center",
    justifyContent: "center",
  },
  commentBtnText: {
    color: "white",
    fontFamily: FONTS.robotMedium,
  },
  cancelBtn: {
    width: AppUtil.getWP(25),
    height: AppUtil.getHP(4),
    borderRadius: 5,
    borderWidth:1,
    borderColor:GetAppColor.barGrey,
    alignItems: "center",
    justifyContent: "center",
    marginLeft:AppUtil.getWP(3)
  },
  cancelBtnText: {
    color: GetAppColor.grayBorder,
    fontFamily: FONTS.robotMedium,
  },
});

export default ExpertInsightDetailStyle;
