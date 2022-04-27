import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import ExpertInsightStyle from './ExpertInsightStyle'
import { AppUtil } from '../../utils/AppUtil'
import IcnWatchDone from "../../assets/svg/IcnWatchDone"
import IcnThumsUp from "../../assets/svg/IcnThumsUp"
import IcnComment from "../../assets/svg/IcnComment"

const IdeaExpert = (props) => {

    const renderSubCell=()=>{
        return(
            <View style={ExpertInsightStyle.leftItems}>

                <Text numberOfLines={1} style={ExpertInsightStyle.title}>{"Lorem Ipsum is simply dummy"}</Text>
                <Text numberOfLines={0} style={ExpertInsightStyle.SubTitle}>{"We aim to clean up 90% of floating ocean plastic pollution. The Ocean Cleanup is a non-profit organization developing and scaling technologies to rid the oceans"} </Text>

                <View style={ExpertInsightStyle.calView}>

                    <IcnWatchDone height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                    <Text style={ExpertInsightStyle.icnTitle}>{589}</Text>

                    <IcnThumsUp height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                    <Text style={ExpertInsightStyle.icnTitle}>{25}</Text>

                    <IcnComment height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                    <Text style={ExpertInsightStyle.icnTitle}>{45}</Text>
                </View>
                <View style={ExpertInsightStyle.line}/>

            </View>
        )
    }

    const renderCell = () => {
        return (
            <View style={ExpertInsightStyle.cellView}>
                <View style={ExpertInsightStyle.topFlexView}>
                    <Image style={ExpertInsightStyle.smallRadiousImage} />
                    <View style={ExpertInsightStyle.subFlexView}>
                        <Text style={ExpertInsightStyle.catText}>Banking and Finance</Text>
                        <Text style={ExpertInsightStyle.titleText}>Finance Consulting Firm Banking and Finance</Text>
                    </View>
                </View>
                <View style={ExpertInsightStyle.userFlexView}>
                    <Image style={ExpertInsightStyle.userImage} />
                    <View>
                        <Text style={ExpertInsightStyle.userName}>Abhimanyu Ramanuj</Text>
                        <Text style={ExpertInsightStyle.userCatName}>Subject Matter Expert</Text>
                    </View>
                </View>

                <FlatList 
                data={[1,2]}
                renderItem={renderSubCell}
                />

                {/* {renderSubCell()}
                {renderSubCell()} */}

            </View>
        )
    }
    return (
        <View>

            <FlatList
                data={[1,2]}
                style={{marginTop:AppUtil.getHP(1)}}
                renderItem={renderCell}
            />
        </View>
    )
}

export default IdeaExpert