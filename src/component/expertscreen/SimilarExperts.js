import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';

import { AppUtil } from '../../utils/AppUtil'
import { Label } from '../../utils/StringUtil'
import { GetAppColor } from '../../utils/Colors'
import Style from './SimilarExpertsStyle'

import IcnWatchDone from "../../assets/svg/IcnWatchDone"
import IcnThumsUp from "../../assets/svg/IcnThumsUp"
import IcnComment from "../../assets/svg/IcnComment"
import IcnSimilarExperts from "../../assets/svg/IcnSimilarExperts"

function SimilarExperts(props) {

    const navigation = useNavigation();
    const { themeColor } = useSelector((state) => state)

    const renderItem = ({ item }) => (
        <View style={Style.renderMainView}>

            <IcnSimilarExperts fill={themeColor.buttonColor} style={Style.similerIcnView} height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} />

            <View style={Style.rightItems}>
                <Image style={Style.img} resizeMode='cover' source={{ uri: item.url }} />
            </View>

            <View style={Style.leftItems}>

                <Text numberOfLines={1} style={Style.title}>{item.name}</Text>
                <Text numberOfLines={2} style={Style.SubTitle}>{item.post} <Text style={{ color: themeColor.buttonColor, fontSize: AppUtil.getHP(1.7) }}>19</Text></Text>

                <View style={Style.calView}>

                    <IcnWatchDone height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                    <Text style={Style.icnTitle}>{item.see}</Text>

                    <IcnThumsUp height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                    <Text style={Style.icnTitle}>{item.like}</Text>

                    <IcnComment height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                    <Text style={Style.icnTitle}>{item.comment}</Text>
                </View>

                <Text numberOfLines={2} style={Style.icnDes}>{item.des}</Text>
            </View>

        </View>
    );

    const list = props.maxLimit != 0 ? props.data.slice(0, props.maxLimit) : props.data;

    return (
        <View style={Style.MainView}>
            {
                props.maxLimit != 0 &&
                <View style={Style.titleView}>
                    <Text style={[Style.txtTitle, { color: themeColor.buttonColor }]}>{props.title}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("ExpertDirectoryScreen")}>
                        <Text style={Style.txtSeeMore}>{Label.viewAll}</Text>
                    </TouchableOpacity>
                </View>
            }
            <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

        </View>
    )
}

export default memo(SimilarExperts);