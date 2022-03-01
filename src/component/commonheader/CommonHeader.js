import React, { memo } from "react";
import { View, Text } from "react-native";
import Style from "./CommonHeaderStyle";

const CommonHeader = (props) => {
    console.log(props.isType);


    if (props.isType === "HomeScreenHeader") {

        return (
            <View style={Style.MainView}>
                <Text>hello</Text>
                <Text>hello</Text>
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





