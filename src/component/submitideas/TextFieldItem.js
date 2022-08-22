import React, { memo, useState } from 'react';
import { useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import { GetAppColor } from '../../utils/Colors';
import { Label } from '../../utils/StringUtil';
import Style from './IdeaStepStyle'

const TextFieldItem = (props) => {

    const [isMessage, setMessage] = useState()
    useEffect(() => {
            props?.onCurrentText(isMessage);
    }, [isMessage])
    return (
        <View style={Style.innerSecondView1}>
            <Text style={Style.txtTitle}>{props.title}{props.required == "Y" && <Text style={Style.txtStar}>*</Text>}</Text>
            <TextInput
                placeholderTextColor={GetAppColor.grayBorder}
                multiline={true}
                style={Style.txtInputTitle}
                value={isMessage}
                onChangeText={title => setMessage(title)}
            />
        </View>
    )
}

export default memo(TextFieldItem);