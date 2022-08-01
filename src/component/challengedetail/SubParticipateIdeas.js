import React, { memo } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { AppUtil } from "../../utils/AppUtil";
import { Label } from "../../utils/StringUtil";
import IcnClander from "../../assets/svg/IcnClander"

import IcnTrophy from "../../assets/svg/IcnTrophy"
import IcnStar from "../../assets/svg/IcnStar"
import IcnRewordComment from "../../assets/svg/IcnRewordComment"
import IcnRewordLight from "../../assets/svg/IcnRewordLight"
import IcnAvtarBg from "../../assets/svg/IcnAvtarBg"
import { GetAppColor } from "../../utils/Colors";
import STYLE from "./SubParticipateIdeaStyle";
import moment from "moment";


const SubParticipateIdeas = (props) => {
    const navigation = useNavigation();
    const Bold = ({ children }) => <Text style={STYLE.boldView}>{children}</Text>

    const renderItem = ({ item }) => (
        <View style={STYLE.renderMainView}>

            <View style={STYLE.rightItems}>
                <Image
                    style={STYLE.img}
                    resizeMode='cover'
                    source={{ uri: item.participateImage }}
                />

                {
                    props.isType != 'ChallengeDetail' &&
                    <View style={STYLE.rewordView}>
                        <IcnTrophy style={STYLE.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />
                        <IcnStar style={STYLE.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />
                        <IcnRewordComment style={STYLE.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />
                        <IcnRewordLight style={STYLE.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />
                    </View>
                }

            </View>

            <View style={STYLE.leftItems}>

                <Text numberOfLines={2} style={[STYLE.SubTitle, { color: props.isType == 'Challenges' ? GetAppColor.black : GetAppColor.borderRed }]}>
                    {item.participateTitle}</Text>


                <View style={STYLE.calView}>
                    <View style={STYLE.inerContentLeft}>
                        <IcnClander style={STYLE.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={STYLE.title}>{item.participateDate}</Text>
                    </View>
                    <View style={STYLE.inerContentRight}>
                        <IcnAvtarBg style={STYLE.callLeftIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={STYLE.title}>{item.participateBy}</Text>
                    </View>
                </View>

                <View style={STYLE.secondCalView}>

                    <View style={STYLE.secondInnerCalView}>
                        <Text style={STYLE.title}>{Label.Rank}{"\n"}<Bold>{item.rank}</Bold></Text>
                        {/* <Text style={STYLE.titleScore}>{item.rank}</Text> */}
                    </View>
                    <View style={STYLE.totalScoree}>
                        <Text style={STYLE.title}>{Label.TotalScore}{"\n"}<Bold>{Number(item.totalScore).toFixed(2)}</Bold></Text>
                    </View>
                    <View style={STYLE.secondInnerCalViewLast}>
                        <Text style={STYLE.title}>{Label.Votes}{"\n"}<Bold>{item.totalVote}</Bold></Text>
                    </View>
                </View>
            </View>

        </View>
    );

    return (
        <View style={STYLE.MainView}>
            <Text style={STYLE.heading}>
                {Label.ParticipateIdeas}
            </Text>
            <FlatList
                data={props.data}
                scrollEnabled={props?.scrollEnabled ? true : false}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            {
                props?.btn &&
                <TouchableOpacity style={STYLE.bottomBtn} onPress={() => navigation.navigate("IdeasListScreen")}>
                    <Text style={STYLE.txtBottomBtn}> {props.btn}</Text>
                </TouchableOpacity>
            }
        </View>
    );
}
export default memo(SubParticipateIdeas);





