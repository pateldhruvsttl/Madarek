import React, { memo } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import IcnMenu from '../../assets/svg/IcnMenu'
import Style from "./ButtonStyle";
import { AppUtil } from '../../utils/AppUtil';

function MenuButton() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={Style.LeftIcnView}>
            <IcnMenu style={Style.headerProfile} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
        </TouchableOpacity>
    )
}

export default memo(MenuButton)