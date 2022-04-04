import React, { useState, memo } from "react";
import { View, Text, ImageBackground, StatusBar, TouchableOpacity, ScrollView } from "react-native";
import SplaceImage from "../../assets/svg/splaceIcons/SplaceImage";
import MadarecSplace from "../../assets/svg/splaceIcons/MadarecSplace";
import STYLES from "./SplashStyle";
import { GetAppColor } from "../../utils/Colors";
import { Label } from "../../utils/StringUtil";
import { GetAppImage } from "../../utils/Assets";
import { AppUtil } from "../../utils/AppUtil";
import DownArrow from "../../assets/svg/DownArrow";
import IcnUpArrow from "../../assets/svg/drawerIcon/IcnUpArrow";
import { TextInput } from "react-native-gesture-handler";
import GoogleIcon from "../../assets/svg/loginLogo/GoogleIcon";


const SplashScreen = (props) => {

    const [selectLanguage, setselectLanguage] = useState(1);
    const [selectIndex, setSelectIndex] = useState(1)

    // setTimeout(() => {
    //     props.navigation.navigate("LoginScreen")
    // }, 2500);

    const languageList = [Label.English, Label.Arabic]
    const Bold = ({ children }) => <Text style={{ fontWeight: 'bold' }}>{children}</Text>
    const renderCollapseView = () => {
        return (
            <View style={STYLES.dropDown}>
                {
                    languageList.map((lang, index) => (

                        <TouchableOpacity style={[STYLES.selections,]} onPress={() => { setselectLanguage(index); setSelectIndex(1) }}>

                            <Text style={[STYLES.itemPicker, { color: selectLanguage === index && 'rgba(0,0,0,0.3)' }]}>{lang}</Text>
                        </TouchableOpacity>
                    ))
                }

            </View>
        )
    }
    const toggleButton = () => {
        selectIndex == 0 ? setSelectIndex(1) : setSelectIndex(0)
    }
    return (
        <View style={STYLES.splashView}>
            <StatusBar backgroundColor={GetAppColor.barGrey} barStyle="light-content" translucent={true} />
            <ImageBackground source={GetAppImage.iconSearch} style={STYLES.backgroundImage}>
                <View style={STYLES.splaceArea}>

                    <View style={STYLES.splashHeader}>
                        <View>
                            <MadarecSplace width={AppUtil.getWP(40)} height={AppUtil.getWP(40)} />
                        </View>
                        <View style={STYLES.logoDetails}>
                            <Text style={STYLES.logoText}>{Label.LogoTitle}</Text>
                        </View>
                        <View style={STYLES.innovationDetails}>
                            <Text style={STYLES.innovationDetailsText}><Bold>{Label.Innovation}</Bold> {Label.InnovationDetail} <Bold>{Label.NewWay}</Bold>{Label.Dot}</Text>
                        </View>
                    </View>
                    <View style={STYLES.splashImageArea}>
                        <SplaceImage width={AppUtil.getWP(80)} height={AppUtil.getHP(50)} />
                    </View>

                </View>
            </ImageBackground>
            <View style={STYLES.bottomMenu}>
                {
                    selectIndex == 0 ? renderCollapseView() : null
                }
                <Text style={STYLES.content}>{Label.SelectLanguage}</Text>
                <TouchableOpacity onPress={toggleButton} style={STYLES.container}>

                    <View style={STYLES.langIcon}>
                        <GoogleIcon height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
                    </View>

                    <TextInput
                        placeholder={Label.English}
                        style={STYLES.selectText}
                        placeholderTextColor={GetAppColor.pincolor}
                        keyboardAppearance={false}
                        value={languageList[selectLanguage]}
                        editable={false}

                    />

                    {
                        selectIndex == 0 ?
                            <View style={STYLES.upArrowIcon}>
                                <IcnUpArrow height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
                            </View>
                            :
                            <View style={STYLES.upArrowIcon}>
                                <DownArrow height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
                            </View>
                    }


                </TouchableOpacity>

            </View>
        </View>
    );

}

export default memo(SplashScreen);


