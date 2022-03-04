import React, { useState, memo } from "react";
import { View, Text, ImageBackground, StatusBar, SafeAreaView } from "react-native";
import SplaceImage from "../../assets/svg/splaceIcons/SplaceImage";
import MadarecSplace from "../../assets/svg/splaceIcons/MadarecSplace";
import STYLES from "./SplashStyle";
import { GetAppColor } from "../../utils/Colors";
import { Label } from "../../utils/StringUtil";
import { GetAppImage } from "../../utils/Assets";
import { AppUtil } from "../../utils/AppUtil";

const SplashScreen = () => {
    const Bold = ({ children }) => <Text style={{ fontWeight: 'bold' }}>{children}</Text>
    return (
        <View style={{ flex: 1, width: '100%' }}>
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
                            <Text style={STYLES.innovationDetailsText}><Bold>{Label.Innovation}</Bold>
                                {Label.InnovationDetail} <Bold>{Label.NewWay}</Bold></Text>
                        </View>
                    </View>
                    <View style={STYLES.splashImageArea}>
                        <SplaceImage width={AppUtil.getWP(80)} height={AppUtil.getHP(50)} />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );

}

export default memo(SplashScreen);


