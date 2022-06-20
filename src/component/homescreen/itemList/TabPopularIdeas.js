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
            {
                props?.data?.length > 0 ?
                    <SubIdeasListWithImage
                        data={props.data}
                        isType={props.isType}
                        likeIdea={props.likeIdea}
                        btn={props.data.length > 0 ? Label.SeeAllIdeas : ""}
                        onButtonPress={() => { navigation.navigate("IdeasListScreen", { likeIdea: props.likeIdea }) }}
                        onItemPress={() => { navigation.navigate("IdeaDetails") }} />

                    :
                    <View style={ Style.emptyView}>
                        <Text>No Idea List Found</Text>
                    </View>
            }
        </View>
    );
}
export default memo(TabPopularIdeas);





