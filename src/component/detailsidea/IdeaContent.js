import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
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
import IcnComment from "../../assets/svg/IcnComment";
import { GetAppColor } from "../../utils/Colors";
import { useSelector } from "react-redux";
import IcnLikeblack from "../../assets/svg/IcnLikeblack";
import IcnBlockChain from "../../assets/svg/IcnBlockChain";
import IcnShareIcon from "../../assets/svg/IcnShareIcon";
import Heart from "../../assets/svg/Heart";
import IcnTimer from "../../assets/svg/IcnTimer";

const IdeaContent = (props) => {
    const { themeColor } = useSelector((state) => state);
    const iconSize = AppUtil.getHP(1.8);

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
                    style={[ Style.academyTitle,
                        {
                            color: props.isType == "ChallengeDetail" ? themeColor.headerColor : GetAppColor.acedemyRedtitle,
                        },
                    ]}
                >
                    {props.data.title}
                </Text>
            </View>

            {
                props.isType == 'ChallengeDetail' ?
                    <View style={Style.dateContentChallenge}>
                        <View style={Style.dateSubContain}>
                            <IcnClander height={iconSize} width={iconSize} />
                            <Text style={Style.contentTitle}>{props.data.date}</Text>
                        </View>
                        <TouchableOpacity style={Style.openBtn}>
                            <Text style={Style.openBtnTitle}>{Label.OpenTitle}</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={Style.dateContentIdea}>
                        <IcnClander height={iconSize} width={iconSize} />
                        <Text style={Style.contentTitle}>{props.data.date}</Text>
                        <View style={Style.profileArea}>
                            <IcnAvtarBg height={iconSize} width={iconSize} />
                            <Text style={Style.contentTitle}>{props.data.firstName} {props.data.lastName}</Text>
                        </View>
                    </View>
            }

            {
                props.isType == 'ChallengeDetail' ?
                    <View style={Style.sectorCategoryArea}>
                        <Text style={Style.contentTitleSecond}>{Label.Sector}  <Bold>{props.data.sector}</Bold></Text>
                        <Text style={Style.contentTitleSecond}>{Label.Category}  <Bold>{props.data.categoryName}</Bold> </Text>
                    </View>
                    :
                    <View style={Style.sectorCategoryArea}>
                        <Text style={Style.contentTitleSecond}>{Label.Sector}  <Bold>{props.data.sectorName}</Bold></Text>
                        <Text style={Style.contentTitleSecond}>{Label.Category}  <Bold>{props.data.categoryName}</Bold> </Text>
                    </View>

            }

            <View style={Style.performanceContainer}>
                {props.isExpert ? null : (
                    <View style={Style.winningIcnContainerLeft}>
                        <IcnTrophy
                            isType={props.isType}
                            style={Style.winningIcn}
                            height={iconSize}
                            width={iconSize}
                        />
                        <IcnStar
                            isType={props.isType}
                            style={Style.winningIcn}
                            height={iconSize}
                            width={iconSize}
                        />
                        <IcnRewordComment
                            isType={props.isType}
                            style={Style.winningIcn}
                            height={iconSize}
                            width={iconSize}
                        />
                        <IcnRewordLight
                            isType={props.isType}
                            style={Style.winningIcn}
                            height={iconSize}
                            width={iconSize}
                        />
                    </View>
                )}

                <View style={Style.winningIcnContainerRight}>
                    <View style={Style.secondInnerCalView}>
                        <IcnWatchDone height={iconSize} width={iconSize} />
                        <Text style={[Style.contentTitleSecond, Style.spacetoLeft]}>
                            {props.data.totalView}
                        </Text>
                    </View>
                    <View style={Style.secondInnerCalView}>
                        <IcnThumsUp height={iconSize} width={iconSize} />
                        <Text style={[Style.contentTitleSecond, Style.spacetoLeft]}>
                            {props.data.totalLike}
                        </Text>
                    </View>
                    <View style={Style.secondInnerCalView}>
                        <IcnComment height={iconSize} width={iconSize} />
                        <Text style={[Style.contentTitleSecond, Style.spacetoLeft]}>
                            {props.data.totalComment}
                        </Text>
                    </View>
                    {props.isMyIdeaDetail ? (
                        <View style={Style.secondInnerCalViewOne}>
                            <Heart height={iconSize} width={iconSize} />
                            <Text style={[Style.contentTitleSecond, Style.spacetoLeft]}>
                                {props.data.comment}
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
                                <TouchableOpacity style={[Style.followBtn]}>
                                    <IcnLikeblack
                                        height={AppUtil.getHP(3.2)}
                                        width={AppUtil.getHP(3.2)}
                                    />
                                    <Text style={[Style.followBtnTitle]}>{Label.Follow}</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={Style.rightSide}>
                                <TouchableOpacity style={Style.likeBtn}>
                                    <IcnBlockChain
                                        height={AppUtil.getHP(3.2)}
                                        width={AppUtil.getHP(3.2)}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={Style.likeBtn}>
                                    <IcnShareIcon
                                        height={AppUtil.getHP(3.2)}
                                        width={AppUtil.getHP(3.2)}
                                    />
                                </TouchableOpacity>
                            </View>
                        </>
                    ) : (
                        <>
                            <View style={Style.leftSide}>
                                <TouchableOpacity style={[Style.votingBtn,{ backgroundColor: themeColor.buttonColor },]} >
                                    <Text style={[ Style.voteNowBtnTitle,{ color: themeColor.buttonFontColor },]}>
                                        {props.isMyIdeaDetail ? Label.Maturation : Label.VoteNow}
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={Style.rightSide}>
                                {props.isMyIdeaDetail ? 
                                (
                                    <TouchableOpacity style={[Style.likeBtn,{ backgroundColor: GetAppColor.lightBlue },]}>
                                        <IcnTimer height={AppUtil.getHP(3.2)} width={AppUtil.getHP(3.2)}/>
                                    </TouchableOpacity>
                                ) 
                                : 
                                (
                                    <TouchableOpacity style={Style.likeBtn}>
                                        <IcnLikeblack height={AppUtil.getHP(3.2)}width={AppUtil.getHP(3.2)}/>
                                    </TouchableOpacity>
                                )}

                                <TouchableOpacity style={Style.likeBtn}>
                                    <IcnBlockChain  height={AppUtil.getHP(3.2)} width={AppUtil.getHP(3.2)}/>
                                </TouchableOpacity>

                                <TouchableOpacity style={Style.likeBtn}>
                                    <IcnShareIcon height={AppUtil.getHP(3.2)} width={AppUtil.getHP(3.2)} stroke={GetAppColor.grayBorder}/>
                                </TouchableOpacity>
                            </View>
                        </>
                    )}
                </View>
            )}
        </View>
    );
};

export default IdeaContent;
