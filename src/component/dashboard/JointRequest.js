import React, { memo, useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux'

import { AppUtil } from "../../utils/AppUtil";
import { Label } from "../../utils/StringUtil";
import Style from "./JointRequestStyle";

import IcnAcceptRound from "../../assets/svg/IcnAcceptRound"
import IcnRejectRound from "../../assets/svg/IcnRejectRound"
import ImageLoad from "react-native-image-placeholder";
import { Service } from "../../service/Service";
import { EndPoints } from "../../service/EndPoints";
import { Loger } from "../../utils/Loger";
import { showMessage, showMessageWithCallBack } from "../../utils/Constant";
import { UserManager } from "../../manager/UserManager";
import { GetAppColor } from "../../utils/Colors";



const JointRequest = (props) => {
    const [requestData, setRequestData] = useState(props?.dataPending)
    const [reqData, setReqData] = useState(props?.isTitle)


    useEffect(() => {
        setRequestData(props.dataPending);
        setReqData(props.isTitle);
    }, [props])

    const joinRequest = (id, status) => {

        const data = {
            "request_id": id,
            "frontuser_id": UserManager.userId,
            "status": status

        }
        Service.post(EndPoints.acceptReject, data, (res) => {
            if (res?.statusCode === "1") {
                const updateData = requestData
                updateData.map((ele, index) => {
                    if (ele.expertId == id) {
                        updateData[index].joinStatus = res.data
                    }
                })
                setRequestData([...updateData]);

            }
            else {
                showMessage(res.message)
            }

        }, (err) => {
            Loger.onLog('acceptReject  error ========>', err)
        })
    }


    const { themeColor } = useSelector((state) => state)
    const navigation = useNavigation();

  
    const renderItem = ({ item, index }) => {
        return (
                <View style={Style.renderMainView}>
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
                                : null

                        }
                    </View>
                </View>
        )
    };

    return (
        <View style={Style.MainView}>
            {
                reqData &&
                <View style={Style.titleView}>
                    <Text style={[Style.txtTitle, { color: themeColor.buttonColor }]}>{reqData}</Text>
                    <TouchableOpacity onPress={() => props.navigateScreen(props.data)}>
                        <Text style={Style.txtSeeMore}>{Label.viewMore}</Text>
                    </TouchableOpacity>
                </View>
            }

            {
                props.dataPending.length > 0 ?

                    <FlatList
                        data={props.dataPending}
                        scrollEnabled={props?.scrollEnabled ? true : false}
                        renderItem={(item, index) => renderItem(item, index)}
                        keyExtractor={item => item.id}
                    />
                    :
                    <View style={Style.nodataView}>
                        <Text style={Style.txtNoDataFound}>{Label.NoJoinRequest}</Text>
                    </View>
            }
            {
                reqData?.btn &&
                <TouchableOpacity style={Style.bottomBtn} onPress={() => navigation.navigate("IdeasListScreen")}>
                    <Text style={Style.txtBottomBtn}> {reqData.btn}</Text>
                </TouchableOpacity>
            }
        </View>
    );
}

export default memo(JointRequest);






