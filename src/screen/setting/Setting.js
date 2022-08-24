import { View, Text, TouchableOpacity, ScrollView, I18nManager } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect, useState } from 'react'
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
import { AppConfig, getLanguage } from '../../manager/AppConfig'
import { AsyncStorageManager } from '../../manager/AsyncStorageManager'
import { Loger } from '../../utils/Loger'
import { showMessageWithCallBack, showMessageWithCancelCallBack } from '../../utils/Constant'
import RNRestart from 'react-native-restart';


const Setting = (props) => {
    const { themeColor } = useSelector((state) => state)
    const navigation = useNavigation();
    const [isSelectedIndex, setSelectedIndex] = useState(true)

    useEffect(() => {
        let _lang = getLanguage();
        setSelectedIndex(_lang == "ar" ? 1 : 0)
    }, [])

    const onSelectLanguage = async (lang) => {

        var cL = lang == 0 ? "en" : "ar";
        if(getLanguage() === cL)
            return;

        showMessageWithCancelCallBack(Label.RestartApp, (value) => {
            if (value == "CANCEL")
                return;

            setSelectedIndex(lang);
            AsyncStorageManager.onSetLanguages(cL);
            AppUtil.onLoding(true);
            switchTheLanguage(cL)

            setTimeout(()=>{
                RNRestart.Restart();
            }, 1000)
        })
    }

    const switchTheLanguage = async (lang) => {
        await I18nManager.forceRTL(lang == 'ar');
    }
const _lang = getLanguage();
    return (
        <SafeAreaView>

            <CommonHeader isType={"Setting"} />

            {/* Change Password */}
            <ScrollView style={SettingStyle.settingScrollViewStyle} >
                <TouchableOpacity style={[SettingStyle.btnView, SettingStyle.topMargin]} onPress={() => Loger.onLog("()=>", AppConfig.lang)}>
                    <View style={SettingStyle.iconTextView}>
                        <Lock height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} color={themeColor.headerColor} />
                        <Text style={SettingStyle.subTitleText}>{Label.ChangePassword}</Text>
                    </View>
                    <IcnRight style={{ transform: [{ rotate: _lang == "ar" ? "180deg" : "0deg" }] }} height={AppUtil.getHP(1.8)} width={AppUtil.getHP(1.8)} />
                </TouchableOpacity>


                {/* Language  */}
                <View style={SettingStyle.btnView} >
                    <View style={SettingStyle.iconTextView}>
                        <Lock height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} color={themeColor.headerColor} />
                        <Text style={SettingStyle.subTitleText}>{Label.Language}</Text>
                    </View>
                    <View style={SettingStyle.radioBtnView}>
                        <TouchableOpacity onPress={() => { onSelectLanguage(0) }} style={SettingStyle.radioBtn}>
                            {
                                isSelectedIndex == 0 ?
                                    <View style={[SettingStyle.yellowBorderView, { borderColor: themeColor.headerColor }]}>
                                        <View style={[SettingStyle.yellowFillView, { backgroundColor: themeColor.headerColor }]} />
                                    </View>
                                    :
                                    <View style={SettingStyle.grayBorderView} />
                            }

                            <Text style={[SettingStyle.userTypeText, { marginTop: 0 }]} >{Label.English}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { onSelectLanguage(1) }} style={SettingStyle.radioBtn}>
                            {
                                isSelectedIndex == 1 ?
                                    <View style={[SettingStyle.yellowBorderView, { borderColor: themeColor.headerColor }]}>
                                        <View style={[SettingStyle.yellowFillView, { backgroundColor: themeColor.headerColor }]} />
                                    </View>
                                    :
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
                            onValueChange={(val) => null}
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