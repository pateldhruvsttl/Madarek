import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import styles from './ExpertProfileStyle'
import { AppUtil } from '../../utils/AppUtil'
import FONTS from '../../utils/Fonts'

import IcnWatchDone from "../../assets/svg/IcnWatchDone"
import IcnThumsUp from "../../assets/svg/IcnThumsUp"
import IcnComment from "../../assets/svg/IcnComment"
import IcnBulb from "../../assets/svg/IcnBulb"

import IcnCall from "../../assets/svg/IcnCall"
import IcnBlockChain from "../../assets/svg/IcnBlockChain"
import IcnFacebook from "../../assets/svg/IcnFacebook"
import IcnTwitter from "../../assets/svg/IcnTwitter"
import IcnGoogle from "../../assets/svg/IcnGoogle"
import IcnWhatsapp from "../../assets/svg/IcnWhatsapp"
import IcnLinkedin from "../../assets/svg/IcnLinkedin"
import IcnShareIcon from "../../assets/svg/IcnShareIcon"
import IcnSimilarExperts from "../../assets/svg/IcnSimilarExperts"
import { Label } from '../../utils/StringUtil'
import ImageLoad from 'react-native-image-placeholder'
import WebViewComp from '../webview/WebViewComp'


function ExpertProfile(props) {

    const { themeColor } = useSelector((state) => state)
    const data = props.data
    let expertItemList = props?.data?.categoryInfo;

    const categoryDetail = typeof data?.categoryInfo !== 'string' ? data.categoryInfo : []

    const getCategories = () =>
        categoryDetail && categoryDetail.length !== 0 && categoryDetail.map((ele) => (
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txtBtn}>{ele.category_name}</Text>
            </TouchableOpacity>
        ))
    return (
        <View style={styles.MainView}>

            <View style={styles.FirstView}>

                <View style={styles.renderProfileView}>
                    <ImageLoad
                        style={styles.profilePicView}
                        placeholderStyle={styles.profilePicView}
                        resizeMode='cover'
                        source={{ uri: data.profilePic }}
                        borderRadius={AppUtil.getHP(20)}
                    />

                    <View style={[styles.expertIcnViewL, { backgroundColor: themeColor.buttonColor }]}>
                        <IcnBulb height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
                    </View>

                </View>
                <Text style={styles.txtNameView}>{data.name} </Text>
                {/* <Text style={styles.txtNameView}>{data.firstName} {data.lastName}</Text> */}
                <Text style={styles.txtSubNameView}>{data.job} {<Text style={{ fontFamily: FONTS.robotMedium, color: themeColor.buttonColor }}>{"48"}</Text>}</Text>

                <View style={styles.rowRightView}>
                    <View style={styles.secondInnerCalView}>
                        <IcnWatchDone style={styles.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={styles.title}>{data.see}</Text>
                    </View>
                    <View style={styles.secondInnerCalView}>
                        <IcnThumsUp style={styles.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={styles.title}>{data.like}</Text>
                    </View>
                    <View style={styles.secondInnerCalView}>
                        <IcnComment style={styles.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={styles.title}>{data.comment}</Text>
                    </View>
                </View>

                <View style={styles.socialIcnView}>
                    <TouchableOpacity style={styles.socialIcn}>
                        <IcnCall height={AppUtil.getHP(2.2)} width={AppUtil.getHP(2.2)} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.socialIcn}>
                        <IcnBlockChain height={AppUtil.getHP(2.2)} width={AppUtil.getHP(2.2)} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.socialIcn}>
                        <IcnFacebook height={AppUtil.getHP(2.2)} width={AppUtil.getHP(2.2)} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.socialIcn}>
                        <IcnTwitter height={AppUtil.getHP(2.2)} width={AppUtil.getHP(2.2)} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.socialIcn}>
                        <IcnGoogle height={AppUtil.getHP(2.2)} width={AppUtil.getHP(2.2)} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.socialIcn}>
                        <IcnWhatsapp height={AppUtil.getHP(2.2)} width={AppUtil.getHP(2.2)} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.socialIcn}>
                        <IcnLinkedin height={AppUtil.getHP(2.2)} width={AppUtil.getHP(2.2)} />
                    </TouchableOpacity>


                </View>
                {
                    <View style={styles.scrollSubView}>
                        {getCategories()}
                    </View>
                }

                <TouchableOpacity style={[styles.btnConnect, { borderColor: themeColor.buttonColor }]}>
                    <IcnSimilarExperts fill={themeColor.buttonColor} style={styles.callIcn} height={AppUtil.getHP(3.2)} width={AppUtil.getHP(3.2)} />
                    <Text style={[styles.txtBtnInner, { color: themeColor.buttonColor }]}>{Label.YouAreConnected}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.aboutView}>
                <Text style={[styles.txtAbout, { color: themeColor.buttonColor }]}>{Label.About}</Text>
                {/* <Text style={styles.txtAboutDes}>{data.About}</Text> */}
                <WebViewComp data={data.About} />
            </View>

        </View>
    )
}

export default memo(ExpertProfile);