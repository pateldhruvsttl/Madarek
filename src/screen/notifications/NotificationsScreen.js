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
import { AppConfig, getLanguage } from "../../manager/AppConfig";
import { ScrollView } from "react-native-gesture-handler";
import moment from "moment";

function NotificationsScreen() {

  const { themeColor } = useSelector((state) => state);
  const [notiData, setNotificatioData] = useState([]);
  const [record, setRecord] = useState(0);

  useEffect(() => {
    const data = {
      language: getLanguage(),
      frontuser_id: UserManager.userId,
      device_id: deviceId,
      token: AppConfig.token,
      page: "1",
    };
    Service.post(EndPoints.notification, data, (res) => {
      setNotificatioData(res.data);
      setRecord(res.totalRecords);
    },
      (err) => {
        Loger.onLog("Notification error response", err);
      }
    );
  }, []);

  const onAcceptReject = (status, id, index) => {
    const data = {notificationid: id,status: status,frontuser_id: UserManager.userId,};
    Service.post(EndPoints.acceptrejectrequest, data, (res) => {
    
      // if(res.statusCode === 1)
      // {
      //   let arr = notiData;

      //   arr[index].admin_status = 
      // }
    
    }, (err) => {
      Loger.onLog("Notification accept reject error response", err);
    }
    );
  };

  

  const renderItem = ({ item, index }) => {

   
    return (
      <View style={Style.renderMainView}>
        <View style={Style.imgRenderView}>
          <Image style={Style.imgRenderImage} source={{ uri: item.user_photo }} />
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
          {requestRender(item, index)}

        </View>
        <TouchableOpacity onPress={() => { onClear(item.id, index); }}>
          <Text style={[Style.clearView, { fontSize: AppUtil.getHP(2.4), marginEnd: 10 }]}>
            {"x"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const requestRender = (item, index) => {

    if (item?.notification_type == "Expert request") {
      if (item.admin_status == "pending") {
        return (
          <View style={Style.btnView}>
            <TouchableOpacity onPress={() => onAcceptReject("accept", item.id, index)} style={[Style.btnApplyNow, { backgroundColor: themeColor.buttonColor },]}>
              <Text style={[Style.txt, { color: GetAppColor.white }]}>
                {Label.Accept}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onAcceptReject("reject", item.id, index)} style={[Style.btnLearMore, { borderColor: themeColor.buttonColor },]}>
              <Text style={[Style.txt, { color: themeColor.buttonColor }]}>
                {Label.Reject}
              </Text>
            </TouchableOpacity>
          </View>
        )
      } else {
        return (<View style={Style.btnView}>
          <Text style={[Style.txt1]}>
            {item.admin_status.toUpperCase()}
          </Text>
        </View>)
      }
    }
    else {
      return false
    }
  }

  const onClear = (id, index) => {
    const data = {
      device_id: deviceId,
      token: AppConfig.token,
      frontuser_id: UserManager.userId,
      notificationid: id,
    };
    Service.post(EndPoints.clearnotification, data, (res) => {
      if (id == "") {
        setNotificatioData([]);
      } else {
        var notData = [...notiData];
        notData.splice(index, 1);
        setRecord(notData.length);
        setNotificatioData(notData);
      }
    },
      (err) => {
      }
    );
  };

  return (
    <View style={Style.MainView}>
      <SafeAreaView style={{ flex: 1 }}>
        <CommonHeader
          isType={"NotificationsScreen"}
          onMenuClick={() => {
            props.navigation.openDrawer();
          }}
        />

        <View style={Style.bodyView}>
          <Text style={Style.notificationsCounter}>
            {record}
            <Text style={Style.txtTitle}> {notiData && notiData.length > 0 ? Label.NewNotifications : Label.NoNotifications}</Text>
          </Text>
          <TouchableOpacity
            onPress={() => {
              onClear("", -1);
            }}
          >
            <Text style={Style.clearView}>
              {"X"} <Text style={Style.txtClear}>{Label.ClearAll}</Text>{" "}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={Style.scrollinview}>
          <FlatList
            data={notiData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>

      </SafeAreaView>
    </View>
  );
}

export default memo(NotificationsScreen);
