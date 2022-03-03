import React, { memo } from "react";
import { View, Text } from "react-native";
import Style from "./CommonHeaderStyle";
import { Label } from "../../utils/StringUtil";
import IcnMenu from '../../assets/svg/IcnMenu'
import IcnMenuHeader from '../../assets/svg/IcnMenuHeader'
import IcnMsg from '../../assets/svg/IcnMsg'
import IcnAlert from '../../assets/svg/IcnAlert'
import IcnSearch from '../../assets/svg/IcnSearch'
import { AppUtil } from "../../utils/AppUtil";

const CommonHeader = (props) => {

    if (props.isType === "HomeScreenHeader") {

        return (
            <View style={Style.MainView}>
                <IcnMenu style={Style.headerProfile} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                <IcnMenuHeader style={Style.headerProfile} height={AppUtil.getHP(20)} width={AppUtil.getHP(20)} />

                <View style={Style.leftMultiIcnView}>
                    <IcnMsg style={Style.headerProfileIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                    <IcnAlert style={Style.headerProfileIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                    <IcnSearch style={Style.headerProfileIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                </View>
            </View>
        );
    }
    else {
        return (
            null
        )
    }
}
export default memo(CommonHeader);





