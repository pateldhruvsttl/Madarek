import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';
import { buttonFontSize } from '../../utils/Constant';
import { buttonHeight } from '../../utils/Constant';

const IdeaStyle = StyleSheet.create({
  container : {
        height: '100%', width: '100%',
        backgroundColor: GetAppColor.lightGrey,
        paddingBottom: AppUtil.getHP(3)
    },
    MainView: {
    width: '100%',
    // flex: 1,
    backgroundColor: GetAppColor.white
},
    academyTitle: {
    fontFamily: FONTS.robotMedium,
    color: GetAppColor.acedemyRedtitle,
    fontSize: AppUtil.getWP(6)
},
    headerAcademyContainer: {
    width: "75%",
    marginVertical: AppUtil.getHP(3),
    marginHorizontal: AppUtil.getWP(5)
},
    subIdeaList: {
    backgroundColor: GetAppColor.white,
    paddingTop: AppUtil.getHP(3),
    paddingBottom: AppUtil.getHP(8),
    height: '100%',
    marginTop: AppUtil.getHP(2)
},
    descriptionContent: {
    color: GetAppColor.pincolor,
    fontFamily: FONTS.robotRegular,
    fontSize: AppUtil.getHP(1.7),
    textAlign: 'left'
},
    heading: {
    color: GetAppColor.pincolor,
    fontFamily: FONTS.robotBold,
    fontSize: AppUtil.getHP(2.2),
    textAlign: 'left',
    marginBottom: AppUtil.getHP(1),
},
    contentBox: {
    width: '100%',
    paddingHorizontal: AppUtil.getWP(5),
    marginBottom: AppUtil.getHP(1),
    paddingBottom: AppUtil.getHP(2)
},
    videoPlay: { width: '100%', paddingHorizontal: AppUtil.getWP(5), height: AppUtil.getHP(40), marginBottom: AppUtil.getHP(1), marginTop: AppUtil.getHP(1) }

})

export default IdeaStyle;