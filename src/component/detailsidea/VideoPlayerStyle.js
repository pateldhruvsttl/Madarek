import { StyleSheet } from 'react-native';
import { GetAppColor } from '../../utils/Colors';
import { AppUtil } from '../../utils/AppUtil';
import FONTS from '../../utils/Fonts';


const VideoStyle = StyleSheet.create({
    img: {
        width: 30,
        height: 30,
        resizeMode: 'cover',
        alignSelf: 'center'
    },
    controlBtn: {
        position: 'absolute',
        top: '45%', left: '45%'
    },
    backgroundVideo: {
        flex: 1,
        borderRadius: AppUtil.getHP(1)
    },
    container: {
        flex: 1,
        paddingVertical: AppUtil.getHP(2)
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    heading: {
        color: GetAppColor.pincolor,
        fontFamily: FONTS.robotBold,
        fontSize: AppUtil.getHP(2.2),
        textAlign: 'left',
        marginBottom: AppUtil.getHP(2),
    },

});
export default VideoStyle