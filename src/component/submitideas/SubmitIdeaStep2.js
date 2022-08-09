import { View, Text, TouchableOpacity, TextInput, Image, FlatList } from 'react-native'
import React, { memo, useEffect, useState } from 'react'

import CountryPicker from 'react-native-country-picker-modal'
import CustomList from './CustomList'


import { Label } from '../../utils/StringUtil'
import Style from './IdeaStepStyle'
import { useSelector } from 'react-redux'
import { GetAppColor } from '../../utils/Colors'
import BackIcon from '../../assets/svg/loginLogo/BackIcon'
import { Loger } from '../../utils/Loger'
import { deviceId } from '../../utils/Constant'
import { AppConfig } from '../../manager/AppConfig'
import { UserManager } from '../../manager/UserManager'
import { Service } from '../../service/Service'
import { EndPoints } from '../../service/EndPoints'
import { AppUtil } from '../../utils/AppUtil'
import TextFieldItem from './TextFieldItem'
import BrowseFileItem from './BrowseFileItem'
import BrowseEditionalImag from './BrowseEditionalImag'
import BrowsMultipleFile from './BrowsMultipleFile'
import TeamMembersDetails from './TeamMembersDetails'
import TermAndConditions from './TermAndConditions'
import UploadFiles from '../docpicker/UploadFiles'

function SubmitIdeaStep2(props) {

    const { themeColor } = useSelector((state) => state);
    const [isData, setData] = useState();


    

    const [mobileNumber, setMobileNumber] = useState("");
    const [nationality, setNationality] = useState("Selected");
    const [message, setMessage] = useState('');
    const [imageList, setImageList] = useState([{ assets: "selected" }]);




    useEffect(() => {

        GetField(props?.data?.sectorsId, props?.data?.categoryId, props?.data?.subCategoryId);
    }, [])

    const GetField = (sectorsId, categoryId, subCategoryId) => {

        let obj = {
            "device_id": deviceId,
            "token": AppConfig.token,
            "lang": AppConfig.lang,
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

    const onCheckField = () => {
        // var obj ={countryCode:countryCode, mobileNumber:mobileNumber, nationality:nationality,message:message, imageList:imageList}
        props.onNext(/*obj*/);
    }

    return (
        <View style={Style.MainView}>
            {isData?.idea_description && <TextFieldItem title={isData?.idea_description?.caption} required={isData?.idea_description?.required} />}
            {isData?.idea_cover_image && <BrowseFileItem title={isData?.idea_cover_image?.caption} required={isData?.idea_cover_image?.required} type={"image"} size={isData?.idea_cover_image?.size?.size}/>}
            {isData?.upload_additional_images && <BrowseEditionalImag title={isData?.upload_additional_images?.additional_images?.caption} required={isData?.upload_additional_images?.required} />}
            {isData?.challenges_addressing && <TextFieldItem title={isData?.challenges_addressing?.caption} required={isData?.challenges_addressing?.required} />}
            {isData?.benefit_idea && <TextFieldItem title={isData?.benefit_idea?.caption} required={isData?.benefit_idea?.required} />}
            {isData?.idea_upload_files && <BrowseFileItem title={isData?.idea_upload_files?.caption} required={isData?.idea_upload_files?.required} type={"file"} size={isData?.idea_upload_files?.size?.size}/>}
            {isData?.upload_video_url && <TextFieldItem title={isData?.upload_video_url?.caption} required={isData?.upload_video_url?.required} />}
            {isData?.upload_embed_url && <TextFieldItem title={isData?.upload_embed_url?.caption} required={isData?.upload_embed_url?.required} />}
            {isData?.idea_upload_videos && <BrowseFileItem title={isData?.idea_upload_videos?.caption} required={isData?.idea_upload_videos?.required} type={"video"} size={isData?.idea_upload_videos?.size?.size}/>}
            {isData?.keywords_tags && <TextFieldItem title={isData?.keywords_tags?.caption} required={isData?.keywords_tags?.required} />}
            {isData?.no_of_team_member && <TextFieldItem title={isData?.no_of_team_member?.caption} required={isData?.no_of_team_member?.required} />}
            {isData?.team_member_details && <TeamMembersDetails data={isData?.team_member_details} />}
            
            {isData?.hide_team_identity && <TermAndConditions title={isData?.hide_team_identity?.caption}/>}
            {isData?.post_idea_privately && <TermAndConditions title={isData?.post_idea_privately?.caption}/>}
            {isData?.terms_condiitons && <TermAndConditions title={isData?.terms_condiitons?.caption} isClick={true} />}




           

            <TouchableOpacity style={[Style.btn, { backgroundColor: themeColor.buttonColor }]} onPress={() => onCheckField()}>
                <Text style={Style.txtBtn}>{Label.Continue}</Text>
            </TouchableOpacity>
        </View>
    )
}




export default memo(SubmitIdeaStep2);

const sectorsList = ["Indian", "Indian", "Indian", "Indian", "Indian", "Indian", "Indian", "Indian", "Indian", "Indian"];
