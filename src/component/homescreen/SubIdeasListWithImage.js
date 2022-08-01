import React, { memo } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";

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

const SubIdeasListWithImage = (props) => {


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

                    <Text numberOfLines={1} style={Style.title}>{item.ideaTitle}</Text>
                    <Text numberOfLines={2} style={[Style.SubTitle, { color: props.isType == 'Challenges' ? GetAppColor.black : GetAppColor.borderRed }]}>{item.categoryName}</Text>

                    {
                        props?.isType == "Ideas" ?

                            <View style={Style.calView}>
                                <IcnClander style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                                <Text style={Style.title}>{item.createDate ? moment(item.createDate).format("DD MMM YY") : "No date"}</Text>

                                <IcnAvtarBg style={Style.callLeftIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                                <Text style={Style.title}>{(item.firstName + " " + item.lastName).slice(0, 15)}...</Text>
                            </View>

                            :

                            (props?.isType == "Spotlight" && props?.isType == "Challenges") ?

                                <View style={Style.calView}>
                                    <IcnClander style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                                    <Text style={Style.title}>{item.createDate ? moment(item.createDate).format("DD MMM YY") : "No date"}</Text>

                                    <IcnAvtarBg style={Style.callLeftIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                                    <Text style={Style.title}>{item.name}</Text>
                                </View>
                                :
                                <View style={Style.calView}>
                                    <IcnClander style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                                    <Text style={Style.title}>{item.createDate ? item.createDate : "No date"}</Text>
                                </View>

                    }
                    {
                        props?.isType != "Spotlight" &&
                        <View style={Style.secondCalView}>
                            <View style={Style.secondInnerCalView}>
                                <IcnWatchDone style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                                <Text style={Style.title}>{item?.totalView ? item.totalView : 0}</Text>
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
                                <IcnComment style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                                <Text style={Style.title}>{item?.totalComments ? item.totalComments : 0}</Text>
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
        // if (props?.data?.length > 19)
        //     Loger.onLog("", "-------------------->")
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
                data={props.data}
                scrollEnabled={props?.scrollEnabled ? true : false}
                renderItem={renderIdeaItem}
                onEndReached={onGetPaginations}
                key={(id) => id}
                keyExtractor={item => item.id}
            // onScrollEndDrag={isLast => onGetPaginations()}

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





