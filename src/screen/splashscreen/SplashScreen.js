import React, { useState, memo, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";
import SplaceImage from "../../assets/svg/splaceIcons/SplaceImage";
import MadarecSplace from "../../assets/svg/splaceIcons/MadarecSplace";
import STYLES from "./SplashStyle";
import { GetAppColor } from "../../utils/Colors";
import { Label } from "../../utils/StringUtil";
import { GetAppImage } from "../../utils/Assets";
import { AppUtil } from "../../utils/AppUtil";
import DownArrow from "../../assets/svg/DownArrow";
import IcnUpArrow from "../../assets/svg/drawerIcon/IcnUpArrow";
import GoogleIcon from "../../assets/svg/loginLogo/GoogleIcon";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserManager } from "../../manager/UserManager";
import { AppConfig, getLanguage, setBaseURL, setLanguage } from "../../manager/AppConfig";
import { Loger } from "../../utils/Loger";
import { AsyncStorageManager } from "../../manager/AsyncStorageManager";
import { StackActions } from '@react-navigation/native'

const SplashScreen = (props) => {
  const [selectLanguage, setselectLanguage] = useState(0);
  const [selectIndex, setSelectIndex] = useState();


  AsyncStorage.getItem("@user").then((response) => {

    if (response != 'null' && response != null) {
      const res = JSON.parse(response);
      UserManager.userId = res.data.userId;
      UserManager.email = res.data.email;
      UserManager.profilePicture = res.data.profilePicture;
      UserManager.mobile = res.data.mobile;
      UserManager.userName = res.data.userName;
      AppConfig.token = res.token;

      if (res?.data?.corporateSubDomain)
        setBaseURL('http://' + res?.data?.corporateSubDomain + '.madarek.io/apiv1/');

      // setBaseURL('http://' + res?.data?.corporateSubDomain + '.silvertouch-staging.com/apiv1');

      // props.navigation.replace("HomeScreen");
      props.navigation.dispatch(StackActions.replace('HomeRoot'));
    } else {
      props.navigation.dispatch(StackActions.replace('LoginRoot'));
      // props.navigation.replace("LoginScreen")
    }

  });

  //   setTimeout(() => {
  //   }, 3500);

  const languageList = [Label.English, Label.Arabic];
  const Bold = ({ children }) => (
    <Text style={{ fontWeight: "bold" }}>{children}</Text>
  );
  // const renderCollapseView = () => {
  //   return (
  //     <View style={STYLES.dropDown}>
  //       {languageList.map((lang, index) => (
  //         <TouchableOpacity
  //           style={[STYLES.selections]}
  //           onPress={() => {
  //             setselectLanguage(index);
  //             setSelectIndex(1);
  //             if (selectIndex == 0) {
  //               props.navigation.replace("LoginScreen");
  //             }
  //           }}
  //         >
  //           <Text
  //             style={[
  //               STYLES.itemPicker,
  //               {
  //                 color:
  //                   selectLanguage === index
  //                     ? GetAppColor.black
  //                     : "rgba(0,0,0,0.3)",
  //               },
  //             ]}
  //           >
  //             {lang}
  //           </Text>
  //         </TouchableOpacity>
  //       ))}
  //     </View>
  //   );
  // };
  // const toggleButton = () => {
  //   selectIndex == 0 ? setSelectIndex(1) : setSelectIndex(0);
  // };
  return (
    <View style={STYLES.splashView}>
      <StatusBar
        backgroundColor={GetAppColor.barGrey}
        barStyle="light-content"
        translucent={true}
      />
      <ImageBackground
        source={GetAppImage.iconSearch}
        style={STYLES.backgroundImage}
      >
        <View style={STYLES.splaceArea}>
          <View style={STYLES.splashHeader}>
            <View>
              <MadarecSplace
                width={AppUtil.getWP(40)}
                height={AppUtil.getWP(40)}
              />
            </View>
            <View style={STYLES.logoDetails}>
              <Text style={STYLES.logoText}>{Label.LogoTitle}</Text>
            </View>
            <View style={STYLES.innovationDetails}>
              <Text style={STYLES.innovationDetailsText}>
                <Bold>{Label.Innovation}</Bold> {Label.InnovationDetail}{" "}
                <Bold>{Label.NewWay}</Bold>
                {Label.Dot}
              </Text>
            </View>
          </View>
          <View style={STYLES.splashImageArea}>
            <SplaceImage width={AppUtil.getWP(80)} height={AppUtil.getHP(50)} />
          </View>
        </View>
      </ImageBackground>
      {/* <View style={STYLES.bottomMenu}>
        {selectIndex == 0 ? renderCollapseView() : null}
        <Text style={STYLES.content}>{Label.SelectLanguage}</Text>
        <TouchableOpacity onPress={toggleButton} style={STYLES.container}>
          <View style={STYLES.langIcon}>
            <GoogleIcon height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
          </View>

          <TextInput
            style={STYLES.selectText}
            keyboardAppearance={false}
            value={languageList[selectLanguage]}
            editable={false}
          />

          {selectIndex == 0 ? (
            <View style={STYLES.upArrowIcon}>
              <IcnUpArrow height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
            </View>
          ) : (
            <View style={STYLES.upArrowIcon}>
              <DownArrow height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
            </View>
          )}
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default memo(SplashScreen);
