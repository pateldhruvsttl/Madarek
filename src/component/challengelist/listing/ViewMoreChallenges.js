import React, { memo, useState } from "react";
import { View } from 'react-native'
import ChallengeListImage from "../ChallengeListImage";
import Style from "./ViewMoreChallengeStyle";

const ViewMoreChallenges =(props) =>{

    
    return (
        <View style={Style.MainView}>
            <ChallengeListImage
                data={props?.propName?.data} isType={"Challenges"} scrollEnabled={true}
                navigateDetail={(item) => props.navigateDetail(item)} />
        </View>
    )
}
export default memo(ViewMoreChallenges);
