export const baseURL = 'http://madarek.php-staging.com/apiv1/';


import { Alert, Platform } from "react-native";
import { AppUtil } from "./AppUtil";
import DeviceInfo from "react-native-device-info";

export const deviceId = DeviceInfo.getUniqueId()

export const inputFieldHight = AppUtil.getHP(5.63)
export const hederHeight = AppUtil.getHP(7)
export const buttonHeight = AppUtil.getHP(6.14)
export const buttonFontSize = AppUtil.getHP(2.5)
export const headerFontSize = AppUtil.getHP(2.7)
export const buttonBorderRadius = 5

export const showMessage = (message) => {
    if (Platform.OS == 'ios') {
        Alert.alert(message, null);
    } else {
        Alert.alert(null, message);
    }
}

export const showMessageWithCallBack = (message, callBack) => {
    if (Platform.OS == 'ios') {
        Alert.alert(message, null,
            [
                { text: 'OKAY', onPress: () => { callBack() } },
            ]);
    } else {
        Alert.alert(null, message,
            [
                { text: 'OKAY', onPress: () => { callBack() } },
            ]);
    }
}

export const showMessageWithAnotherCallBack = (message, callBack) => {
    if (Platform.OS == 'ios') {
        Alert.alert(message, null,
            [
                { text: 'CANCEL', onPress: () => { callBack("CANCEL") } },
                { text: 'OKAY', onPress: () => { callBack() } },
            ]);
    } else {
        Alert.alert(null, message,
            [
                { text: 'CANCEL', onPress: () => { callBack("CANCEL") } },
                { text: 'OKAY', onPress: () => { callBack() } },
            ]);
    }
}

export const showMessageWithCancelCallBack = (message, callBack) => {
    if (Platform.OS == 'ios') {
        Alert.alert(message, null,
            [
                { text: 'SWITCH', onPress: () => { callBack("SWITCH") } },
                { text: 'CANCEL', onPress: () => { callBack("CANCEL") } },
            ]);
    } else {
        Alert.alert(null, message,
            [
                { text: 'SWITCH', onPress: () => { callBack("SWITCH") } },
                { text: 'CANCEL', onPress: () => { callBack("CANCEL") } },
            ]);
    }
}

export const emailValidate = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
        return false;
    }
    else {
        return true
    }
}