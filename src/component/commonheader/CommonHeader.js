import React, { memo } from "react";
import { View, Image, Text } from "react-native";
import { GetSvg } from "../../utils/Assets";
import Style from "./CommonHeaderStyle";
import {Label} from "../../utils/StringUtil";
import IcnMenu from '../../assets/svg/IcnMenu'
import { AppUtil } from "../../utils/AppUtil";

const CommonHeader = (props) => {

    if (props.isType === "HomeScreenHeader") {

        return (
            <View style={Style.MainView}>
                 <IcnMenu style={Style.headerProfile} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                 
                <Text>{Label.HomeTitle}</Text>
                <Text>hello</Text>
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





