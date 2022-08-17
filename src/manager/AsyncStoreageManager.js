import AsyncStorage from '@react-native-async-storage/async-storage';
import { Loger } from '../utils/Loger';
import { AppConfig } from './AppConfig';

export const AsyncStoreageManager = {

    onSetLanguages: (value) => {
        AppConfig.setLanguage(value);
        AsyncStorage.setItem('@Languages', JSON.stringify(value));

    },

    onGetLanguagesCode:async () => {

        let code = false;
      await  AsyncStorage.getItem("@Languages").then((response) => {
            if (response !== "") {

                const res = JSON.parse(response);
                AppConfig.setLanguage(res);
                code = res === "ar" ? true : false;
            }

        });
        
        
        return code;
    },

}