import React, { memo, useState } from "react";
import { View, Image, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { AppUtil } from "../../../utils/AppUtil";
import { GetAppColor } from "../../../utils/Colors";
import FONTS from "../../../utils/Fonts";
import Style from './IdealListStyle'

import PopularIdeas from "./TabPopularIdeas";

const IdeaList = (props) => {

    const [isSelectedIndex, setSelectedIndex] = useState(0);

    const onSelectTab = (value) => {
        setSelectedIndex(value)
    }
    const onTabNavigate = () => {
        return (
            isSelectedIndex == 0 ? <PopularIdeas isType={"Ideas"} data={props.data}/> :
                isSelectedIndex == 1 ? <PopularIdeas isType={"Ideas"} data={props.data}/> :
                    isSelectedIndex == 2 ? <PopularIdeas isType={"Ideas"} data={props.data}/> : null
        )
    }

    return (
        <View style={{ width: '100%' }}>

            <View style={{ width: '100%', height: AppUtil.getHP(7), flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => onSelectTab(0)} style={[{ borderBottomWidth: isSelectedIndex === 0 ? 2 : 0 }, Style.tabStly]}>
                    <Text style={[{
                        color: isSelectedIndex === 0 ? GetAppColor.innovationGrey : GetAppColor.grayBorder,
                        fontWeight: isSelectedIndex === 0 ? 'bold' : 'normal',
                        fontFamily: isSelectedIndex === 0 ? FONTS.robotBold : FONTS.robotRegular,
                    }, Style.txtCat]}> Popular Ideas</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onSelectTab(1)} style={[{ borderBottomWidth: isSelectedIndex === 1 ? 2 : 0 }, Style.tabStly]}>
                    <Text style={[{
                        color: isSelectedIndex === 1 ? GetAppColor.innovationGrey : GetAppColor.grayBorder,
                        fontWeight: isSelectedIndex === 1 ? 'bold' : 'normal',
                        fontFamily: isSelectedIndex === 1 ? FONTS.robotBold : FONTS.robotRegular,
                    }, Style.txtCat]}>New Ideas</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onSelectTab(2)} style={[{ borderBottomWidth: isSelectedIndex === 2 ? 2 : 0 }, Style.tabStly]}>
                    <Text style={[{
                        color: isSelectedIndex === 2 ? GetAppColor.innovationGrey : GetAppColor.grayBorder,
                        fontWeight: isSelectedIndex === 2 ? 'bold' : 'normal',
                        fontFamily: isSelectedIndex === 2 ? FONTS.robotBold : FONTS.robotRegular,
                    }, Style.txtCat]}>Winning Ideas</Text>
                </TouchableOpacity>
            </View>

                {onTabNavigate()}
        </View>
    );
}
export default memo(IdeaList);





