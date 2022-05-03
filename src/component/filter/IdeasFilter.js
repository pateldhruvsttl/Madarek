import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Modal from "react-native-modal";
import { GetAppColor } from '../../utils/Colors';
import CloseIcon from '../../assets/svg/CloseIcon';
import { Label } from '../../utils/StringUtil';
import Style from './IdeasFilterStyle'
import { AppUtil } from '../../utils/AppUtil';


export default function IdeasFilter(props) {
    return (
        <View>
            <Modal isVisible={props.visible}>
                <View style={Style.MainView}>

                    <View style={Style.headerView}>
                        <Text style={Style.txtTitle}>{Label.Filter}</Text>
                        <TouchableOpacity onPress={() => props.onClose()}>
                        <Text style={Style.txtClose}>{'X'}</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>
        </View>
    );
}