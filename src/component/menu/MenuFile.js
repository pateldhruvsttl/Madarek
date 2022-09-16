import { Text, StyleSheet } from 'react-native'
import React from 'react'
import { MenuOption, Menu, MenuTrigger, MenuOptions } from 'react-native-popup-menu'
import IcnShareIcon from '../../assets/svg/IcnShareIcon'
import IcnMenuDote from '../../assets/svg/IcnMenuDote'
import { GetAppColor } from '../../utils/Colors'
import { Label } from '../../utils/StringUtil'
import { AppUtil } from '../../utils/AppUtil'
import FONTS from '../../utils/Fonts'
import { onShare } from '../share/ShareContent'

const MenuFile = (props) => {
    return (
        <Menu>
            <MenuTrigger>
                <IcnMenuDote height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} fill={GetAppColor.grayBorder} />
            </MenuTrigger>
            <MenuOptions>
                <MenuOption style={Style.menuView} onSelect={() => onShare(props.onMessage)}>
                    <IcnShareIcon stroke={GetAppColor.pincolor} style={Style.headerProfileIcn} height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
                    <Text style={Style.txtMenuOptions}>{Label.Share}</Text>
                </MenuOption>
            </MenuOptions>
        </Menu>
    )
}

const Style = StyleSheet.create({
    menuView: { flexDirection: 'row', marginVertical: AppUtil.getHP(0.8), alignItems: 'center' },
    txtMenuOptions: { color: GetAppColor.pincolor, fontFamily: FONTS.robotRegular },
    headerProfileIcn: { marginHorizontal: AppUtil.getHP(1) },
})
export default MenuFile