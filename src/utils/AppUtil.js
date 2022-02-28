
const Loader = require('../../App');
let isLoding = false;


module.exports = {

    isBusy: () => {
        return !isLoding
    },

    onLoding: (value) => {
        isLoding = value;

        Loader.onLoding(value);
    },



    showMessage: (message) => {
        if (Platform.OS == 'ios') {
            Alert.alert(message, null);
        } else {
            Alert.alert(null, message);
        }
    },

    showMessageWithCallBack: (message, callBack) => {
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
    },

    emailValidate = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            return false;
        }
        else {
            return true
        }
    }

}




