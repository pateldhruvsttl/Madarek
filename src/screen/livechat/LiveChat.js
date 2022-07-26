import { Text, View, SafeAreaView, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import CommonHeader from '../../component/commonheader/CommonHeader'
import STYLE from './LiveChatStyle'
import { GetAppColor } from '../../utils/Colors'
import IcnEmoji from '../../assets/svg/IcnEmoji'
import IcnGallery from '../../assets/svg/IcnGallery'
import IcnDocument from '../../assets/svg/IcnDocument'
import IcnMenuDote from '../../assets/svg/IcnMenuDote'
import { AppUtil } from '../../utils/AppUtil'
import { Label } from '../../utils/StringUtil'
import { EndPoints } from '../../service/EndPoints'
import { Service } from '../../service/Service'
import ChatModel from '../../model/Message/ChatModel'
import { Loger } from '../../utils/Loger'
import { UserManager } from '../../manager/UserManager'
import { deviceId } from '../../utils/Constant'
import { AppConfig } from '../../manager/AppConfig'

const LiveChat = (props) => {

    console.log("props", props.route.params.name);
    const getId = () => {
        return Math.floor(Math.random() * (999 - 100 + 1) + 100)
    }
    const [isNewMessage, setNewMessage] = useState([])
    const [isMessage, setMessage] = useState("")


    const flatListRef = useRef();
    const [listUpdate, setListUpdate] = useState(getId())

    useEffect(() => {
        onLiveChatData();
    }, []);

    const onLiveChatData = () => {
        const data = {
            "frontuser_id": UserManager.userId,
            "device_id": deviceId,
            "token": AppConfig.token,
            "page": 1,
            "limit": 1,
            "type": "detail",
            "idea_id": "1787"
        }
        Service.post(EndPoints.teamcollaboration, data, (res) => {
            if (res?.statusCode === "1") {
                const Arr = []

                res.data.map((ele) => {
                    const model = new ChatModel(ele)
                    Arr.push(model)
                })
                setNewMessage(Arr.reverse());
            }

        }, (err) => {
            Loger.onLog('error', err)
        })
    }

    const sendMessage = () => {
        if(isMessage === "")
            return 

        let obj = {
            "frontuser_id": 48,
            "device_id": deviceId,
            "type": "add",
            "idea_id": "1787",
            "comment": isMessage,
            "parent_id": ""
        }
        Service.post(EndPoints.teamcollaboration, obj, (res) => {
            if (res?.statusCode === "1") {
               
                const storeArray = isNewMessage
                storeArray.push({ id:UserManager.userId,comment:isMessage})
                setNewMessage(storeArray)
                setListUpdate(getId())

                setMessage("");
                // onLiveChatData();
            }

        }, (err) => {
            Loger.onLog('error', err)
        })

        
    }

    const renderItem = ({ item }) => (

        <View style={[STYLE.messageContainer, { alignItems: item?.email == UserManager.email ? 'flex-end' : 'flex-start' }]}>
            <View style={item?.email == UserManager.email ? STYLE.rightMsg : STYLE.leftMsg}>
                <Text ellipsizeMode='tail' style={STYLE.leftLabel}>{item.comment}</Text>
            </View>
            <Text style={STYLE.time}>{item.Time}</Text>
        </View>
    )
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CommonHeader isType={"LiveChat"} isName={props?.route?.params?.name} url={props?.route?.params?.url} />
            <View style={STYLE.container}>
                <View style={STYLE.listing}>
                    <FlatList
                        data={isNewMessage}
                        extraData={listUpdate}
                        ref={flatListRef}
                        inverted={false}
                        onContentSizeChange={() => flatListRef?.current?.scrollToEnd()}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index}
                        contentContainerStyle={{ flexGrow: 1, paddingTop: AppUtil.getHP(2), }}
                    />
                </View>

                <View style={STYLE.textArea}>
                    <View style={STYLE.labelContainer}>
                        <TextInput
                            style={STYLE.chatInput}
                            placeholder={Label.WriteReply}
                            placeholderTextColor={GetAppColor.disableBorder}
                            value={isMessage}
                            onChangeText={(txt) => { setMessage(txt) }}
                        />
                        <TouchableOpacity>
                            <IcnDocument width={AppUtil.getHP(2.8)} height={AppUtil.getHP(2.8)} style={STYLE.menuDocument} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={sendMessage} style={STYLE.icnContainer}>
                        <IcnMenuDote width={AppUtil.getHP(3)} height={AppUtil.getHP(3)} color={GetAppColor.grayBorder} />
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default LiveChat
