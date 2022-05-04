import React, { memo, useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

import styles, { sliderWidth, itemWidth } from "./ExpertInsightsStyle";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { GetAppColor } from "../../utils/Colors";
import { AppUtil } from "../../utils/AppUtil";
import { Label } from '../../utils/StringUtil'

import IcnWatchDone from "../../assets/svg/IcnWatchDone"
import IcnThumsUp from "../../assets/svg/IcnThumsUp"
import IcnComment from "../../assets/svg/IcnComment"
import ImageLoad from "react-native-image-placeholder";

const ExpertInsightsSlider = ({ Entries, screen }) => {

    const navigation = useNavigation();
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
                    loop={false}
                    loopClonesPerSide={2}
                    autoplay={false}
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
            </View>
        );
    }

    const onSliderRend = ({ item, index }, parallaxProps) => {
        const categoryDetail = typeof item?.categoryInfo !== 'string' ? item.categoryInfo : []
      
        const getCategories = () => 
        categoryDetail && categoryDetail.length !== 0 && categoryDetail.map((ele) => (
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.categoryLabel}>{ele.category_name}</Text>
            </TouchableOpacity>
        ))
        return (
            <View style={styles.renderMainView}>

                <View style={styles.renderProfileView}>
                    <ImageLoad
                        style={styles.profilePicView}
                        resizeMode='cover'
                        source={{ uri: item.profilePhoto }} 
                        borderRadius={AppUtil.getHP(15)}
                        />
                </View>

                <Text style={styles.txtNameView}>{item.firstName}</Text>
                <Text style={styles.txtSubNameView}>{item.jobTitle}</Text>

                <View style={styles.borderLine} />

                <Text numberOfLines={1} style={styles.txtTitleView}>{item.ideaTitle}</Text>
                <Text numberOfLines={2} style={styles.txtSubtitleView}>{item.ideaDescription}</Text>

               
               {
                   <View style={styles.btnGrp}>
                    {getCategories()}
                    </View>
               }

                <View style={styles.secondCalView}>
                    <View style={styles.secondInnerCalView}>
                        <IcnWatchDone style={styles.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={styles.title}>{item.totalViews}</Text>
                    </View>
                    <View style={styles.secondInnerCalView}>
                        <IcnThumsUp style={styles.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={styles.title}>{item.totalLikes}</Text>
                    </View>
                    <View style={styles.secondInnerCalView}>
                        <IcnComment style={styles.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={styles.title}>{item.totalComments}</Text>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.MainView}>
            <View style={styles.titleView}>
                <Text style={screen ? styles.txtTitleOne : styles.txtTitle}> {Label.expertInsights}</Text>

                <TouchableOpacity onPress={() => navigation.navigate("ExpertDirectoryScreen")}>
                    <Text style={screen ? styles.txtSeeMoreOne : styles.txtSeeMore}> {Label.viewAll}</Text>
                </TouchableOpacity>
            </View>
            {setExpertInsights()}

        </View>
    );
}
export default memo(ExpertInsightsSlider);





