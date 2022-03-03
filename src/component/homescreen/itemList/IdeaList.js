import React, { memo, useState } from "react";
import { View, Image, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { GetAppColor } from "../../../utils/Colors";
import Style from './IdealListStyle'

import PopularIdeas from "./TabPopularIdeas";

const IdeaList = () => {

    const [isSelectedIndex, setSelectedIndex] = useState(0);

    const onSelectTab = (value) => {
        setSelectedIndex(value)
    }
    const onTabNavigate = () => {
        return (
            isSelectedIndex == 0 && <PopularIdeas />
        )
    }

    return (
        <View style={{ width: '100%' }}>
            {/*  */}
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableOpacity onPress={() => onSelectTab(0)} style={[{ borderBottomWidth: isSelectedIndex === 0 ? 1 : 0 }, Style.tabStly]}>
                    <Text style={[{ color: isSelectedIndex === 0 ? GetAppColor.black : GetAppColor.grayBorder }, Style.txtCat]}> Popular Ideas</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onSelectTab(1)} style={[{ borderBottomWidth: isSelectedIndex === 1 ? 1 : 0 }, Style.tabStly]}>
                    <Text style={[{ color: isSelectedIndex === 1 ? GetAppColor.black : GetAppColor.grayBorder }, Style.txtCat]}>New Ideas</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onSelectTab(2)} style={[{ borderBottomWidth: isSelectedIndex === 2 ? 1 : 0 }, Style.tabStly]}>
                    <Text style={[{ color: isSelectedIndex === 2 ? GetAppColor.black : GetAppColor.grayBorder }, Style.txtCat]}>Winning Ideas</Text>
                </TouchableOpacity>
            </View>

            {onTabNavigate()}

        </View>
    );
}
export default memo(IdeaList);





