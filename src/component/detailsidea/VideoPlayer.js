import React, { useState } from 'react';
import { View, VideoStyleheet, Text, TouchableOpacity, Image } from 'react-native';
import Video from 'react-native-video';
import { Label } from '../../utils/StringUtil';
import { getControl, GetVideoControll } from '../../utils/Assets';
import VideoStyle from './VideoPlayerStyle';
import { AppConfig } from '../../manager/AppConfig';
import { AppUtil } from '../../utils/AppUtil';
import { baseURL } from '../../utils/Constant';
import { Loger } from '../../utils/Loger';

const VideoPlayer = (props) => {
    
    const [isPaused, setPause] = useState(true)
    const [isFullScreen, setFullScreen] = useState(false)
    return (
        <View style={VideoStyle.container}>
            <Text style={VideoStyle.heading}>{Label.Video}</Text>

            <Video source={{ uri: props.path }}
                playInBackground={false}
                resizeMode={'cover'}
                fullscreen={isFullScreen}
                style={VideoStyle.backgroundVideo}
                controls={true}
                repeat={true}
                paused={isPaused} />


            {isPaused ?
                <TouchableOpacity onPress={() => setPause(false)} style={VideoStyle.controlBtn} >
                    <Image source={getControl.playVideo} style={VideoStyle.img} height={50} width={50} />
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => setPause(true)} style={VideoStyle.controlBtn1} />
            }

            <TouchableOpacity onPress={() => setFullScreen(!isFullScreen)} style={VideoStyle.controlBtn3} >
                <Image source={GetVideoControll.playVideoFullScreenOn} style={VideoStyle.img} height={30} width={30} />
            </TouchableOpacity>

            {/* {!isFullScreen ?
                <TouchableOpacity onPress={() => setFullScreen(true)} style={VideoStyle.controlBtn3} >
                    <Image source={GetVideoControll.playVideoFullScreenOn} style={VideoStyle.img} height={30} width={30} />
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => setFullScreen(false)} style={VideoStyle.controlBtn3} >
                    <Image source={GetVideoControll.playVideoFullScreenOff} style={VideoStyle.img} height={30} width={30} />
                </TouchableOpacity>
            } */}



        </View>
    );
}
export default VideoPlayer

