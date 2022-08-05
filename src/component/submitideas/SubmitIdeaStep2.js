import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { memo, useEffect, useState } from 'react'

import CountryPicker from 'react-native-country-picker-modal'
import CustomList from './CustomList'

import { Label } from '../../utils/StringUtil'
import Style from './IdeaStepStyle'
import { useSelector } from 'react-redux'
import { GetAppColor } from '../../utils/Colors'
import BackIcon from '../../assets/svg/loginLogo/BackIcon'
import ImageList from './ImageList';
import { deviceId } from '../../utils/Constant'
import { AppConfig } from '../../manager/AppConfig'
import { UserManager } from '../../manager/UserManager'

function SubmitIdeaStep2(props) {

    const { themeColor } = useSelector((state) => state);

    const [countryCode, setCountryCode] = useState('IN');
    const [mobileNumber, setMobileNumber] = useState("");
    const [nationality, setNationality] = useState("Selected");
    const [message, setMessage] = useState('');
    const [imageList, setImageList] = useState([{ assets: "selected" }]);
    

    useEffect(()=>{
        
        onGetField();
    },[])

    const onGetField =()=>{

        let obj = {
            "device_id":deviceId,
            "token" :AppConfig.token,
            "lang" :AppConfig.lang,
             "frontuser_id" :UserManager.userId,
             "idea_title":"test",
             "sector_id":"2",
             "category_id":"5",
             "sub_category_id":"0"
        }
    }

    const onCheckField = () => {
        // var obj ={countryCode:countryCode, mobileNumber:mobileNumber, nationality:nationality,message:message, imageList:imageList}
        props.onNext(/*obj*/);
    }
    const onSelect = (country) => {
        setCountryCode(country.cca2)
    }

    return (
        <View style={Style.MainView}>

            <View style={Style.innerSecondView1}>
                <Text style={Style.txtTitle}>{Label.Message}</Text>
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
                <Text style={Style.txtTitle}>{Label.UploadedImages}</Text>
                <ImageList onUpdateList={(list)=> setImageList(list)}/>
            </View>

            <TouchableOpacity style={[Style.btn, { backgroundColor: themeColor.buttonColor }]} onPress={() => onCheckField()}>
                <Text style={Style.txtBtn}>{Label.Continue}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default memo(SubmitIdeaStep2);

const sectorsList = ["Indian", "Indian", "Indian", "Indian", "Indian", "Indian", "Indian"];
