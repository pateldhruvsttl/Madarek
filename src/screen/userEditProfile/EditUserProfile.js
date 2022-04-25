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

const EditUserProfile = (props) => {


    const { themeColor } = useSelector((state) => state)
    const [selectedIndex, SetSelectedIndex] = useState(0)

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
                    selectedIndex == 0?
                    renderPersonalSlide():
                    selectedIndex==1?
                    renderotherDetailSlide()
                    :renderExpertSlide()
                }

                <View style={EditUserProfileStyle.textLineView}>
                    <Text style={EditUserProfileStyle.slideText}>{'Personal'}</Text>
                    <Text style={EditUserProfileStyle.slideText}>{'Other Details'}</Text>
                    <Text style={EditUserProfileStyle.slideText}>{'Expert'}</Text>
                </View>
            </View>

            {
                selectedIndex == 0 ? <PersonalEdit saveNext={() => SetSelectedIndex(1)} /> : selectedIndex == 1 ? <OtherDetailEdit saveNext={() => SetSelectedIndex(2)} /> : <ExpertEdit saveNext={() => SetSelectedIndex(0)} />
            }




        </SafeAreaView>
    )
}

export default EditUserProfile