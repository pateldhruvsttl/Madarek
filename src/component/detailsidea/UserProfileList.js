import { Text, View, Image, FlatList, ScrollView, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { AppUtil } from '../../utils/AppUtil'
import { Label } from '../../utils/StringUtil'
import styles from './UserProfileListStyle'
import { useSelector } from 'react-redux'
import ParticipateModal from '../challengedetail/ParticipateModal'

const UserProfileList = (props) => {
    const { themeColor } = useSelector((state) => state)
    const [modalVisible, setModalVisible] = useState(false);
   
    const renderItem = ({ item }) => (

        <ScrollView horizontal={true}>
            <View style={styles.profileDetails}>
                <Image
                    style={styles.imgStyle}
                    horizontal
                    resizeMode='cover'
                    source={{ uri: item.url }}
                />
                <Text style={styles.personName}>{item.name}</Text>
            </View>
        </ScrollView>

    );
    const renderChallengeDetailItem = ({ item }) => (

        <ScrollView horizontal={true}>
            <View style={styles.profileDetails}>
                <Image
                    style={styles.imgChallengeListStyle}
                    horizontal
                    resizeMode='cover'
                    source={{ uri: item.url }}
                />
                <Text style={styles.personName}>{item.name}</Text>
                <Text style={styles.personOccupation}>{item.occupation}</Text>
            </View>
        </ScrollView>

    );

    return (
        <>
            {props.isType === 'ChallengeDetail' ?

                <View style={styles.profileChallenge}>

                    <View style={styles.profileSubChallenge}>
                        <Text style={[styles.heading, { paddingVertical: AppUtil.getHP(3) }]}>
                            {Label.EvaluationPanel}
                        </Text>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={props.profileData}
                            renderItem={renderChallengeDetailItem}
                            keyExtractor={item => item.id}
                        />
                    </View>

                    <View style={styles.footerbtnView}>
                        <TouchableOpacity style={[styles.bottomBtn,
                        { backgroundColor: themeColor.buttonColor }]} onPress={() => {setModalVisible(true)}}>
                            <Text style={[styles.txtBottomBtn, { color: themeColor.buttonFontColor }]}>{Label.ParticipateNow}</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                :
                <View style={styles.profileContainer}>
                    <Text style={[styles.heading, { paddingVertical: AppUtil.getHP(3) }]}>
                        {Label.Team}
                    </Text>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={props.profileData}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>}
                <ParticipateModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
                
        </>
    )
}

export default UserProfileList






