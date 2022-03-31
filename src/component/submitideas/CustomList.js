import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { memo, useState } from 'react'
import { Label } from '../../utils/StringUtil'
import Style from './IdeaStepStyle'
import { useSelector, useDispatch } from 'react-redux'
import { GetAppColor } from '../../utils/Colors'
import IcnNext from "../../assets/svg/IcnNext";

import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';
import { AppUtil } from '../../utils/AppUtil'

function CustomList(props) {

    const [title, setTitle] = useState(props?.currentItem !="" ? props?.currentItem : "Selected");

    return (
        <Menu>
            <MenuTrigger>
                <View style={props?.isType === "Submit" ? Style.selectMenuTitle2 : Style.selectMenuTitle1}>
                    <Text style={props?.isType === "Submit" ? Style.txtIdeasTitle : Style.txtInputTitle}>{title}</Text>
                    <IcnNext style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
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
    )
}

export default memo(CustomList);