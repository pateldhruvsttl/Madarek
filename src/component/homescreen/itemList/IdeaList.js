import React, { memo, useState } from "react";
import { View, Image, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { AppUtil } from "../../../utils/AppUtil";
import { GetAppColor } from "../../../utils/Colors";
import FONTS from "../../../utils/Fonts";
import { Loger } from "../../../utils/Loger";
import { Label } from "../../../utils/StringUtil";
import Style from './IdealListStyle'

import TabPopularIdeas from "./TabPopularIdeas";

const IdeaList = (props) => {

    const [selectedIndex, setSelectedIndex] = useState(0);

    const popularIdeaArr = props?.data?.popularIdeaArr;;
    const newIdeaArr = props?.data?.newIdeaArr;;
    const winningIdeaArr = props?.data?.winningIdeaArr;;

    const onSelectTab = (value) => {
        setSelectedIndex(value)
    }
    const onTabNavigate = () => {
        return (
            selectedIndex == 0 ? <TabPopularIdeas isType={"Ideas"} data={popularIdeaArr}/> :
                selectedIndex == 1 ? <TabPopularIdeas isType={"Ideas"} data={newIdeaArr}/> :
                    selectedIndex == 2 ? <TabPopularIdeas isType={"Ideas"} data={winningIdeaArr}/> : null
        )
    }

    return (
        <View style={{ width: '100%' }}>

            <View style={{ width: '100%', height: AppUtil.getHP(7), flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => onSelectTab(0)} style={[{ borderBottomWidth: selectedIndex === 0 ? 2 : 0 }, Style.tabStly]}>
                    <Text style={[{
                        color: selectedIndex === 0 ? GetAppColor.innovationGrey : GetAppColor.grayBorder,
                        fontWeight: selectedIndex === 0 ? 'bold' : 'normal',
                        fontFamily: selectedIndex === 0 ? FONTS.robotBold : FONTS.robotRegular,
                    }, Style.txtCat]}>{Label.PopularIdeas}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onSelectTab(1)} style={[{ borderBottomWidth: selectedIndex === 1 ? 2 : 0 }, Style.tabStly]}>
                    <Text style={[{
                        color: selectedIndex === 1 ? GetAppColor.innovationGrey : GetAppColor.grayBorder,
                        fontWeight: selectedIndex === 1 ? 'bold' : 'normal',
                        fontFamily: selectedIndex === 1 ? FONTS.robotBold : FONTS.robotRegular,
                    }, Style.txtCat]}>{Label.NewIdeas}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onSelectTab(2)} style={[{ borderBottomWidth: selectedIndex === 2 ? 2 : 0 }, Style.tabStly]}>
                    <Text style={[{
                        color: selectedIndex === 2 ? GetAppColor.innovationGrey : GetAppColor.grayBorder,
                        fontWeight: selectedIndex === 2 ? 'bold' : 'normal',
                        fontFamily: selectedIndex === 2 ? FONTS.robotBold : FONTS.robotRegular,
                    }, Style.txtCat]}>{Label.WinningIdeas}</Text>
                </TouchableOpacity>
            </View>

                {onTabNavigate()}
        </View>
    );
}
export default memo(IdeaList);





