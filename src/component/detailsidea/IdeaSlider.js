import React, { memo, useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import IdeaSliderStyle, { sliderWidth, itemWidth } from "./IdeaSliderStyle";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { GetAppColor } from "../../utils/Colors";
import { AppUtil } from "../../utils/AppUtil";
import { Label } from '../../utils/StringUtil'

const IdeaSlider = ({ Entries }) => {

    const [isSelectIndecater, setSelectIndecater] = useState(0);

    const onEventSlider = () => {
        return (
            <View>
                <Carousel
                    data={Entries}
                    renderItem={onSliderRend}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    hasParallaxImages={true}
                    firstItem={1}
                    inactiveSlideScale={0.94}
                    inactiveSlideOpacity={0.7}
                    containerCustomStyle={IdeaSliderStyle.slider}
                    // contentContainerCustomStyle={IdeaSliderStyle.sliderContentContainer}
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
                    containerStyle={IdeaSliderStyle.paginationContainer}
                    dotColor={GetAppColor.borderRed}
                    dotStyle={IdeaSliderStyle.paginationDot}
                    inactiveDotColor={GetAppColor.white}
                    inactiveDotOpacity={0.8} //0.4
                    inactiveDotScale={0.9}  //0.6
                />
            </View>
        );
    }

    const onSliderRend = ({ item, index }, parallaxProps) => {
        return (
            <View style={{ height: "100%", width:'100%'}}>
                <Image style={{ width: '100%', height: "100%", }}
                    resizeMode='cover' source={{ uri: item.url }} />
                 </View>
        );
    }

    return (
        <View style={IdeaSliderStyle.MainView}>
            {onEventSlider()}
        </View>
    );
}
export default memo(IdeaSlider);





