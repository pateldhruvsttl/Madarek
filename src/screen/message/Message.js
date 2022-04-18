import { View, Text, FlatList, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import CommonHeader from '../../component/commonheader/CommonHeader'
import MessageStyle from './MessageStyle'
import { useSelector } from 'react-redux'
import { AppUtil } from '../../utils/AppUtil'
import IcnClander from "../../assets/svg/IcnClander"
import { Label } from '../../utils/StringUtil'

const Message = (props) => {
    const { themeColor } = useSelector((state) => state)


    const renderCell = ({ item }) => (
        <View style={MessageStyle.renderMainView}>

            <View style={MessageStyle.rightItems}>
                <Image style={MessageStyle.img} resizeMode='cover' source={{ uri: item.url }} />
            </View>

            <View style={MessageStyle.leftItems}>

                <Text numberOfLines={1} style={MessageStyle.title}>{'Abhimanyu Bhatacharya'}</Text>
                <Text style={MessageStyle.subTitle}>{'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Industry. standard dummy text ever since the 1500s.'}</Text>


                <View style={MessageStyle.calView}>
                    <IcnClander style={MessageStyle.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                    <Text style={MessageStyle.subTitle}>{'25 Mar 22 at 15:30 PM'}</Text>
                </View>

            </View>

        </View>
    )


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CommonHeader isType={"Message"} />

            <View style={MessageStyle.grayView}>
                <Text style={MessageStyle.notiText}>10 {Label.NewNotifications} </Text>
                <Text style={MessageStyle.markText}>{Label.MarkallasRead}</Text>
            </View>


            <FlatList
                showsVerticalScrollIndicator={false}
                data={[1, 2, 3, 4, 5, 6]}
                renderItem={renderCell}
            />

        </SafeAreaView>
    )
}

export default Message