import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import CommonHeader from '../../component/commonheader/CommonHeader'
import MyAccountStyle from './MyAccountStyle'
import { GetAppColor } from '../../utils/Colors'
import { AppUtil } from '../../utils/AppUtil'
import Lock from '../../assets/svg/settingIcon/Lock'
import UserProfile from '../../assets/svg/myaccount/UserProfile'
import IcnRight from '../../assets/svg/IcnRIght'
import Help from '../../assets/svg/myaccount/Help'
import { Label } from '../../utils/StringUtil'
import UpgradeUserType from '../../assets/svg/myaccount/UpgradeUserType'

const MyAccount = (props) => {
    return (
        <SafeAreaView>
            <CommonHeader isType={"MyAccount"} onMenuClick={() => { props.navigation.openDrawer() }} />
            <TouchableOpacity onPress={()=>props.navigation.navigate('UserProfileView')} style={[MyAccountStyle.btnView, MyAccountStyle.topMargin]} >
                <View style={MyAccountStyle.iconTextView}>
                    <UserProfile height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} color={GetAppColor.catBorder} />
                    <Text style={MyAccountStyle.subbTitleText}>{Label.UserProfile}</Text>
                </View>
                <IcnRight height={AppUtil.getHP(1.8)} width={AppUtil.getHP(1.8)} />
            </TouchableOpacity>

            <TouchableOpacity style={[MyAccountStyle.btnView,]} >
                <View style={MyAccountStyle.iconTextView}>
                    <UpgradeUserType height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} color={GetAppColor.catBorder} />
                    <Text style={MyAccountStyle.subbTitleText}>{Label.UpgradeUserType}</Text>
                </View>
                <IcnRight height={AppUtil.getHP(1.8)} width={AppUtil.getHP(1.8)} />
            </TouchableOpacity>

            <TouchableOpacity style={[MyAccountStyle.btnView,]} >
                <View style={MyAccountStyle.iconTextView}>
                    <UserProfile height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} color={GetAppColor.catBorder} />
                    <Text style={MyAccountStyle.subbTitleText}>{Label.Payment}</Text>
                </View>
                <IcnRight height={AppUtil.getHP(1.8)} width={AppUtil.getHP(1.8)} />
            </TouchableOpacity>

            <TouchableOpacity style={[MyAccountStyle.btnView,]} >
                <View style={MyAccountStyle.iconTextView}>
                    <Help height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} color={GetAppColor.catBorder} />
                    <Text style={MyAccountStyle.subbTitleText}>{Label.Help}</Text>
                </View>
                <IcnRight height={AppUtil.getHP(1.8)} width={AppUtil.getHP(1.8)} />
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default MyAccount