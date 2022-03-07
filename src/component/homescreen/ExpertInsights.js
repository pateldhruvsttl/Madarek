import React, { memo, useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles, { sliderWidth, itemWidth } from "./ExpertInsightsStyle";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { GetAppColor } from "../../utils/Colors";
import { AppUtil } from "../../utils/AppUtil";
import { Label } from '../../utils/StringUtil'

import IcnWatchDone from "../../assets/svg/IcnWatchDone"
import IcnThumsUp from "../../assets/svg/IcnThumsUp"
import IcnComment from "../../assets/svg/IcnComment"

const ExpertInsights = ({ Entries }) => {

    const [isSelectIndicator, setSelectIndicator] = useState(1);


    const setExpertInsights = () => {
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
                    loop={true}
                    loopClonesPerSide={2}
                    autoplay={true}
                    autoplayDelay={1000}
                    autoplayInterval={3000}
                    onSnapToItem={(index) => setSelectIndicator(index)}
                />
                <View style={styles.paginView}>
                    <Pagination
                        dotsLength={Entries.length}
                        activeDotIndex={isSelectIndicator}
                        containerStyle={styles.paginationContainer}
                        dotColor={GetAppColor.lightBlue}
                        dotStyle={styles.paginationDot}
                        inactiveDotColor={GetAppColor.textColor}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                    />
                </View>
                {/* <View style={{width:'100%', marginVertical:AppUtil.getHP(1)}}/> */}
            </View>
        );
    }

    const onSliderRend = ({ item, index }, parallaxProps) => {
        return (
            <View style={styles.renderMainView}>

                <View style={styles.renderProfileView}>
                    <Image
                        style={styles.profilePicView}
                        resizeMode='cover'
                        source={{ uri: item.profilePic }} />
                </View>

                <Text style={styles.txtNameView}>{item.name}</Text>
                <Text style={styles.txtSubNameView}>{item.job}</Text>

                <View style={styles.borderLine} />

                <Text numberOfLines={1} style={styles.txtTitleView}>{item.title}</Text>
                <Text numberOfLines={2} style={styles.txtSubtitleView}>{item.subTitle}</Text>

                <View style={styles.btnGrp}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.txtBtn}>{Label.renewableEnergy}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.txtBtn}>{Label.health}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.txtBtn}>{Label.education}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.secondCalView}>

                    <View style={styles.secondInnerCalView}>
                        <IcnWatchDone style={styles.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={styles.title}>{item.see}</Text>
                    </View>
                    <View style={styles.secondInnerCalView}>
                        <IcnThumsUp style={styles.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={styles.title}>{item.like}</Text>
                    </View>
                    <View style={styles.secondInnerCalView}>
                        <IcnComment style={styles.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={styles.title}>{item.comment}</Text>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.MainView}>
            <View style={styles.titleView}>
                <Text style={styles.txtTitle}>{Label.expertInsights}</Text>
                <Text style={styles.txtSeeMore}> {Label.viewAll}</Text>
            </View>
            {setExpertInsights()}

        </View>
    );
}
export default memo(ExpertInsights);





