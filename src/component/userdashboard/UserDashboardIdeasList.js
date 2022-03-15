import React, { memo } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux'

import { AppUtil } from "../../utils/AppUtil";
import { Label } from "../../utils/StringUtil";
import Style from "./userDashboardIdeasListStyle";
import IcnSelectedHeart from "../../assets/svg/IcnSelectedHeart"
import IcnUnSelectedHeart from "../../assets/svg/IcnUnSelectedHeart"
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


const UserDashboardIdeasList = (props) => {

    const { themeColor } = useSelector((state) => state)
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <View style={Style.renderMainView}>

            <View style={Style.rightItems}>
                <Image
                    style={Style.img}
                    resizeMode='cover'
                    source={{ uri: item.url }}
                />


                <View style={Style.rewordView}>
                    <IcnTrophy style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />
                    <IcnStar style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />
                    <IcnRewordComment style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />
                    {/* <IcnRewordLight style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} /> */}
                </View>

            </View>

            <View style={Style.leftItems}>

                <Text numberOfLines={1} style={Style.title}>{item.title}</Text>
                <Text numberOfLines={2} style={[Style.SubTitle, { color: props.isType == 'Challenges' ? GetAppColor.black : GetAppColor.borderRed }]}>{item.subTitle}</Text>

                {

                    <View style={Style.calView}>
                        <IcnClander style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={Style.title}>{item.date}</Text>
                        <IcnAvtarBg style={Style.callLeftIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={Style.title}>{item.name}</Text>
                    </View>


                }

                <View style={Style.secondCalView}>

                    {props.isType == "Request" &&

                        item.btn === "Rejected" ?
                        <TouchableOpacity style={Style.btnReject}>
                            <Text>{Label.Rejected}</Text>
                        </TouchableOpacity>
                        :
                        item.btn === "Accepted" ?
                            <TouchableOpacity style={Style.btnReject}>
                                <Text>{Label.Accepted}</Text>
                            </TouchableOpacity>
                            :
                            null
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
                    <Text style={Style.txtSeeMore}>{Label.seeMore}</Text>
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





