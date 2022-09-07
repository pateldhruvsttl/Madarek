import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ExpertInsightStyle from './ExpertInsightStyle'
import IcnWatchDone from "../../assets/svg/IcnWatchDone"
import IcnThumsUp from "../../assets/svg/IcnThumsUp"
import IcnComment from "../../assets/svg/IcnComment"
import { AppUtil } from '../../utils/AppUtil'

const GeneralExpert = (props) => {

    const renderCell = ({ item }) => {
        return (
            <>
                <TouchableOpacity style={ExpertInsightStyle.cellView} onPress={() => props.navigateScreen(item.id)}>
                    <View style={ExpertInsightStyle.topFlexView}>
                        <Image
                            source={{ uri: item.profilePhoto }}
                            style={ExpertInsightStyle.smallRadiousImage} />
                        <View style={ExpertInsightStyle.subFlexView}>
                            <Text style={ExpertInsightStyle.catText}>{item.title}</Text>
                            <Text numberOfLines={2} style={ExpertInsightStyle.titleText}>{item.description}</Text>
                        </View>
                    </View>
                    <View style={ExpertInsightStyle.userFlexView}>
                        <Image style={ExpertInsightStyle.userImage} />
                        <View>
                            <Text style={ExpertInsightStyle.userName}>{item.firstName}</Text>
                            <Text style={ExpertInsightStyle.userCatName}>{item.jobTitle}</Text>
                        </View>
                    </View>

                    {/* <FlatList 
                data={props.data}
                renderItem={renderSubCell}
                /> */}
                    <View style={ExpertInsightStyle.leftItems}>

                        <View style={ExpertInsightStyle.calView}>

                            <IcnWatchDone height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                            <Text style={ExpertInsightStyle.icnTitle}>{item.totalViews}</Text>

                            <IcnThumsUp height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                            <Text style={ExpertInsightStyle.icnTitle}>{item.totalLikes}</Text>

                            <TouchableOpacity onPress={() => props.navigateToComment({ model: 'ExpertComments', fieldName: 'expert_id', id: item.id })}>
                                <IcnComment height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                            </TouchableOpacity>
                            <Text style={ExpertInsightStyle.icnTitle}>{item.totalComments}</Text>
                        </View>
                        <View style={ExpertInsightStyle.line} />

                    </View>
                </TouchableOpacity>

            </>
        )
    }
    return (
        <View style={{ paddingBottom: AppUtil.getHP(5) }}>

            <FlatList
                data={props.data}
                style={{ marginTop: AppUtil.getHP(1) }}
                renderItem={(item) => renderCell(item)}
            />
        </View>
    )
}

export default GeneralExpert