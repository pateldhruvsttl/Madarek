import AsyncStorage from '@react-native-async-storage/async-storage';
import { Loger } from '../utils/Loger';
import { AppConfig,setLanguage } from './AppConfig';

export const AsyncStorageManager = {

    onSetLanguages: (value) => {
        setLanguage(value);
        AsyncStorage.setItem('@Languages', JSON.stringify(value));
    },

    onGetLanguages:async () => {

        await  AsyncStorage.getItem("@Languages").then((response) => {
            if (response !== "") {

                const res = JSON.parse(response);
                setLanguage(res);
                return code;
            }
        });
        
       
    },

    onGetLanguagesCode:async () => {

        let code = false;
        await  AsyncStorage.getItem("@Languages").then((response) => {
            if (response !== "") {

                const res = JSON.parse(response);
                setLanguage(res);
                code = res === "ar" ? true : false;
            }
        });
        
        return code;
    },

}