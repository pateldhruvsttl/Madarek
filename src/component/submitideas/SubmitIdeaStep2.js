import { View, Text, TouchableOpacity, TextInput, Image, FlatList, Alert } from 'react-native'
import React, { memo, useEffect, useState } from 'react'

import { Label } from '../../utils/StringUtil'
import Style from './IdeaStepStyle'
import { useSelector } from 'react-redux'
import { Loger } from '../../utils/Loger'
import { deviceId } from '../../utils/Constant'
import { AppConfig, getLanguage } from '../../manager/AppConfig'
import { UserManager } from '../../manager/UserManager'
import { Service } from '../../service/Service'
import { EndPoints } from '../../service/EndPoints'
import TextFieldItem from './TextFieldItem'
import BrowseFileItem from './BrowseFileItem'
import BrowseEditionalImag from './BrowseEditionalImag'
import TeamMembersDetails from './TeamMembersDetails'
import TermAndConditions from './TermAndConditions'

function SubmitIdeaStep2(props) {

    const { themeColor } = useSelector((state) => state);
    const [isItemList, setItemList] = useState([]);
    const [isMultiImage, setMultiImage] = useState([]);
    const [isFile, setFile] = useState({});
    const [isArror, setArror] = useState(false);

    const [isFormData, setFormData] = useState({});

    useEffect(() => {
        GetField(props?.data?.sectorsId, props?.data?.categoryId, props?.data?.subCategoryId);
    }, [])



    const GetField = (sectorsId, categoryId, subCategoryId) => {
        let obj = {
            "device_id": deviceId,
            "token": AppConfig.token,
            "language": getLanguage(),
            "frontuser_id": UserManager.userId,
            "idea_title": "test",
            "sector_id": sectorsId,
            "category_id": categoryId,
            "sub_category_id": subCategoryId == "" ? "0" : subCategoryId,
        }

        Service.post(EndPoints.loadidea, obj, (res) => {
            if (res.statusCode == 1) {
                let arr = [];
                Object.keys(res.data).forEach(key => {
                    res.data[key].KeyType = key;
                    res.data[key].dataItem = "";
                    let obj = res.data[key];
                    arr.push(obj)
                })
                setItemList(arr);
            }
        },
            (err) => {
                Loger.onLog("###", err);
            }
        );
    }

    const onTextChange = (index, KeyType, txt) => {

        let arrData = isItemList;
        arrData[index].dataItem = txt;
        setItemList(arrData)

        let _obj = {};
        _obj = isFormData;
        _obj[KeyType] = txt

        setFormData(_obj);
    }

    const onSelectFile = (index, KeyType, item) => {

        let arrData = isItemList;
        arrData[index].dataItem = item;
        setItemList(arrData)

        let _obj = {};
        _obj = isFile;
        _obj[KeyType] = item
        setFile(_obj);

        let data = {};
        data = isFormData;
        data[KeyType] = ""

        setFormData(data);

    }

    const onSelectMultiImg = (index, KeyType, item) => {
        let arrData = isItemList;
        arrData[index].dataItem = item;
        setItemList(arrData)
        setMultiImage(item);

        let _obj = {};
        _obj = isFormData;
        _obj[KeyType] = "";

        setFormData(_obj);

    }

    const onTeamMemeber = (index, KeyType, item) => {

        let arrData = isItemList;
        if (item !== "err") {
            arrData[index].dataItem = item;
            setItemList(arrData)
            setArror(false)


            let _obj = {};
            _obj = isFormData;
            _obj[KeyType] = item
            setFormData(_obj);

        }
        else {
            arrData[index].dataItem = "";
            setItemList(arrData)
            setArror(true)

            let _obj = {};
            _obj = isFormData;
            _obj[KeyType] = {};
            setFormData(_obj);
        }

    }

    const onTermConditions = (index, KeyType, item) => {
        let arrData = isItemList;
        arrData[index].dataItem = item;
        setItemList(arrData)

        let _obj = {};
        _obj = isFormData;
        _obj[KeyType] = item
        setFormData(_obj);
    }

    const onCheckedAllRequredFiles = () => {
        let validationFali = true;
        isItemList.forEach(eliment => {
            if (eliment.required === "Y" && eliment.dataItem === "") {
                validationFali = false;
            }
        })
        return validationFali;

    }

    const onCheckField = () => {

        if (!onCheckedAllRequredFiles())
            Alert.alert(Label.FillMandatoryFieldsValidation);
        else if (isArror) {
            Alert.alert(Label.FillMandatoryFieldsValidation);
            return false;
        }
        else {
            props.onNext({
                data_obj: JSON.stringify(isFormData),
                obj: isFile,
                isMultiImage: isMultiImage,
            });
        }
    }

    const onItemList = () => {
        return (
            <View style={{ width: "100%" }}>
                {isItemList.map((item, index) => {

                    if (item.type == "text" || item.type == "ckeditor" || item.type == "textarea" || item.type == "tags")
                        return (
                            <TextFieldItem title={item?.caption} required={item?.required} isKey={""} onCurrentText={(txt) => onTextChange(index, item.KeyType, txt)} />
                        );
                    else if (item.type == "number")
                        return (
                            <TextFieldItem title={item?.caption} required={item?.required} isKey={"phone-pad"} onCurrentText={(txt) => onTextChange(index, item.KeyType, txt)} />
                        );
                    else if (item.type == "file")
                        return (
                            <BrowseFileItem title={item?.caption} required={item?.required} type={item.allowed} size={item?.size?.size}
                                onSelectImgResponse={(obj) => onSelectFile(index, item.KeyType, obj)} />
                        );
                    else if (item.type == "multijson" && item.additional_images)
                        return (
                            <BrowseEditionalImag title={item?.additional_images?.caption} required={item?.required} onMultiImageArr={(obj) => onSelectMultiImg(index, item.KeyType, obj)} />
                        );
                    else if (item.type == "multijson")
                        return (
                            <TeamMembersDetails data={item} onSelectTeamMembers={(value) => onTeamMemeber(index, item.KeyType, value)} />
                        );
                    else if (item.type == "checkbox")
                        return (
                            <TermAndConditions title={item?.caption} required={item?.required} onChecked={(value) => onTermConditions(index, item.KeyType, value)} />
                        );
                })}
            </View>
        )
    }

    return (
        <View style={Style.MainView}>

            {isItemList.length > 0 && onItemList()}

            <TouchableOpacity style={[Style.btn, { backgroundColor: themeColor.buttonColor }]} onPress={() => onCheckField()}>
                <Text style={Style.txtBtn}>{Label.Submit}</Text>
            </TouchableOpacity>
        </View>
    )
}


export default memo(SubmitIdeaStep2);