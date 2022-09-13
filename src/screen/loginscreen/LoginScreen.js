import React, { useState, memo, useRef, useEffect, useCallback } from "react";
import { Text, TextInput, TouchableOpacity, View, ScrollView, Dimensions, } from "react-native";
import PAGESTYLE from "./LoginStyle";
import MadarekLogo from "../../assets/svg/loginLogo/MadarekLogo";
import BackIcon from "../../assets/svg/loginLogo/BackIcon"
import { StatusBar } from "react-native";
import { GetAppColor } from "../../utils/Colors";
import { Label } from "../../utils/StringUtil";
import { showMessage } from "../../utils/Constant";
import { emailValidate } from "../../utils/Constant";
import CountryPicker from 'react-native-country-picker-modal'
import FONTS from "../../utils/Fonts";
import { AppUtil } from "../../utils/AppUtil";
import SocialLogo from '../../component/logindetails/SocialLogo'
import { Service } from "../../service/Service";
import { EndPoints } from "../../service/EndPoints";
import { Loger } from "../../utils/Loger";
import { deviceId } from "../../utils/Constant";
import { SafeAreaView } from 'react-native-safe-area-context'
import { UserManager } from "../../manager/UserManager";
import { AppConfig, getBaseURL, getLanguage, setBaseURL, setLanguage } from "../../manager/AppConfig";
import { StackActions } from '@react-navigation/native'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorageManager } from "../../manager/AsyncStorageManager";

const LoginScreen = (props) => {
    const [showPassword, setShowPassword] = useState(false)
    const [isMobilelogin, setMobilelogin] = useState(true)
    const [mobileNumber, setMobileNumber] = useState('')
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [corporateUser, setCorporateUser] = useState('')
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [third, setThird] = useState('');
    const [fourth, setFourth] = useState('');
    const [fifth, setFifth] = useState('');
    const [sixth, setSixth] = useState('');
    const [countryCode, setCountryCode] = useState('IN')
    const [country, setCountry] = useState(null)
    const [callCode, setCallCode] = useState('91');
    const [isCheckedOne, setCheckedOne] = useState(false);
    const [emailOtp, setEmailOtp] = useState();

    const t1 = useRef(null);
    const t2 = useRef(null);
    const t3 = useRef(null);

    const input1 = useRef();
    const input2 = useRef();
    const input3 = useRef();
    const input4 = useRef();
    const input5 = useRef();
    const input6 = useRef();

    let otpNumber = 123456
    let pin = 1234567

    const [timer, setTimer] = useState(0);
    const [getOtp, setGetOtp] = useState(true)

    const timeOutCallback = useCallback(() => setTimer(currTimer => currTimer - 1), []);

    useEffect(() => {
        timer > 1 && setTimeout(timeOutCallback, 1000);
    }, [timer, timeOutCallback]);

    const resetTimer = () => {
        sendEmailOtp()
        setTimer(60)
        setGetOtp(false)
        if (!timer) {
            setTimer(60);
        }
    };
 
    const validateFields = () => {
        if (showPassword) {
            if (!emailValidate(email)) {
                showMessage(Label.Email)
                return false
            }
            else if (password == '') {
                showMessage(Label.PasswordLogin)
                return false
            }
            else {
                signIn()
            }
        }
        else {
            const otpJoin = first + second + third + fourth + fifth + sixth;
            if (!emailValidate(email)) {
                showMessage(Label.Email)
                return false
            } else if (emailOtp != Number(otpJoin)) {
                showMessage(Label.Pin)
                return false
            }
            else {
                signWithOtp()
            }
        }
        // if (isMobilelogin) {
        //     if (!mobileNumber.trim()) {
        //         showMessage(Label.Phone)
        //         return false
        //     }
        //     if (showPassword) {
        //         if (password.trim() === '') {
        //             showMessage(Label.PasswordLogin)
        //             return false
        //         }
        //     } else {
        //         const otpJoin = first + second + third + fourth + fifth + sixth;
        //         if (otpNumber != Number(otpJoin)) {
        //             showMessage(Label.Pin)
        //             return false
        //         }
        //     }
        // }
        // else {
        // else if (password.trim() === '') {
        //     showMessage(Label.PasswordLogin)
        //     return false
        // }
        // else if (isCheckedOne && !corporateUser.trim()) {
        //     showMessage(Label.CorporateUser)
        //     return false
        // }
    }

    const sendEmailOtp = () => {
        setTimer(60)
        const otpData = {
            device_id: deviceId,
            language: getLanguage(),
            email: email

        }
        Service.post(EndPoints.sendEmailOtp, otpData, (res) => {
            Loger.onLog('Response of EmailOtp', res)
            if (res.statusCode == 1) {
                showMessage(Label.OtpSent)
                setEmailOtp(res.otp)
            } else {
                showMessage(res.message)
            }
        },
            (err) => {
                Loger.onLog('Error of EmailOtp', err)
            }
        )
    }
    const signIn = () => {

        const loginData = {
            pwd: password,
            email_mobile: email,
            device_id: deviceId,
        }

        Service.post(EndPoints.login, loginData, (res) => {

            if (res.statusCode == 1) {

                if (res?.data?.corporateSubDomain) {
                    setBaseURL('http://' + res?.data?.corporateSubDomain + '.madarek.io/apiv1/');
                    // setBaseURL('http://' + res?.data?.corporateSubDomain + '.silvertouch-staging.com/apiv1/');
                }

                UserManager.userId = res.data.userId;
                UserManager.email = res.data.email;
                UserManager.profilePicture = res.data.profilePicture;
                UserManager.mobile = res.data.mobile;
                UserManager.userName = res.data.userName;
                UserManager.userRole = res.data.userRole;
                AppConfig.token = res.token;

                setLanguage(res.lang == null ? 'en' : res.lang)
                AsyncStorageManager.onSetLanguages(res.lang == null ? 'en' : res.lang)
                AsyncStorage.setItem('@user', JSON.stringify(res))
                navigateHomeScreen();
                resetField();
            }
            else if (res.statusCode == 0) {
                showMessage(res.message)
            }
        }, (err) => {
            Loger.onLog('Login screen error ========>', err)
        })
    }

    const signWithOtp = () => {
        const data = {
            device_id: deviceId,
            language: getLanguage(),
            email: email,
            verify_email_otp: emailOtp
        }
        Service.post(EndPoints.loginWithEmail, data, (res) => {
            Loger.onLog('Response of loginWithEmail', res)
            if (res.statusCode == 1) {
                UserManager.userId = res.data.userId;
                UserManager.email = res.data.email;
                UserManager.profilePicture = res.data.profilePicture;
                UserManager.mobile = res.data.mobile;
                UserManager.userRole = res.data.userRole;
                UserManager.userName = res.data.userName;
                AppConfig.token = res.token;
                setLanguage(res.lang == null ? 'en' : res.lang)
                AsyncStorageManager.onSetLanguages(res.lang == null ? 'en' : res.lang)
                AsyncStorage.setItem('@user', JSON.stringify(res))
                navigateHomeScreen();
                resetField();
                setTimer(1)
            }
            else {
                showMessage(res.message)
            }
        },
            (err) => {
                Loger.onLog('Error of loginWithEmail', err)
            })
    }

    const navigateHomeScreen = () => {
        props.navigation.dispatch(StackActions.replace('HomeRoot'));
        // props.navigation.navigate("HomeScreen")
    }
    const navigateSignUpScreen = () => {
        props.navigation.navigate("Signup")
    }
    const checkOtpValue = () => {
        switch (true) {
            case (first == ""):
                input1.current.focus()
                break;
            case (second == ""):
                input2.current.focus()
                break;
            case (third == ""):
                input3.current.focus()
                break;
            case (fourth == ""):
                input4.current.focus()
                break;
            case (fifth == ""):
                input5.current.focus()
                break;
            case (sixth == ""):
                input6.current.focus()
                break;
            default:
        }
    }
    const handleKeyPress = (key, index) => {
        if (key === 'Backspace') {
            switch (true) {
                case (index === 1):
                    return false
                    break;
                case (index === 2):
                    input1.current.focus()
                    break;
                case (index === 3):
                    input2.current.focus()
                    break;
                case (index === 4):
                    input3.current.focus()
                    break;
                case (index === 5):
                    input4.current.focus()
                    break;
                case (index === 6):
                    input5.current.focus()
                    break;
                default:
            }
        }
        else {
            switch (true) {
                case (index === 1):
                    input2.current.focus();
                    break;
                case (index === 2):
                    input3.current.focus();
                    break;
                case (index === 3):
                    input4.current.focus();
                    break;
                case (index === 4):
                    input5.current.focus()
                    break;
                case (index === 5):
                    input6.current.focus()
                    break;
                default:
            }

        }
    }

    const resetField = () => {
        setMobileNumber('')
        setPassword('')
        setEmail('')
        setFirst('')
        setSecond('')
        setFourth('')
        setThird('')
        setFifth('')
        setSixth('')
        setCountryCode('IN')
        setCountry('')
        setCallCode('');
        setCorporateUser('')
        setCheckedOne(false)
        setGetOtp(true)
    }
    const onSelect = (country) => {
        setCountryCode(country.cca2)
        setCountry(country)
        setCallCode(country.callingCode[0]);
    }

    const Bold = ({ children }) => <Text style={{ fontFamily: FONTS.robotBold }}>{children}</Text>

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <SafeAreaView>
                <StatusBar hidden={false} backgroundColor={GetAppColor.barGrey} />
                <View style={PAGESTYLE.mainView}>
                    <View style={PAGESTYLE.headerPart}>
                        <View style={PAGESTYLE.headingMain}>
                            <MadarekLogo width={AppUtil.getWP(40)} height={AppUtil.getWP(40)} />
                        </View>
                        <View style={PAGESTYLE.signView}>
                            <View style={PAGESTYLE.headingMain}>
                                <Text style={PAGESTYLE.signText}>{Label.SignInTitle}</Text>
                            </View>
                            {/* <View style={PAGESTYLE.userInformation}>

                                <TouchableOpacity style={[PAGESTYLE.loginMobileCredential, isMobilelogin ? null : PAGESTYLE.emailCredential]}
                                    onPress={() => { setMobilelogin(true); resetField(); }}>
                                    <Text style={isMobilelogin ? PAGESTYLE.isEnableText : PAGESTYLE.isDisableText}>{Label.MobileTitle}</Text>
                                </TouchableOpacity>
                                <View style={PAGESTYLE.middleLine}></View>
                                <TouchableOpacity style={[PAGESTYLE.loginEmailCredential, isMobilelogin ? PAGESTYLE.emailCredential : null]}
                                    onPress={() => { setMobilelogin(false); resetField(); }} >
                                    <Text style={isMobilelogin ? PAGESTYLE.isDisableText : PAGESTYLE.isEnableText}>{Label.EmailTitle}</Text>
                                </TouchableOpacity>
                            </View> */}
                            {/* {
                                isMobilelogin ?
                            <View style={PAGESTYLE.numberArea}>
                                <View style={PAGESTYLE.numberAreaOne}>
                                            <CountryPicker
                                                {...{
                                                    countryCode,
                                                    onSelect,
                                                    withCallingCode: true,
                                                    withFlagButton: false,
                                                    withCallingCodeButton: true,
                                                }}
                                                visible={false}
                                                containerButtonStyle={{ marginEnd: 5 }} >
                                            </CountryPicker>
                                            <View style={PAGESTYLE.codePickerArea}>
                                                <BackIcon width={12} height={12} />
                                            </View>
                                        </View>
                                <TextInput
                                    keyboardType='phone-pad'
                                    ref={t1}
                                    returnKeyType={showPassword ? "next" : "done"}
                                    placeholderTextColor={GetAppColor.grayBorder}
                                    onSubmitEditing={() => { showPassword ? t2.current.focus() : checkOtpValue() }}
                                    placeholder={Label.MobileNumber}
                                    maxLength={12}
                                    style={PAGESTYLE.showMobileDetail}
                                    value={mobileNumber}
                                    onChangeText={mobileNumber => setMobileNumber(mobileNumber)}
                                    autoCapitalize="none"
                                />
                            </View> */}
                            {/* : */}

                            <View style={PAGESTYLE.numberArea}>
                                <TextInput
                                    autoCapitalize="none"
                                    ref={t1}
                                    returnKeyType={"next"}
                                    placeholderTextColor={GetAppColor.grayBorder}
                                    onSubmitEditing={() => { showPassword ? t2.current.focus() : checkOtpValue() }}
                                    // onSubmitEditing={() => { showPassword ? t2.current.focus() : input1.current.focus() }}
                                    maxLength={40}
                                    keyboardType="email-address"
                                    placeholder={Label.EmailAddress}
                                    style={PAGESTYLE.showEmailDetail}
                                    value={email}
                                    onChangeText={email => setEmail(email)}

                                ></TextInput>
                            </View>
                            {/* } */}
                            <View>
                                <View style={PAGESTYLE.otpArea}>
                                    {
                                        showPassword ?
                                            null
                                            :
                                            <>
                                                <Text style={PAGESTYLE.addOtp}>{Label.EnterOtpTitle}</Text>
                                                {
                                                    getOtp ?
                                                        <TouchableOpacity style={PAGESTYLE.getOtpArea} onPress={() => resetTimer()}>
                                                            <Text style={PAGESTYLE.getOtpText}>{Label.GetText} <Bold>{Label.OneTimePassword}</Bold></Text>
                                                        </TouchableOpacity> : null
                                                }
                                            </>
                                    }


                                </View>

                                {
                                    showPassword ?
                                        <TextInput
                                            ref={t2}
                                            // returnKeyType={isCheckedOne ? "next" : "done"} // for corporate user
                                            returnKeyType={"done"} // for corporate user
                                            value={password}
                                            // onSubmitEditing={() => { isCheckedOne ? t3.current.focus() : false }} // for corporate user
                                            placeholderTextColor={GetAppColor.grayBorder}
                                            placeholder={Label.password}
                                            secureTextEntry={true}
                                            maxLength={30}
                                            onChangeText={password => setPassword(password)}
                                            style={PAGESTYLE.showPassword}
                                            autoCapitalize="none"
                                        />
                                        :

                                        <View style={PAGESTYLE.otpSquareArea}>
                                            <TextInput
                                                autoCapitalize="none"
                                                style={PAGESTYLE.squreBox}
                                                keyboardType="number-pad"
                                                value={first}
                                                ref={input1}
                                                maxLength={1}
                                                onChangeText={(val) => { setFirst(val); }}
                                                onKeyPress={({ nativeEvent: { key } }) => { handleKeyPress(key, 1) }}
                                            />
                                            <TextInput
                                                style={PAGESTYLE.squreBox}
                                                autoCapitalize="none"
                                                keyboardType="number-pad"
                                                value={second}
                                                ref={input2}
                                                maxLength={1}
                                                onChangeText={(val) => { setSecond(val); }}
                                                onKeyPress={({ nativeEvent: { key } }) => { handleKeyPress(key, 2) }}
                                            />
                                            <TextInput
                                                style={PAGESTYLE.squreBox}
                                                autoCapitalize="none"
                                                keyboardType="number-pad"
                                                value={third}
                                                ref={input3}
                                                maxLength={1}
                                                onChangeText={(val) => { setThird(val); }}
                                                onKeyPress={({ nativeEvent: { key } }) => { handleKeyPress(key, 3) }}
                                            />
                                            <TextInput
                                                style={PAGESTYLE.squreBox}
                                                keyboardType="number-pad"
                                                autoCapitalize="none"
                                                value={fourth}
                                                ref={input4}
                                                maxLength={1}
                                                onChangeText={(val) => { setFourth(val); }}
                                                onKeyPress={({ nativeEvent: { key } }) => { handleKeyPress(key, 4) }}
                                            />
                                            <TextInput
                                                autoCapitalize="none"
                                                style={PAGESTYLE.squreBox}
                                                keyboardType="number-pad"
                                                value={fifth}
                                                ref={input5}
                                                maxLength={1}
                                                onChangeText={(val) => { setFifth(val) }}
                                                onKeyPress={({ nativeEvent: { key } }) => { handleKeyPress(key, 5) }}
                                            />
                                            <TextInput
                                                style={PAGESTYLE.squreBox}
                                                autoCapitalize="none"
                                                keyboardType="number-pad"
                                                value={sixth}
                                                ref={input6}
                                                maxLength={1}
                                                onChangeText={(val) => { setSixth(val); }}
                                                onKeyPress={({ nativeEvent: { key } }) => { handleKeyPress(key, 6) }}
                                            />
                                        </View>
                                }

                                {
                                    showPassword ?
                                        <View style={[PAGESTYLE.resendOtpArea]}>
                                            {/* <View style={PAGESTYLE.clickArea}>
                                        <TouchableOpacity onPress={() => setCheckedOne(!isCheckedOne)} >
                                            {
                                                isCheckedOne ?
                                                    (
                                                        <View style={PAGESTYLE.multiSelectYellowBorderView}>
                                                            <IcnSelect height={AppUtil.getHP(1.4)} width={AppUtil.getHP(1.4)} />
                                                        </View>
                                                    )
                                                    :
                                                    (
                                                        <View style={PAGESTYLE.multiSelectBorderView} />
                                                    )}
                                        </TouchableOpacity>
                                        <Text style={PAGESTYLE.corporateUser}>{Label.SignInCorporateUser}</Text>
                                    </View> */}
                                            <Text style={PAGESTYLE.resendText}>{Label.ForgotPassword}</Text>
                                            <View style={PAGESTYLE.passwordView}>
                                                <TouchableOpacity onPress={() => { setShowPassword(false); }} >
                                                    <Text style={PAGESTYLE.usePassword}>{Label.UseOtpTitle} </Text>
                                                </TouchableOpacity>
                                                <Text style={PAGESTYLE.resendTextFirst}>{Label.ToLogin}</Text>
                                            </View>
                                        </View>
                                        // {
                                        //     isCheckedOne ?
                                        //         <View style={PAGESTYLE.corporateView}>
                                        //             <TextInput
                                        //                 autoCapitalize="none"
                                        //                 ref={t3}
                                        //                 returnKeyType={"done"}
                                        //                 placeholderTextColor={GetAppColor.grayBorder}
                                        //                 // onSubmitEditing={() => { showPassword ? t2.current.focus() : input1.current.focus() }}
                                        //                 maxLength={40}
                                        //                 style={[PAGESTYLE.showCorporateActive, { marginBottom: 0 }]}
                                        //                 value={corporateUser}
                                        //                 onChangeText={corporateUser => setCorporateUser(corporateUser)}

                                        //             ></TextInput>
                                        //             <ScrollView horizontal style={PAGESTYLE.showCorporateDisable} showsHorizontalScrollIndicator={false}
                                        //                 contentContainerStyle={PAGESTYLE.centerUrl}>
                                        //                 <Text style={{ paddingHorizontal: 5 }}>{Label.URL}</Text>
                                        //             </ScrollView>
                                        //         </View> : null
                                        // }
                                        :
                                        <View style={PAGESTYLE.resendOtpArea}>
                                            {
                                                timer == 1 ?
                                                    <TouchableOpacity onPress={() => sendEmailOtp()}>
                                                        <Text style={PAGESTYLE.resendText}>{Label.ResendOtpTitle}</Text>
                                                    </TouchableOpacity> : null
                                            }
                                            <View style={PAGESTYLE.passwordView}>
                                                <Text style={PAGESTYLE.resendTextFirst}>{Label.ReceiveOtp}</Text>
                                                <TouchableOpacity style={PAGESTYLE.resendTextSecond} onPress={() => { setShowPassword(true); }} >
                                                    <Text style={PAGESTYLE.usePassword}>{Label.UsePinTitle}</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                }
                                <View style={PAGESTYLE.bottomButtomArea}>
                                    <TouchableOpacity style={PAGESTYLE.signInButton}
                                        onPress={() => { validateFields() }}>
                                        <Text style={PAGESTYLE.SignInbuttonText}>{Label.SignInTitle}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={PAGESTYLE.accountPart}>
                                    <Text style={PAGESTYLE.reciveAccount}>{Label.GetAccount} </Text>
                                    <TouchableOpacity onPress={navigateSignUpScreen}>
                                        <Text style={PAGESTYLE.signUptext}>{Label.AddAccount}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={PAGESTYLE.continueArea}>
                            <SocialLogo />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>

    );

}
export default memo(LoginScreen);
