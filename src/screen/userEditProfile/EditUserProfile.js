import { View, Text, SafeAreaView, } from 'react-native'
import React, { useState } from 'react'
import CommonHeader from '../../component/commonheader/CommonHeader'
import EditUserProfileStyle from './EditUserProfileStyle'
import RightCheck from '../../assets/svg/settingIcon/RightCheck'
import { AppUtil } from '../../utils/AppUtil'
import { useSelector } from 'react-redux'
import { GetAppColor } from '../../utils/Colors'
import PersonalEdit from './PersonalEdit'
import OtherDetail from '../userProfile/OtherDetail'
import OtherDetailEdit from './OtherDetailEdit'
import ExpertEdit from './ExpertEdit'
import { Service } from '../../service/Service'
import { EndPoints } from '../../service/EndPoints'
import { deviceId } from '../../utils/Constant'
import { AppConfig } from '../../manager/AppConfig'
import UserProfile from '../../model/UserProfile'
import { Label } from '../../utils/StringUtil'
import { Loger } from '../../utils/Loger'
import { showMessageWithCallBack, showMessage } from '../../utils/Constant'

const EditUserProfile = (props) => {


    const { themeColor } = useSelector((state) => state)
    const [selectedIndex, SetSelectedIndex] = useState(0)
    const [newData, setNewData] = useState()
    const [updateData, setUpdateData] = useState(props.route.params.data)

    const refresh = () => {
        props.route.params.onReferesh();
        props.navigation.navigate('UserProfileView')
    }
    const validateField = (props) => {
        if (updateData) {
            const { firstName, lastName, jobTitle, organization, userPhoto } = updateData
            // const { about, category, facebookLink, linkdinLink, twitterLink } = newData.otherData
            if (firstName == "") {
                showMessage(Label.enterfirstname)
                return false;
            }
            else if (!lastName()) {
                showMessage(Label.enterlastname)
                return false;
            }
            else if (!organization()) {
                showMessage(Label.OrganizationName)
                return false;
            }
            else if (!jobTitle()) {
                showMessage(Label.JobTilte)
                return false;
            }
            saveProfile(props);
        }
        // else if (!lastName()) {
        //     showMessage(Label.enterlastname)
        //     return false;
        // }
        // else if (!lastName()) {
        //     showMessage(Label.enterlastname)
        //     return false;
        // }
        else {
            return false
        }
    }




    const saveProfile = (props) => {

        if (props.personalEdit) {
            setNewData(props.personalEdit)
        }
        else if (props?.otherDetails) {
            const otherData = props.otherDetails
            const updateOtherData = { ...newData, ...otherData }
            setNewData(updateOtherData)
        }
        else if (props?.expertDetail) {

            const expertData = props.expertDetail
            const updateExpertData = { ...newData, ...expertData }
            setNewData(updateExpertData)

            const { firstName, lastName, jobTitle, organization, userPhoto, countryId,
                about, category, facebookLink, linkdinLink, twitterLink,
                description, skill } = newData
            let data = new FormData()
            // data.append('device_id', deviceId)
            // data.append('lang', "en")
            // data.append('token', AppConfig.token)
            // data.append('first_name', firstName)
            // data.append( 'last_name', lastName)
            // data.append( 'job_title', jobTitle)
            // data.append( 'organization_name', organization)
            // data.append(  'country_id', countryId,)
            // data.append(  'city_id', "1512325823",)
            // data.append('user_photo', userPhoto)
            // data.append(  'user_categories', category,)
            // data.append( 'organization_name', organization)


            data.append('device_id', deviceId)
            data.append('lang', "en")
            data.append('token', AppConfig.token)
            data.append('first_name', firstName)
            data.append('last_name', lastName)
            data.append('job_title', jobTitle)
            data.append('organization_name', organization)
            data.append('country_id', countryId)
            data.append('city_id', "1512325823")
            data.append('user_photo', userPhoto)
            data.append('user_categories', category)
            data.append('about_expert', about)
            data.append('expertise_brief', description)
            data.append('facebook_link', facebookLink)
            data.append('linkdin_link', linkdinLink)
            data.append('Fees_Type', "hourly")
            data.append('SME_User_Fees', "250")
            data.append('twitter_link', twitterLink)
            data.append('skills', skill)
            
            console.log('AppConfig.token ----->', AppConfig.token);

            // const data = {
            //     device_id: deviceId,
            //     lang: "en",
            //     token: AppConfig.token,
            //     first_name: firstName,
            //     last_name: lastName,
            //     job_title: jobTitle,
            //     organization_name: organization,
            //     country_id: countryId,
            //     city_id: "1512325823",
            //     user_photo: userPhoto,
            //     user_categories: category,
            //     about_expert: about,
            //     expertise_brief: description,
            //     facebook_link: facebookLink,
            //     linkdin_link: linkdinLink,
            //     Fees_Type: "hourly",
            //     SME_User_Fees: "250",
            //     twitter_link: twitterLink,
            //     skills: skill

            // }
            Service.post(EndPoints.editProfile, data, (res) => {
                Loger.onLog("Response of update profile ", res);
                if (res.statusCode == "1") {
                    setUpdateData(res.data)
                    showMessageWithCallBack(Label.UpdateProfie, () => {
                        refresh()
                    })
                }
                else {
                    showMessage(res.message)
                }
            },
                (err) => {
                    Loger.onLog("Error of update profile", err);
                }
            )
        }

    }
    Loger.onLog('Update Data', updateData);

    const renderPersonalSlide = () => (
        <View style={EditUserProfileStyle.roundSlide}>
            <View style={EditUserProfileStyle.rightCheckView}>
                <RightCheck height={AppUtil.getHP(2.25)} width={AppUtil.getHP(2.25)} color={themeColor.headerColor} />
            </View>

            <View style={EditUserProfileStyle.line} />

            <View style={[EditUserProfileStyle.rightCheckView, { backgroundColor: GetAppColor.white }]}>
            </View>

            <View style={EditUserProfileStyle.line} />

            <View style={[EditUserProfileStyle.rightCheckView, { backgroundColor: GetAppColor.white }]}>
            </View>
        </View>
    )

    const renderotherDetailSlide = () => (
        <View style={EditUserProfileStyle.roundSlide}>
            <View style={EditUserProfileStyle.rightCheckView}>
                <RightCheck height={AppUtil.getHP(2.25)} width={AppUtil.getHP(2.25)} color={themeColor.headerColor} />
            </View>
            <View style={EditUserProfileStyle.line} />

            <View style={[EditUserProfileStyle.rightCheckView]}>
                <RightCheck height={AppUtil.getHP(2.25)} width={AppUtil.getHP(2.25)} color={themeColor.headerColor} />
            </View>

            <View style={EditUserProfileStyle.line} />

            <View style={[EditUserProfileStyle.rightCheckView, { backgroundColor: GetAppColor.white }]}>
            </View>
        </View>
    )


    const renderExpertSlide = () => (
        <View style={EditUserProfileStyle.roundSlide}>
            <View style={EditUserProfileStyle.rightCheckView}>
                <RightCheck height={AppUtil.getHP(2.25)} width={AppUtil.getHP(2.25)} color={themeColor.headerColor} />
            </View>
            <View style={EditUserProfileStyle.line} />



            <View style={[EditUserProfileStyle.rightCheckView]}>
                <RightCheck height={AppUtil.getHP(2.25)} width={AppUtil.getHP(2.25)} color={themeColor.headerColor} />
            </View>

            <View style={EditUserProfileStyle.line} />

            <View style={[EditUserProfileStyle.rightCheckView]}>
                <RightCheck height={AppUtil.getHP(2.25)} width={AppUtil.getHP(2.25)} color={themeColor.headerColor} />
            </View>
        </View>
    )
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CommonHeader isType={"UserEditProfile"} />
            <View style={EditUserProfileStyle.slideView}>
                {
                    selectedIndex == 0 ?
                        renderPersonalSlide() :
                        selectedIndex == 1 ?
                            renderotherDetailSlide()
                            : renderExpertSlide()
                }

                <View style={EditUserProfileStyle.textLineView}>
                    <Text style={EditUserProfileStyle.slideText}>{'Personal'}</Text>
                    <Text style={EditUserProfileStyle.slideText}>{'Other Details'}</Text>
                    <Text style={EditUserProfileStyle.slideText}>{'Expert'}</Text>
                </View>
            </View>

            {
                selectedIndex == 0 ? <PersonalEdit saveNext={() => SetSelectedIndex(1)} saveProfile={saveProfile} data={updateData} />
                    : selectedIndex == 1 ? <OtherDetailEdit saveNext={() => SetSelectedIndex(2)} saveProfile={saveProfile} data={updateData} />
                        : <ExpertEdit saveProfile={saveProfile} data={updateData} />
            }





        </SafeAreaView>
    )
}

export default EditUserProfile