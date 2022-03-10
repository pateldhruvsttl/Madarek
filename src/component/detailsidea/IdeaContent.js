import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import IdeaContentStyle from './IdeaContentStyle'
import { Label } from '../../utils/StringUtil'
import IcnClander from '../../assets/svg/IcnClander'
import { AppUtil } from '../../utils/AppUtil'
import { hasProxies } from 'immer/dist/internal'
import IcnAvtarBg from '../../assets/svg/IcnAvtarBg'
import IcnTrophy from '../../assets/svg/IcnTrophy'
import IcnStar from '../../assets/svg/IcnStar'
import IcnRewordComment from '../../assets/svg/IcnRewordComment'
import IcnRewordLight from '../../assets/svg/IcnRewordLight'
import IcnWatchDone from '../../assets/svg/IcnWatchDone'
import IcnThumsUp from '../../assets/svg/IcnThumsUp'
import IcnComment from '../../assets/svg/IcnComment'
import { GetAppColor } from '../../utils/Colors'
import { useSelector } from 'react-redux'
import IcnLikeblack from '../../assets/svg/IcnLikeblack'
import IcnBlockChain from '../../assets/svg/IcnBlockChain'
import IcnShareIcon from '../../assets/svg/IcnShareIcon'

const IdeaContent = (props) => {
    const { themeColor } = useSelector((state) => state)
    const Bold = ({ children }) => <Text style={{ color: GetAppColor.acedemyRedtitle }}>{children}</Text>
    const iconSize = AppUtil.getHP(1.8) //3.5
    return (
        <View style={IdeaContentStyle.headerAcademyContainer}>
            <View style={IdeaContentStyle.headerAcademyTitle}>
                <Text style={IdeaContentStyle.academyTitle}>{props.data.title}</Text>
            </View>
            <View style={IdeaContentStyle.dateContent}>
                <IcnClander height={iconSize} width={iconSize} />
                <Text style={IdeaContentStyle.contentTitle}>{props.data.date}</Text>
                <View style={IdeaContentStyle.profileArea}>
                    <IcnAvtarBg height={iconSize} width={iconSize} />
                    <Text style={IdeaContentStyle.contentTitle}>{props.data.name}</Text>
                </View>
            </View>
            <View style={IdeaContentStyle.sectorCategoryArea}>
                <Text style={IdeaContentStyle.contentTitleSecond}>{Label.Sector}  <Bold>{props.data.sector}</Bold></Text>
                <Text style={IdeaContentStyle.contentTitleSecond}>{Label.Category}  <Bold>{props.data.category}</Bold> </Text>
            </View>
            <View style={IdeaContentStyle.performanceContainer}>
                <View style={IdeaContentStyle.winningIcnContainerLeft}>
                    <IcnTrophy style={IdeaContentStyle.winningIcn} height={iconSize} width={iconSize} />
                    <IcnStar style={IdeaContentStyle.winningIcn} height={iconSize} width={iconSize} />
                    <IcnRewordComment style={IdeaContentStyle.winningIcn} height={iconSize} width={iconSize} />
                    <IcnRewordLight style={IdeaContentStyle.winningIcn} height={iconSize} width={iconSize} />
                </View>
                <View style={IdeaContentStyle.winningIcnContainerRight}>
                    <View style={IdeaContentStyle.secondInnerCalView}>
                        <IcnWatchDone height={iconSize} width={iconSize} />
                        <Text style={[IdeaContentStyle.contentTitleSecond, IdeaContentStyle.spacetoLeft]}>{props.data.see}</Text>
                    </View>
                    <View style={IdeaContentStyle.secondInnerCalView}>
                        <IcnThumsUp height={iconSize} width={iconSize} />
                        <Text style={[IdeaContentStyle.contentTitleSecond, IdeaContentStyle.spacetoLeft]}>{props.data.like}</Text>
                    </View>
                    <View style={IdeaContentStyle.secondInnerCalView}>
                        <IcnComment height={iconSize} width={iconSize} />
                        <Text style={[IdeaContentStyle.contentTitleSecond, IdeaContentStyle.spacetoLeft]}>{props.data.comment}</Text>
                    </View>
                </View>
            </View>
            <View style={IdeaContentStyle.btnArea}>
                <TouchableOpacity style={[IdeaContentStyle.votingBtn, { backgroundColor: themeColor.buttonColor }]}>
                    <Text style={[IdeaContentStyle.voteNowBtnTitle,{color:themeColor.buttonFontColor}]}>{Label.VoteNow}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={IdeaContentStyle.likeBtn}>
                    <IcnLikeblack height={AppUtil.getHP(3.2)} width={AppUtil.getHP(3.2)}/>
                </TouchableOpacity>
                <TouchableOpacity style={IdeaContentStyle.likeBtn}>
                    <IcnBlockChain height={AppUtil.getHP(3.2)} width={AppUtil.getHP(3.2)}/>
                </TouchableOpacity>
                <TouchableOpacity style={IdeaContentStyle.likeBtn}>
                    <IcnShareIcon height={AppUtil.getHP(3.2)} width={AppUtil.getHP(3.2)}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default IdeaContent