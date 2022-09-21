import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Style from './SubDetailStyle'
import { Label } from '../../utils/StringUtil'
import WebViewComp from '../webview/WebViewComp'
import IcnRewordLight from '../../assets/svg/IcnRewordLight'
import { AppUtil } from '../../utils/AppUtil'
import moment from 'moment'
import IcnShareIcon from '../../assets/svg/IcnShareIcon'
import IcnClander from '../../assets/svg/IcnClander'
import IcnAvtarBg from '../../assets/svg/IcnAvtarBg'
import { onShare } from '../share/ShareContent'

const SubDetail = (props) => {
    const { spotlightTitle, spotlightDate, spotlightPublishBy,
        spotlightDescription, spotlightKeywords } = props.data

    return (
        <View style={Style.detailView}>
            <View>
                <Text style={Style.label}>{spotlightTitle}</Text>
                <TouchableOpacity style={Style.likeBtn} onPress={() => onShare(`spotlights/${props.id}`)}>
                    <IcnShareIcon
                        height={AppUtil.getHP(3.2)}
                        width={AppUtil.getHP(3.2)}
                        stroke={"#848484"}
                    />
                </TouchableOpacity>
                {/* <View style={Style.icnView}>
                    <IcnRewordLight width={AppUtil.getHP(2)} height={AppUtil.getHP(2)} />
                    <Text style={Style.icnTitle}>{"Madarek Spotlight"}</Text>
                </View> */}
                <View style={Style.areaCover}>
                    <IcnClander height={AppUtil.getHP(1.8)} width={AppUtil.getHP(1.8)} />
                    <Text style={Style.dateAuthor}>{moment(spotlightDate).format("YYYY-MM-DD")}</Text>
                    <IcnAvtarBg height={AppUtil.getHP(1.8)} width={AppUtil.getHP(1.8)} />
                    <Text style={Style.redLabel}>{` ${spotlightPublishBy}`}</Text>
                </View>
            </View>
            <View style={Style.description}>
                <View style={Style.contentBox}>
                    <Text style={Style.heading}>{Label.SpotlightDescription}</Text>
                    <View style={Style.line}></View>
                    <WebViewComp data={spotlightDescription} />
                </View>
                {/* <View style={Style.contentBox}>
                <Text style={Style.heading}>{Label?.ChallengesTheIdeaIsAddressing}</Text>
                <WebViewComp data={data?.challengesAddressing} />
            </View> */}
                {/* <View style={Style.contentBox}>
                <Text style={Style.heading}>{Label?.BenefitsOfIdeaImplementation}</Text>
                <WebViewComp data={data?.benefitIdea} />
            </View> */}
                <View style={Style.contentBox}>
                    <Text style={Style.heading}>{`${Label.SpotlightKeywords} (${Label.Meta})`}</Text>
                    <View style={Style.line}></View>
                    <WebViewComp data={spotlightKeywords} />
                </View>
            </View>

        </View>
    )
}

export default SubDetail