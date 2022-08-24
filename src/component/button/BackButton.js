import React, { memo } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import IcnBack from "../../assets/svg/IcnBack";
import Style from "./ButtonStyle";
import { AppUtil } from '../../utils/AppUtil';
import { AppConfig, getLanguage } from '../../manager/AppConfig';

function BackButton() {
    const navigation = useNavigation();
    const _lang = getLanguage();
    return (
        <TouchableOpacity onPress={() => { navigation.goBack() }} style={Style.LeftIcnView}>
            <IcnBack style={[Style.headerProfile,{transform: [{ rotate: _lang=='ar'?'180deg':'0deg' }]}]} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
        </TouchableOpacity>
    )
}

export default memo(BackButton)