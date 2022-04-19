import React, { useState, memo, useRef } from "react";
import { Text, TextInput, TouchableOpacity, View, ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import verifyStyle from "./SignUpVerifyStyle";
import { Label } from "../../utils/StringUtil";
import { GetAppColor } from "../../utils/Colors";
import CommonHeader from "../../component/commonheader/CommonHeader";

const SignUpVerify = (props) => {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [fourth, setFourth] = useState('');
  const [fifth, setFifth] = useState('');
  const [sixth, setSixth] = useState('');
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();
  const input5 = useRef();
  const input6 = useRef();

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

  const navigateToCategory = () => {
    props.navigation.navigate("Category")
  }
  const Bold = ({ children }) => <Text style={{ color: GetAppColor.pincolor }}>{children}</Text>

  return (

    <ScrollView contentContainerStyle={{ flex: 1 }}>

      <View style={verifyStyle.signHeaderView}>

        <SafeAreaView backgroundColor={GetAppColor.statusBarYellow} />
        <CommonHeader isType={"SignUpVerify"} onMenuClick={() => { props.navigation.openDrawer() }} />

        <View style={verifyStyle.mainView}>

          <View style={verifyStyle.signView}>

            <View>
              <Text style={verifyStyle.headingTitle}>{Label.VerifyNumber}</Text>
            </View>

            <View style={verifyStyle.oneTimePinDetail}>
              <Text style={verifyStyle.oneTimepin}>{Label.OneTimePinDetail}<Bold> ({Label.OneTimePassword})</Bold></Text>
              <Text style={verifyStyle.oneTimepin}>{Label.ToMessage}<Bold> {Label.DefaultPhoneCode}</Bold></Text>
            </View>

            <View style={verifyStyle.otpSquareArea}>
              <TextInput
                style={verifyStyle.squreBox}
                keyboardType="number-pad"
                value={first}
                ref={input1}
                maxLength={1}
                onChangeText={(val) => { setFirst(val); }}
                onKeyPress={({ nativeEvent: { key } }) => { handleKeyPress(key, 1) }}
              />
              <TextInput
                style={verifyStyle.squreBox}
                keyboardType="number-pad"
                value={second}
                ref={input2}
                maxLength={1}
                onChangeText={(val) => { setSecond(val); }}
                onKeyPress={({ nativeEvent: { key } }) => { handleKeyPress(key, 2) }}
              />
              <TextInput
                style={verifyStyle.squreBox}
                keyboardType="number-pad"
                value={third}
                ref={input3}
                maxLength={1}
                onChangeText={(val) => { setThird(val); }}
                onKeyPress={({ nativeEvent: { key } }) => { handleKeyPress(key, 3) }}
              />
              <TextInput
                style={verifyStyle.squreBox}
                keyboardType="number-pad"
                value={fourth}
                ref={input4}
                maxLength={1}
                onChangeText={(val) => { setFourth(val); }}
                onKeyPress={({ nativeEvent: { key } }) => { handleKeyPress(key, 4) }}
              />
              <TextInput
                style={verifyStyle.squreBox}
                keyboardType="number-pad"
                value={fifth}
                ref={input5}
                maxLength={1}
                onChangeText={(val) => { setFifth(val) }}
                onKeyPress={({ nativeEvent: { key } }) => { handleKeyPress(key, 5) }}
              />
              <TextInput
                style={verifyStyle.squreBox}
                keyboardType="number-pad"
                value={sixth}
                ref={input6}
                maxLength={1}
                onChangeText={(val) => { setSixth(val); }}
                onKeyPress={({ nativeEvent: { key } }) => { handleKeyPress(key, 6) }}
              />
            </View>

            <View style={verifyStyle.resendOtpArea}>
              <Text style={verifyStyle.resendTextFirst}>{Label.ReceiveOtp}</Text>
              <TouchableOpacity style={verifyStyle.resendTextSecond}>
                <Text style={verifyStyle.resendText}>{Label.ResendOtpTitle}</Text>
              </TouchableOpacity>
            </View>

            <View style={verifyStyle.bottomButtomArea}>
              <TouchableOpacity style={verifyStyle.signInButton} onPress={() => { navigateToCategory() }}>
                <Text style={verifyStyle.SignInbuttonText}>{Label.VerifyTitle}</Text>
              </TouchableOpacity>
            </View>

          </View>

        </View>

      </View>
    </ScrollView>
  )
}
export default SignUpVerify