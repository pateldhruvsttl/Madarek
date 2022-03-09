import React, { memo } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';
import Style from "./CommonHeaderStyle";
import { AppUtil } from "../../utils/AppUtil";
import { GetAppColor } from "../../utils/Colors";

import IcnMenu from '../../assets/svg/IcnMenu'
import IcnMenuHeader from '../../assets/svg/IcnMenuHeader'
import IcnMenuDote from '../../assets/svg/IcnMenuDote'
import IcnAlert from '../../assets/svg/IcnAlert'
import IcnSearch from '../../assets/svg/IcnSearch'
import IcnFilter from '../../assets/svg/IcnFilter'
import { Label } from "../../utils/StringUtil";


const CommonHeader = (props) => {

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
            <>
                <StatusBar barStyle="light-content" hidden={false} backgroundColor={GetAppColor.statusBarYellow} translucent={true} />
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
            </>
        );
    }
    else if (props.isType === "IdeasListScreen") {

        return (
            <>
                <StatusBar barStyle="light-content" hidden={false} backgroundColor={GetAppColor.statusBarYellow} translucent={true} />
                <View style={Style.MainView}>
                    <TouchableOpacity style={Style.LeftIcnView}>
                        <IcnMenu style={Style.headerProfile} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                    </TouchableOpacity>

                    <View style={Style.centerIcnView}>
                        <Text style={Style.txtHeader}>{Label.Ideas}</Text>
                    </View>

                    <View style={Style.rightIcnView}>
                        <TouchableOpacity>
                            <IcnFilter style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <IcnSearch style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                        </TouchableOpacity>
                    </View>

                </View>
            </>
        );
    }
    else {
        return (
            null
        )
    }
}
export default memo(CommonHeader);





