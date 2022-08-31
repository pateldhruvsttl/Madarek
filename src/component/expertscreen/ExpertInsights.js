import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import { AppUtil } from '../../utils/AppUtil'
import { Label } from '../../utils/StringUtil'
import Style from './ExpertInsightsStyle'

import IcnClander from "../../assets/svg/IcnClander"
import IcnThumsUp from "../../assets/svg/IcnThumsUp"
import IcnTrophy from "../../assets/svg/IcnTrophy"
import IcnStar from "../../assets/svg/IcnStar"
import IcnRewordComment from "../../assets/svg/IcnRewordComment"
import IcnClock from "../../assets/svg/IcnClock"
import IcnComment from "../../assets/svg/IcnComment"
import ImageLoad from 'react-native-image-placeholder'

function ExpertInsights(props) {
    const { themeColor } = useSelector((state) => state)

    const renderItem = ({ item }) => (
        <View style={Style.renderMainView}>

            <View style={Style.rightItems}>
                <ImageLoad
                    style={Style.img}
                    resizeMode='cover'
                    source={{ uri: item.imageFile }}
                />

                {/* <View style={Style.rewordView}>
                    <IcnTrophy style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />
                    <IcnStar style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />
                    <IcnRewordComment style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />
                </View> */}

            </View>


            <View style={Style.leftItems}>

                <Text numberOfLines={1} style={Style.title}>{item.title}</Text>
                <Text numberOfLines={2} style={Style.SubTitle}>{item.generalDescription}</Text>

                <View style={Style.calView}>
                    <View style={Style.secondInnerCalView}>
                        <IcnThumsUp style={Style.callInnerIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={Style.title}>{item.totalLikes}</Text>
                    </View>
                    <View style={Style.secondInnerCalView}>
                        <IcnComment style={Style.callInnerIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={Style.title}>{item.totalComments}</Text>
                    </View>
                </View>

                {/* <View style={Style.secondCalView}>
                    <Text numberOfLines={1} style={Style.title}>{Label.Publishby}</Text>
                    <Text numberOfLines={1} style={Style.txtName}>{item.name}</Text>
                </View> */}
            </View>

        </View>
    );

    return (
        <View style={Style.MainView}>
            <View style={Style.titleView}>
                <Text style={[Style.txtTitle, { color: themeColor.buttonColor }]}>{Label.expertInsights}</Text>
                {/* <Text style={Style.txtSeeMore}>{Label.viewAll}</Text> */}
            </View>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingEnd: AppUtil.getHP(2) }}
                data={props.data}
                renderItem={(item) => renderItem(item)}
            />

        </View>
    )
}

export default memo(ExpertInsights);