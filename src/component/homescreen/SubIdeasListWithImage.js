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

const SubIdeasListWithImage = (props) => {

    const likeUnlikeRender = (id) => {

        if (props?.isType == "Ideas") {
            props.likeIdea(id);
        }
        else if (props?.isType == "Challenges") {
            props.likeChallenge(id);
        }
        else {
            props.likeSpotLight(id)
        }
    }
    const renderIdeaItem = ({ item }) => {

        return (<TouchableOpacity onPress={() => props.onItemPress()} style={Style.renderMainView}>

            <View style={Style.rightItems}>

                <View style={Style.img}>
                    <ImageLoad style={Style.img} source={{ uri: item.url }} isShowActivity={false} />
                </View>
                {
                    item?.like ?
                        <TouchableOpacity style={Style.likeUnlikeBtn} onPress={() => likeUnlikeRender(item.id)}  >
                            <IcnSelectedHeart style={Style.likeUnlikeIcn} height={AppUtil.getHP(2.7)} width={AppUtil.getHP(2.7)} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={Style.likeUnlikeBtn} onPress={() => likeUnlikeRender(item.id)}>
                            <IcnUnSelectedHeart style={Style.likeUnlikeIcn} height={AppUtil.getHP(2.7)} width={AppUtil.getHP(2.7)} />
                        </TouchableOpacity>
                }

                <View style={Style.rewordView}>
                    {<IcnTrophy style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />}
                    {<IcnStar style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />}
                    {<IcnRewordComment style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />}
                    {<IcnRewordLight style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />}
                </View>

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
                            <Text style={Style.title}>{item.firstName + " " + item.lastName}</Text>
                        </View>

                        :

                        props?.isType == "Spotlight" ?

                            <View style={Style.calView}>
                                <IcnClander style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                                <Text style={Style.title}>{item.createDate ? moment(item.createDate).format("DD MMM YY") : "No date"}</Text>

                                <IcnAvtarBg style={Style.callLeftIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                                <Text style={Style.title}>{item.name}</Text>
                            </View>

                            :

                            <View style={Style.calView}>
                                <IcnClander style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                                <Text style={Style.title}>{item.createDate ? moment(item.createDate).format("DD MMM YY") : "No date"}</Text>
                            </View>

                }

                <View style={Style.secondCalView}>
                    <View style={Style.secondInnerCalView}>
                        <IcnWatchDone style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={Style.title}>{item?.totalView ? item.totalView : 0}</Text>
                    </View>
                    <View style={Style.secondInnerCalView}>
                        <IcnThumsUp style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={Style.title}>{item?.totalLike ? item.totalLike : 0}</Text>
                    </View>
                    <View style={Style.secondInnerCalView}>
                        <IcnComment style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={Style.title}>{item?.totalComments ? item.totalComments : 0}</Text>
                    </View>
                    <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }}>
                        <IcnMenu fill={GetAppColor.textColor} height={AppUtil.getHP(1.8)} width={AppUtil.getHP(1.8)} />
                    </TouchableOpacity>
                </View>

            </View>

        </TouchableOpacity>)
    };

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
                keyExtractor={item => item.id}
            />
            {console.log('props btn ====>',props.btn)}
            {
                
                (props?.btn=="" || props?.btn == undefined) ?null:
                <TouchableOpacity style={Style.bottomBtn} onPress={() => props.onButtonPress()}>
                    <Text style={Style.txtBottomBtn}> {props.btn}</Text>
                </TouchableOpacity>
            }
        </View>
    );
}
export default memo(SubIdeasListWithImage);





