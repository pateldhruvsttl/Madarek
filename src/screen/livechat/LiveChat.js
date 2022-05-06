import { Text, View, SafeAreaView, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react'
import CommonHeader from '../../component/commonheader/CommonHeader'
import STYLE from './LiveChatStyle'
import { GetAppColor } from '../../utils/Colors'
import IcnEmoji from '../../assets/svg/IcnEmoji'
import IcnGallery from '../../assets/svg/IcnGallery'
import IcnDocument from '../../assets/svg/IcnDocument'
import IcnMenuDote from '../../assets/svg/IcnMenuDote'
import { AppUtil } from '../../utils/AppUtil'
import { Label } from '../../utils/StringUtil'

const LiveChat = () => {

    let id = Math.floor(Math.random() * (999 - 100 + 1) + 100)

    const messageList = [
        { id: 0, message: "Hi there!", Time: "10:40", name: "Jalpa" },
        { id: 1, message: "How Are You", Time: "10:42", name: "Jalpa" },
        { id: 2, message: "Thanks", Time: "10:44", name: "Jalpa" },
        { id: 3, message: "Bye", Time: "10:46", name: "Munira" },
        { id: 4, message: "Just let me know!", Time: "10:46", name: "Munira" },
    ]
    const [message, setMessage] = useState([])
    const [newMessage, setNewMessage] = useState(messageList)
    const flatListRef = useRef();

    const [listUpdate, setListUpdate] = useState(id)

    const sendMessage = () => {
        const storeArray = newMessage
        storeArray.push({ message, id: id, Time: "10:25", name: 'jalpa' })
        setNewMessage(storeArray)
        setMessage('')
        setListUpdate(id)
    }
    const renderItem = ({ item }) => (

        <View style={[STYLE.messageContainer, { alignItems: item.name.toLowerCase() == 'jalpa' ? 'flex-end' : 'flex-start' }]}>
            <View style={item.name.toLowerCase() == 'jalpa' ? STYLE.rightMsg : STYLE.leftMsg}>
                <Text ellipsizeMode='tail' style={STYLE.leftLabel}>{item.message}</Text>
            </View>
            <Text style={STYLE.time}>{item.Time}</Text>
        </View>
    )
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CommonHeader isType={"LiveChat"} />
            <View style={STYLE.container}>
                <View style={STYLE.listing}>
                    <FlatList
                        data={newMessage}
                        extraData={listUpdate}
                        ref={flatListRef}
                        multiline={true}
                        onContentSizeChange={() => flatListRef?.current?.scrollToEnd()}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index}
                        contentContainerStyle={{ flexGrow: 1 }}
                    />
                </View>
                <View style={STYLE.textArea}>
                    <View style={STYLE.labelContainer}>
                        <TextInput
                            style={STYLE.chatInput}
                            placeholder={Label.WriteReply}
                            placeholderTextColor={GetAppColor.disableBorder}
                            value={message}
                            onChangeText={(txt) => { setMessage(txt) }}
                        />
                        <TouchableOpacity onPress={sendMessage}>
                            <IcnEmoji width={AppUtil.getHP(2.8)} height={AppUtil.getHP(2.8)} style={STYLE.icons} />
                        </TouchableOpacity>
                    </View>
                    <View style={STYLE.icnContainer}>
                        <IcnEmoji width={AppUtil.getHP(2.8)} height={AppUtil.getHP(2.8)} style={STYLE.icons} />
                        <IcnGallery width={AppUtil.getHP(2.8)} height={AppUtil.getHP(2.8)} style={STYLE.icons} />
                        <IcnDocument width={AppUtil.getHP(2.8)} height={AppUtil.getHP(2.8)} style={STYLE.menuDocument} />
                        <IcnMenuDote width={AppUtil.getHP(3)} height={AppUtil.getHP(3)} color={GetAppColor.grayBorder} />
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default LiveChat
