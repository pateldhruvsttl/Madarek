import React, { memo, useState } from "react";
import { View, Text, TouchableOpacity } from 'react-native'

import SubIdeasListWithImage from "../SubIdeasListWithImage";
import SubIdeasList from "../SubIdeasList";
import SubIdeasListGraph from "../SubIdeasListGraph";

import IcnIdeasImageAndTextFilter from '../../../assets/svg/IcnIdeasImageAndTextFilter'
import IcnIdeasTextFilter from '../../../assets/svg/IcnIdeasTextFilter'
import IcnIdeasGraphFilter from '../../../assets/svg/IcnIdeasGraphFilter'

import { AppUtil } from "../../../utils/AppUtil";
import { GetAppColor } from "../../../utils/Colors";
import Styles from './ViewMoreIdeasStyle'

function ViewMoreIdeas(props) {

    const [selectFilter, setSelectFilter] = useState(0);

    const onSetFilter = (value) => {
        setSelectFilter(value)
    }

    return (
        <View style={Styles.MainView}>

            <Text style={Styles.HeadertxtRecodes}><Text style={Styles.txt}>68</Text> {"Records Found"}</Text>
            <View style={Styles.HeaderBtn}>
                <TouchableOpacity style={[Styles.btnView, { borderColor: selectFilter == 0 ? GetAppColor.textColor : GetAppColor.btnBorderColor }]} onPress={() => onSetFilter(0)}>
                    <IcnIdeasImageAndTextFilter height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                </TouchableOpacity>

                <TouchableOpacity style={[Styles.btnView, { borderColor: selectFilter == 1 ? GetAppColor.textColor : GetAppColor.btnBorderColor }]} onPress={() => onSetFilter(1)}>
                    <IcnIdeasTextFilter height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                </TouchableOpacity>
                {
                    props.isMySubmitType ?
                        null
                        :
                        <TouchableOpacity style={[Styles.btnView, { borderColor: selectFilter == 2 ? GetAppColor.textColor : GetAppColor.btnBorderColor }]} onPress={() => onSetFilter(2)}>
                            <IcnIdeasGraphFilter height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                        </TouchableOpacity>
                }


            </View>

            <View style={Styles.selectView}>
                {selectFilter == 0 && <SubIdeasListWithImage onItemPress={() => props.navigateDetail()} data={props?.propName?.data} isType={"Ideas"} scrollEnabled={true} />}
                {selectFilter == 1 && <SubIdeasList onItemPress={() => props.navigateDetail()} data={props?.propName?.data} isType={"Ideas"} scrollEnabled={true} />}
                {selectFilter == 2 && <SubIdeasListGraph onItemPress={() => props.navigateDetail()} data={props?.propName?.data} isType={"Ideas"} scrollEnabled={true} />}
            </View>

        </View>
    )
}
export default memo(ViewMoreIdeas);