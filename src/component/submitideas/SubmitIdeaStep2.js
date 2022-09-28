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

    const onTextChange = (index, txt) => {

        let arrData = isItemList;
        arrData[index].dataItem = txt;
        setItemList(arrData)
    }

    const onSelectFile = (index, KeyType, item) => {

        let arrData = isItemList;
        arrData[index].dataItem = item;
        setItemList(arrData)
        
        let _obj ={};
        _obj = isFile;
        _obj[KeyType] = item
        setFile(_obj);

    }

    const onSelectMultiImg = (index, item) => {
        let arrData = isItemList;
        arrData[index].dataItem = item;
        setItemList(arrData)
        setMultiImage(item);
    }

    const onTeamMemeber = (index, item) => {

        let arrData = isItemList;
        if (item !== "err") {
            arrData[index].dataItem = item;
            setItemList(arrData)
            setArror(false)
        }
        else {
            arrData[index].dataItem = "";
            setItemList(arrData)
            setArror(true)
        }

    }

    const onTermConditions = (index, item) => {
        let arrData = isItemList;
        arrData[index].dataItem = item;
        setItemList(arrData)
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
                data_obj: JSON.stringify(isItemList),
                obj: isFile,
                isMultiImage: isMultiImage,
            });
        }



        // if (isData?.idea_description?.required === "Y" && isIdeaDescription === "") {
        //     Alert.alert(Label.FillMandatoryFieldsValidation);
        // }
        // else if (isData?.idea_cover_image?.required === "Y" && isIdeaCoverImage === "") {
        //     Alert.alert(Label.FillMandatoryFieldsValidation);
        // }
        // else if (isData?.upload_additional_images?.required === "Y" && isMultiImage.length == 0) {
        //     Alert.alert(Label.FillMandatoryFieldsValidation);
        // }
        // else if (isData?.challenges_addressing?.required === "Y" && isChallengesAddressing === "") {
        //     Alert.alert(Label.FillMandatoryFieldsValidation);
        // }
        // else if (isData?.benefit_idea?.required === "Y" && isBenefitIdea === "") {
        //     Alert.alert(Label.FillMandatoryFieldsValidation);
        // }
        // else if (isData?.idea_upload_files?.required === "Y" && isFile === "") {
        //     Alert.alert(Label.FillMandatoryFieldsValidation);
        // }
        // else if (isData?.upload_video_url?.required === "Y" && isVideoUrl === "") {
        //     Alert.alert(Label.FillMandatoryFieldsValidation);
        // }
        // else if (isData?.upload_embed_url?.required === "Y" && isUploadEmbedUrl === "") {
        //     Alert.alert(Label.FillMandatoryFieldsValidation);
        // }
        // else if (isData?.idea_upload_videos?.required === "Y" && isVideoFile === "") {
        //     Alert.alert(Label.FillMandatoryFieldsValidation);
        // }
        // else if (isData?.keywords_tags?.required === "Y" && iskeywordsTags === "") {
        //     Alert.alert(Label.FillMandatoryFieldsValidation);
        // }
        // else if (isData?.no_of_team_member?.required === "Y" && isNoOfTeamMember === "") {
        //     Alert.alert(Label.FillMandatoryFieldsValidation);
        // }
        // else if ((isData?.team_member_details?.required === "Y" && isTeamMember === "") || isArror == true) {
        //     Alert.alert(Label.FillMandatoryFieldsValidation);
        // }
        // else if (isData?.hide_team_identity?.required === "Y" && isTeamIdentity === 0) {
        //     Alert.alert(Label.FillMandatoryFieldsValidation);
        // }
        // else if (isData?.post_idea_privately?.required === "Y" && isIdeaPrivately === 0) {
        //     Alert.alert(Label.FillMandatoryFieldsValidation);
        // }
        // else if (isData?.terms_condiitons?.required === "Y" && isTermsConditons === 0) {
        //     Alert.alert(Label.FillMandatoryFieldsValidation);
        // }
        // else {

        // let data_form = {
        //     photos_image: null,
        //     idea_cover_image: "",
        //     idea_upload_files: "",
        //     idea_upload_videos: "",
        //     upload_additional_images: "",

        //     idea_description: isIdeaDescription,
        //     challenges_addressing: isChallengesAddressing,
        //     benefit_idea: isBenefitIdea,
        //     upload_video_url: isVideoUrl,
        //     upload_embed_url: isUploadEmbedUrl,
        //     keywords_tags: iskeywordsTags,
        //     no_of_team_member: isNoOfTeamMember,
        //     team_member_details: isTeamMember,
        //     hide_team_identity: isTeamIdentity,
        //     need_sme: "",
        //     post_idea_privately: isIdeaPrivately,
        //     terms_condiitons: isTermsConditons,
        // }

        // let arr = [];
        // arr[0] = { key: "form_data", item: JSON.stringify(data_form) }
        // arr[1] = { key: "form_data", item: JSON.stringify(data_form) }
        // arr[2] = { key: "form_data", item: JSON.stringify(data_form) }
        // arr[3] = { key: "form_data", item: JSON.stringify(data_form) }
        // arr[4] = { key: "form_data", item: JSON.stringify(data_form) }


        // }


    }

    const onItemList = () => {
        return (
            <View style={{ width: "100%" }}>
                {isItemList.map((item, index) => {

                    if (item.type == "text" || item.type == "ckeditor" || item.type == "textarea" || item.type == "tags")
                        return (
                            <TextFieldItem title={item?.caption} required={item?.required} isKey={""} onCurrentText={(txt) => onTextChange(index, txt)} />
                        );
                    else if (item.type == "number")
                        return (
                            <TextFieldItem title={item?.caption} required={item?.required} isKey={"phone-pad"} onCurrentText={(txt) => onTextChange(index, txt)} />
                        );
                    else if (item.type == "file")
                        return (
                            <BrowseFileItem title={item?.caption} required={item?.required} type={item.allowed} size={item?.size?.size}
                                onSelectImgResponse={(obj) => onSelectFile(index, item.KeyType, obj)} />
                        );
                    else if (item.type == "multijson" && item.additional_images)
                        return (
                            <BrowseEditionalImag title={item?.additional_images?.caption} required={item?.required} onMultiImageArr={(obj) => onSelectMultiImg(index, obj)} />
                        );
                    else if (item.type == "multijson")
                        return (
                            <TeamMembersDetails data={item} required={item?.required} onSelectTeamMembers={(item) => onTeamMemeber(index, item)} />
                        );
                    else if (item.type == "checkbox")
                        return (
                            <TermAndConditions title={item?.caption} required={item?.required} onChecked={(value) => onTermConditions(index, value)} />
                        );
                })}
            </View>
        )
    }

    return (
        <View style={Style.MainView}>

            {isItemList.length > 0 && onItemList()}
            {/*             
            {isData?.idea_description && <TextFieldItem title={isData?.idea_description?.caption} required={isData?.idea_description?.required} isKey={""}
                onCurrentText={(txt) => onTextChange("IdeaDescription", txt)} />}

            {isData?.idea_cover_image && <BrowseFileItem title={isData?.idea_cover_image?.caption} required={isData?.idea_cover_image?.required}
                type={"image"} size={isData?.idea_cover_image?.size?.size} onSelectImgResponse={onSelectImg} />}

            {isData?.upload_additional_images && <BrowseEditionalImag title={isData?.upload_additional_images?.additional_images?.caption}
                required={isData?.upload_additional_images?.required} onMultiImageArr={onSelectMultiImg} />}

            {isData?.challenges_addressing && <TextFieldItem title={isData?.challenges_addressing?.caption} required={isData?.challenges_addressing?.required} isKey={""}
                onCurrentText={(txt) => onTextChange("challengesAddressing", txt)} />}

            {isData?.benefit_idea && <TextFieldItem title={isData?.benefit_idea?.caption} required={isData?.benefit_idea?.required} isKey={""}
                onCurrentText={(txt) => onTextChange("benefitIdea", txt)} />}

            {isData?.idea_upload_files && <BrowseFileItem title={isData?.idea_upload_files?.caption} required={isData?.idea_upload_files?.required}
                type={"file"} size={isData?.idea_upload_files?.size?.size} onSelectImgResponse={onSelectFile} />}

            {isData?.upload_video_url && <TextFieldItem title={isData?.upload_video_url?.caption} required={isData?.upload_video_url?.required} isKey={""}
                onCurrentText={(txt) => onTextChange("videoUrl", txt)} />}

            {isData?.upload_embed_url && <TextFieldItem title={isData?.upload_embed_url?.caption} required={isData?.upload_embed_url?.required} isKey={""}
                onCurrentText={(txt) => onTextChange("UploadEmbedUrl", txt)} />}

            {isData?.idea_upload_videos && <BrowseFileItem title={isData?.idea_upload_videos?.caption} required={isData?.idea_upload_videos?.required}
                type={"video"} size={isData?.idea_upload_videos?.size?.size} onSelectImgResponse={onSelectVideoFile} />}

            {isData?.keywords_tags && <TextFieldItem title={isData?.keywords_tags?.caption} required={isData?.keywords_tags?.required} isKey={""}
                onCurrentText={(txt) => onTextChange("keywordsTags", txt)} />}

            {isData?.no_of_team_member && <TextFieldItem title={isData?.no_of_team_member?.caption} required={isData?.no_of_team_member?.required} isKey={"phone-pad"}
                onCurrentText={(txt) => onTextChange("NoOfTeamMember", txt)} />}

            {isData?.team_member_details && <TeamMembersDetails data={isData?.team_member_details} required={isData?.team_member_details?.required}
                onSelectTeamMembers={onTeamMemeber} />}


            {isData?.hide_team_identity && <TermAndConditions title={isData?.hide_team_identity?.caption} required={isData?.hide_team_identity?.required} onChecked={(value) => setTeamIdentity(value)} />}
            {isData?.post_idea_privately && <TermAndConditions title={isData?.post_idea_privately?.caption} required={isData?.post_idea_privately?.required} onChecked={(value) => setIdeaPrivately(value)} />}
            {isData?.terms_condiitons && <TermAndConditions title={isData?.terms_condiitons?.caption} isClick={true} required={isData?.terms_condiitons?.required} onChecked={(value) => setTermsConditons(value)} />}
 */}

            <TouchableOpacity style={[Style.btn, { backgroundColor: themeColor.buttonColor }]} onPress={() => onCheckField()}>
                <Text style={Style.txtBtn}>{Label.Submit}</Text>
            </TouchableOpacity>
        </View>
    )
}


export default memo(SubmitIdeaStep2);