import React, { useState } from 'react';
import { View, VideoStyleheet, Text, TouchableOpacity, Image } from 'react-native';
import Video from 'react-native-video';;
import { Label } from '../../utils/StringUtil';
import { getControl } from '../../utils/Assets';
import VideoStyle from './VideoPlayerStyle';

const VideoPlayer = () => {
    const [isPaused, setPause] = useState(true)
    return (
        <View style={VideoStyle.container}>
            <Text style={VideoStyle.heading}>{Label.Video}</Text>
            <View style={{flex: 1}}>
            <Video source={{ uri: 'http://techslides.com/demos/sample-videos/small.mp4' }}
                playInBackground={false}
                resizeMode={'cover'}
                fullscreen={true}
                style={VideoStyle.backgroundVideo}
                controls={true}
                paused={isPaused} />

            {isPaused ?
                <TouchableOpacity
                    onPress={() => setPause(!isPaused)}
                    style={VideoStyle.controlBtn}
                >
                    <Image source={getControl.playVideo}
                        style={VideoStyle.img} height={30} width={30} />
                </TouchableOpacity>
               :
                null
            } 
            </View>
        </View>
    );
}
export default VideoPlayer

