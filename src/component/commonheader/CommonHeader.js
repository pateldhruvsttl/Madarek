import React, { memo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Style from "./CommonHeaderStyle";
import { Label } from "../../utils/StringUtil";
import IcnMenu from '../../assets/svg/IcnMenu'
import IcnMenuHeader from '../../assets/svg/IcnMenuHeader'
import IcnMenuDote from '../../assets/svg/IcnMenuDote'
import IcnAlert from '../../assets/svg/IcnAlert'
import IcnSearch from '../../assets/svg/IcnSearch'
import { AppUtil } from "../../utils/AppUtil";
import IcnBack from "../../assets/svg/IcnBack";
import { useSelector } from 'react-redux'
import IcnMultiMsg from "../../assets/svg/IcnMultiMsg";
import IcnEdit from "../../assets/svg/IcnEdit";

import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';

const CommonHeader = (props) => {
    const { themeColor } = useSelector((state) => state)
    const onMenu = () => {
        return (

            <Menu>
                <MenuTrigger>
                    <IcnMenuDote style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                </MenuTrigger>

                <MenuOptions>
                    <MenuOption onSelect={() => alert(`Save`)} text='Save' />
                    <MenuOption onSelect={() => alert(`Delete`)} >
                        <Text style={{ color: 'red' }}>Delete</Text>
                    </MenuOption>
                    <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
                </MenuOptions>

            </Menu>

        )
    }

    if (props.isType === "HomeScreenHeader") {

        return (
            <View style={Style.MainView}>


                {/* <IcnMsg style={Style.headerProfileIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                    <IcnSearch style={Style.headerProfileIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />*/}


                <TouchableOpacity style={Style.LeftIcnView}>
                    <IcnMenu style={Style.headerProfile} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                </TouchableOpacity>

                <View style={Style.centerIcnView}>
                    <IcnMenuHeader style={Style.headerProfile} height={AppUtil.getHP(20)} width={AppUtil.getHP(20)} />
                </View>

                <View style={Style.rightIcnView}>
                    <TouchableOpacity>
                        <IcnAlert style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                    </TouchableOpacity>
                    {onMenu()}
                </View>

            </View>

        );
    }
    else if (props.isType === "IdeaDetails") {
        return (
            <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>
                <TouchableOpacity style={Style.LeftIcnView}>
                    <IcnBack style={Style.headerProfile} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                </TouchableOpacity>

                <View style={Style.centerIcnView}>
                    <Text style={[Style.expertHeader,{color:themeColor.headerFontColor}]}>{Label.IdeaDetails}</Text>
                </View>

                <View style={Style.rightIcnView}>
                    <TouchableOpacity>
                        <IcnMultiMsg style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <IcnEdit style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}
export default memo(CommonHeader);





