import React, { useState, memo, useRef } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import PAGESTYLE from "./LoginStyle";
import MadarekLogo from "../../assets/svg/loginLogo/MadarekLogo";
import GoogleLogo from "../../assets/svg/loginLogo/GoogleLogo"
import BackIcon from "../../assets/svg/loginLogo/BackIcon"
import { StatusBar } from "react-native";
import { GetAppColor } from "../../utils/Colors";
import { Label } from "../../utils/StringUtil";


const LoginScreen = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [loginDetails, setLoginDetails] = useState(true)
    // const [mobileDetail, setMobileDetail] = useState(true)

    const [first, setfirst] = useState('');
    const [second, setsecond] = useState('');
    const [third, setthird] = useState('');
    const [fourth, setfourth] = useState('');
    const [fifth, setfifth] = useState('');
    const [sixth, setsixth] = useState('');

    const input1 = useRef();
    const input2 = useRef();
    const input3 = useRef();
    const input4 = useRef();
    const input5 = useRef();
    const input6 = useRef();

    const setFocusInput = (inputRef) => {
        inputRef.current.focus();
    }

    const handleKeyPress = (key, index) => {
        // alert(index)
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

    return (
        <View style={PAGESTYLE.mainView}>
            {/* <StatusBar backgroundColor='#f9b52b' /> */}
            <StatusBar hidden={false} backgroundColor={GetAppColor.barGrey} />
            <View style={{ width: '100%', paddingHorizontal: 15 }}>
                <View style={PAGESTYLE.headingMain}>
                    {/* <Image> */}
                    <MadarekLogo width={150} height={150} />

                </View>
                <View style={PAGESTYLE.signView}>
                    <View style={PAGESTYLE.headingMain}>
                        <Text style={PAGESTYLE.signText}>{Label.SignInTitle}</Text>
                    </View>
                    <View style={PAGESTYLE.userInformation}>
                        <TouchableOpacity style={PAGESTYLE.loginCredential}
                            onPress={() => { setLoginDetails(true) }}
                        >
                            <Text style={PAGESTYLE.mobileLoginText}>{Label.MobileTitle}</Text>
                        </TouchableOpacity>
                        <View style={PAGESTYLE.middleLine}></View>
                        <TouchableOpacity style={[PAGESTYLE.loginCredential, PAGESTYLE.emailCredential]}
                            onPress={() => { setLoginDetails(false) }}
                        >
                            <Text style={PAGESTYLE.emailLoginText}>{Label.EmailTitle}</Text>
                        </TouchableOpacity>
                    </View>
                    {
                        loginDetails ?
                            <View style={PAGESTYLE.numberArea}>
                                <View style={PAGESTYLE.toggleNumber}>
                                    <TextInput style={PAGESTYLE.numberAreaOne}>{Label.NumberCode}</TextInput>
                                    <TouchableOpacity style={PAGESTYLE.backIcon}>
                                        <BackIcon width={12} height={12} />
                                    </TouchableOpacity>
                                </View>
                                <TextInput
                                    keyboardType='number-pad'
                                    placeholder={Label.MobileNumber}
                                    maxLength={12}
                                    style={PAGESTYLE.showMobileDetail}></TextInput>
                            </View>
                            :
                            <View style={PAGESTYLE.numberArea}>
                                <TextInput
                                    autoCapitalize={false}
                                    maxLength={40}
                                    keyboardType="email-address"
                                    placeholder={Label.EmailAddress}
                                    style={PAGESTYLE.showEmailDetail}></TextInput>
                            </View>
                    }
                    <View>
                        <View style={PAGESTYLE.otpArea}>
                            {
                                showPassword ?
                                    <Text style={PAGESTYLE.addOtp}>{Label.EnterPinTitle}</Text>
                                    :
                                    <Text style={PAGESTYLE.addOtp}>{Label.EnterOtpTitle}</Text>
                            }
                            {
                                showPassword ?
                                    <TouchableOpacity style={PAGESTYLE.getOtpArea}>
                                        <Text style={PAGESTYLE.getOtpText}>{Label.EnterPinTitle}</Text>
                                    </TouchableOpacity> :

                                    <TouchableOpacity style={PAGESTYLE.getOtpArea}>
                                        <Text style={PAGESTYLE.getOtpText}>{Label.GetOtpTitle}</Text>
                                    </TouchableOpacity>
                            }

                        </View>
                        {
                            showPassword ?
                                <TextInput style={PAGESTYLE.showPassword}></TextInput>
                                :
                                <View style={PAGESTYLE.otpSquareArea}>
                                    <TextInput
                                        style={PAGESTYLE.squreBox}
                                        keyboardType="number-pad"
                                        value={first}
                                        ref={input1}
                                        onChangeText={(val) => { setfirst(val); }}
                                        onKeyPress={({ nativeEvent: { key } }) => { handleKeyPress(key, 1) }}
                                    />
                                    <TextInput
                                        style={PAGESTYLE.squreBox}
                                        keyboardType="number-pad"
                                        value={second}
                                        ref={input2}
                                        onChangeText={(val) => { setsecond(val); }}
                                        onKeyPress={({ nativeEvent: { key } }) => { handleKeyPress(key, 2) }}
                                    />
                                    <TextInput
                                        style={PAGESTYLE.squreBox}
                                        keyboardType="number-pad"
                                        value={third}
                                        ref={input3}
                                        onChangeText={(val) => { setthird(val); }}
                                        onKeyPress={({ nativeEvent: { key } }) => { handleKeyPress(key, 3) }}
                                    />
                                    <TextInput
                                        style={PAGESTYLE.squreBox}
                                        keyboardType="number-pad"
                                        value={fourth}
                                        ref={input4}
                                        onChangeText={(val) => { setfourth(val); }}
                                        onKeyPress={({ nativeEvent: { key } }) => { handleKeyPress(key, 4) }}
                                    />
                                    <TextInput
                                        style={PAGESTYLE.squreBox}
                                        keyboardType="number-pad"
                                        value={fifth}
                                        ref={input5}
                                        onChangeText={(val) => { setfifth(val) }}
                                        onKeyPress={({ nativeEvent: { key } }) => { handleKeyPress(key, 5) }}
                                    />
                                    <TextInput
                                        style={PAGESTYLE.squreBox}
                                        keyboardType="number-pad"
                                        value={sixth}
                                        ref={input6}
                                        onChangeText={(val) => { setsixth(val); }}
                                        onKeyPress={({ nativeEvent: { key } }) => { handleKeyPress(key, 6) }}
                                    />
                                </View>
                        }
                        {
                            showPassword ?
                                null
                                :
                                <View style={PAGESTYLE.resendOtpArea}>
                                    <Text style={PAGESTYLE.resendText}>{Label.ResendOtpTitle}</Text>
                                    <View style={PAGESTYLE.passwordView}>
                                        <Text style={PAGESTYLE.resendTextFirst}>{Label.ReceiveOtp}</Text>
                                        <TouchableOpacity style={PAGESTYLE.resendTextSecond} onPress={() => setShowPassword(true)} >
                                            <Text style={PAGESTYLE.usePassword}>{Label.UsePinTitle}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                        }
                        <View style={PAGESTYLE.bottomButtomArea}>
                            <TouchableOpacity style={PAGESTYLE.signInButton}>
                                <Text style={PAGESTYLE.SignInbuttonText}>{Label.SignInTitle}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={PAGESTYLE.accountPart}>
                            <Text>{Label.GetAccount} </Text>
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
    );

}

export default memo(LoginScreen);


