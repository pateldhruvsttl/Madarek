import React, { useState, memo, useRef } from "react";
import { Text, TextInput, TouchableOpacity, View, ScrollView, SafeAreaView, Dimensions, } from "react-native";
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
import SocialLogo from "./SocialLogo";



const LoginScreen = (props) => {
    const [showPassword, setShowPassword] = useState(false)
    const [isMobilelogin, setMobilelogin] = useState(true)
    const [mobileNumber, setMobileNumber] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState()

    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [third, setThird] = useState('');
    const [fourth, setFourth] = useState('');
    const [fifth, setFifth] = useState('');
    const [sixth, setSixth] = useState('');
    const [countryCode, setCountryCode] = useState('IN')
    const [country, setCountry] = useState(null)
    const [callCode, setCallCode] = useState('91');
    const t1 = useRef(null);
    const t2 = useRef(null);

    const input1 = useRef();
    const input2 = useRef();
    const input3 = useRef();
    const input4 = useRef();
    const input5 = useRef();
    const input6 = useRef();

    const setFocusInput = (inputRef) => {
        inputRef.current.focus();
    }

    let pin = 12345678
    let otpNumber = 123456

    const navigateHomeScreen = () => {
        props.navigation.navigate("HomeSceen")
    }
    const navigateSignUpScreen = () => {
        props.navigation.navigate("Signup")
    }


    const handleKeyPress = (key, index) => {
        if (key === 'Backspace') {
            if (index === 1) {
                return false;
            } else if (index === 2) {
                input1.current.focus();
            } else if (index === 3) {
                input2.current.focus();
            } else if (index === 4) {
                input3.current.focus();
            } else if (index === 5) {
                input4.current.focus();
            } else if (index === 6) {
                input5.current.focus();
            }
        } else {
            if (index === 1) {
                input2.current.focus();
            } else if (index === 2) {
                input3.current.focus();
            } else if (index === 3) {
                input4.current.focus();
            } else if (index === 4) {
                input5.current.focus();
            } else if (index === 5) {
                input6.current.focus();
            }

        }
    }

    const validateFields = () => {
        if (isMobilelogin) {
            if (!mobileNumber.trim()) {
                showMessage(Label.Phone)
                return false
            }
            if (showPassword) {
                if (pin != password) {
                    showMessage(Label.Password)
                    return false
                }
            } else {
                const otpJoin = first + second + third + fourth + fifth + sixth;
                // alert( typeof Number(otpJoin))
                if (otpNumber != Number(otpJoin)) {
                    showMessage(Label.Pin)
                    return false
                }
            }
        }
        else {
            if (!email.trim() || !emailValidate(email)) {
                showMessage(Label.Email)
                return false
            } else if (pin != password) {
                showMessage(Label.Password)
                return false
            }
        }

        resetField()
        navigateHomeScreen()

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
    }
    const onSelect = (country) => {
        console.log('country', country.callingCode[0], country);
        setCountryCode(country.cca2)
        setCountry(country)
        setCallCode(country.callingCode[0]);
    }
    const Bold = ({ children }) => <Text style={{ fontFamily: FONTS.robotBold }}>{children}</Text>
    // const success = response => {
    //     console.log(response) // eslint-disable-line
    //   }

    //   const error = response => {
    //     console.error(response) // eslint-disable-line
    //   }

    //   const loading = () => {
    //     console.log('loading') // eslint-disable-line
    //   }

    //   const logout = () => {
    //     console.log('logout') // eslint-disable-line
    //   }


    return (
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            <SafeAreaView>
                <View style={PAGESTYLE.mainView}>
                    <StatusBar hidden={false} backgroundColor={GetAppColor.barGrey} />
                    <View style={PAGESTYLE.headerPart}>
                        <View style={PAGESTYLE.headingMain}>
                            <MadarekLogo width={AppUtil.getWP(40)} height={AppUtil.getWP(40)} />
                        </View>
                        <View style={PAGESTYLE.signView}>
                            <View style={PAGESTYLE.headingMain}>
                                <Text style={PAGESTYLE.signText}>{Label.SignInTitle}</Text>
                            </View>
                            <View style={PAGESTYLE.userInformation}>

                                <TouchableOpacity style={[PAGESTYLE.loginMobileCredential, isMobilelogin ? null : PAGESTYLE.emailCredential]}
                                    onPress={() => { setMobilelogin(true); resetField(); }}>
                                    <Text style={isMobilelogin ? PAGESTYLE.isEnableText : PAGESTYLE.isDisableText}>{Label.MobileTitle}</Text>
                                </TouchableOpacity>
                                <View style={PAGESTYLE.middleLine}></View>
                                <TouchableOpacity style={[PAGESTYLE.loginEmailCredential, isMobilelogin ? PAGESTYLE.emailCredential : null]}
                                    onPress={() => { setMobilelogin(false); resetField(); }} >
                                    <Text style={isMobilelogin ? PAGESTYLE.isDisableText : PAGESTYLE.isEnableText}>{Label.EmailTitle}</Text>
                                </TouchableOpacity>
                            </View>
                            {
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
                                            onSubmitEditing={() => { showPassword ? t2.current.focus() : input1.current.focus() }}
                                            placeholder={Label.MobileNumber}
                                            maxLength={12}
                                            style={PAGESTYLE.showMobileDetail}
                                            value={mobileNumber}
                                            onChangeText={mobileNumber => setMobileNumber(mobileNumber)}
                                        />
                                    </View>
                                    :
                                    <View style={PAGESTYLE.numberArea}>
                                        <TextInput
                                            autoCapitalize={false}
                                            ref={t1}
                                            returnKeyType={"next"}
                                            placeholderTextColor={GetAppColor.grayBorder}
                                            onSubmitEditing={() => { showPassword ? t2.current.focus() : input1.current.focus() }}
                                            maxLength={40}
                                            keyboardType="email-address"
                                            placeholder={Label.EmailAddress}
                                            style={PAGESTYLE.showEmailDetail}
                                            value={email}
                                            onChangeText={email => setEmail(email)}
                                        ></TextInput>
                                    </View>
                            }
                            <View>
                                <View style={PAGESTYLE.otpArea}>
                                    {
                                        showPassword ? null :
                                            <>
                                                <Text style={PAGESTYLE.addOtp}>{Label.EnterOtpTitle}</Text>
                                                <TouchableOpacity style={PAGESTYLE.getOtpArea}>
                                                    <Text style={PAGESTYLE.getOtpText}>{Label.GetText} <Bold>{Label.OneTimePassword}</Bold></Text>
                                                </TouchableOpacity>
                                            </>
                                    }

                                </View>
                                {
                                    showPassword ?
                                        <TextInput
                                            ref={t2}
                                            returnKeyType={"done"}
                                            value={password}
                                            placeholderTextColor={GetAppColor.grayBorder}
                                            placeholder={Label.password}
                                            secureTextEntry={true}
                                            maxLength={30}
                                            onChangeText={password => setPassword(password)}
                                            style={PAGESTYLE.showPassword}
                                        />
                                        :
                                        <View style={PAGESTYLE.otpSquareArea}>
                                            <TextInput
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
                                                keyboardType="number-pad"
                                                value={second}
                                                ref={input2}
                                                maxLength={1}
                                                onChangeText={(val) => { setSecond(val); }}
                                                onKeyPress={({ nativeEvent: { key } }) => { handleKeyPress(key, 2) }}
                                            />
                                            <TextInput
                                                style={PAGESTYLE.squreBox}
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
                                                value={fourth}
                                                ref={input4}
                                                maxLength={1}
                                                onChangeText={(val) => { setFourth(val); }}
                                                onKeyPress={({ nativeEvent: { key } }) => { handleKeyPress(key, 4) }}
                                            />
                                            <TextInput
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
                                        <View style={PAGESTYLE.resendOtpArea}>
                                            <Text style={PAGESTYLE.resendText}>{Label.ForgotPassword}</Text>
                                            <View style={PAGESTYLE.passwordView}>
                                                <TouchableOpacity onPress={() => { setShowPassword(false); resetField() }} >
                                                    <Text style={PAGESTYLE.usePassword}>{Label.UseOtpTitle} </Text>
                                                </TouchableOpacity>
                                                <Text style={PAGESTYLE.resendTextFirst}>{Label.ToLogin}</Text>
                                            </View>
                                        </View>
                                        :
                                        <View style={PAGESTYLE.resendOtpArea}>
                                            <Text style={PAGESTYLE.resendText}>{Label.ResendOtpTitle}</Text>
                                            <View style={PAGESTYLE.passwordView}>
                                                <Text style={PAGESTYLE.resendTextFirst}>{Label.ReceiveOtp}</Text>
                                                <TouchableOpacity style={PAGESTYLE.resendTextSecond} onPress={() => { setShowPassword(true); resetField() }} >
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
