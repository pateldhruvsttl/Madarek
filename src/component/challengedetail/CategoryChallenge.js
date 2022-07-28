import React, { memo, useState } from "react";
import { View, FlatList, Text, TouchableOpacity, ScrollView } from "react-native";
import { useSelector } from 'react-redux'
import { Label } from '../../utils/StringUtil'
import { AppUtil } from "../../utils/AppUtil";
import IcnInformationTechnology from "../../assets/svg/IcnInformationTechnology"
import STYLE from "./CategoryChallengeStyle";
import IcnRewordLight from "../../assets/svg/IcnRewordLight";
import IcnParticipants from "../../assets/svg/IcnParticipants";
import IcnExpertEngage from "../../assets/svg/IcnExpertEngage";
import Modal from "react-native-modal";
const CategoryChallenge = (props) => {
    const { themeColor } = useSelector((state) => state)
    return (
        <View style={STYLE.MainView}>
            <ScrollView contentContainerStyle={STYLE.subMainView} horizontal={true}>

                <TouchableOpacity style={[STYLE.btnView, { borderColor: themeColor.buttonColor }]}>
                    <IcnRewordLight isType={props.isType} height={AppUtil.getHP(3.6)} width={AppUtil.getHP(3.6)} />
                    <Text style={STYLE.count}>{props.data.participateRowsCount}</Text>
                    <Text style={STYLE.txtBtn}>{Label.IdeaParticipate}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[STYLE.btnView, { borderColor: themeColor.buttonColor }]}>
                    <IcnParticipants isType={props.isType} height={AppUtil.getHP(3.6)} width={AppUtil.getHP(3.6)} />
                    <Text style={STYLE.count}>{props.similardata.evaluationPannel}</Text>
                    <Text style={STYLE.txtBtn}>{Label.Participate}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[STYLE.btnView, { borderColor: themeColor.buttonColor }]}>
                    <IcnExpertEngage isType={props.isType} height={AppUtil.getHP(3.6)} width={AppUtil.getHP(3.6)} />
                    <Text style={STYLE.count}>{props.evedata.evaluationPannel}</Text>
                    <Text style={STYLE.txtBtn}>{Label.ExpertsEngaged}</Text>
                </TouchableOpacity>

            </ScrollView>

        </View>
    );
}
export default memo(CategoryChallenge);

const testData = {
    ideaParticipate: "15",
    participants: "23",
    expertEngaged: "08"
}

