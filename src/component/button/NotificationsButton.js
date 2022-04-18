import React, { memo } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import IcnAlert from '../../assets/svg/IcnAlert'
import Style from "./ButtonStyle";
import { AppUtil } from '../../utils/AppUtil';

function NotificationsButton() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("NotificationsScreen")}>
            <IcnAlert style={Style.icnProp} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
        </TouchableOpacity>
    )
}

export default memo(NotificationsButton)