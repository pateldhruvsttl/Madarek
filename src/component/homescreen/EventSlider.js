import React, { memo, useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import FastImage from 'react-native-fast-image'

import styles, { sliderWidth, itemWidth } from "./EventSliderStyle";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { GetAppColor } from "../../utils/Colors";
import { AppUtil } from "../../utils/AppUtil";
import { Label } from '../../utils/StringUtil'
import { Loger } from "../../utils/Loger";
import ImageLoad from "react-native-image-placeholder";

const EventSlider = ({ Entries }) => {

    const [isSelectIndecater, setSelectIndecater] = useState(1);


    const onEventSlider = () => {
        return (
            <View style={styles.sliderContainer}>
                <Carousel
                    data={Entries}
                    renderItem={onSliderRend}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    hasParallaxImages={true}
                    firstItem={1}
                    inactiveSlideScale={0.94}
                    inactiveSlideOpacity={0.7}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    loop={true}
                    loopClonesPerSide={2}
                    autoplay={true}
                    autoplayDelay={1000}
                    autoplayInterval={3000}
                    onSnapToItem={(index) => setSelectIndecater(index)}
                />
                <Pagination
                    dotsLength={Entries.length}
                    activeDotIndex={isSelectIndecater}
                    containerStyle={styles.paginationContainer}
                    dotColor={GetAppColor.borderRed}
                    dotStyle={styles.paginationDot}
                    inactiveDotColor={GetAppColor.dotGreen}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
            </View>
        );
    }

    const onSliderRend = ({ item, index }, parallaxProps) => {
        return (
            <View style={styles.renderMainView}>
                <ImageLoad style={styles.bgImage} loadingStyle={{ size: 'large', color: 'blue' }} source={{ uri: item.url }}/>
                {/* <FastImage style={styles.bgImage} resizeMode={FastImage.resizeMode.cover} source={{ uri: item.url, priority: FastImage.priority.normal, }} /> */}
                {/* <Image style={{ width: '100%', height: "100%", borderRadius: AppUtil.getHP(2), }} resizeMode='cover' source={{ uri: item.url }} /> */}

                <View style={styles.sliderRendTitleView}>
                    <Text style={styles.txtsliderRendTitle}>{item.title}</Text>
                </View>

                <TouchableOpacity style={styles.btnSliderRend}>
                    <Text style={styles.txtsliderRendBtnTitle}>{Label.SubnitIdea}</Text>
                </TouchableOpacity>

            </View>
        );
    }

    return (
        <View style={styles.MainView}>
            {onEventSlider()}
        </View>
    );
}
export default memo(EventSlider);





