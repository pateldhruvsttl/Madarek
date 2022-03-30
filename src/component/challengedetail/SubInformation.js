import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import STYLE from './SubInformationStyle'
import { Label } from '../../utils/StringUtil'

const SubInformation = () => {
    return (
        <View style={STYLE.mainView}>

            <View style={STYLE.container}>
                <Text style={STYLE.objectiveTxt}>{Label.Objective}</Text>
                <Text style={STYLE.subObjectiveTxt}>{data.objective}</Text>
            </View>

            <View style={[STYLE.container, STYLE.spacing]}>
                <Text style={STYLE.objectiveTxt}>{Label.WhoParticipate}</Text>
                <Text style={STYLE.subObjectiveTxt}>{data.participateType}</Text>
            </View>

            <View style={[STYLE.container, STYLE.spacing]}>
                <Text style={STYLE.objectiveTxt}>{Label.Reward}</Text>
                <Text style={STYLE.subObjectiveTxt}>{data.rewards}</Text>
            </View>

            <View style={[STYLE.container, STYLE.spacingSchedule]}>
                <Text style={STYLE.objectiveTxt}>{Label.Schedule}</Text>

                <View style={STYLE.submissionDetail}>
                    <Text style={STYLE.scheduleDate}>{Label.Announcement} </Text>
                    <Text style={STYLE.scheduleDate}>{data.announcement}</Text>
                </View>

                <View style={STYLE.submissionDetail}>
                    <Text style={STYLE.scheduleDate}>{Label.OpenForSubmissiom}</Text>
                    <Text style={STYLE.scheduleDate}>{data.openforSubmission}</Text>
                </View>

                <View style={STYLE.submissionDetail}>
                    <Text style={STYLE.scheduleDate}>{Label.CloseForSubmission}</Text>
                    <Text style={STYLE.scheduleDate}>{data.closeforSubmission}</Text>
                </View>

                <View style={STYLE.submissionDetail}>
                    <Text style={STYLE.scheduleDate}>{Label.PublicEvaluation}</Text>
                    <Text style={STYLE.scheduleDate}>{data.publicEvaluation}</Text>
                </View>

                <View style={STYLE.submissionDetail}>
                    <Text style={STYLE.scheduleDate}>{Label.AwardAnnouncement}</Text>
                    <Text style={STYLE.scheduleDate}>{data.awardAnnouncement}</Text>
                </View>

            </View>

            <View style={STYLE.spacing}>
                <Text style={STYLE.objectiveTxt}>{Label.VotingMechanisam}</Text>
                <Text style={STYLE.subObjectiveTxt}>{data.votingMechanisam}</Text>
            </View>

        </View>
    )
}

export default SubInformation

const data = {
    objective: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    participateType: "Business Owner",
    rewards: "2 Lakh",
    announcement: "02 March 2022",
    openforSubmission: "03 March 2022",
    closeforSubmission: " 23 March 2022",
    publicEvaluation: "24 March 2022",
    awardAnnouncement: "25 March 2022",
    votingMechanisam: "Public"
}
