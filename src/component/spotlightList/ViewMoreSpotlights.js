import React, { memo } from "react";
import { View } from 'react-native'
import SpotlightListImage from "./SpotlightListImage";
import Style from './ViewMoreSpotlightStyle'

const ViewMoreSpotlights =(props) =>{
 
    return (
        <View style={Style.MainView}>
            <SpotlightListImage
                data={props?.propName?.data}
                isType={"Challenges"} 
                scrollEnabled={true}
                navigateDetail={(id) => props.navigateDetail(id)}
                likeChallenge={(id) => props.likeChallenge(id)}
                favoriteChallenge={(id) => props.favoriteChallenge(id)}
                paginations={props?.paginations}
                navigateToComment={(item) => props.navigateToComment(item)}
                />
        </View>
    )
}
export default memo(ViewMoreSpotlights);
