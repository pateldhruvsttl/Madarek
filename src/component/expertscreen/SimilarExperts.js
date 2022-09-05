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
import IcnThumsUpBlack from "../../assets/svg/IcnThumsUpBlack"
import IcnComment from "../../assets/svg/IcnComment"
import IcnSimilarExperts from "../../assets/svg/IcnSimilarExperts"
import ImageLoad from 'react-native-image-placeholder';
import { Loger } from '../../utils/Loger';

function SimilarExperts(props) {
    const navigation = useNavigation();
    const { themeColor } = useSelector((state) => state)

    const renderItem = ({ item }) => (
        <TouchableOpacity style={Style.renderMainView} onPress={() => props.navigateDetail(item.id)}>

            <IcnSimilarExperts height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)}
                one={item?.isjoin_requests == 1 ? themeColor.buttonColor : item?.isjoin_requests == 2 ? GetAppColor.rejected : item?.isjoin_requests == 0 ? GetAppColor.btnBorderColor : GetAppColor.btnBorderColor}
                two={GetAppColor.btnBorderColor}
                style={Style.similerIcnView}
            />

            <View style={Style.rightItems}>
                <ImageLoad
                    style={Style.img}
                    resizeMode='cover'
                    source={{ uri: item.profile }}
                    placeholderStyle={Style.img}
                    borderRadius={AppUtil.getHP(4)}
                />
            </View>

            <View style={Style.leftItems}>

                <Text numberOfLines={1} style={Style.title}>{item.name}</Text>
                <Text numberOfLines={2} style={Style.SubTitle}>{item.post}</Text>

                <View style={Style.calView}>

                    <IcnWatchDone height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                    <Text style={Style.icnTitle}>{item.see}</Text>
                    <View style={Style.secondInnerCalView}>
                        {item.isLike ?
                            <TouchableOpacity onPress={() => props.onLikeIdeas ? props.onLikeIdeas(item.id) : null}>
                                <IcnThumsUpBlack height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => props.onLikeIdeas ? props.onLikeIdeas(item.id) : null}>
                                <IcnThumsUp height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                            </TouchableOpacity>
                        }
                        <Text style={Style.icnTitle}>{item.like}</Text>
                    </View>

                    <IcnComment height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                    <Text style={Style.icnTitle}>{item.comment}</Text>
                </View>

                {item.description && <Text numberOfLines={2} style={Style.icnDes}>{item.description}</Text>}
            </View>
        </TouchableOpacity>
    );

    const onGetPaginations = () => {

        if (props?.onGetPaginations())
            props?.onGetPaginations()
    }
    const list = props.maxLimit != 0 ? props.data.slice(0, props.maxLimit) : props.data;
    return (
        <View style={Style.MainView}>
            {
                props.maxLimit != 0 &&

                    props.title ?
                    <View style={Style.titleView}>
                        <Text style={[Style.txtTitle, { color: themeColor.buttonColor }]}>{props.title}</Text>
                    </View>
                    :
                    <View style={[Style.titleView,Style.addTopSpace]}>
                        <Text style={Style.txtTitleOne}><Text style={Style.txtTitleTwo}>{`${list.length} Experts `}</Text>{props.categoryName}</Text>
                    </View>

            }
            <FlatList
                data={list}
                renderItem={(item) => renderItem(item)}
                keyExtractor={item => item.id}
                onEndReached={onGetPaginations}
            />

        </View>
    )
}

export default memo(SimilarExperts);


