import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React,{useEffect, useState} from 'react'
import CommonHeader from '../../component/commonheader/CommonHeader'
import MessageStyle from './MessageStyle'
import { useSelector } from 'react-redux'
import { AppUtil } from '../../utils/AppUtil'
import IcnClander from "../../assets/svg/IcnClander"
import { Label } from '../../utils/StringUtil'
import { EndPoints } from '../../service/EndPoints'
import { Service } from '../../service/Service'
import MessageListModel from '../../model/Message/MessageListModel'
import { Loger } from '../../utils/Loger'
import { UserManager } from '../../manager/UserManager'
import { deviceId } from '../../utils/Constant'
import { AppConfig } from '../../manager/AppConfig'

const Message = (props) => {
    const { themeColor } = useSelector((state) => state)
    const [isList, setList] = useState([])

    useEffect(() => {
        onSmeDashboard();

    }, []);

    const onSmeDashboard = () => {
        const data = {

            "frontuser_id":UserManager.userId,
            "device_id": deviceId,
            "token": AppConfig.token,
            "page": 1,
            "limit":1,
            "type": "list"
        }
        Service.post(EndPoints.teamcollaboration, data, (res) => {

            console.log("res", res)
            if (res?.statusCode === "1") {
                const Arr = []

                res.data[0].team.map((ele) => {
                    const model = new MessageListModel(ele)
                    Arr.push(model)
                    setList(Arr)
                })
            }

        }, (err) => {
            Loger.onLog('dashboard  error ========>', err)
        })
    }

    const renderCell = ({ item }) => (
        <TouchableOpacity style={MessageStyle.renderMainView} onPress={()=> props.navigation.navigate("LiveChat")}>

            <View style={MessageStyle.rightItems}>
                <Image style={MessageStyle.img} resizeMode='cover' source={{ uri: item.user_photo }} />
            </View>

            <View style={MessageStyle.leftItems}>

                <Text numberOfLines={1} style={MessageStyle.title}>{item.full_name}</Text>
                <Text style={MessageStyle.subTitle}>{item?.email}</Text>


                {/* <View style={MessageStyle.calView}>
                    <IcnClander style={MessageStyle.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                    <Text style={MessageStyle.subTitle}>{'25 Mar 22 at 15:30 PM'}</Text>
                </View> */}

            </View>

        </TouchableOpacity>
    )


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CommonHeader isType={'Team Collaboration'} />

            <View style={MessageStyle.grayView}>
                <Text style={MessageStyle.notiText}>{isList.length + " " + Label.NewNotifications} </Text>
            </View>


            <FlatList
                showsVerticalScrollIndicator={false}
                data={isList}
                renderItem={renderCell}
            />

        </SafeAreaView>
    )
}

export default Message