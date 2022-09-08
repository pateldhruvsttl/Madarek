import { View, Text, TouchableOpacity, } from "react-native";
import React, { useState, useEffect } from "react";
import Style from "./IdeaContentStyle";
import { Label } from "../../utils/StringUtil";
import IcnClander from "../../assets/svg/IcnClander";
import { AppUtil } from "../../utils/AppUtil";
import IcnAvtarBg from "../../assets/svg/IcnAvtarBg";
import IcnTrophy from "../../assets/svg/IcnTrophy";
import IcnStar from "../../assets/svg/IcnStar";
import IcnRewordComment from "../../assets/svg/IcnRewordComment";
import IcnRewordLight from "../../assets/svg/IcnRewordLight";
import IcnWatchDone from "../../assets/svg/IcnWatchDone";
import IcnThumsUp from "../../assets/svg/IcnThumsUp";
import IcnThumsUpBlack from "../../assets/svg/IcnThumsUpBlack";
import IcnComment from "../../assets/svg/IcnComment";
import { GetAppColor } from "../../utils/Colors";
import { useSelector } from "react-redux";
import IcnLikeblack from "../../assets/svg/IcnLikeblack";
import IcnBlockChain from "../../assets/svg/IcnBlockChain";
import IcnShareIcon from "../../assets/svg/IcnShareIcon";
import Heart from "../../assets/svg/Heart";
import IcnLikeRed from "../../assets/svg/IcnLikeRed";
import IcnTimer from "../../assets/svg/IcnTimer";
import { UserManager } from "../../manager/UserManager";
import { Service } from "../../service/Service";
import { EndPoints } from "../../service/EndPoints";
import { Loger } from "../../utils/Loger";
import WebViewComp from "../webview/WebViewComp";
import moment from "moment";
import { onShare } from "../share/ShareContent";

const IdeaContent = (props) => {

    const [isFavorite, setFavorite] = useState()
    const [totalLike, setTotalLike] = useState(props?.data?.totalLike)
    const { themeColor } = useSelector((state) => state);
    const iconSize = AppUtil.getHP(1.8);

    useEffect(() => {
        setFavorite(props.isType == "ChallengeDetail" ? props.data.totalFavoriteContest : props.data.favorite)
    }, [props.data])

    const navigateToComment = (id) => {
        if (props?.isType == "ChallengeDetail") {
            props.navigateToComment({ model: 'ContestComments', fieldName: 'contest_id', id: id })
        }
        else if (props?.isType == "ExpertWithComment") {
            props.navigateToComment({ model: 'ExpertComments', fieldName: 'expert_id', id: id })
        }
        else {
            props.navigateToComment({ model: 'IdeaComments', fieldName: 'idea_id', id: id })
        }
    }

    const onIdeaFavorite = (id) => {
        var data = {
            "field_name": "idea_id",
            "id": id,
            "frontuser_id": UserManager.userId,
            "model": 'FavoriteIdeas'
        }
        Service.post(EndPoints.ideaLikeUnlike, data, (res) => {

            const likeDislike = res?.data === 'dislike' ? true : false;
            setFavorite(likeDislike)

        }, (err) => {
            Loger.onLog("err of likeUnlike", err)
        })
    }

    const onIdealike = (id, field, model) => {
        var data = {
            "field_name": field,
            "id": id,
            "frontuser_id": UserManager.userId,
            "model": model
        }
        Service.post(EndPoints.ideaLikeUnlike, data, (res) => {
            const likeDislike = res?.data === 'dislike' ? 1 : 0;
            if (likeDislike == 1) {
                props.data.like = likeDislike
                props.data.totalLike = Number(props.data.totalLike) + 1
                setTotalLike(props.data.totalLike)
            }
            else {
                props.data.like = likeDislike
                props.data.totalLike = Number(props.data.totalLike) - 1
                setTotalLike(props.data.totalLike)
            }

        }, (err) => {
            Loger.onLog("err of likeUnlike", err)
        })
    }

    const onChallengeFavorite = (id) => {

        var data = {
            "field_name": "contest_id",
            "id": id,
            "frontuser_id": UserManager.userId,
            "model": "FavoriteContests"
        }

        Service.post(EndPoints.challengeLikeUnlike, data, (res) => {
            const likeDislike = res?.data === 'dislike' ? true : false;
            setFavorite(likeDislike);

        }, (err) => {
            Loger.onLog("err of likeUnlike", err)
        })
    }

    const Bold = ({ children }) => (
        <Text
            style={{
                color:
                    props.isType == "ChallengeDetail"
                        ? themeColor.headerColor
                        : GetAppColor.acedemyRedtitle,
            }}
        >
            {children}
        </Text>
    );

    return (
        <View
            style={[
                Style.headerAcademyContainer,
                {
                    backgroundColor: props.isType == "ChallengeDetail" ? GetAppColor.white : GetAppColor.lightGrey,
                },
            ]}
        >

            <View style={Style.headerAcademyTitle}>
                <Text
                    style={[Style.academyTitle,
                    {
                        color: props.isType == "ChallengeDetail" ? themeColor.headerColor : GetAppColor.acedemyRedtitle,
                    },
                    ]}
                >
                    {props.isType == "ChallengeDetail" ? props?.data?.contestTitle : props?.data?.ideaTitle}
                </Text>
            </View>

            {
                props.isType == 'ChallengeDetail' ?
                    <View style={Style.dateContentChallenge}>
                        <View style={Style.dateSubContain}>
                            <IcnClander height={iconSize} width={iconSize} />
                            <Text numberOfLines={1} style={Style.contentTitle}>{props.data?.contestDate}</Text>
                        </View>
                        <TouchableOpacity style={[Style.openBtn, { backgroundColor: props.data?.submissionStatus === "COMING SOON" ? GetAppColor.buttonGreenColor : GetAppColor.rejected }]}>
                            <Text numberOfLines={1} style={[Style.openBtnTitle, { color: GetAppColor.white }]}>{props.data?.submissionStatus}</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    props.isType == 'ExpertInsightDetailWithComment' ?
                        <View style={Style.dateContentIdea}>
                            <IcnClander height={iconSize} width={iconSize} />
                            <Text style={Style.contentTitle}>{props.data?.spotlightCreateDate}</Text>
                            <View style={Style.profileArea}>
                                <IcnAvtarBg height={iconSize} width={iconSize} />
                                <Text numberOfLines={1} style={Style.contentTitle}>{props.data?.publishBy}</Text>
                            </View>
                        </View>
                        :
                        <View style={Style.dateContentIdea}>
                            <IcnClander height={iconSize} width={iconSize} />
                            <Text style={Style.contentTitle}>{moment(props.data.createDate).format("DD MMM YYYY")}</Text>
                            <View style={Style.profileArea}>
                                <IcnAvtarBg height={iconSize} width={iconSize} />
                                <Text numberOfLines={1} style={Style.otherSpace}>{props.data?.firstName} {props.data?.lastName}</Text>
                            </View>
                        </View>
            }

            {
                props.isType == 'ChallengeDetail' ?
                    <View style={Style.sectorCategoryArea}>
                        <Text style={Style.contentTitleSecond}>{Label.Sector}  <Bold>{props.data?.sector}</Bold></Text>
                        <Text style={Style.contentTitleSecond}>{Label.Category}  <Bold>{props.data?.categoryName}</Bold> </Text>
                    </View>
                    :
                    <View style={Style.sectorCategoryArea}>
                        <Text style={Style.contentTitleSecond}>{Label.Sector}  <Bold>{props.data?.sectorName}</Bold></Text>
                        <Text style={Style.contentTitleSecond}>{Label.Category}  <Bold>{props.data?.categoryName}</Bold> </Text>
                        {props.data?.sub_category_name && <Text style={Style.contentTitleSecond}>{Label.SubCategory}  <Bold>{props.data?.sub_category_name}</Bold> </Text>}
                    </View>

            }

            <View style={Style.performanceContainer}>
                {props.isExpert ? null : (
                    <View style={Style.winningIcnContainerLeft}>

                        {props.data.trophy ? <IcnTrophy
                            isType={props.isType}
                            style={Style.winningIcn}
                            height={iconSize}
                            width={iconSize}
                        /> : null}
                        {props.data.starred ? <IcnStar
                            isType={props.isType}
                            style={Style.winningIcn}
                            height={iconSize}
                            width={iconSize}
                        /> : null}
                        {props.data.topRate ? <IcnRewordComment
                            isType={props.isType}
                            style={Style.winningIcn}
                            height={iconSize}
                            width={iconSize}
                        /> : null}
                        {props.data.insight ? <IcnRewordLight
                            isType={props.isType}
                            style={Style.winningIcn}
                            height={iconSize}
                            width={iconSize}
                        /> : null}
                    </View>
                )}

                <View style={Style.winningIcnContainerRight}>
                    {/* <View style={Style.secondInnerCalView}>
                        <IcnWatchDone height={iconSize} width={iconSize} />
                        <Text style={[Style.contentTitleSecond, Style.spacetoLeft]}>
                            {props.data?.toatal_view_contest}
                        </Text>
                    </View> */}
                    {props.isType != 'ExpertInsightDetailWithComment' &&
                        <View style={Style.secondInnerCalView}>
                            <IcnWatchDone height={iconSize} width={iconSize} />
                            <Text style={[Style.contentTitleSecond, Style.spacetoLeft]}>
                                {props.data?.totalView}
                            </Text>
                        </View>
                    }

                    <View style={Style.secondInnerCalView}>
                        {
                            props?.data?.like == true ?

                                <TouchableOpacity onPress={() => props.isType == 'ChallengeDetail' ? onIdealike(props.id, "contest_id", "LikedislikeContests") : onIdealike(props.data.id, "idea_id", "LikedislikeIdeas")}>
                                    <IcnThumsUpBlack height={iconSize} width={iconSize} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => props.isType == 'ChallengeDetail' ? onIdealike(props.id, "contest_id", "LikedislikeContests") : onIdealike(props.data.id, "idea_id", "LikedislikeIdeas")}>
                                    <IcnThumsUp height={iconSize} width={iconSize} />
                                </TouchableOpacity>
                        }

                        <Text style={[Style.contentTitleSecond, Style.spacetoLeft]}>
                            {totalLike || props.data.totalLike}
                        </Text>
                    </View>

                    <View style={Style.secondInnerCalView}>
                        <TouchableOpacity onPress={() => navigateToComment(props.id)}>
                            <IcnComment height={iconSize} width={iconSize} />
                        </TouchableOpacity>
                        <Text style={[Style.contentTitleSecond, Style.spacetoLeft]}>
                            {props.data?.totalComment}
                        </Text>
                    </View>
                    {props.isMyIdeaDetail ? (
                        <View style={Style.secondInnerCalViewOne}>
                            <Heart height={iconSize} width={iconSize} />
                            <Text style={[Style.contentTitleSecond, Style.spacetoLeft]}>
                                {props.data?.comment}
                            </Text>
                        </View>
                    ) : null}
                </View>
            </View>

            {props.isExpert ? <View style={Style.line} /> : (
                <View style={Style.btnArea}>
                    {props.isType == "ChallengeDetail" ? (
                        <>
                            <View style={Style.leftSide}>
                                <TouchableOpacity style={[Style.followBtn]} onPress={() => onChallengeFavorite(props?.id)}>
                                    {isFavorite ?
                                        <IcnLikeRed height={AppUtil.getHP(3.2)} width={AppUtil.getHP(3.2)} />
                                        :
                                        <IcnLikeblack height={AppUtil.getHP(3.2)} width={AppUtil.getHP(3.2)} />

                                    }
                                    <Text style={[Style.followBtnTitle]}>{Label.Follow}</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={Style.rightSide}>
                                {/* <TouchableOpacity style={Style.likeBtn}>
                                    <IcnBlockChain
                                        height={AppUtil.getHP(3.2)}
                                        width={AppUtil.getHP(3.2)}
                                    />
                                </TouchableOpacity> */}
                                <TouchableOpacity style={Style.likeBtn} onPress={() => onShare(`contest-detail/${props.id}`)}>
                                    <IcnShareIcon
                                        height={AppUtil.getHP(3.2)}
                                        width={AppUtil.getHP(3.2)}
                                        stroke={"#848484"}
                                    />
                                </TouchableOpacity>
                            </View>
                        </>
                    ) : (
                        <>
                            {/* <View style={Style.leftSide}>
                                <TouchableOpacity style={[Style.votingBtn, { backgroundColor: themeColor.buttonColor },]} >
                                    <Text style={[Style.voteNowBtnTitle, { color: themeColor.buttonFontColor },]}>
                                        {props.isMyIdeaDetail ? Label.Maturation : Label.VoteNow}
                                    </Text>
                                </TouchableOpacity>
                            </View> */}

                            <View style={Style.rightSide}>
                                {isFavorite ?
                                    (
                                        <TouchableOpacity style={Style.likeBtn} onPress={() => onIdeaFavorite(props.data.id)}>
                                            <IcnLikeRed height={AppUtil.getHP(3.2)} width={AppUtil.getHP(3.2)} />
                                        </TouchableOpacity>
                                    )
                                    :
                                    (

                                        <TouchableOpacity style={Style.likeBtn} onPress={() => onIdeaFavorite(props.data.id)}>
                                            <IcnLikeblack height={AppUtil.getHP(3.2)} width={AppUtil.getHP(3.2)} />
                                        </TouchableOpacity>

                                    )}

                                {/* <TouchableOpacity style={Style.likeBtn}>
                                    <IcnBlockChain height={AppUtil.getHP(3.2)} width={AppUtil.getHP(3.2)} />
                                </TouchableOpacity> */}

                                <TouchableOpacity style={Style.likeBtn} onPress={() => onShare(`idea-details/${props.id}`)}>
                                    <IcnShareIcon height={AppUtil.getHP(3.2)} width={AppUtil.getHP(3.2)} stroke={GetAppColor.grayBorder} />
                                </TouchableOpacity>
                            </View>
                        </>
                    )}
                </View>
            )
            }
            {
                props.isType == "ChallengeDetail" &&
                <View style={Style.contentBoxChallenge} >
                    <Text style={Style.heading}>{Label.Description}</Text>
                    <WebViewComp data={props.data.contestDescription} />
                    <Text style={Style.termsAndConTitle}>
                        {Label.TermsAndCondition}
                    </Text>
                </View>
            }
        </View >
    );
};

export default IdeaContent;
