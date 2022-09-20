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
    const [isData, setData] = useState();

    const [isIdeaDescription, setIdeaDescription] = useState("");
    const [isIdeaCoverImage, setIdeaCoverImage] = useState("");
    const [isMultiImage, setMultiImage] = useState([]);
    const [isChallengesAddressing, setChallengesAddressing] = useState("");
    const [isBenefitIdea, setBenefitIdea] = useState("");
    const [isFile, setFile] = useState("");
    const [isVideoUrl, setVideoUrl] = useState("");
    const [isUploadEmbedUrl, setUploadEmbedUrl] = useState("");
    const [isVideoFile, setVideoFile] = useState("");
    const [iskeywordsTags, setkeywordsTags] = useState("");
    const [isNoOfTeamMember, setNoOfTeamMember] = useState("");
    const [isTeamMember, setTeamMember] = useState([]);
    const [isTeamIdentity, setTeamIdentity] = useState(0);
    const [isIdeaPrivately, setIdeaPrivately] = useState(0);
    const [isTermsConditons, setTermsConditons] = useState(0);

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

            "sector_id": "2",
            "category_id": "5",
            "sub_category_id": "0",

            // "sector_id": sectorsId,
            // "category_id": categoryId,
            // "sub_category_id": subCategoryId,
        }

        Service.post(EndPoints.loadidea, obj, (res) => {
            if (res.statusCode == 1)
                setData(res.data);
        },
            (err) => {
                Loger.onLog("###", err);
            }
        );

    }

    const onTextChange = (type, txt) => {

        if (type === "IdeaDescription") { setIdeaDescription(txt); }
        else if (type === "challengesAddressing") { setChallengesAddressing(txt); }
        else if (type === "benefitIdea") { setBenefitIdea(txt); }
        else if (type === "videoUrl") { setVideoUrl(txt); }
        else if (type === "UploadEmbedUrl") { setUploadEmbedUrl(txt); }
        else if (type === "keywordsTags") { setkeywordsTags(txt); }
        else if (type === "NoOfTeamMember") { setNoOfTeamMember(txt); }
    }

    const onSelectImg = (item) => {
        setIdeaCoverImage(item);
    }
    const onSelectMultiImg = (item) => {
        setMultiImage(item);
    }
    const onSelectFile = (item) => {
        setFile(item);
    }
    const onSelectVideoFile = (item) => {
        setVideoFile(item);

    }
    const onTeamMemeber = (item) => {
        if (item !== "err") {
            setTeamMember(item);
            setArror(false)
        }
        else
            setArror(true)

    }

    const onCheckField = () => {

        if (isData?.idea_description?.required === "Y" && isIdeaDescription === "") {
            Alert.alert(Label.FillMandatoryFieldsValidation);
        }
        else if (isData?.idea_cover_image?.required === "Y" && isIdeaCoverImage === "") {
            Alert.alert(Label.FillMandatoryFieldsValidation);
        }
        else if (isData?.upload_additional_images?.required === "Y" && isMultiImage.length == 0) {
            Alert.alert(Label.FillMandatoryFieldsValidation);
        }
        else if (isData?.challenges_addressing?.required === "Y" && isChallengesAddressing === "") {
            Alert.alert(Label.FillMandatoryFieldsValidation);
        }
        else if (isData?.benefit_idea?.required === "Y" && isBenefitIdea === "") {
            Alert.alert(Label.FillMandatoryFieldsValidation);
        }
        else if (isData?.idea_upload_files?.required === "Y" && isFile === "") {
            Alert.alert(Label.FillMandatoryFieldsValidation);
        }
        else if (isData?.upload_video_url?.required === "Y" && isVideoUrl === "") {
            Alert.alert(Label.FillMandatoryFieldsValidation);
        }
        else if (isData?.upload_embed_url?.required === "Y" && isUploadEmbedUrl === "") {
            Alert.alert(Label.FillMandatoryFieldsValidation);
        }
        else if (isData?.idea_upload_videos?.required === "Y" && isVideoFile === "") {
            Alert.alert(Label.FillMandatoryFieldsValidation);
        }
        else if (isData?.keywords_tags?.required === "Y" && iskeywordsTags === "") {
            Alert.alert(Label.FillMandatoryFieldsValidation);
        }
        else if (isData?.no_of_team_member?.required === "Y" && isNoOfTeamMember === "") {
            Alert.alert(Label.FillMandatoryFieldsValidation);
        }
        else if ((isData?.team_member_details?.required === "Y" && isTeamMember === "") || isArror == true) {
            Alert.alert(Label.FillMandatoryFieldsValidation);
        }
        else if (isData?.hide_team_identity?.required === "Y" && isTeamIdentity === 0) {
            Alert.alert(Label.FillMandatoryFieldsValidation);
        }
        else if (isData?.post_idea_privately?.required === "Y" && isIdeaPrivately === 0) {
            Alert.alert(Label.FillMandatoryFieldsValidation);
        }
        else if (isData?.terms_condiitons?.required === "Y" && isTermsConditons === 0) {
            Alert.alert(Label.FillMandatoryFieldsValidation);
        }
        else {

            let data_form = {
                photos_image: null,
                idea_cover_image: "",
                idea_upload_files: "",
                idea_upload_videos: "",
                upload_additional_images: "",

                idea_description: isIdeaDescription,
                challenges_addressing: isChallengesAddressing,
                benefit_idea: isBenefitIdea,
                upload_video_url: isVideoUrl,
                upload_embed_url: isUploadEmbedUrl,
                keywords_tags: iskeywordsTags,
                no_of_team_member: isNoOfTeamMember,
                team_member_details: isTeamMember,
                hide_team_identity: isTeamIdentity,
                need_sme: "",
                post_idea_privately: isIdeaPrivately,
                terms_condiitons: isTermsConditons,

            }

            props.onNext({
                data_obj: JSON.stringify(data_form),
                isIdeaCoverImage: isIdeaCoverImage,
                isFile: isFile,
                isVideoFile: isVideoFile,
                isMultiImage: isMultiImage
            });
        }


    }

    return (
        <View style={Style.MainView}>
            {isData?.idea_description && <TextFieldItem title={isData?.idea_description?.caption} required={isData?.idea_description?.required}
                onCurrentText={(txt) => onTextChange("IdeaDescription", txt)} />}

            {isData?.idea_cover_image && <BrowseFileItem title={isData?.idea_cover_image?.caption} required={isData?.idea_cover_image?.required}
                type={"image"} size={isData?.idea_cover_image?.size?.size} onSelectImgResponse={onSelectImg} />}

            {isData?.upload_additional_images && <BrowseEditionalImag title={isData?.upload_additional_images?.additional_images?.caption}
                required={isData?.upload_additional_images?.required} onMultiImageArr={onSelectMultiImg} />}

            {isData?.challenges_addressing && <TextFieldItem title={isData?.challenges_addressing?.caption} required={isData?.challenges_addressing?.required}
                onCurrentText={(txt) => onTextChange("challengesAddressing", txt)} />}

            {isData?.benefit_idea && <TextFieldItem title={isData?.benefit_idea?.caption} required={isData?.benefit_idea?.required}
                onCurrentText={(txt) => onTextChange("benefitIdea", txt)} />}

            {isData?.idea_upload_files && <BrowseFileItem title={isData?.idea_upload_files?.caption} required={isData?.idea_upload_files?.required}
                type={"file"} size={isData?.idea_upload_files?.size?.size} onSelectImgResponse={onSelectFile} />}

            {isData?.upload_video_url && <TextFieldItem title={isData?.upload_video_url?.caption} required={isData?.upload_video_url?.required}
                onCurrentText={(txt) => onTextChange("videoUrl", txt)} />}

            {isData?.upload_embed_url && <TextFieldItem title={isData?.upload_embed_url?.caption} required={isData?.upload_embed_url?.required}
                onCurrentText={(txt) => onTextChange("UploadEmbedUrl", txt)} />}

            {isData?.idea_upload_videos && <BrowseFileItem title={isData?.idea_upload_videos?.caption} required={isData?.idea_upload_videos?.required}
                type={"video"} size={isData?.idea_upload_videos?.size?.size} onSelectImgResponse={onSelectVideoFile} />}

            {isData?.keywords_tags && <TextFieldItem title={isData?.keywords_tags?.caption} required={isData?.keywords_tags?.required}
                onCurrentText={(txt) => onTextChange("keywordsTags", txt)} />}

            {isData?.no_of_team_member && <TextFieldItem title={isData?.no_of_team_member?.caption} required={isData?.no_of_team_member?.required}
                onCurrentText={(txt) => onTextChange("NoOfTeamMember", txt)} />}

            {isData?.team_member_details && <TeamMembersDetails data={isData?.team_member_details} required={isData?.team_member_details?.required}
                onSelectTeamMembers={onTeamMemeber} />}


            {isData?.hide_team_identity && <TermAndConditions title={isData?.hide_team_identity?.caption} required={isData?.hide_team_identity?.required} onChecked={(value) => setTeamIdentity(value)} />}
            {isData?.post_idea_privately && <TermAndConditions title={isData?.post_idea_privately?.caption} required={isData?.post_idea_privately?.required} onChecked={(value) => setIdeaPrivately(value)} />}
            {isData?.terms_condiitons && <TermAndConditions title={isData?.terms_condiitons?.caption} isClick={true} required={isData?.terms_condiitons?.required} onChecked={(value) => setTermsConditons(value)} />}


            <TouchableOpacity style={[Style.btn, { backgroundColor: themeColor.buttonColor }]} onPress={() => onCheckField()}>
                <Text style={Style.txtBtn}>{Label.Submit}</Text>
            </TouchableOpacity>
        </View>
    )
}


export default memo(SubmitIdeaStep2);

const sectorsList = ["Indian", "Indian", "Indian", "Indian", "Indian", "Indian", "Indian", "Indian", "Indian", "Indian"];