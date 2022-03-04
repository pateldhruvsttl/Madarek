// export const baseUrl = "http://14.143.90.233:3000/"; //public
// export const baseUrl = "http://192.168.0.218:3000/"; //internal
export const baseUrl = "http://138.68.152.151:3000/"; //live
import { Alert, Platform } from "react-native";
import { AppUtil } from "./AppUtil";

export const isRTL = false;

export const inputFieldHight = AppUtil.getHP(5.63)
export const hederHeight = AppUtil.getHP(7)
export const buttonHeight =AppUtil.getHP(6.14)

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
                { text: 'OK', onPress: () => { callBack() } },
            ]);
    } else {
        Alert.alert(null, message,
            [
                { text: 'OK', onPress: () => { callBack() } },
            ]);
    }
}

export const emailValidate = (text) => {
    // console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
        console.log("Email is Not Correct");
        //   this.setState({ email: text })
        return false;
    }
    else {
        //   this.setState({ email: text })
        console.log("Email is Correct");
        return true
    }
}