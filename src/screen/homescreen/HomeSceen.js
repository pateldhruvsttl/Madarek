import React, {memo } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppUtil from "../../utils/AppUtil";
import { Lable } from "../../utils/StringUtil";
import HomeStyle from "./HomeScreenStyle";

const HomeScreen = () => {

    const onTest =()=>{

        AppUtil.onLoding(true);

        setTimeout(()=>{
            AppUtil.onLoding(false);
        },2000);

        

    }

    return (
        <View style={HomeStyle.MainView}>
            <TouchableOpacity onPress={()=> onTest()}>
                <Text>{Lable.HomeTitle}</Text>
            </TouchableOpacity>
        </View>
    );
}
export default memo(HomeScreen);





