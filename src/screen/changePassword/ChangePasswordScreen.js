//changePasswordScreen.js

import React, { useState, memo, useRef, useEffect } from "react";
import { Text, TextInput, TouchableOpacity, View, ScrollView, Dimensions, } from "react-native";
import PAGESTYLE from "./ChangePasswordStyle";
import { GetAppColor } from "../../utils/Colors";
import { Label } from "../../utils/StringUtil";
import { Service } from "../../service/Service";
import { EndPoints } from "../../service/EndPoints";
import { SafeAreaView } from 'react-native-safe-area-context'
import CommonHeader from "../../component/commonheader/CommonHeader";
import { UserManager } from "../../manager/UserManager";
import { deviceId, showMessageWithCallBack } from "../../utils/Constant";
import { AppConfig, getLanguage } from "../../manager/AppConfig";

const ChangePasswordScreen = (props) => {
    const [isOldPassword, setOldPassword] = useState()
    const [isNewPassword, setNewPassword] = useState()
    const [isConfirmPassword, setConfirmPassword] = useState()



    const validateFields = () => {

        
            if (isNewPassword === isConfirmPassword) {
                onChnagePassWord()
            }
            else {
                showMessageWithCallBack(Label.NewPasswordIncorrect, () => {

                })
            }
    }
    const onChnagePassWord = () => {
        let data = {
            "device_id": deviceId,
            "token": AppConfig.token,
            "frontuser_id": UserManager.userId,
            "language": getLanguage(),
            "oldpassword": isOldPassword,
            "pwd": isNewPassword,
        }
        Service.post(EndPoints.changepassword, data, (res) => {
            if (res?.statusCode === "0") {
                showMessageWithCallBack(Label.OldPasswordIncorrect, () => {
                    // props.navigation.goBack();
                })
            }
            else if (res?.statusCode === "1") {
                showMessageWithCallBack(Label.ChangePasswordSuccess, () => {
                    props.navigation.goBack();
                })
            }
        },
            (err) => {
                Loger.onLog("ChangePasswordScreen  error ========>", err);
            }
        );
    }


    return (
        <SafeAreaView>

            <CommonHeader isType={"ChangePassword"} />
            <View style={PAGESTYLE.mainView}>
                <View style={PAGESTYLE.headerPart}>

                    <View style={PAGESTYLE.signView}>

                        <TextInput
                            value={isOldPassword}
                            placeholderTextColor={GetAppColor.grayBorder}
                            placeholder={Label.OldPassword}
                            secureTextEntry={true}
                            maxLength={30}
                            onChangeText={txt => setOldPassword(txt)}
                            style={PAGESTYLE.showPassword}
                            autoCapitalize="none"
                        />
                        <TextInput
                            value={isNewPassword}
                            placeholderTextColor={GetAppColor.grayBorder}
                            placeholder={Label.NewPassword}
                            secureTextEntry={true}
                            maxLength={30}
                            onChangeText={txt => setNewPassword(txt)}
                            style={PAGESTYLE.showPassword}
                            autoCapitalize="none"
                        />
                        <TextInput
                            value={isConfirmPassword}
                            placeholderTextColor={GetAppColor.grayBorder}
                            placeholder={Label.ConfirmPassword}
                            secureTextEntry={true}
                            maxLength={30}
                            onChangeText={txt => setConfirmPassword(txt)}
                            style={PAGESTYLE.showPassword}
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={PAGESTYLE.bottomButtomArea}>
                        <TouchableOpacity style={PAGESTYLE.signInButton} onPress={() => { validateFields() }}>
                            <Text style={PAGESTYLE.SignInbuttonText}>{Label.Submit}</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

        </SafeAreaView >

    );

}
export default memo(ChangePasswordScreen);
