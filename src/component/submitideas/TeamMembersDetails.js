import React, { memo, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { GetAppColor } from '../../utils/Colors';
import { Loger } from '../../utils/Loger';
import { Label } from '../../utils/StringUtil';
import IcnRemoveRound from '../../assets/svg/IcnRemoveRound'
import Style from './IdeaStepStyle'

const TeamMembersDetails = (props) => {

    const [isNumberOfItem, setNumberOfItem] = useState([1]);
    const [isName, setName] = useState("");
    const [isEmal, setEmail] = useState("");
    const [isCountyCode, setCountyCode] = useState("");
    const [isMobileNumber, setMobileNumber] = useState("");

    const onAddItem = () => {

        let arr = isNumberOfItem;
        arr.push(1);
        setNumberOfItem([...arr]);

    }
    const onRemoveItem = (index) => {
        let arr = isNumberOfItem;
        arr.splice(index, 1);
        setNumberOfItem([...arr]);
    }
    const onItem = (index) => {
        return (
            <View style={Style.innerSecondView3}>
                {
                    index != 0 && <TouchableOpacity style={Style.removeIcnStyle} onPress={() => onRemoveItem(index)}>
                        <IcnRemoveRound width={20} height={20} />
                    </TouchableOpacity>
                }
                <TextInput
                    placeholderTextColor={GetAppColor.grayBorder}
                    multiline={true}
                    placeholder={props?.data?.full_name?.caption}
                    style={Style.txtInputTitlePlaceHolder}
                    value={isName}
                    onChangeText={title => setName(title)}
                />
                <TextInput
                    placeholderTextColor={GetAppColor.grayBorder}
                    multiline={true}
                    placeholder={props?.data?.email?.caption}
                    style={Style.txtInputTitlePlaceHolder}
                    value={isEmal}
                    onChangeText={title => setEmail(title)}

                />
                <View style={Style.detailsView}>
                    <TextInput
                        placeholderTextColor={GetAppColor.grayBorder}
                        multiline={true}
                        placeholder={props?.data?.country_ext?.caption}
                        style={[Style.txtInputTitlePlaceHolder, { width: '25%' }]}
                        value={isCountyCode}
                        onChangeText={title => setCountyCode(title)}
                    />
                    <TextInput
                        placeholderTextColor={GetAppColor.grayBorder}
                        multiline={true}
                        placeholder={props?.data?.mobile?.caption}
                        style={[Style.txtInputTitlePlaceHolder, { width: '70%' }]}
                        value={isMobileNumber}
                        onChangeText={title => setMobileNumber(title)}

                    />
                </View>
            </View>
        )
    }
    return (
        <View style={Style.innerSecondView1}>
            <View style={Style.innerSecondView4}>
                <Text style={Style.txtTitle}>{props.data.caption}{props.data.required == "Y" && <Text style={Style.txtStar}>*</Text>}</Text>
                <TouchableOpacity onPress={() => onAddItem()} style={Style.icnPluse}>
                    <Text style={Style.txticnPluse}>{"+"}</Text>
                </TouchableOpacity>
            </View>

            {
                isNumberOfItem.map((item, index) => {
                    return onItem(index);
                }
                )
            }

        </View>
    )
}

export default memo(TeamMembersDetails);