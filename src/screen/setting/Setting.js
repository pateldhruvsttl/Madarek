import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import CommonHeader from '../../component/commonheader/CommonHeader'
import SettingStyle from './SettingStyle'
import Lock from '../../assets/svg/settingIcon/Lock'
import { AppUtil } from '../../utils/AppUtil'
import { GetAppColor } from '../../utils/Colors'
import IcnRight from '../../assets/svg/IcnRIght'
import FIllRadio from '../../assets/svg/FIllRadio'
import { Label } from '../../utils/StringUtil'
import IcnAboutApp from '../../assets/svg/settingIcon/icnAboutApp'
import IcnMessage from '../../assets/svg/settingIcon/IcnMessage'
import IcnAlert from '../../assets/svg/IcnAlert'

const Setting = (props) => {
    return (
        <SafeAreaView>
            <CommonHeader isType={"Setting"} />

            {/* Change Password */}

            <TouchableOpacity style={[SettingStyle.btnView, SettingStyle.topMargin]} >
                <View style={SettingStyle.iconTextView}>
                    <Lock height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} color={GetAppColor.catBorder} />
                    <Text style={SettingStyle.subTitleText}>Change Password</Text>
                </View>
                <IcnRight height={AppUtil.getHP(1.8)} width={AppUtil.getHP(1.8)} />
            </TouchableOpacity>


            {/* Language  */}
            <View style={SettingStyle.btnView} >
                <View style={SettingStyle.iconTextView}>
                    <Lock height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} color={GetAppColor.catBorder} />
                    <Text style={SettingStyle.subTitleText}>Language</Text>
                </View>
                <View style={SettingStyle.radioBtnView}>
                    <TouchableOpacity onPress={() => setSelectedIndex(0)} style={SettingStyle.radioBtn}>
                        {
                            // selectedIndex == 0 ?
                            <View style={SettingStyle.yellowBorderView}>
                                <View style={SettingStyle.yellowFillView} />
                            </View>
                            // :
                            // <View style={SettingStyle.grayBorderView} />
                        }

                        <Text style={[SettingStyle.userTypeText, { marginTop: 0 }]} >{Label.English}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setSelectedIndex(0)} style={SettingStyle.radioBtn}>
                        {
                            // selectedIndex == 0 ?
                            <View style={SettingStyle.yellowBorderView}>
                                <View style={SettingStyle.yellowFillView} />
                            </View>
                            // :
                            // <View style={SettingStyle.grayBorderView} />
                        }

                        <Text style={[SettingStyle.userTypeText, { marginTop: 0 }]} >{Label.Arabic}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Notifications */}
            <TouchableOpacity style={SettingStyle.btnView} >
                <View style={SettingStyle.iconTextView}>
                    <IcnAlert height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} color={GetAppColor.catBorder} />
                    <Text style={SettingStyle.subTitleText}>Notifications</Text>
                </View>
                <View style={SettingStyle.radioBtnView}>
                        <Text style={SettingStyle.offText}>OFF</Text>
                        <TouchableOpacity></TouchableOpacity>
                        <Text style={SettingStyle.offText}>ON</Text>
                </View>
                
            </TouchableOpacity>

            {/* message */}

            <TouchableOpacity style={SettingStyle.btnView} >
                <View style={SettingStyle.iconTextView}>
                    <IcnMessage height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} color={GetAppColor.catBorder} />
                    <Text style={SettingStyle.subTitleText}>message</Text>
                </View>
                <View style={SettingStyle.radioBtnView}>
                        <Text style={SettingStyle.offText}>OFF</Text>
                        <TouchableOpacity></TouchableOpacity>
                        <Text style={SettingStyle.offText}>ON</Text>
                </View>
            </TouchableOpacity>


            {/* About App  */}
            <TouchableOpacity style={SettingStyle.btnView} >
                <View style={SettingStyle.iconTextView}>
                    <IcnAboutApp height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} color={GetAppColor.catBorder} />
                    <Text style={SettingStyle.subTitleText}>About App</Text>
                </View>
                <IcnRight height={AppUtil.getHP(1.8)} width={AppUtil.getHP(1.8)} />
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default Setting