import { Dimensions } from 'react-native';
const Loader = require('../../App');
let isLoding = false;


export const AppUtil = {

  isBusy: () => {
    return !isLoding
  },

  onLoding: (value: Boolean) => {
    isLoding = value;

    Loader.onLoding(value);
  },

  getWP: (percentage) => {
    const { width: viewportWidth } = Dimensions.get('window');
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
  },

  getHP: (percentage) => {
    const { height: viewportHeight } = Dimensions.get('window');
    const value = (percentage * viewportHeight) / 100;
    return Math.round(value);
  },
  validate: (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      return false;
    }
    else {
      return true;
    }
  },
  mobilevalidate: (text) => {
    const reg = /^[0]?[789]\d{9}$/;
    if (reg.test(text) === false) {
      return false;
    } else {
      return true;
    }
  },
  isPortrait: () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  },
  passwordValidate: (text) => {
    let reg = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return reg.test(text);
  }

}




