import React, { memo } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import SubIdeasList from "../SubIdeasList";
import Style from "./TabPopularIdeasListStyle";



const PopularIdeasListScreen = (props) => {

    return (
        <View style={Style.MainView}>
            <SubIdeasList data={props.data} btn={"See All Ideas"} isType={props.isType}/>
        </View>
    );
}
export default memo(PopularIdeasListScreen);





