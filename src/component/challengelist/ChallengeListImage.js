import React, { memo } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { AppUtil } from "../../utils/AppUtil";
import { Label } from "../../utils/StringUtil";
import IcnClander from "../../assets/svg/IcnClander"
import IcnWatchDone from "../../assets/svg/IcnWatchDone"
import IcnThumsUp from "../../assets/svg/IcnThumsUp"
import IcnComment from "../../assets/svg/IcnComment"

import IcnTrophy from "../../assets/svg/IcnTrophy"
import IcnStar from "../../assets/svg/IcnStar"
import IcnRewordComment from "../../assets/svg/IcnRewordComment"
import IcnRewordLight from "../../assets/svg/IcnRewordLight"
import IcnMenu from "../../assets/svg/IcnMenuDote"
import { GetAppColor } from "../../utils/Colors";
import LISTSTYLE from "./ChallengeListImageStyle";
import IcnSelectedHeart from "../../assets/svg/IcnSelectedHeart"
import IcnSelectedHeartWithRound from "../../assets/svg/IcnSelectedHeartWithRound"
import IcnUnSelectedHeartWithRound from "../../assets/svg/IcnUnSelectedHeartWithRound"
import ImageLoad from "react-native-image-placeholder";

const ChallengeListImage = (props) => {
    const navigation = useNavigation();
    const renderItem = ({ item }) => (
        console.log('item of render challange',item),
        
        <TouchableOpacity onPress={() => props.navigateDetail(item)} style={LISTSTYLE.renderMainView}>

            <View style={LISTSTYLE.rightItems}>

                <View style={LISTSTYLE.imgView}>
                    <ImageLoad style={LISTSTYLE.img} source={{ uri: item.image }} isShowActivity={false} />
                </View>
                {
                    item.isLike ?
                        <IcnSelectedHeartWithRound style={LISTSTYLE.likeUnlikeIcn} height={AppUtil.getHP(2.7)} width={AppUtil.getHP(2.7)} />
                        :
                        <IcnUnSelectedHeartWithRound style={LISTSTYLE.likeUnlikeIcn} height={AppUtil.getHP(2.7)} width={AppUtil.getHP(2.7)} />
                }

                {/* <View style={LISTSTYLE.rewordView}>
                    <IcnTrophy style={LISTSTYLE.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />
                    <IcnStar style={LISTSTYLE.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />
                    <IcnRewordComment style={LISTSTYLE.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />
                    <IcnRewordLight style={LISTSTYLE.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />
                </View> */}

            </View>

            <View style={LISTSTYLE.leftItems}>

                <Text numberOfLines={1} style={LISTSTYLE.title}>{item.title}</Text>
                <Text numberOfLines={2} style={[LISTSTYLE.SubTitle, { color: props.isType == 'Challenges' ? GetAppColor.black : GetAppColor.borderRed }]}>{item.subTitle}</Text>

                {
                    props.isType == "Ideas" ?
                        <View style={LISTSTYLE.calView}>
                            <IcnClander style={LISTSTYLE.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                            <Text style={LISTSTYLE.title}>{item.date}</Text>
                        </View>
                        :
                        <View style={LISTSTYLE.calView}>
                            <IcnClander style={LISTSTYLE.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                            <Text style={LISTSTYLE.title}>{item.date}</Text>
                        </View>

                }

                <View style={LISTSTYLE.secondCalView}>

                    <View style={LISTSTYLE.secondInnerCalView}>
                        <IcnWatchDone style={LISTSTYLE.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={LISTSTYLE.title}>{item.totalView}</Text>
                    </View>
                    <View style={LISTSTYLE.secondInnerCalView}>
                        <IcnThumsUp style={LISTSTYLE.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={LISTSTYLE.title}>{item.totalLike}</Text>
                    </View>
                    <View style={LISTSTYLE.secondInnerCalView}>
                        <IcnComment style={LISTSTYLE.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={LISTSTYLE.title}>{item.totalComment}</Text>
                    </View>
                    {/* <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }}>
                        <IcnMenu fill={GetAppColor.textColor} height={AppUtil.getHP(1.8)} width={AppUtil.getHP(1.8)} />
                    </TouchableOpacity> */}
                </View>
            </View>

        </TouchableOpacity>
    );

    return (
        <View style={LISTSTYLE.MainView}>


            <FlatList
                data={props.data}
                scrollEnabled={props?.scrollEnabled ? true : false}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            {
                props?.btn &&
                <TouchableOpacity style={LISTSTYLE.bottomBtn} onPress={() => navigation.navigate("IdeasListScreen")}>
                    <Text style={LISTSTYLE.txtBottomBtn}> {props.btn}</Text>
                </TouchableOpacity>
            }
        </View>
    );
}
export default memo(ChallengeListImage);





