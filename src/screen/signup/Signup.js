import { View, Text, StatusBar, SafeAreaView, TouchableOpacity, TextInput, Alert, Keyboard } from 'react-native'
import React, { useRef, useEffect } from 'react'
import { Label } from '../../utils/StringUtil'
import { GetAppColor } from '../../utils/Colors'
import SignupStyles from './SignupStyle'
import IcnBack from '../../assets/svg/IcnBack'
import { AppUtil } from '../../utils/AppUtil'
import { useState } from 'react'
import CountryPicker from 'react-native-country-picker-modal'
import BackIcon from '../../assets/svg/loginLogo/BackIcon'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Service } from '../../service/Service'
import { EndPoints } from '../../service/EndPoints'
import { Loger } from '../../utils/Loger'

const Signup = (props) => {

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [countryCode, setCountryCode] = useState('IN')
    const [mobileNumber, setMobileNumber] = useState("");
    const [emaiId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [reTypePassword, setReTypePassword] = useState("");

    const [country, setCountry] = useState(null)
    const [withCallingCode, setWithCallingCode] = useState(false)
    const [callCode, setCallCode] = useState('91');

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const mobileNumberRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const retypepasswordRef = useRef();

    const submitRegistartionForm = () => {
        const data = {
            first_name: firstName,
            last_name: lastName,
            user_type: selectedIndex,
            organization_name: "organization",
            country_id: "51",
            city_id: "12",
            mobile_phone: mobileNumber,
            email: emaiId,
            pwd: password,
            device_id: "136356",
            job_title: "Developer",
            token: "1236547780",
        }
        // newData =  JSON.stringify(data)
        Service.post(EndPoints.signUp, data, (res) => {
            Loger.onLog('SignUp screen Response  ========>', res)
            navigateToSignUpVerify();
        }, (err) => {
            Loger.onLog('SignUp screen error ========>', err)
        })
    };

    const navigateToSignUpVerify = () => {
        props.navigation.navigate("SignUpVerify")
    }


    const signUpPressed = () => {
        if (firstName === "") {
            Alert.alert(Label.enterfirstname);
        } else if (lastName === "") {
            Alert.alert(Label.enterlastname);
        } else if (mobileNumber === "") {
            Alert.alert(Label.entermobilenumber);
        } else if (emaiId === "" || !AppUtil.validate(emaiId)) {
            Alert.alert(Label.enteremail);
        } else if (password === "") {
            Alert.alert(Label.enterpassword);
        } else if (reTypePassword === "") {
            Alert.alert(Label.enterretypePassword);
        } else if (password !== reTypePassword) {
            Alert.alert(Label.enterSamePassword);
        } else {
            submitRegistartionForm();


        }
    }

    const onSelect = (country) => {
        setCountryCode(country.cca2)
        setCountry(country)
        setCallCode(country.callingCode[0]);
    }
    const onChangeField = (index) => {
        switch (true) {
            case (index === 1):
                lastNameRef.current.focus()
                break;
            case (index === 2):
                mobileNumberRef.current.focus()
                break;
            case (index === 3):
                emailRef.current.focus()
                break;
            case (index === 4):
                passwordRef.current.focus()
                break;
            case (index === 5):
                retypepasswordRef.current.focus()
                break;
            case (index === 6):
                Keyboard.dismiss()
                break;
            default:
        }
    }

    return (
        <View >
            <StatusBar barStyle="light-content" hidden={false} backgroundColor={GetAppColor.statusBarYellow} translucent={false} />

            <SafeAreaView backgroundColor={GetAppColor.statusBarYellow} />

            <View style={SignupStyles.headerView}>
                <Text style={SignupStyles.headerText}>{Label.SignupTitle}</Text>
                <TouchableOpacity style={SignupStyles.backButton}>
                    <IcnBack height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} />
                </TouchableOpacity>
            </View>
            <KeyboardAwareScrollView>
                <View style={SignupStyles.roundMainView}>
                    {/* Radio button */}
                    <Text style={SignupStyles.userTypeText}>
                        {Label.selectusertype}
                    </Text>

                    <View style={SignupStyles.userTypeButtonView}>
                        <TouchableOpacity onPress={() => setSelectedIndex(0)} style={{ alignItems: 'center' }}>
                            {
                                selectedIndex == 0 ?
                                    <View style={SignupStyles.yellowBorderView}>
                                        <View style={SignupStyles.yellowFillView} />
                                    </View>
                                    :
                                    <View style={SignupStyles.grayBorderView} />
                            }

                            <Text style={[SignupStyles.userTypeText, { marginTop: 0 }]} >{Label.individual}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setSelectedIndex(1)} style={{ alignItems: 'center' }}>
                            {
                                selectedIndex == 1 ?
                                    <View style={SignupStyles.yellowBorderView}>
                                        <View style={SignupStyles.yellowFillView} />
                                    </View>
                                    :
                                    <View style={SignupStyles.grayBorderView} />
                            }
                            <Text style={[SignupStyles.userTypeText, { marginTop: 0 }]} >{Label.corporate}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setSelectedIndex(2)} style={{ alignItems: 'center' }}>
                            {
                                selectedIndex == 2 ?
                                    <View style={SignupStyles.yellowBorderView}>
                                        <View style={SignupStyles.yellowFillView} />
                                    </View>
                                    :
                                    <View style={SignupStyles.grayBorderView} />
                            }
                            <Text style={[SignupStyles.userTypeText, { marginTop: 0 }]} >{Label.subjectexpert}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setSelectedIndex(3)} style={{ alignItems: 'center' }}>
                            {
                                selectedIndex == 3 ?
                                    <View style={SignupStyles.yellowBorderView}>
                                        <View style={SignupStyles.yellowFillView} />
                                    </View>
                                    :
                                    <View style={SignupStyles.grayBorderView} />
                            }
                            <Text style={[SignupStyles.userTypeText, { marginTop: 0 }]} >{Label.partner}</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Text Fields First name Last name */}
                    <View style={SignupStyles.nameView}>
                        <View style={{ width: '47%' }} >
                            <Text style={SignupStyles.titleText}>{Label.firstname}<Text style={{ color: 'red' }}>*</Text></Text>
                            <TextInput
                                style={SignupStyles.inputstyle}
                                onChangeText={(text) => { setFirstName(text) }}
                                ref={firstNameRef}
                                returnKeyType={"next"}
                                keyboardType="default"
                                onSubmitEditing={() => onChangeField(1)}
                            />
                        </View>
                        <View style={{ width: '47%' }}>
                            <Text style={SignupStyles.titleText}>{Label.lastname}<Text style={{ color: 'red' }}>*</Text></Text>
                            <TextInput
                                ref={lastNameRef}
                                style={SignupStyles.inputstyle}
                                onChangeText={(text) => { setlastName(text) }}
                                returnKeyType={"next"}
                                keyboardType="default"
                                onSubmitEditing={() => onChangeField(2)}
                            />
                        </View>
                    </View>


                    {/* Mobile Number */}
                    <View style={{ marginTop: AppUtil.getHP(2) }}>
                        <Text style={SignupStyles.titleText}>{Label.mobilenumber}<Text style={{ color: 'red' }}>*</Text></Text>
                        <View style={[SignupStyles.nameView, { marginTop: 0 }]}>


                            <View style={SignupStyles.numberAreaOne}>
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
                                <View style={SignupStyles.codePickerArea}>
                                    <BackIcon width={12} height={12} />
                                </View>
                            </View>

                            {/* <TouchableOpacity style={SignupStyles.codeinputstyle}>
                            <Text>+971</Text>
                            <DownArrow height={AppUtil.getHP(1)} width={AppUtil.getWP(2.64)} />
                        </TouchableOpacity> */}

                            <TextInput
                                ref={mobileNumberRef}
                                style={SignupStyles.numberinputstyle}
                                onChangeText={(text) => { setMobileNumber(text) }}
                                keyboardType="number-pad"
                                returnKeyType={"next"}
                                onSubmitEditing={() => onChangeField(3)}
                            />
                        </View>
                    </View>

                    {/* Email id */}
                    <View style={{ marginTop: AppUtil.getHP(2) }}>
                        <Text style={SignupStyles.titleText}>{Label.emailID}</Text>
                        <View style={[SignupStyles.nameView, { marginTop: 0 }]}>

                            <TextInput
                                ref={emailRef}
                                style={[SignupStyles.numberinputstyle, { width: '100%' }]}
                                onChangeText={(text) => { setEmailId(text) }}
                                returnKeyType={"next"}
                                keyboardType={'email-address'}
                                onSubmitEditing={() => onChangeField(4)}
                            />
                        </View>
                    </View>

                    {/* Password */}
                    <View style={{ marginTop: AppUtil.getHP(2) }}>
                        <Text style={SignupStyles.titleText}>{Label.password}<Text style={{ color: 'red' }}>*</Text></Text>
                        <View style={[SignupStyles.nameView, { marginTop: 0 }]}>

                            <TextInput
                                ref={passwordRef}
                                style={[SignupStyles.numberinputstyle, { width: '100%' }]}
                                onChangeText={(text) => { setPassword(text) }}
                                secureTextEntry={true}
                                returnKeyType={"next"}
                                keyboardType="default"
                                onSubmitEditing={() => onChangeField(5)}
                            />
                        </View>
                    </View>

                    {/* Retype Password */}
                    <View style={{ marginTop: AppUtil.getHP(2) }}>
                        <Text style={SignupStyles.titleText}>{Label.retypepassword}<Text style={{ color: 'red' }}>*</Text></Text>
                        <View style={[SignupStyles.nameView, { marginTop: 0 }]}>

                            <TextInput
                                ref={retypepasswordRef}
                                style={[SignupStyles.numberinputstyle, { width: '100%' }]}
                                onChangeText={(text) => { setReTypePassword(text) }}
                                secureTextEntry={true}
                                returnKeyType={"done"}
                                keyboardType="default"
                                onSubmitEditing={() => onChangeField(6)}
                            />
                        </View>
                    </View>

                    {/* SignUp button */}
                    <TouchableOpacity onPress={() => signUpPressed()} style={SignupStyles.signupButton}>
                        <Text style={SignupStyles.signupText}>{Label.SignupTitle}</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}

export default Signup