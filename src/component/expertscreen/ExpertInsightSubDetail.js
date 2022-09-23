import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import STYLE from "../../screen/expertInsightDetailWithComment/ExpertInsightTypeStyle"
import { Label } from '../../utils/StringUtil'
import WebViewComp from '../webview/WebViewComp'
import IcnThumsUpBlack from '../../assets/svg/IcnThumsUpBlack'
import IcnThumsUp from '../../assets/svg/IcnThumsUp'
import IcnComment from '../../assets/svg/IcnComment'
import IcnClander from '../../assets/svg/IcnClander'
import moment from 'moment'
import { AppUtil } from '../../utils/AppUtil'
import ImageLoad from 'react-native-image-placeholder'
import { UserManager } from '../../manager/UserManager'
import { Service } from '../../service/Service'
import { EndPoints } from '../../service/EndPoints'
import { Loger } from '../../utils/Loger'

const ExpertInsightSubDetail = (props) => {

    const { sectorName, categoryName, publishBy, spotlightCreateDate, ideaTitle, ideaDescription,
        insightTitle, ideaCreatedDate, id, totalComment, insightDescription, profilePhoto } = props.detail

    const [totalLike, setTotalLike] = useState(props.detail.totalLike)

    const onIdealike = (id) => {
        var data = {
            "field_name": "formdata_id",
            "id": id,
            "frontuser_id": UserManager.userId,
            "model": "LikedislikeGeneral"
        }
        Service.post(EndPoints.ideaLikeUnlike, data, (res) => {
            const likeDislike = res?.data === 'dislike' ? 1 : 0;
            if (likeDislike == 1) {
                props.detail.like = likeDislike
                props.detail.totalLike = Number(props.detail.totalLike) + 1
                setTotalLike(props.detail.totalLike)
            }
            else {
                props.detail.like = likeDislike
                props.detail.totalLike = Number(props.detail.totalLike) - 1
                setTotalLike(props.detail.totalLike)
            }

        }, (err) => {
            Loger.onLog("err of likeUnlike", err)
        })
    }

    return (
        <>
            <View style={STYLE.mainView}>
                <View style={STYLE.calViewOne}>
                    <View style={STYLE.sector}>
                        <Text style={STYLE.title}>{Label.Sector}</Text>
                        <Text numberOfLines={1} style={STYLE.subTitle}>{sectorName}</Text>
                    </View>
                    <View style={STYLE.category}>
                        <Text style={STYLE.title}>{Label.Category}</Text>
                        <Text numberOfLines={1} style={STYLE.subTitle}>{categoryName}</Text>
                    </View>
                </View>
                <View style={STYLE.calViewTwo}>
                    <View style={STYLE.sector}>
                        <Text style={STYLE.title}>{Label.Publishby}</Text>
                        <Text numberOfLines={1} style={STYLE.subTitle}>{publishBy}</Text>
                    </View>
                    <View style={STYLE.category}>
                        <Text style={STYLE.title}>{Label.PublishDate}</Text>
                        <Text numberOfLines={1} style={STYLE.subTitle}>{spotlightCreateDate}</Text>
                    </View>
                </View>
                <View style={STYLE.headings}>
                    <Text style={STYLE.labelOne}>{ideaTitle}</Text>
                    <WebViewComp data={ideaDescription} />
                </View>
            </View>
            <View style={STYLE.imgCopyStyle}>
                <ImageLoad style={STYLE.imgcopy}
                    resizeMode='cover'
                    source={{ uri: profilePhoto }}
                    borderRadius={AppUtil.getHP(1)}
                />
            </View>
            <View style={STYLE.detailView}>
                <View style={{ marginBottom: AppUtil.getHP(1) }}>
                    <Text style={STYLE.labelSecond}>{insightTitle}</Text>
                    <View style={STYLE.dateCover}>
                        <IcnClander height={AppUtil.getHP(1.8)} width={AppUtil.getHP(1.8)} />
                        <Text style={STYLE.dateAuthor}>{moment(ideaCreatedDate).format("YYYY-MM-DD")}</Text>
                    </View>
                </View>
                <View style={STYLE.iconContainer}>
                    {
                        props.detail.like == true ?
                            <TouchableOpacity
                                onPress={() => onIdealike(id)}>
                                <IcnThumsUpBlack style={STYLE.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => onIdealike(id)}>
                                <IcnThumsUp style={STYLE.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                            </TouchableOpacity>
                    }
                    <Text style={STYLE.title}>{totalLike ? totalLike : props.detail.totalLike}</Text>
                    <View style={STYLE.commentBox}>
                        <TouchableOpacity onPress={() => props.navigateToComment({ model: 'GeneralComments', fieldName: 'formdata_id', id: id })}>
                            <IcnComment style={STYLE.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        </TouchableOpacity>
                        <Text style={STYLE.title}>{totalComment}</Text>
                    </View>
                </View>
                <View style={STYLE.description}>
                    <View style={STYLE.contentBox}>
                        <Text style={STYLE.heading}>{Label.SpotlightDescription}</Text>
                        <View style={STYLE.line}></View>
                        <WebViewComp data={insightDescription} />
                    </View>
                </View>
            </View>
        </>
    )
}

export default ExpertInsightSubDetail