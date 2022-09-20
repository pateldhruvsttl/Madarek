import React, { memo, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { GetAppColor } from '../../utils/Colors';
import { Loger } from '../../utils/Loger';
import { Label } from '../../utils/StringUtil';
import IcnRemoveRound from '../../assets/svg/IcnRemoveRound'
import Style from './IdeaStepStyle'
import { useEffect } from 'react';
import { emailValidate } from '../../utils/Constant';

const TeamMembersDetails = (props) => {

    const [isMemberData, setMemberData] = useState([]);
    const [isErr, setErr] = useState(-1);


    useEffect(() => {

        let data = [];
        data.push({ full_name: "", email: "", country_ext: "", mobile: "" })
        setMemberData(data);

    }, [])

    useEffect(() => {
        if (isErr == -1) {
            let data = [];
            isMemberData.forEach(element => {
                if (element.full_name != "" || element.email != "" || element.country_ext != "" || element.mobile != "") {
                    data.push(element)
                }
            });
            props.onSelectTeamMembers(data)
        }
        else {
            props.onSelectTeamMembers("err")
        }
    }, [isMemberData])

    const onAddItem = () => {

        let arr = isMemberData;
        arr.push({ full_name: "", email: "", country_ext: "", mobile: "" });
        setMemberData([...arr]);

    }
    const onRemoveItem = (index) => {
        let arr = isMemberData;
        arr.splice(index, 1);
        setMemberData([...arr]);
    }

    const setFiled = (type, index, text) => {

        let data = isMemberData;

        if (type === "name") {

            if (text == "")
                setErr(-1)
            else if (!text.trim())
                setErr(index)
            else
                setErr(-1)

            data[index].full_name = text;
        }
        else if (type === "email") {
            if (text == "")
                setErr(-1)
            else if (!text.trim() || !emailValidate(text))
                setErr(index)
            else
                setErr(-1)

            data[index].email = text;
        }
        else if (type === "contryCode") {

            if (text == "")
                setErr(-1)
            else if (!text.trim())
                setErr(index)
            else
                setErr(-1)

            data[index].country_ext = text;
        }
        else if (type === "mobileNo") {
            if (text == "")
                setErr(-1)
            else if (!text.trim())
                setErr(index)
            else
                setErr(-1)

            data[index].mobile = text;
        }

        setMemberData([...data]);
    }

    const onItem = (index, item) => {

        let data = isMemberData[index];
        return (
            <View style={[Style.innerSecondView3, { borderColor: isErr === index ? GetAppColor.borderRed : GetAppColor.commonTextColor }]}>
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
                    value={data?.name}
                    onChangeText={title => setFiled("name", index, title)}
                />
                <TextInput
                    placeholderTextColor={GetAppColor.grayBorder}
                    multiline={true}
                    placeholder={props?.data?.email?.caption}
                    style={Style.txtInputTitlePlaceHolder}
                    value={data.email}
                    keyboardType={"email-address"}
                    onChangeText={title => setFiled("email", index, title)}

                />
                <View style={Style.detailsView}>
                    <TextInput
                        placeholderTextColor={GetAppColor.grayBorder}
                        multiline={true}
                        placeholder={props?.data?.country_ext?.caption}
                        style={[Style.txtInputTitlePlaceHolder, { width: '25%' }]}
                        value={data.contryCode}
                        keyboardType={"phone-pad"}
                        onChangeText={title => setFiled("contryCode", index, title)}
                    />
                    <TextInput
                        placeholderTextColor={GetAppColor.grayBorder}
                        multiline={true}
                        placeholder={props?.data?.mobile?.caption}
                        style={[Style.txtInputTitlePlaceHolder, { width: '70%' }]}
                        value={data.mobileNo}
                        maxLength={12}
                        keyboardType={"phone-pad"}
                        onChangeText={title => setFiled("mobileNo", index, title)}

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
                isMemberData.length > 0 && isMemberData?.map((item, index) => {
                    return onItem(index, item);
                }
                )
            }

        </View>
    )
}

export default memo(TeamMembersDetails);