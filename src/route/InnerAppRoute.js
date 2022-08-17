import React, { useEffect, useState } from 'react';
import { I18nManager, View } from 'react-native';
import { AppConfig } from '../manager/AppConfig';
import { AsyncStoreageManager } from '../manager/AsyncStoreageManager';
import { Loger } from '../utils/Loger';
import AppRoute from './AppRoute'

const route = () => {

    const [isSelect, setSelect] = useState(false);
    useEffect(() => {
        languageRestart();
    }, [])

    const languageRestart = async () => {
        let value = await AsyncStoreageManager.onGetLanguagesCode();
        console.log("=-=-=-->",value)
        await I18nManager.forceRTL(value);
        setSelect(true);

    };

    return isSelect ? <AppRoute /> : null;
    return isSelect && null;
}

export default route;