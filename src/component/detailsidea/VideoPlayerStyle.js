import { StyleSheet } from 'react-native';
import { GetAppColor } from '../../utils/Colors';
import { AppUtil } from '../../utils/AppUtil';
import FONTS from '../../utils/Fonts';


const VideoStyle = StyleSheet.create({

    container: {
        height: AppUtil.getHP(35),
        width: '100%',
        paddingVertical: AppUtil.getHP(2)
    },

    controlBtn: { position: 'absolute', alignSelf: 'center', top: '60%' },
    controlBtn1: { width: '100%', height: '100%', position: 'absolute', top: '20%' },

    controlBtn2: { width: '100%', height: '100%', position: 'absolute', top: '30%', alignSelf: 'flex-end' },
    controlBtn3: { flex: 1, position: 'absolute', top: '22%', alignSelf: 'flex-end', padding: 10 },
    img: {
        width: 30,
        height: 30,
        resizeMode: 'cover',
        alignSelf: 'center'
    },

    backgroundVideo: {
        height: AppUtil.getHP(30),
        width: '100%',
        borderRadius: AppUtil.getHP(1)
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