import React, { memo } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Label } from "../../../utils/StringUtil";
import SubIdeasListWithImage from "../SubIdeasListWithImage";
import Style from "./TabPopularIdeasListStyle";



const TabPopularIdeas = (props) => {

    return (
        <View style={Style.MainView}>
            <SubIdeasListWithImage data={props.data} btn={Label.SeeAllIdeas} isType={props.isType}/>
        </View>
    );
}
export default memo(TabPopularIdeas);





