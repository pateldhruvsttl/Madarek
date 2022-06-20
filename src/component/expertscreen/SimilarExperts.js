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
import ImageLoad from 'react-native-image-placeholder';

function SimilarExperts(props) {

    const navigation = useNavigation();
    const { themeColor } = useSelector((state) => state)

    const renderItem = ({ item }) => (
        <TouchableOpacity style={Style.renderMainView} onPress={() => navigation.navigate("ExpertDetailsScreen", { data: props.data, item: item })}>

            <IcnSimilarExperts fill={themeColor.buttonColor} style={Style.similerIcnView} height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} />

            <View style={Style.rightItems}>
                <ImageLoad
                    style={Style.img}
                    resizeMode='cover'
                    source={{ uri: item.profilePhoto }}
                    placeholderStyle={Style.img}
                    borderRadius={AppUtil.getHP(4)}
                />
            </View>

            <View style={Style.leftItems}>

                <Text numberOfLines={1} style={Style.title}>{item.firstName} {item.lastName}</Text>
                <Text numberOfLines={2} style={Style.SubTitle}>{item.jobTitle} <Text style={{ color: themeColor.buttonColor, fontSize: AppUtil.getHP(1.7) }}>19</Text></Text>

                <View style={Style.calView}>

                    <IcnWatchDone height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                    <Text style={Style.icnTitle}>{item.totalViews}</Text>

                    <IcnThumsUp height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                    <Text style={Style.icnTitle}>{item.totalLikes}</Text>

                    <IcnComment height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                    <Text style={Style.icnTitle}>{item.totalComments}</Text>
                </View>

                {item.ideaDescription && <Text numberOfLines={2} style={Style.icnDes}>{item.ideaDescription}</Text>}
            </View>
        </TouchableOpacity>
    );
    // const list = props.maxLimit != 0 ? props.data.slice(0, props.maxLimit) : props.data;
    return (
        <View style={Style.MainView}>
            {
                props.maxLimit != 0 &&
                <View style={Style.titleView}>
                    <Text style={[Style.txtTitle, { color: themeColor.buttonColor }]}>{props.title}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("ExpertDirectoryScreen", { data: props.data })}>
                        <Text style={Style.txtSeeMore}>{props.type === "ExpertScreen" ? Label.viewMore : Label.viewAll}</Text>
                    </TouchableOpacity>
                </View>
            }
            <FlatList
                data={props.data}
                renderItem={(item) => renderItem(item)}
                keyExtractor={item => item.id}
            />

        </View>
    )
}

export default memo(SimilarExperts);


