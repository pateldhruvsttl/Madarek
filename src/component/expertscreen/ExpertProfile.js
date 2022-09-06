import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import React, { memo, useState } from 'react'
import { useSelector } from 'react-redux'

import styles from './ExpertProfileStyle'
import { AppUtil } from '../../utils/AppUtil'
import FONTS from '../../utils/Fonts'

import IcnWatchDone from "../../assets/svg/IcnWatchDone"
import IcnThumsUp from "../../assets/svg/IcnThumsUp"
import IcnThumsUpBlack from "../../assets/svg/IcnThumsUpBlack"
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
import { onShare } from '../share/ShareContent'
import IcnLikeRed from "../../assets/svg/IcnLikeRed"
import IcnLikeblack from "../../assets/svg/IcnLikeblack"
import { GetAppColor } from '../../utils/Colors'


function ExpertProfile(props) {

    const { themeColor } = useSelector((state) => state)
    const data = props.data
    const [totalLike, setTotalLike] = useState(props?.data?.totalLike);
    const [isJoinRequest, setJoinRequest] = useState(props?.data?.joinRequest);
    const categoryDetail = typeof data?.categories !== 'string' ? data.categories : []

    const getCategories = () =>
        categoryDetail && categoryDetail.length !== 0 && categoryDetail.map((ele) => (
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txtBtn}>{ele.category_name}</Text>
            </TouchableOpacity>
        ))

    const openUrlRender = async (url) => {
        const isSupported = await Linking.canOpenURL(url);
        if (isSupported) {
            await Linking.openURL(url)
        } else {
            return Linking.openURL(url);
        }
    }
    return (
        <View style={styles.MainView}>

            <View style={styles.FirstView}>

                <View style={styles.renderProfileView}>
                    <ImageLoad
                        style={styles.profilePicView}
                        placeholderStyle={styles.profilePicView}
                        resizeMode='cover'
                        source={{ uri: data.userPhoto }}
                        borderRadius={AppUtil.getHP(20)}
                    />

                    {
                        data.madarekSpecial == 1 &&
                        <View style={[styles.expertIcnViewL, { backgroundColor: themeColor.buttonColor }]}>
                            <IcnBulb height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} fill={GetAppColor.white} />
                        </View>
                    }

                </View>
                <Text style={styles.txtNameView}>{data.fullName} </Text>
                {/* <Text style={styles.txtNameView}>{data.firstName} {data.lastName}</Text> */}
                <Text style={styles.txtSubNameView}>{`${data.jobTitle}, ${data.organizationName}`}
                    {/* {<Text style={{ fontFamily: FONTS.robotMedium, color: themeColor.buttonColor }}>{"48"}</Text>} */}
                </Text>

                <View style={styles.rowRightView}>
                    <View style={styles.secondInnerCalView}>
                        <IcnWatchDone style={styles.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={styles.title}>{data.totalView}</Text>
                    </View>

                    <View style={styles.secondInnerCalView}>
                        {
                            data?.like == true ?

                                <TouchableOpacity onPress={() => props.onLikeIdeas(data.id)}>
                                    <IcnThumsUpBlack style={styles.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => props.onLikeIdeas(data.id)}>
                                    <IcnThumsUp style={styles.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                                </TouchableOpacity>
                        }
                        {/* <IcnThumsUp style={styles.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} /> */}
                        <Text style={styles.title}>{totalLike || data.totalLike}</Text>
                    </View>
                    <View style={styles.secondInnerCalView}>
                        <IcnComment style={styles.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={styles.title}>{data.totalComment}</Text>
                    </View>
                </View>

                <View style={styles.socialIcnView}>
                    {
                        data.callLink ?
                            <TouchableOpacity style={styles.socialIcn} onPress={() => openUrlRender(data.callLink)}>
                                <IcnCall height={AppUtil.getHP(2.2)} width={AppUtil.getHP(2.2)} />
                            </TouchableOpacity> : null
                    }
                    {
                        data.blockChainLink ?
                            <TouchableOpacity style={styles.socialIcn} onPress={() => openUrlRender(data.blockChainLink)}>
                                <IcnBlockChain height={AppUtil.getHP(2.2)} width={AppUtil.getHP(2.2)} />
                            </TouchableOpacity> : null
                    }
                    {
                        data.facebookLink ?
                            <TouchableOpacity style={styles.socialIcn} onPress={() => openUrlRender(data.facebookLink)}>
                                <IcnFacebook height={AppUtil.getHP(2.2)} width={AppUtil.getHP(2.2)} />
                            </TouchableOpacity> : null
                    }
                    {
                        data.twitterLink ?
                            <TouchableOpacity style={styles.socialIcn} onPress={() => openUrlRender(data.twitterLink)}>
                                <IcnTwitter height={AppUtil.getHP(2.2)} width={AppUtil.getHP(2.2)} />
                            </TouchableOpacity> : null
                    }
                    {
                        data.googleLink ?
                            <TouchableOpacity style={styles.socialIcn} onPress={() => openUrlRender(data.googleLink)}>
                                <IcnGoogle height={AppUtil.getHP(2.2)} width={AppUtil.getHP(2.2)} />
                            </TouchableOpacity> : null
                    }
                    {
                        data.whatsappLink ?
                            <TouchableOpacity style={styles.socialIcn} onPress={() => openUrlRender(data.whatsappLink)}>
                                <IcnWhatsapp height={AppUtil.getHP(2.2)} width={AppUtil.getHP(2.2)} />
                            </TouchableOpacity> : null
                    }
                    {
                        data.linkdinLink ?
                            <TouchableOpacity style={styles.socialIcn} onPress={() => openUrlRender(data.linkdinLink)}>
                                <IcnLinkedin height={AppUtil.getHP(2.2)} width={AppUtil.getHP(2.2)} />
                            </TouchableOpacity> : null
                    }
                </View>
                {
                    <View style={styles.scrollSubView}>
                        {getCategories()}
                    </View>
                }
                <View style={styles.expertBtn}>
                    <TouchableOpacity style={styles.followBtn} onPress={() => props.onFavoriteIdeas(data.id)}>
                        {data.favorite ?
                            <IcnLikeRed height={AppUtil.getHP(3.2)} width={AppUtil.getHP(3.2)} />
                            :
                            <IcnLikeblack height={AppUtil.getHP(3.2)} width={AppUtil.getHP(3.2)} />
                        }
                        <Text style={styles.followBtnTitle}>{Label.Follow}</Text>
                    </TouchableOpacity>
                    {
                        data.joinRequest == "Request Done" ?
                            <TouchableOpacity style={[styles.btnConnect, { borderColor: themeColor.buttonColor }]} disabled>
                                <IcnSimilarExperts fill={themeColor.buttonColor} style={styles.callIcn} height={AppUtil.getHP(3.2)} width={AppUtil.getHP(3.2)} />
                                <Text style={[styles.txtBtnInner, { color: themeColor.buttonColor }]}>{Label.RequestDone}</Text>
                            </TouchableOpacity>
                            :
                            data.joinRequest == "Accepted" ?
                                <TouchableOpacity style={[styles.btnConnect, { borderColor: themeColor.buttonColor }]} disabled>
                                    <IcnSimilarExperts fill={themeColor.buttonColor} style={styles.callIcn} height={AppUtil.getHP(3.2)} width={AppUtil.getHP(3.2)} />
                                    <Text style={[styles.txtBtnInner, { color: themeColor.buttonColor }]}>{Label.YouAreConnected}</Text>
                                </TouchableOpacity>
                                :
                                data.joinRequest == "Rejected" ?
                                    <TouchableOpacity style={[styles.btnConnect, { borderColor: themeColor.buttonColor }]} disabled>
                                        <IcnSimilarExperts fill={themeColor.buttonColor} style={styles.callIcn} height={AppUtil.getHP(3.2)} width={AppUtil.getHP(3.2)} />
                                        <Text style={[styles.txtBtnInner, { color: themeColor.buttonColor }]}>{Label.RequestRejected}</Text>
                                    </TouchableOpacity>
                                    :
                                    data.joinRequest == "Connect" ?
                                        <TouchableOpacity style={[styles.btnConnectPending, { borderColor: themeColor.buttonColor }]} onPress={() => props.joinExpert(data.id)}>
                                            <Text style={[styles.txtBtnInner, { color: themeColor.buttonColor }]}>{Label.Connect}</Text>
                                        </TouchableOpacity>
                                        : null

                    }
                </View>
            </View>

            {
                data.aboutExpert && <View style={styles.aboutView}>
                    <Text style={[styles.txtAbout, { color: themeColor.buttonColor }]}>{Label.About}</Text>
                    <Text style={styles.txtAboutDes}>{data.aboutExpert}</Text>
                    {/* <WebViewComp data={data.expertiseBrief} /> */}
                </View>
            }
            {
                data.skill &&
                <View style={styles.aboutView}>
                    <Text style={[styles.txtAbout, { color: themeColor.buttonColor }]}>{Label.Skill}</Text>
                    <Text style={styles.txtAboutDes}>{data.skill}</Text>
                </View>
            }
            {
                data.expertiseBrief &&
                <View style={styles.aboutView}>
                    <Text style={[styles.txtAbout, { color: themeColor.buttonColor }]}>{Label.ExpertiseBrief}</Text>
                    <WebViewComp data={data.expertiseBrief} />
                </View>
            }

        </View>
    )
}

export default memo(ExpertProfile);