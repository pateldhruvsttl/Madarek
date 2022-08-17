import React, { memo, useState } from "react";
import { View, Text, ScrollView, ScrollViewBase, StatusBar, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../component/commonheader/CommonHeader";
import SubmitIdeaStep1 from "../../component/submitideas/SubmitIdeaStep1";
import SubmitIdeaStep2 from "../../component/submitideas/SubmitIdeaStep2";
import SubmitIdeaStep3 from "../../component/submitideas/SubmitIdeaStep3";
import { AppConfig } from "../../manager/AppConfig";
import { UserManager } from "../../manager/UserManager";
import { EndPoints } from "../../service/EndPoints";
import { Service } from "../../service/Service";
import { GetAppColor } from "../../utils/Colors";
import { deviceId } from "../../utils/Constant";
import Style from "./SubmitIdeaScreenStyle";

function SubmitIdeaScreen(props) {
  const [selectIndex, setSelectIndex] = useState(0);

  const [step1Obj, setStep1Obj] = useState(null);

  const onSubmit = (dataForm) => {

    var data = new FormData()

    data.append('device_id', deviceId)
    data.append('lang', AppConfig.lang.toString())
    data.append('token', AppConfig.token.toString())
    data.append('frontuser_id', UserManager.userId.toString())
    data.append('task', "save")
    data.append('idea_id', 0)
    data.append('idea_title', step1Obj.title)
    data.append('sector_id', step1Obj.sectorsId)
    data.append('category_id', step1Obj.categoryId)
    data.append(dataForm)
    // props.navigation.navigate("UserDashboardScreen");`

    Service.post(EndPoints.submitidea, data, (res) => {
      // props.navigation.navigate("UserDashboardScreen");
    }, (err) => {
      Loger.onLog("###", err);
    }
    );

  }

  return (
    <SafeAreaView style={Style.MainView}>
      <CommonHeader isType={"SubmitIdeaScreen"} />

      <ScrollView>
        <View style={Style.containerView}>
          <View style={Style.selectPageIndicatorsView}>
            <View style={[Style.selectPageIndicators, { backgroundColor: selectIndex == 0 ? GetAppColor.statusBarYellow : GetAppColor.btnBorderColor }]} />
            <View style={[Style.selectPageIndicators, { backgroundColor: selectIndex == 1 ? GetAppColor.statusBarYellow : GetAppColor.btnBorderColor }]} />
            {/* <View style={[Style.selectPageIndicators, { backgroundColor: selectIndex == 2 ? GetAppColor.statusBarYellow : GetAppColor.btnBorderColor }]} /> */}
          </View>

          {selectIndex == 0 && <SubmitIdeaStep1 onNext={(obj) => { setStep1Obj(obj); setSelectIndex(selectIndex + 1); }} />}
          {selectIndex == 1 && <SubmitIdeaStep2 onNext={(dataForm) => { onSubmit(dataForm) }} />}
          {/* {selectIndex == 2 && <SubmitIdeaStep3 onNext={() => onSubmit()} step1Obj={step1Obj} step2Obj={step2Obj} />} */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default memo(SubmitIdeaScreen);