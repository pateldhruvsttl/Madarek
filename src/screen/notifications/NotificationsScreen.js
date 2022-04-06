import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { memo } from 'react';

import Style from "./NotificationsStyle";
import CommonHeader from '../../component/commonheader/CommonHeader';
import { Loger } from '../../utils/Loger';

function NotificationsScreen() {

    let item = { title: "Upload successful", Des: "App123", Type:"Button" };
    let List = [item, item, item, item, item];

    const renderItem = ({item}) => {

        return (
            <View style={Style.renderMainView}>
                <Text style={Style.txtRenderTitle}>{item.title}</Text>
            </View>
        )
    }

    return (
        <View>
            <SafeAreaView>
                <CommonHeader isType={"NotificationsScreen"} onMenuClick={() => { props.navigation.openDrawer() }} />
                <View style={Style.txtTitle}>

                <Text style={Style.notificationsCounter}>{10}<Text> {"new Notifications"}</Text></Text>
                <Text>{item.title}</Text>

                </View>
                <FlatList
                    data={List}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </View>
    )
}

export default memo(NotificationsScreen)