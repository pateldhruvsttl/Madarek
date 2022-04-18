import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

import Style from './ParticipateModalStyle'
import { Label } from '../../utils/StringUtil'
import { useSelector } from 'react-redux'
import IcnClose from '../../assets/svg/IcnClose'
import { AppUtil } from '../../utils/AppUtil'

const ParticipateModal = (props) => {

    const navigation = useNavigation();
    const { themeColor } = useSelector((state) => state)
    const { modalVisible, setModalVisible } = props
    const closeModal = () => {
        setModalVisible(!modalVisible);
    }

    const onNavigate = (screen) => {
        if (screen !== "")
            navigation.navigate(screen);
        closeModal();    
    }
    return (
        <View style={Style.modalView}>

            <Modal animationType='fade' transparent={true} visible={modalVisible}>
                <View style={Style.container}>

                    <TouchableOpacity style={Style.closeIcon} onPress={closeModal}>
                        <IcnClose height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} />
                    </TouchableOpacity>
                    <View style={Style.squareArea}>
                        <Text style={Style.modalHeaderTitle}>{Label.ModalTitleChallenge}</Text>

                        <TouchableOpacity style={[Style.bottomSelectBtn, { borderColor: themeColor.buttonColor }]} onPress={() => onNavigate("UserDashboardScreen")}>
                            <Text style={[Style.txtSelectBtn]}>{Label.SelectArea}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[Style.bottomBtn, { backgroundColor: themeColor.buttonColor }]} onPress={() => onNavigate("SubmitIdeaScreen")}>
                            <Text style={[Style.txtBottomBtn, { color: themeColor.buttonFontColor }]}>{Label.SubmitYourIdea}</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>

        </View>
    )
}

export default ParticipateModal