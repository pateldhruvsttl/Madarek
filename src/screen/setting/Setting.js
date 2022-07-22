import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
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
import { useSelector } from 'react-redux'
import { Switch } from 'react-native-switch';
import styles from '../../component/detailsidea/UserProfileListStyle'
import { useNavigation } from '@react-navigation/native';



const Setting = (props) => {
    const { themeColor } = useSelector((state) => state)
    const navigation = useNavigation();

    return (
        <SafeAreaView>

            <CommonHeader isType={"Setting"} />

            {/* Change Password */}
            <ScrollView style={SettingStyle.settingScrollViewStyle} >
                <TouchableOpacity style={[SettingStyle.btnView, SettingStyle.topMargin]} >
                    <View style={SettingStyle.iconTextView}>
                        <Lock height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} color={themeColor.headerColor} />
                        <Text style={SettingStyle.subTitleText}>Change Password</Text>
                    </View>
                    <IcnRight height={AppUtil.getHP(1.8)} width={AppUtil.getHP(1.8)} />
                </TouchableOpacity>


                {/* Language  */}
                <View style={SettingStyle.btnView} >
                    <View style={SettingStyle.iconTextView}>
                        <Lock height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} color={themeColor.headerColor} />
                        <Text style={SettingStyle.subTitleText}>Language</Text>
                    </View>
                    <View style={SettingStyle.radioBtnView}>
                        <TouchableOpacity onPress={() => { }} style={SettingStyle.radioBtn}>
                            {
                                // selectedIndex == 0 ?
                                <View style={[SettingStyle.yellowBorderView, { borderColor: themeColor.headerColor }]}>
                                    <View style={[SettingStyle.yellowFillView, { backgroundColor: themeColor.headerColor }]} />
                                </View>
                                // :
                                // <View style={SettingStyle.grayBorderView} />
                            }

                            <Text style={[SettingStyle.userTypeText, { marginTop: 0 }]} >{Label.English}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { }} style={SettingStyle.radioBtn}>
                            {
                                // selectedIndex == 0 ?
                                // <View style={[SettingStyle.yellowBorderView,{borderColor:themeColor.headerColor}]}>
                                //     <View style={[SettingStyle.yellowFillView,{backgroundColor:themeColor.headerColor}]} />
                                // </View>
                                // :
                                <View style={SettingStyle.grayBorderView} />
                            }

                            <Text style={[SettingStyle.userTypeText, { marginTop: 0 }]} >{Label.Arabic}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Notifications */}
                {/* <TouchableOpacity style={SettingStyle.btnView} onPress={() => navigation.navigate("NotificationSetting")} >
                    <View style={SettingStyle.iconTextView}>
                        <IcnAlert height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} color={themeColor.headerColor} />
                        <Text style={SettingStyle.subTitleText}>Notifications</Text>
                    </View>
                    <IcnRight height={AppUtil.getHP(1.8)} width={AppUtil.getHP(1.8)}  />

                    <TouchableOpacity></TouchableOpacity>


                </TouchableOpacity> */}

                {/* message */}

                {/* <TouchableOpacity style={SettingStyle.btnView} >
                    <View style={SettingStyle.iconTextView}>
                        <IcnMessage height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} color={themeColor.headerColor} />
                        <Text style={SettingStyle.subTitleText}>message</Text>
                    </View>
                    <View style={SettingStyle.radioBtnView}>
                        <Text style={[SettingStyle.offText, { marginEnd: AppUtil.getWP(2) }]}>OFF</Text>
                        <Switch
                            value={true}
                            onValueChange={(val) => console.log(val)}
                            disabled={false}
                            circleSize={AppUtil.getHP(3.5)}
                            barHeight={AppUtil.getHP(2.5)}
                            circleBorderWidth={0}
                            backgroundActive={GetAppColor.switchOnColor}
                            backgroundInactive={GetAppColor.switchOffColor}
                            circleActiveColor={GetAppColor.catBorder}
                            circleInActiveColor={GetAppColor.grayBorder}
                            renderActiveText={false}
                            renderInActiveText={false}
                        />
                        <TouchableOpacity></TouchableOpacity>
                        <Text style={[SettingStyle.offText, { marginStart: AppUtil.getWP(2) }]}>ON</Text>
                    </View>
                </TouchableOpacity> */}


                {/* About App  */}
                {/* <TouchableOpacity style={SettingStyle.btnView} >
                    <View style={SettingStyle.iconTextView}>
                        <IcnAboutApp height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} color={themeColor.headerColor} />
                        <Text style={SettingStyle.subTitleText}>About App</Text>
                    </View>
                    <IcnRight height={AppUtil.getHP(1.8)} width={AppUtil.getHP(1.8)} />
                </TouchableOpacity> */}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Setting