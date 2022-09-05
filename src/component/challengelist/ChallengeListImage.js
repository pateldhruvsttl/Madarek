import React, { memo } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { onShare } from "../share/ShareContent";
import { AppUtil } from "../../utils/AppUtil";
import { Label } from "../../utils/StringUtil";
import IcnClander from "../../assets/svg/IcnClander"
import IcnWatchDone from "../../assets/svg/IcnWatchDone"
import IcnThumsUp from "../../assets/svg/IcnThumsUp"
import IcnThumsUpBlack from "../../assets/svg/IcnThumsUpBlack"
import IcnComment from "../../assets/svg/IcnComment"

import IcnTrophy from "../../assets/svg/IcnTrophy"
import IcnStar from "../../assets/svg/IcnStar"
import IcnRewordComment from "../../assets/svg/IcnRewordComment"
import IcnRewordLight from "../../assets/svg/IcnRewordLight"
import IcnMenuDote from "../../assets/svg/IcnMenuDote"
import IcnShareIcon from "../../assets/svg/IcnShareIcon"
import { GetAppColor } from "../../utils/Colors";
import LISTSTYLE from "./ChallengeListImageStyle";
import IcnSelectedHeart from "../../assets/svg/IcnSelectedHeart"
import IcnSelectedHeartWithRound from "../../assets/svg/IcnSelectedHeartWithRound"
import IcnUnSelectedHeartWithRound from "../../assets/svg/IcnUnSelectedHeartWithRound"
import ImageLoad from "react-native-image-placeholder";
import { AppConfig } from "../../manager/AppConfig";
import { MenuTrigger, Menu, MenuOption, MenuOptions } from "react-native-popup-menu";

const ChallengeListImage = (props) => {
    const navigation = useNavigation();

    const likeUnlikeRender = (id) => {

        if (props?.isType == "Ideas") {
            props.likeChallenge(id);
        }
        else if (props?.isType == "Challenges") {
            props.likeChallenge(id);
        }
        else {
            props.likeChallenge(id)
        }
    }
    const favouriteUnfavourite = (id) => {

        if (props?.isType == "Ideas") {
            props.favoriteChallenge(id);
        }
        else if (props?.isType == "Challenges") {
            props.favoriteChallenge(id);
        }
        else {
            props.favoriteChallenge(id)
        }
    }
    const onGetPaginations = () => {

        if (props?.data?.length > (AppConfig.pageLimit - 1) && props?.paginations)
            props?.paginations()
    }

    const renderItem = ({ item }) => (

        <TouchableOpacity onPress={() => props.navigateDetail(item.id)} style={LISTSTYLE.renderMainView}>

            <View style={LISTSTYLE.rightItems}>

                <View style={LISTSTYLE.imgView}>
                    <ImageLoad style={LISTSTYLE.img} source={{ uri: item.image }} isShowActivity={false} />
                </View>
                {
                    (item.favorite) ?

                        <TouchableOpacity style={{ width: AppUtil.getHP(2), height: AppUtil.getHP(4), paddingHorizontal: AppUtil.getHP(2), position: 'absolute', end: 0, top: 5 }} onPress={() => favouriteUnfavourite(item.id)}  >
                            <IcnSelectedHeartWithRound style={{ paddingHorizontal: AppUtil.getHP(2), position: 'absolute', end: 0, top: 5 }} height={AppUtil.getHP(2.7)} width={AppUtil.getHP(2.7)} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={{ width: AppUtil.getHP(2), height: AppUtil.getHP(4), paddingHorizontal: AppUtil.getHP(2), position: 'absolute', end: 0, top: 5 }} onPress={() => favouriteUnfavourite(item.id)}  >
                            <IcnUnSelectedHeartWithRound style={{ paddingHorizontal: AppUtil.getHP(2), position: 'absolute', end: 0, top: 5 }} height={AppUtil.getHP(2.7)} width={AppUtil.getHP(2.7)} />
                        </TouchableOpacity>
                }
            </View>

            <View style={LISTSTYLE.leftItems}>

                <Text numberOfLines={1} style={LISTSTYLE.title}>{item.categoryName}</Text>
                <Text numberOfLines={2} style={[LISTSTYLE.SubTitle, { color: props.isType == 'Challenges' ? GetAppColor.black : GetAppColor.borderRed }]}>{item.title}</Text>

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

                <View style={[LISTSTYLE.secondCalView]}>

                    <View style={LISTSTYLE.secondInnerCalView}>
                        <IcnWatchDone style={LISTSTYLE.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={LISTSTYLE.title}>{item.totalView}</Text>
                    </View>
                    <View style={LISTSTYLE.secondInnerCalView}>
                        {
                            item.like == true ?
                                <TouchableOpacity onPress={() => { likeUnlikeRender(item.id) }}>
                                    <IcnThumsUpBlack style={LISTSTYLE.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => { likeUnlikeRender(item.id) }}>
                                    <IcnThumsUp style={LISTSTYLE.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                                </TouchableOpacity>
                        }
                        <Text style={LISTSTYLE.title}>{item.totalLike}</Text>
                    </View>
                    <View style={LISTSTYLE.secondInnerCalView}>
                        <IcnComment style={LISTSTYLE.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={LISTSTYLE.title}>{item.totalComment}</Text>
                    </View>
                    <View style={LISTSTYLE.moreView}>
                        <Menu>
                            <MenuTrigger>
                                <IcnMenuDote height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} fill={GetAppColor.grayBorder} />
                            </MenuTrigger>
                            <MenuOptions >
                                <MenuOption style={LISTSTYLE.menuView} onSelect={() => onShare(`contest-detail/${item.id}`)}>
                                    <IcnShareIcon stroke={GetAppColor.pincolor} style={LISTSTYLE.headerProfileIcn} height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
                                    <Text style={LISTSTYLE.txtMenuOptions}>{Label.Share}</Text>
                                </MenuOption>
                            </MenuOptions>
                        </Menu>
                    </View>
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
                onEndReached={onGetPaginations}
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





