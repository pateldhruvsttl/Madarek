// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import VideoPlayer from 'react-native-video-player';

// const VideosPlayer = (props) => {
//   return (
//     <VideoPlayer
//     video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
//     videoWidth={1600}
//     videoHeight={1500}
//     thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
//     toggleResizeModeOnFullscreen = {true}
//     disableFullscreen={true}
// />

//   )
// }

// export default VideosPlayer

// const styles = StyleSheet.create({})

import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Slider,
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableOpacity,
  BackHandler,
  Image,
} from "react-native";
import Video from "react-native-video"; /// alreadyimported this
import Icon from "react-native-vector-icons/FontAwesome5"; // and this
import Orientation from "react-native-orientation";
import { getControl } from "../../utils/Assets";

const { width } = Dimensions.get("window");
const samplevideo = {
  uri:
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
};

export default class VideosPlayer extends Component {
  constructor(p) {
    super(p);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      currentTime: 0,
      duration: 0.1,
      paused: true,
      overlay: false,
      fullscreen: false,
    };
  }

  componentWillMount() {
    BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }

  handleBackButtonClick() {
    const { fullscreen } = this.state;
    if (fullscreen) {
      Orientation.lockToPortrait();
    }
    console.log('====================================');
    console.log("his.props.navi",this.props.navi);
    console.log('====================================');
      this.props.navi.goBack();
    return true;
  }

  lastTap = null;
  handleDoubleTap = (doubleTapCallback, singleTapCallback) => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (this.lastTap && now - this.lastTap < DOUBLE_PRESS_DELAY) {
      clearTimeout(this.timer);
      doubleTapCallback();
    } else {
      this.lastTap = now;
      this.timer = setTimeout(() => {
        singleTapCallback();
      }, DOUBLE_PRESS_DELAY);
    }
  };

  getTime = (t) => {
    const digit = (n) => (n < 10 ? `0${n}` : `${n}`);
    // const t = Math.round(time);
    const sec = digit(Math.floor(t % 60));
    const min = digit(Math.floor((t / 60) % 60));
    const hr = digit(Math.floor((t / 3600) % 60));
    return hr + ":" + min + ":" + sec; // this will convert sec to timer string
    // 33 -> 00:00:33
    // this is done here
    // ok now the theme is good to look
  };

  load = ({ duration }) => this.setState({ duration }); // now here the duration is update on load video
  progress = ({ currentTime }) => this.setState({ currentTime }); // here the current time is upated

  backward = () => {
    this.video.seek(this.state.currentTime - 5);
    clearTimeout(this.overlayTimer);
    this.overlayTimer = setTimeout(
      () => this.setState({ overlay: false }),
      3000
    );
  };
  forward = () => {
    this.video.seek(this.state.currentTime + 5); // here the video is seek to 5 sec forward
    clearTimeout(this.overlayTimer);
    this.overlayTimer = setTimeout(
      () => this.setState({ overlay: false }),
      3000
    );
  };

  onslide = (slide) => {
    this.video.seek(slide * this.state.duration); // here the upation is maked for video seeking
    clearTimeout(this.overlayTimer);
    this.overlayTimer = setTimeout(
      () => this.setState({ overlay: false }),
      3000
    );
  };

  youtubeSeekLeft = () => {
    const { currentTime } = this.state;
    this.handleDoubleTap(
      () => {
        this.video.seek(currentTime - 5);
      },
      () => {
        this.setState({ overlay: true });
        this.overlayTimer = setTimeout(
          () => this.setState({ overlay: false }),
          3000
        );
      }
    );
  };
  youtubeSeekRight = () => {
    const { currentTime } = this.state;
    this.handleDoubleTap(
      () => {
        // this fn is used to detect the double tap first callback
        this.video.seek(currentTime + 5);
      },
      () => {
        this.setState({ overlay: true });
        this.overlayTimer = setTimeout(
          () => this.setState({ overlay: false }),
          3000
        );
      }
    );
  };

  fullscreen = () => {
    const { fullscreen } = this.state;
    if (fullscreen) {
      Orientation.lockToPortrait();
    } else {
      Orientation.lockToLandscape();
    }
    this.setState({ fullscreen: !fullscreen });
  };

  render = () => {
    const { currentTime, duration, paused, overlay, fullscreen } = this.state;
    return (
      <View style={style.container}>
        <View style={fullscreen ? style.fullscreenVideo : style.video}>
          <Video
            fullscreen={fullscreen}
            paused={paused} // this will manage the pause and play
            ref={(ref) => (this.video = ref)}
            source={{ uri: this.props.path }}
            style={{ ...StyleSheet.absoluteFill }}
            resizeMode="stretch"
            onLoad={this.load}
            onProgress={this.progress}
            // onVideoEnd={this.onEndVideo}
          />
          <View style={style.overlay}>
            {/* now we can remove this not */}
            {overlay ? (
              <View style={{ ...style.overlaySet, backgroundColor: "#0006" }}>
                <Icon
                  name="backward"
                  style={style.icon}
                  onPress={this.backward}
                />
                <Icon
                  name={paused ? "play" : "pause"}
                  style={style.icon}
                  onPress={() => this.setState({ paused: !paused })}
                />
                <Icon
                  name="forward"
                  style={style.icon}
                  onPress={this.forward}
                />
                <View style={style.sliderCont}>
                  <View style={style.timer}>
                    <Text style={{ color: "white" }}>
                      {this.getTime(currentTime)}
                    </Text>
                    <Text style={{ color: "white" }}>
                      {this.getTime(duration)}{" "}
                      <Icon
                        onPress={this.fullscreen}
                        name={fullscreen ? "compress" : "expand"}
                        style={{ fontSize: 15 }}
                      />
                    </Text>
                  </View>
                  <Slider
                    // we want to add some param here
                    maximumTrackTintColor="white"
                    minimumTrackTintColor="white"
                    thumbTintColor="white" // now the slider and the time will work
                    value={currentTime / duration} // slier input is 0 - 1 only so we want to convert sec to 0 - 1
                    onValueChange={this.onslide}
                  />
                </View>
              </View>
            ) : (
              <View style={style.overlaySet}>
                <TouchableOpacity
                  style={{ width: "50%", height: "100%" }}
                  onPress={this.youtubeSeekLeft}
                >
                  <View style={{ flex: 1 }} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ width: "50%", height: "100%" }}
                  onPress={this.youtubeSeekRight}
                >
                  <View style={{ flex: 1 }} />
                </TouchableOpacity>
              </View>
            )}
          </View>

          {this.state.paused ? (
            <TouchableOpacity
              onPress={() => this.setState({ paused: !paused })}
              style={style.controlBtn}
            >
              <Image
                source={getControl.playVideo}
                style={style.img}
                height={50}
                width={50}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  };
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    // ...StyleSheet.absoluteFillObject
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  overlaySet: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    color: "white",
    flex: 1,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 25,
  },
  sliderCont: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  timer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  video: { width: "100%", height: "100%", backgroundColor: "black" },
  fullscreenVideo: {
    backgroundColor: "black",
    ...StyleSheet.absoluteFill,
    elevation: 1,
  },
  controlBtn: {
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
    width: "100%",
    height: "100%",
  },
  controlBtn1: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "20%",
  },
  img: {
    width: 30,
    height: 30,
    resizeMode: "cover",
    alignSelf: "center",
  },
});
