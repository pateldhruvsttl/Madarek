import { Dimensions } from 'react-native';
const Loader = require('../../App');
let isLoding = false;


export const AppUtil = {

  isBusy: () => {
    return !isLoding
  },

  onLoding: (value) => {
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
      console.log("Email is Not Correct");
      return false;
    }
    else {
      console.log("Email is Correct");
      return true;
    }
  },
  mobilevalidate: (text) => {
    const reg = /^[0]?[789]\d{9}$/;
    if (reg.test(text) === false) {
      console.log("Mobile is Not Correct");
      return false;
    } else {
      console.log("Mobile is Correct");
      return true;
    }
  }

}




