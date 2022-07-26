import React, { memo } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux'

import { AppUtil } from "../../utils/AppUtil";
import { Label } from "../../utils/StringUtil";
import Style from "./userDashboardIdeasListStyle";
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
import ImageLoad from "react-native-image-placeholder";


const UserDashboardIdeasList = (props) => {

    const { themeColor } = useSelector((state) => state)
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        item &&
        <View style={Style.renderMainView}>

            <View style={Style.rightItems}>
                <ImageLoad
                    style={Style.img}
                    resizeMode='cover'
                    source={{ uri: item.ideaCoverImage }}
                />


                <View style={Style.rewordView}>
                    <IcnTrophy style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />
                    <IcnStar style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />
                    <IcnRewordComment style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />
                    {/* <IcnRewordLight style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} /> */}
                </View>

            </View>

            <View style={Style.leftItems}>
                <Text numberOfLines={1} style={Style.title}>{item.ideaTitle}</Text>
                {
                    props.isType == 'Challenges' ?
                        <Text numberOfLines={2} style={[Style.SubTitle, { color: GetAppColor.black }]}>{item.subTitle}</Text>
                        :
                        props.isType == 'Request' ?
                            <Text numberOfLines={2} style={[Style.SubTitle, { color: GetAppColor.black }]}>{item.ideaSubTitle}</Text>
                            :
                            props.isType == 'Maturation' ?
                                <Text numberOfLines={2} style={[Style.SubTitle, { color: GetAppColor.black }]}>{item.ideaSubTitle}</Text>
                                :
                                <Text numberOfLines={2} style={[Style.SubTitle, { color: GetAppColor.borderRed }]}>{item.subTitle}</Text>

                }


                {

                    <View style={Style.calView}>
                        <IcnClander style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={Style.title}>{item.date}</Text>
                        <IcnAvtarBg style={Style.callLeftIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={Style.title}>{item.fullName}</Text>
                    </View>


                }

                <View style={Style.secondCalView}>

                    {props.isType == "Request" ?

                        item.joinStatus === "Rejected" ?
                            <TouchableOpacity style={Style.btnReject}>
                                <Text style={Style.txtbtnReject}> {(Label.Rejected).toUpperCase()}</Text>
                            </TouchableOpacity>
                            //(Label.Rejected).toUpperCase()
                            :
                            item.joinStatus === "Accepted" ?
                                <TouchableOpacity style={Style.btnAccept}>
                                    <Text style={Style.txtbtnAccept}>{(Label.Accepted).toUpperCase()}</Text>
                                </TouchableOpacity>
                                :
                                null

                        : null
                    }

                    {props.isType == "Maturation" &&
                        <TouchableOpacity style={Style.btnComplited}>
                            <Text style={Style.txtbtnComplited}> {(Label.Completed).toUpperCase()}</Text>
                        </TouchableOpacity>
                    }

                </View>
            </View>

        </View>

    );

    return (
        <View style={Style.MainView}>
            {
                props?.isTitle &&
                <View style={Style.titleView}>
                    <Text style={[Style.txtTitle, { color: themeColor.buttonColor }]}>{props?.isTitle}</Text>
                    {/* <Text style={Style.txtSeeMore}>{Label.seeMore}</Text> */}
                </View>
            }

            <FlatList
                data={props.data}
                scrollEnabled={props?.scrollEnabled ? true : false}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            {
                props?.btn &&
                <TouchableOpacity style={Style.bottomBtn} onPress={() => navigation.navigate("IdeasListScreen")}>
                    <Text style={Style.txtBottomBtn}> {props.btn}</Text>
                </TouchableOpacity>
            }
        </View>
    );
}
export default memo(UserDashboardIdeasList);





