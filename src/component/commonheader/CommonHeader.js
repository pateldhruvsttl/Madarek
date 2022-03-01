import React, { memo } from "react";
import { View, Image, Text } from "react-native";
import { GetSvg } from "../../utils/Assets";
import Style from "./CommonHeaderStyle";
import {Label} from "../../utils/StringUtil";

const CommonHeader = (props) => {

    if (props.isType === "HomeScreenHeader") {

        return (
            <View style={Style.MainView}>
                 <Image style={Style.headerProfile} source={GetSvg.iconSearch} />
                       
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





