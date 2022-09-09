import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import Style from './JointRequestStyle'
import ImageLoad from 'react-native-image-placeholder'
import IcnAcceptRound from "../../assets/svg/IcnAcceptRound"
import IcnRejectRound from "../../assets/svg/IcnRejectRound"
import { AppUtil } from '../../utils/AppUtil'
import { GetAppColor } from '../../utils/Colors'
import CommonHeader from '../commonheader/CommonHeader'
import { Label } from '../../utils/StringUtil'

const AllRequestStatus = (props) => {
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={Style.renderMainView} onPress={() => props.navigation.navigate('ExpertDetailsScreen',{id:item.expertId})}>
                <View style={Style.rightItems}>
                    <ImageLoad style={Style.img}
                        resizeMode='cover'
                        // source={{ uri: item.url }}
                        source={{ uri: item.userPhoto }}
                        borderRadius={AppUtil.getHP(7)}
                        placeholderStyle={Style.img}
                    />
                </View>

                <View style={Style.leftItems}>
                    {/* <Text numberOfLines={2} style={Style.txtTitle}>{item.fullName}</Text> */}
                    <Text numberOfLines={2} style={Style.txtTitle}>{item.fullName}</Text>
                </View>

                <View style={Style.endItems}>
                    {
                        item.joinStatus == "Pending" ?
                            <View style={Style.btnView}>
                                <TouchableOpacity onPress={() => joinRequest(item.expertId, 1)}>
                                    <IcnAcceptRound style={Style.callLeftIcn} height={AppUtil.getHP(4)} width={AppUtil.getHP(4)} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => joinRequest(item.expertId, 2)}>
                                    <IcnRejectRound style={Style.callLeftIcn} height={AppUtil.getHP(4)} width={AppUtil.getHP(4)} />
                                </TouchableOpacity>
                            </View>
                            :
                            <TouchableOpacity style={[Style.btnAccept, { borderColor: item.joinStatus == "rejected" ? GetAppColor.rejected : GetAppColor.dotGreen }]}>
                                <Text style={[Style.txtBtnAccept, { color: item.joinStatus == "rejected" ? GetAppColor.rejected : GetAppColor.dotGreen }]}>{item.joinStatus.toUpperCase()}</Text>
                            </TouchableOpacity>
                    }
                </View>
            </TouchableOpacity>
        )
    };
    
    return (
        <SafeAreaView>
        <View style={Style.MainView}>
            <CommonHeader isType={"User Request"} />
            {props.route.params.length > 0 ?
                <FlatList
                    data={props.route.params}
                    scrollEnabled={props?.scrollEnabled ? true : false}
                    renderItem={(item, index) => renderItem(item, index)}
                    keyExtractor={item => item.id}
                    style={{marginTop:AppUtil.getHP(1)}}
                />
                :
                <View style={Style.nodataView}>
                    <Text style={Style.txtNoDataFound}>{Label.NoJoinRequest}</Text>
                </View>
            }
        </View>
        </SafeAreaView>
    )
}

export default AllRequestStatus