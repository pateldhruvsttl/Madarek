import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { memo } from "react";
import { useSelector } from "react-redux";
import Style from "./NotificationsStyle";
import CommonHeader from "../../component/commonheader/CommonHeader";
import { Label } from "../../utils/StringUtil";
import { GetAppColor } from "../../utils/Colors";
import IcnClander from "../../assets/svg/IcnClander";
import { AppUtil } from "../../utils/AppUtil";
import { Service } from "../../service/Service";
import { EndPoints } from "../../service/EndPoints";
import { Loger } from "../../utils/Loger";
import { onLoding } from "../../../App";
import { deviceId } from "../../utils/Constant";
import { UserManager } from "../../manager/UserManager";
import { AppConfig } from "../../manager/AppConfig";
import { ScrollView } from "react-native-gesture-handler";
import moment from "moment";

function NotificationsScreen() {
  let item1 = {
    title: "Upload successful",
    Des:
      "Renewable Energy idea.pdf was uploaded successfully. Lorem Ipsum is simply dummy text.",
    Type: "Button",
    date: "25 Mar 22 at 15:30 PM",
  };
  let item2 = {
    title: "Update available successful",
    Des: "A new application version is available ",
    Type: "",
    date: "25 Mar 22 at 15:30 PM",
  };
  let List = [item2, item2, item1, item2, item2];

  const { themeColor } = useSelector((state) => state);
  const [notiData, setNotificatioData] = useState([]);
  const [record, setRecord] = useState(0);

  useEffect(() => {
    const data = {
      lang: "en",
      frontuser_id: UserManager.userId,
      device_id: deviceId,
      token: AppConfig.token,
      page: "1",
    };
    Service.post(
      EndPoints.notification,
      data,
      (res) => {
        Loger.onLog("Notification response of data", res);
        setNotificatioData(res.data);
        setRecord(res.totalRecords);
      },
      (err) => {
        Loger.onLog("Notification error response", err);
      }
    );
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={Style.renderMainView}>
        <View style={Style.imgRenderView}>
          <Image
            style={Style.imgRenderImage}
            source={{ uri: item.user_photo }}
          ></Image>
        </View>
        <View style={Style.notifDesc}>
          <Text style={Style.txtRenderTitle}>{item.notification_type}</Text>
          <Text style={Style.txtRenderDes}>{item.notification_message}</Text>

          <View style={Style.dateView}>
            <IcnClander
              style={Style.icnCal}
              height={AppUtil.getHP(2)}
              width={AppUtil.getHP(2)}
            />
            <Text style={Style.txtRenderDes}>
              {moment(item.created_at).format("DD MMM YY  HH:MM a")}
            </Text>
          </View>
          
          {item?.notification_type === "Expert request" && (
            <View style={Style.btnView}>
              <TouchableOpacity
                style={[
                  Style.btnApplyNow,
                  { backgroundColor: themeColor.buttonColor },
                ]}
              >
                <Text style={[Style.txt, { color: GetAppColor.white }]}>
                  {Label.Accept}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  Style.btnLearMore,
                  { borderColor: themeColor.buttonColor },
                ]}
              >
                <Text style={[Style.txt, { color: themeColor.buttonColor }]}>
                  {Label.Reject}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          {/* {item?.notification_type === "Idea request" && (
            <View style={Style.btnView}>
              <TouchableOpacity
                style={[
                  Style.btnApplyNow,
                  { backgroundColor: themeColor.buttonColor },
                ]}
              >
                <Text style={[Style.txt, { color: GetAppColor.white }]}>
                  {Label.Update}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  Style.btnLearMore,
                  { borderColor: themeColor.buttonColor },
                ]}
              >
                <Text style={[Style.txt, { color: themeColor.buttonColor }]}>
                  {Label.NotNow}
                </Text>
              </TouchableOpacity>
            </View>
          )} */}
        </View>
        <TouchableOpacity
            onPress={() => {
              onClear(item.id);
            }}
          >
            <Text style={[Style.clearView,{fontSize:25, marginEnd:10}]}>
              {"x"}
            </Text>
          </TouchableOpacity>
      </View>
    );
  };

  const onClear = (id) => {
    const data = {
      device_id: deviceId,
      token: AppConfig.token,
      frontuser_id: UserManager.userId,
      notificationid: id,
    };
    Service.post(EndPoints.clearnotification,data,(res)=>{
      console.log("Clear notification response", res)
    },(err)=>{
      console.log("Clear notification error response", err)
    })
  };

  return (
    <View style={Style.MainView}>
      <SafeAreaView>
        <CommonHeader isType={"NotificationsScreen"} onMenuClick={() => { props.navigation.openDrawer(); }}/>

        <View style={Style.bodyView}>
          <Text style={Style.notificationsCounter}>
            {record}
            <Text style={Style.txtTitle}> {Label.NewNotifications}</Text>
          </Text>
          <TouchableOpacity
            onPress={() => {
              onClear("");
            }}
          >
            <Text style={Style.clearView}>
              {"X"} <Text style={Style.txtClear}>{Label.ClearAll}</Text>{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={Style.scrollinview}>
          <FlatList
            data={notiData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default memo(NotificationsScreen);
