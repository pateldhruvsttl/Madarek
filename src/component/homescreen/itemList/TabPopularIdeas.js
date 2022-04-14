import React, { memo } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Loger } from "../../../utils/Loger";
import { Label } from "../../../utils/StringUtil";
import SubIdeasListWithImage from "../SubIdeasListWithImage";
import Style from "./TabPopularIdeasListStyle";
import { useNavigation } from '@react-navigation/native';


const TabPopularIdeas = (props) => {
    const navigation = useNavigation();
    return (
        <View style={Style.MainView}>
            <SubIdeasListWithImage data={props.data} btn={Label.SeeAllIdeas} isType={props.isType}
                onSeeMorePress={() => { navigation.navigate("IdeasListScreen") }}
                onItemPress={() => { navigation.navigate("IdeaDetails") }} />
        </View>
    );
}
export default memo(TabPopularIdeas);





