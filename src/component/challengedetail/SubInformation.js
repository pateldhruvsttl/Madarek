import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import STYLE from './SubInformationStyle'
import { Label } from '../../utils/StringUtil'

const SubInformation = (props) => {
    return (
        <View style={STYLE.mainView}>

            <View style={STYLE.container}>
                <Text style={STYLE.objectiveTxt}>{Label.Objective}</Text>
                <Text style={STYLE.subObjectiveTxt}>{props?.data.objective}</Text>
            </View>

            <View style={[STYLE.container, STYLE.spacing]}>
                <Text style={STYLE.objectiveTxt}>{Label.WhoParticipate}</Text>
                <Text style={STYLE.subObjectiveTxt}>{props.data.participateMulti}</Text>
            </View>

            <View style={[STYLE.container, STYLE.spacing]}>
                <Text style={STYLE.objectiveTxt}>{Label.Reward}</Text>
                <Text style={STYLE.subObjectiveTxt}>{props.data.reward}</Text>
            </View>

            <View style={[STYLE.container, STYLE.spacingSchedule]}>
                <Text style={STYLE.objectiveTxt}>{Label.Schedule}</Text>

                <View style={STYLE.submissionDetail}>
                    <Text style={STYLE.scheduleDate}>{Label.Announcement} </Text>
                    <Text style={STYLE.scheduleDate}>{props.data.announcementDate}</Text>
                </View>

                <View style={STYLE.submissionDetail}>
                    <Text style={STYLE.scheduleDate}>{Label.OpenForSubmissiom}</Text>
                    <Text style={STYLE.scheduleDate}>{props.data.startDate}</Text>
                </View>

                <View style={STYLE.submissionDetail}>
                    <Text style={STYLE.scheduleDate}>{Label.CloseForSubmission}</Text>
                    <Text style={STYLE.scheduleDate}>{props.data.endDate}</Text>
                </View>

                <View style={STYLE.submissionDetail}>
                    <Text style={STYLE.scheduleDate}>{Label.PublicEvaluation}</Text>
                    <Text style={STYLE.scheduleDate}>{props.data.publicEvaluation}</Text>
                </View>

                <View style={STYLE.submissionDetail}>
                    <Text style={STYLE.scheduleDate}>{Label.AwardAnnouncement}</Text>
                    <Text style={STYLE.scheduleDate}>{props.data.awardAnnouncement}</Text>
                </View>

            </View>

            <View style={STYLE.spacing}>
                <Text style={STYLE.objectiveTxt}>{Label.VotingMechanisam}</Text>
                <Text style={STYLE.subObjectiveTxt}>{`${props.data.votingMechanism}${props.data.mixVoting}`}</Text>
            </View>

        </View>
    )
}

export default SubInformation

