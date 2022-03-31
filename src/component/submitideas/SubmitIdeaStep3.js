import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { memo, useState } from 'react'

import CountryPicker from 'react-native-country-picker-modal'
import CustomList from './CustomList'

import { Label } from '../../utils/StringUtil'
import Style from './IdeaStepStyle'
import { useSelector } from 'react-redux'
import { GetAppColor } from '../../utils/Colors'
import BackIcon from '../../assets/svg/loginLogo/BackIcon'
import ImageList from './ImageList';

function SubmitIdeaStep3(props) {

    const { themeColor } = useSelector((state) => state);

    const [countryCode, setCountryCode] = useState('IN');
    const [mobileNumber, setMobileNumber] = useState("");
    const [nationality, setNationality] = useState("Select");
    const [message, setMessage] = useState('');
    const [imageList, setImageList] = useState([{ assets: "selected" }]);
    

    const onCheckField = () => {
        var obj ={countryCode:countryCode, mobileNumber:mobileNumber, nationality:nationality,message:message, imageList:imageList}
        props.onNext(obj);
    }
    const onSelect = (country) => {
        setCountryCode(country.cca2)
    }

    return (
        <View style={Style.MainView}>

            <View style={Style.innerFirstView}>
                <Text style={Style.txtTitle}>{"Alternate Mobile No."}</Text>

                <View style={{ flexDirection: 'row' }}>

                    <View style={Style.numberAreaOne1}>
                        <CountryPicker
                            {...{ countryCode, onSelect, withCallingCode: true, withFlagButton: false, withCallingCodeButton: true, }}
                            visible={false}
                            containerButtonStyle={{ marginEnd: 5 }} >
                        </CountryPicker>

                        <View style={Style.codePickerArea}>
                            <BackIcon width={12} height={12} />
                        </View>

                    </View>

                    <TextInput
                        placeholderTextColor={GetAppColor.grayBorder}
                        numberOfLines={2}
                        keyboardType="number-pad"
                        style={Style.txtInputMobile}
                        value={mobileNumber}
                        onChangeText={title => setMobileNumber(title)}
                    />
                </View>
            </View>


            <View style={Style.innerView1}>
                <Text style={Style.txtTitle}>{"Nationality"}</Text>
                <CustomList item={sectorsList} onSelect={(txt) => setNationality(txt)} />
            </View>


            <View style={Style.innerSecondView1}>
                <Text style={Style.txtTitle}>{"Message"}</Text>
                <TextInput
                    placeholderTextColor={GetAppColor.grayBorder}
                    numberOfLines={2}
                    multiline={true}
                    style={Style.txtInputTitle}
                    value={message}
                    onChangeText={title => setMessage(title)}
                />
            </View>

            <View style={Style.innerView1}>
                <Text style={Style.txtTitle}>{"Uploaded Images"}</Text>
                <ImageList onUpdateList={(list)=> setImageList(list)}/>
            </View>

            <TouchableOpacity style={[Style.btn, { backgroundColor: themeColor.buttonColor }]} onPress={() => onCheckField()}>
                <Text style={Style.txtBtn}>{Label.Continue}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default memo(SubmitIdeaStep3);

const sectorsList = ["Indian", "Indian", "Indian", "Indian", "Indian", "Indian", "Indian"];
