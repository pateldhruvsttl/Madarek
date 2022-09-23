import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ExpertInsightStyle from './ExpertInsightStyle'
import IcnWatchDone from "../../assets/svg/IcnWatchDone"
import IcnThumsUp from "../../assets/svg/IcnThumsUp"
import IcnComment from "../../assets/svg/IcnComment"
import { AppUtil } from '../../utils/AppUtil'
import { Label } from '../../utils/StringUtil'
import IcnThumsUpBlack from "../../assets/svg/IcnThumsUpBlack"
import { AppConfig } from '../../manager/AppConfig'

const ContestExpert = (props) => {

    const onGetPaginations = () => {
        if (props?.data?.length > (AppConfig.pageLimit - 1) && props?.paginations)
            props?.paginations()
    }

    const renderCell = ({ item }) => {
        return (
            <TouchableOpacity style={ExpertInsightStyle.cellView} onPress={() => props.navigateScreen(item.id, item.type)}>
                <View style={ExpertInsightStyle.topFlexView}>
                    <Image
                        source={{ uri: item.profilePhoto }}
                        style={ExpertInsightStyle.smallRadiousImage} />

                    <View style={[ExpertInsightStyle.subFlexView, { marginEnd: AppUtil.getHP(2.5) }]}>
                        <View style={ExpertInsightStyle.firstSection}>
                            <Text numberOfLines={1} style={ExpertInsightStyle.userName}>{`${item.firstName} ${item.lastName} `}</Text>
                            <Text style={ExpertInsightStyle.vline}>|</Text>
                            <Text style={ExpertInsightStyle.userName}>{` ${item.jobTitle}`}</Text>
                        </View>
                        <Text numberOfLines={1} style={ExpertInsightStyle.catText}>{item.title}</Text>
                        {/* <Text numberOfLines={2} style={ExpertInsightStyle.titleText}>{item.title}</Text> */}
                    </View>
                </View>
                <View style={ExpertInsightStyle.detailCal}>
                    <Text numberOfLines={2} style={ExpertInsightStyle.titleText}>{item.description}</Text>
                </View>
                {/* <View style={ExpertInsightStyle.userFlexView}>
                        <Image style={ExpertInsightStyle.userImage} />
                        <View>
                            <Text style={ExpertInsightStyle.userName}>{item.firstName}</Text>
                            <Text style={ExpertInsightStyle.userCatName}>{item.jobTitle}</Text>
                        </View>
                    </View> */}

                {/* <FlatList 
                data={props.data}
                renderItem={renderSubCell}
                /> */}
                <View style={ExpertInsightStyle.leftItems}>

                    <View style={ExpertInsightStyle.calView}>

                        {/* <IcnWatchDone height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                            <Text style={[ExpertInsightStyle.icnTitle,{padding:AppUtil.getHP(0.3)}]}>{item.totalViews}</Text> */}
                        {
                            item.like == true ?
                                <TouchableOpacity onPress={() => props.onLikeIdeas(item.id, "Contest")} style={ExpertInsightStyle.addSpace}>
                                    <IcnThumsUpBlack height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => props.onLikeIdeas(item.id, "Contest")} style={ExpertInsightStyle.addSpace}>
                                    <IcnThumsUp height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                                </TouchableOpacity>

                        }
                        <Text style={ExpertInsightStyle.icnTitle}>{item.totalLikes}</Text>

                        <TouchableOpacity style={ExpertInsightStyle.addSpace} onPress={() => props.navigateToComment({ model: 'GeneralComments', fieldName: 'formdata_id', id: item.id })}>
                            <IcnComment height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        </TouchableOpacity>
                        <Text style={ExpertInsightStyle.icnTitle}>{item.totalComments}</Text>
                    </View>
                    {/* <View style={ExpertInsightStyle.line} /> */}

                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            {
                props.data.length > 0 ?
                    <FlatList
                        data={props.data}
                        style={{ marginTop: AppUtil.getHP(1) }}
                        scrollEnabled={props?.scrollEnabled ? true : false}
                        renderItem={(item) => renderCell(item)}
                        key={(id) => id}
                        keyExtractor={item => item.id}
                        onEndReached={onGetPaginations}
                    /> :
                    <View style={ExpertInsightStyle.emptyView}>
                        <Text style={ExpertInsightStyle.txtNoDataFound}>{Label.NoDataFound}</Text>
                    </View>
            }
        </View>
    )
}

export default ContestExpert