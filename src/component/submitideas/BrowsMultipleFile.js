import React, { memo, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { GetAppColor } from '../../utils/Colors';
import { Label } from '../../utils/StringUtil';
import Style from './IdeaStepStyle'

const BrowseFileItem = (props) => {

    const [isMessage, setMessage] = useState()
    return (
        <View style={Style.innerSecondView1}>
            <Text style={Style.txtTitle}>{props.title}{props.requered == "Y" && <Text style={Style.txtStar}>*</Text>}</Text>
            <View style={Style.browsBorder}>
                <Text style={Style.txtFileText}>{"No file chosen"}</Text>

                <TouchableOpacity style={Style.btnBrows}>
                    <Text style={Style.txtBrowsBtn}>{Label.Browse}</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default memo(BrowseFileItem);