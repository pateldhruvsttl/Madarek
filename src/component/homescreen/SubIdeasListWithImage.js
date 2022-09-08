import React, { memo } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, Share } from "react-native";

import { AppUtil } from "../../utils/AppUtil";
import { Label } from "../../utils/StringUtil";
import Style from "./SubIdeasListWithImageStyle";
import IcnSelectedHeart from "../../assets/svg/IcnSelectedHeartWithRound"
import IcnUnSelectedHeart from "../../assets/svg/IcnUnSelectedHeartWithRound"
import IcnClander from "../../assets/svg/IcnClander"
import IcnWatchDone from "../../assets/svg/IcnWatchDone"
import IcnThumsUp from "../../assets/svg/IcnThumsUp"
import IcnThumsUpBlack from "../../assets/svg/IcnThumsUpBlack"
import IcnComment from "../../assets/svg/IcnComment"
import IcnTrophy from "../../assets/svg/IcnTrophy"
import IcnStar from "../../assets/svg/IcnStar"
import IcnRewordComment from "../../assets/svg/IcnRewordComment"
import IcnRewordLight from "../../assets/svg/IcnRewordLight"
import IcnAvtarBg from "../../assets/svg/IcnAvtarBg"
import IcnMenu from "../../assets/svg/IcnMenuDote"
import { GetAppColor } from "../../utils/Colors";
import moment from "moment";
import ImageLoad from "react-native-image-placeholder";
import { useNavigation } from '@react-navigation/native';
import { Loger } from "../../utils/Loger";
import { EndPoints } from "../../service/EndPoints";
import { AppConfig } from "../../manager/AppConfig";
import { MenuTrigger, Menu, MenuOption, MenuOptions } from "react-native-popup-menu";
import IcnMenuDote from "../../assets/svg/IcnMenuDote"
import IcnShareIcon from "../../assets/svg/IcnShareIcon"
import { baseURL } from "../../utils/Constant";
import { onShare } from "../share/ShareContent";

const SubIdeasListWithImage = (props) => {

    const message = (id) => {
        if (props?.isType == "Ideas") {
            return `idea-details/${id}`
        } else if (props?.isType == "Challenges") {
            return `contest-detail/${id}`
        }
    }
    const likeUnlike = (id) => {

        if (props?.isType == "Ideas") {
            props.onLikeIdeas(id);
        }
        else if (props?.isType == "Challenges") {
            props.onLikeIdeas(id);
        }
        else {
            props.onLikeIdeas(id)
        }
    }
    const favouriteUnfavourite = (id) => {
        if (props?.isType == "Ideas") {
            props.onFavoriteIdeas(id);
        }
        else if (props?.isType == "Challenges") {
            props.onFavoriteIdeas(id);
        }
        else {
            props.onFavoriteIdeas(id)
        }
    }

    const commentRender = (id) => {
        if (props.isComment == "Challenges") {
            props.navigateToComment({ model: 'ContestComments', fieldName: 'contest_id', id: id });
        } else {
            props.navigateToComment({ model: 'IdeaComments', fieldName: 'idea_id', id: id });
        }
    }
    const renderIdeaItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => props?.isType == "Challenges" ? props.onItemPress(item.id) : props.onItemPress(item)} style={Style.renderMainView}>
                <View style={Style.rightItems}>
                    <View style={Style.img}>
                        <ImageLoad style={Style.img} source={{ uri: item.ideaImage }} isShowActivity={false} />
                    </View>
                    {props?.isType != "Spotlight" ?
                        <>
                            {
                                (item.favorite) ?

                                    <TouchableOpacity style={Style.likeUnlikeBtn} onPress={() => favouriteUnfavourite(item.id)}  >
                                        <IcnSelectedHeart style={Style.likeUnlikeIcn} height={AppUtil.getHP(2.7)} width={AppUtil.getHP(2.7)} />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity style={Style.likeUnlikeBtn} onPress={() => favouriteUnfavourite(item.id)}>
                                        <IcnUnSelectedHeart style={Style.likeUnlikeIcn} height={AppUtil.getHP(2.7)} width={AppUtil.getHP(2.7)} />
                                    </TouchableOpacity>
                            }
                            {
                                props.isType != "Challenges" ?
                                    (item.trophy || item.starred || item.topRate || item.insight) ?
                                        <View style={Style.rewordView}>
                                            {item.trophy ? <IcnTrophy style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} /> : null}
                                            {item.starred ? <IcnStar style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} /> : null}
                                            {item.topRate ? <IcnRewordComment style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} /> : null}
                                            {item.insight ? <IcnRewordLight style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} /> : null}
                                        </View> :
                                        <View style={Style.rewordViewAlt}></View>
                                    : null}

                        </> : null
                    }
                </View>

                <View style={Style.leftItems}>

                    {props.isType == 'Challenges' ?
                        <>
                            <Text numberOfLines={1} style={Style.title}>{item.categoryName}</Text>
                            <Text numberOfLines={2} style={[Style.SubTitle, { color: GetAppColor.black }]}>{item.ideaTitle}</Text>
                        </>
                        :
                        <>
                            <Text numberOfLines={1} style={Style.title}>{item.categoryName}</Text>
                            <Text numberOfLines={2} style={[Style.SubTitle, { color: GetAppColor.borderRed }]}>{item.ideaTitle}</Text>
                        </>
                    }


                    {
                        props?.isType == "Ideas" ?

                            <View style={[Style.calView, { width: '100%' }]}>
                                <IcnClander style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                                <Text style={Style.title}>{moment(item.createDate).format("DD MMM YY")}</Text>

                                <IcnAvtarBg style={Style.callLeftIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                                <Text numberOfLines={1} style={[Style.title, { width: AppUtil.getWP(26) }]}>{`${item.firstName} ${item.lastName}`}</Text>
                            </View>
                            :
                            props?.isType == "Spotlight" ?

                                <View style={Style.calView}>
                                    <IcnClander style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                                    <Text style={Style.title}>{item.createDate}</Text>

                                    <IcnAvtarBg style={Style.callLeftIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                                    <Text style={Style.title}>{item.name}</Text>
                                </View>
                                :
                                <View style={Style.calView}>
                                    <IcnClander style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                                    <Text style={Style.title}>{item.createDate}</Text>
                                </View>

                    }
                    {
                        props?.isType != "Spotlight" &&
                        <View style={Style.secondCalView}>
                            <View style={Style.secondInnerCalView}>
                                <IcnWatchDone style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                                <Text style={Style.title}>{item?.totalView}</Text>
                            </View>
                            <View style={Style.secondInnerCalView}>
                                {
                                    item.like == true ?
                                        <TouchableOpacity onPress={() => likeUnlike(item.id)}>
                                            <IcnThumsUpBlack style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity onPress={() => likeUnlike(item.id)}>
                                            <IcnThumsUp style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                                        </TouchableOpacity>

                                }
                                <Text style={Style.title}>{item.totalLike}</Text>
                            </View>
                            <View style={Style.secondInnerCalView}>
                                <TouchableOpacity onPress={() => commentRender(item.id)}>
                                    <IcnComment style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                                </TouchableOpacity>
                                <Text style={Style.title}>{item?.totalComment}</Text>
                            </View>
                            <View style={Style.moreView}>
                                <Menu>
                                    <MenuTrigger>
                                        <IcnMenuDote height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} fill={GetAppColor.grayBorder} />
                                    </MenuTrigger>
                                    <MenuOptions customStyles={Style.menuOptions}>
                                        <MenuOption style={Style.menuView} onSelect={() => onShare(message(item.id))}>
                                            <IcnShareIcon stroke={GetAppColor.pincolor} style={Style.headerProfileIcn} height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
                                            <Text style={Style.txtMenuOptions}>{Label.Share}</Text>
                                        </MenuOption>
                                    </MenuOptions>
                                </Menu>
                            </View>

                        </View>
                    }
                </View>

            </TouchableOpacity>
        )
    };

    const onGetPaginations = () => {

        if (props?.data?.length > (AppConfig.pageLimit - 1) && props?.paginations)
            props?.paginations()
    }

    return (
        <View style={Style.MainView}>
            {
                props?.isTitle &&
                <View style={Style.titleView}>
                    <Text style={props.screen ? Style.titleAnotherScreen : Style.txtTitle}>{props?.isTitle}</Text>
                    <TouchableOpacity onPress={() => props.onSeeMorePress()}>
                        <Text style={props.screen ? Style.seeMoreAnotherScreen : Style.txtSeeMore}>{Label.seeMore}</Text>
                    </TouchableOpacity>
                </View>
            }


            <FlatList
                data={props?.data}
                scrollEnabled={props?.scrollEnabled ? true : false}
                renderItem={renderIdeaItem}
                onEndReached={onGetPaginations}
                key={(id) => id}
                keyExtractor={item => item.id}

            />
            {
                (props?.btn == "" || props?.btn == undefined) ? null :
                    <TouchableOpacity style={Style.bottomBtn} onPress={() => props.onButtonPress()}>
                        <Text style={Style.txtBottomBtn}> {props.btn}</Text>
                    </TouchableOpacity>
            }
        </View>
    )
}



export default memo(SubIdeasListWithImage);





