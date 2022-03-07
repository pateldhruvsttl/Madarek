import React, { memo, useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./FavouriteCategoriesStyle";
import { Label } from '../../utils/StringUtil'

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { GetAppColor } from "../../utils/Colors";
import { AppUtil } from "../../utils/AppUtil";

import IcnInformationTechnology from "../../assets/svg/IcnInformationTechnology"
import IcnAviation from "../../assets/svg/IcnAviation"
import IcnAgricultureFisheriesy from "../../assets/svg/IcnAgricultureFisheriesy"

import IcnHealth from "../../assets/svg/IcnHealth"
import IcnEducation from "../../assets/svg/IcnEducation"
import IcnConstructionInfrastructure from "../../assets/svg/IcnConstructionInfrastructure"


const FavouriteCategories = ({ Entries }) => {

    return (
        <View style={styles.MainView}>
            <View style={styles.titleView}>
                <Text style={styles.txtTitle}>{Label.favouriteCategories}</Text>
                <Text style={styles.txtSeeMore}> {Label.viewAll}</Text>
            </View>

            <View style={styles.innerView1}>
                <TouchableOpacity style={styles.btnView}>
                    <IcnInformationTechnology height={AppUtil.getHP(3.6)} width={AppUtil.getHP(3.6)} />
                    <Text style={styles.txtBtn}>{Label.informationTechnology}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnView}>
                    <IcnAviation height={AppUtil.getHP(3.6)} width={AppUtil.getHP(3.6)} />
                    <Text style={styles.txtBtn}>{Label.aviation}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnView}>
                    <IcnAgricultureFisheriesy height={AppUtil.getHP(3.6)} width={AppUtil.getHP(3.6)} />
                    <Text style={styles.txtBtn}>{Label.agricultureFisheriesy}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.innerView2}>
                <TouchableOpacity style={styles.btnView}>
                    <IcnHealth height={AppUtil.getHP(3.6)} width={AppUtil.getHP(3.6)} />
                    <Text style={styles.txtBtn} >{Label.health}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnView}>
                    <IcnEducation height={AppUtil.getHP(3.6)} width={AppUtil.getHP(3.6)} />
                    <Text style={styles.txtBtn}>{Label.education}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnView}>
                    <IcnConstructionInfrastructure height={AppUtil.getHP(3.6)} width={AppUtil.getHP(3.6)} />
                    <Text style={styles.txtBtn}>{Label.constructionInfrastructure}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default memo(FavouriteCategories);





