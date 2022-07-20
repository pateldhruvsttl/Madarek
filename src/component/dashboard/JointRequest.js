import React, { memo } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux'

import { AppUtil } from "../../utils/AppUtil";
import { Label } from "../../utils/StringUtil";
import Style from "./JointRequestStyle";

import IcnAcceptRound from "../../assets/svg/IcnAcceptRound"
import IcnRejectRound from "../../assets/svg/IcnRejectRound"
import ImageLoad from "react-native-image-placeholder";



const JointRequest = (props) => {

    const { themeColor } = useSelector((state) => state)
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <View style={Style.renderMainView}>

            <View style={Style.rightItems}>
                <ImageLoad style={Style.img}
                    resizeMode='cover'
                    source={{ uri: item.userPhoto }}
                    borderRadius={AppUtil.getHP(7)}
                    placeholderStyle={Style.img}
                />
            </View>

            <View style={Style.leftItems}>
                <Text numberOfLines={2} style={Style.txtTitle}>{item.fullName}</Text>
            </View>

            <View style={Style.endItems}>
                {
                    item.joinStatus != "Accepted" ?
                        <View style={Style.btnView}>
                            <TouchableOpacity>
                                <IcnAcceptRound style={Style.callLeftIcn} height={AppUtil.getHP(4)} width={AppUtil.getHP(4)} />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <IcnRejectRound style={Style.callLeftIcn} height={AppUtil.getHP(4)} width={AppUtil.getHP(4)} />
                            </TouchableOpacity>
                        </View>
                        :
                        <TouchableOpacity style={Style.btnAccept}>
                            <Text style={Style.txtBtnAccept}>{(Label.Accepted).toUpperCase()}</Text>
                        </TouchableOpacity>
                }
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

export default memo(JointRequest);






