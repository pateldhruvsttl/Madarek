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
            
            <TouchableOpacity style={Style.btnAditionlImg}>
                <Text style={Style.txtBrowsBtn}>{Label.LibraryImage}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default memo(BrowseFileItem);