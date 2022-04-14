import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { memo } from 'react';
import { useSelector } from 'react-redux';
import Style from "./NotificationsStyle";
import CommonHeader from '../../component/commonheader/CommonHeader';
import { Label } from '../../utils/StringUtil';
import { GetAppColor } from '../../utils/Colors';
import IcnClander from '../../assets/svg/IcnClander';
import { AppUtil } from '../../utils/AppUtil';

function NotificationsScreen() {

    let item1 = { title: "Upload successful", Des: "Renewable Energy idea.pdf was uploaded successfully. Lorem Ipsum is simply dummy text.", Type: "Button", date: "25 Mar 22 at 15:30 PM" };
    let item2 = { title: "Update available successful", Des: "A new application version is available ", Type: "", date: "25 Mar 22 at 15:30 PM" };
    let List = [item2, item2, item1, item2, item2];

    const { themeColor } = useSelector((state) => state);

    const renderItem = ({ item }) => {

        return (
            <View style={Style.renderMainView}>
                <Text style={Style.txtRenderTitle}>{item.title}</Text>
                <Text style={Style.txtRenderDes}>{item.Des}</Text>

                <View style={Style.dateView}>
                    <IcnClander style={Style.icnCal} height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
                    <Text style={Style.txtRenderDes}>{item.date}</Text>
                </View>

                {item?.Type === "Button" &&
                    <View style={Style.btnView}>

                        <TouchableOpacity style={[Style.btnApplyNow, { backgroundColor: themeColor.buttonColor }]}>
                            <Text style={[Style.txt, { color: GetAppColor.white }]}>{Label.Update}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[Style.btnLearMore, { borderColor: themeColor.buttonColor }]}>
                            <Text style={[Style.txt, { color: themeColor.buttonColor }]}>{Label.NotNow}</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        )
    }

    const onClear =()=>{
        
    }

    return (
        <View style={Style.MainView}>
            <SafeAreaView>
                <CommonHeader isType={"NotificationsScreen"} onMenuClick={() => { props.navigation.openDrawer() }} />
                
                <View style={Style.bodyView}>
                    <Text style={Style.notificationsCounter}>{10}<Text style={Style.txtTitle}> {Label.NewNotifications}</Text></Text>
                    <TouchableOpacity onPress={()=>{onClear()}}>
                    <Text style={Style.clearView}>{"X"} <Text style={Style.txtClear}>{Label.ClearAll}</Text> </Text>
                    </TouchableOpacity>
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