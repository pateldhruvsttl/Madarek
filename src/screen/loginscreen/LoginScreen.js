import React, { useState, memo, useRef } from "react";
import { Text, TextInput, TouchableOpacity, View ,ScrollView} from "react-native";
import PAGESTYLE from "./LoginStyle";
import MadarekLogo from "../../assets/svg/loginLogo/MadarekLogo";
import GoogleLogo from "../../assets/svg/loginLogo/GoogleLogo"
import BackIcon from "../../assets/svg/loginLogo/BackIcon"
import { StatusBar } from "react-native";
import { GetAppColor } from "../../utils/Colors";
import { Label } from "../../utils/StringUtil";
import { showMessage } from "../../utils/Constant";
import { showMessageWithCallBack } from "../../utils/Constant";
import { emailValidate } from "../../utils/Constant";
import CountryPicker from 'react-native-country-picker-modal'
import { DarkTheme } from "@react-navigation/native";
// import { ScrollView } from "react-native-gesture-handler";



const LoginScreen = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [isMobilelogin, setMobilelogin] = useState(true)
    const [mobileNumber, setMobileNumber] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState()

    const [show, setShow] = useState(false);

    const [first, setfirst] = useState('');
    const [second, setsecond] = useState('');
    const [third, setthird] = useState('');
    const [fourth, setfourth] = useState('');
    const [fifth, setfifth] = useState('');
    const [sixth, setsixth] = useState('');
    const [otp, setotp] = useState()
    const [countryCode, setCountryCode] = useState('IN')
    const [country, setCountry] = useState(null)
    const [withCallingCode, setWithCallingCode] = useState(false)
    const [callCode, setCallCode] = useState('91');
    const t1 = useRef(null);
    const t2 = useRef(null);
    const t3 = useRef(null);

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
        showMessage('Login successfully')
        resetField()
    }
    const resetField = () => {
        setMobileNumber('')
        setPassword('')
        setEmail('')
        setfirst('')
        setsecond('')
        setfourth('')
        setthird('')
        setfifth('')
        setsixth('')
        setCountryCode('IN')
        setCountry('')
        setCallCode('');
    }
    const onSelect = (country) => {
        console.log('country', country.callingCode[0],country);
        setCountryCode(country.cca2)
        setCountry(country)
        setCallCode(country.callingCode[0]);
    }

    return (
        <ScrollView>
            <View style={PAGESTYLE.mainView}>
            <StatusBar hidden={false} backgroundColor={GetAppColor.barGrey} />
            <View style={PAGESTYLE.headerPart}>
                <View style={PAGESTYLE.headingMain}>
                    <MadarekLogo width={150} height={150} />

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
                                            withCallingCode:true,
                                            withFlagButton: false,
                                            withCallingCodeButton: true,
                                        }}
                                        visible={false}
                                        containerButtonStyle={{marginEnd:5 }} >
                                    </CountryPicker>
                                    <View style={PAGESTYLE.codePickerArea}>
                                        <BackIcon width={12} height={12} />
                                    </View>
                                </View>
                                <TextInput
                                    keyboardType='phone-pad'
                                    ref={t1}
                                    returnKeyType={"next"}
                                    onSubmitEditing={() => { t2.current.focus(); }}
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
                                    onSubmitEditing={() => { t2.current.focus(); }}
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
                                            <Text style={PAGESTYLE.getOtpText}>{Label.GetOtpTitle}</Text>
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
                                    placeholder={Label.password}
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
                                        onChangeText={(val) => { setfirst(val); }}
                                        onKeyPress={({ nativeEvent: { key } }) => { handleKeyPress(key, 1) }}
                                    />
                                    <TextInput
                                        style={PAGESTYLE.squreBox}
                                        keyboardType="number-pad"
                                        value={second}
                                        ref={input2}
                                        maxLength={1}
                                        onChangeText={(val) => { setsecond(val); }}
                                        onKeyPress={({ nativeEvent: { key } }) => { handleKeyPress(key, 2) }}
                                    />
                                    <TextInput
                                        style={PAGESTYLE.squreBox}
                                        keyboardType="number-pad"
                                        value={third}
                                        ref={input3}
                                        maxLength={1}
                                        onChangeText={(val) => { setthird(val); }}
                                        onKeyPress={({ nativeEvent: { key } }) => { handleKeyPress(key, 3) }}
                                    />
                                    <TextInput
                                        style={PAGESTYLE.squreBox}
                                        keyboardType="number-pad"
                                        value={fourth}
                                        ref={input4}
                                        maxLength={1}
                                        onChangeText={(val) => { setfourth(val); }}
                                        onKeyPress={({ nativeEvent: { key } }) => { handleKeyPress(key, 4) }}
                                    />
                                    <TextInput
                                        style={PAGESTYLE.squreBox}
                                        keyboardType="number-pad"
                                        value={fifth}
                                        ref={input5}
                                        maxLength={1}
                                        onChangeText={(val) => { setfifth(val) }}
                                        onKeyPress={({ nativeEvent: { key } }) => { handleKeyPress(key, 5) }}
                                    />
                                    <TextInput
                                        style={PAGESTYLE.squreBox}
                                        keyboardType="number-pad"
                                        value={sixth}
                                        ref={input6}
                                        maxLength={1}
                                        onChangeText={(val) => { setsixth(val); }}
                                        onKeyPress={({ nativeEvent: { key } }) => { handleKeyPress(key, 6) }}
                                    />
                                </View>
                        }
                        {
                            showPassword ?
                                <View style={PAGESTYLE.resendOtpArea}>
                                    <Text style={PAGESTYLE.resendText}>{Label.ForgotPassword}</Text>
                                    <View style={PAGESTYLE.passwordView}>
                                        <TouchableOpacity style={PAGESTYLE.resendTextSecond} onPress={() => { setShowPassword(false); resetField() }} >
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
                            <Text style={PAGESTYLE.signUptext}>{Label.AddAccount}</Text>
                        </View>
                    </View>
                </View>
                <View style={PAGESTYLE.continueArea}>
                    <View>
                        <GoogleLogo width={'100%'} height={70} />
                    </View>
                </View>
            </View>
            </View>
        </ScrollView>
    );

}
export default memo(LoginScreen);
