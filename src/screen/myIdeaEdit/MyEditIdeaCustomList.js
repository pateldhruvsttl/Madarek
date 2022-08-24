import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { memo, useState } from 'react'
import Styles from './Style'
import IcnNext from "../../assets/svg/IcnNext";

import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { AppUtil } from '../../utils/AppUtil'
import { GetAppColor } from '../../utils/Colors';
import { AppConfig, getLanguage } from '../../manager/AppConfig';

function myEditIdeaCustomList(props) {

    const [title, setTitle] = useState(props?.currentItem != "" ? props?.currentItem : "Selected");
    const [sector, setSector] = useState(props?.sector != "" ? props?.sector : "sector");
const _lang = getLanguage();
    return (
        <View style={{ marginHorizontal: "0%" }}>
            <Menu>
                <MenuTrigger>
                    <View style={Styles.selectMenuTitle1}>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={[Styles.txtDrowerTitle,{color:GetAppColor.pincolor, fontFamily:'robotBold'}]}>{sector}</Text>
                            <Text style={Styles.txtDrowerTitle}>{title}</Text>
                        </View>
                        <IcnNext style={[Styles.headerLeftIcn,{ transform: [{ rotate: _lang == "ar" ? "180deg" : "0deg" }] }]} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                    </View>
                </MenuTrigger>

                <MenuOptions>

                    {props?.item?.map((txt) => {
                        return (
                            <MenuOption onSelect={() => { props.onSelect(txt); setTitle(txt) }}>
                                <Text>{txt}</Text>
                            </MenuOption>
                        )
                    })}
                </MenuOptions>
            </Menu>
        </View>
    )
}

export default memo(myEditIdeaCustomList);