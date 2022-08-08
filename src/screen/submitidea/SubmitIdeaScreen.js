import React, { memo, useState } from "react";
import { View, Text, ScrollView, ScrollViewBase, StatusBar, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../component/commonheader/CommonHeader";
import SubmitIdeaStep1 from "../../component/submitideas/SubmitIdeaStep1";
import SubmitIdeaStep2 from "../../component/submitideas/SubmitIdeaStep2";
import SubmitIdeaStep3 from "../../component/submitideas/SubmitIdeaStep3";
import { GetAppColor } from "../../utils/Colors";
import Style from "./SubmitIdeaScreenStyle";

function SubmitIdeaScreen(props) {
  const [selectIndex, setSelectIndex] = useState(0);

  const [step1Obj, setStep1Obj] = useState(null);
  const [step2Obj, setStep2Obj] = useState(null);

  const onSubmit = () => {
    props.navigation.navigate("UserDashboardScreen");
  }

  return (
    <SafeAreaView style={Style.MainView}>
      <CommonHeader isType={"SubmitIdeaScreen"}/>

      <ScrollView>
        <View style={Style.containerView}>
          <View style={Style.selectPageIndicatorsView}>
            <View style={[Style.selectPageIndicators, { backgroundColor: selectIndex == 0 ? GetAppColor.statusBarYellow : GetAppColor.btnBorderColor }]} />
            <View style={[Style.selectPageIndicators, { backgroundColor: selectIndex == 1 ? GetAppColor.statusBarYellow : GetAppColor.btnBorderColor }]} />
            <View style={[Style.selectPageIndicators, { backgroundColor: selectIndex == 2 ? GetAppColor.statusBarYellow : GetAppColor.btnBorderColor }]} />
            <View style={[Style.selectPageIndicators, { backgroundColor: selectIndex == 3 ? GetAppColor.statusBarYellow : GetAppColor.btnBorderColor }]} />
          </View>

          {selectIndex == 0 && <SubmitIdeaStep1 onNext={(obj) => {setStep1Obj(obj); setSelectIndex(selectIndex + 1);}} />}
          {selectIndex == 1 && <SubmitIdeaStep2 onNext={(obj) => {setStep2Obj(obj); setSelectIndex(selectIndex + 1);}} data = {step1Obj}/>}
          {selectIndex == 2 && <SubmitIdeaStep3 onNext={() => onSubmit()} step1Obj={step1Obj} step2Obj={step2Obj} />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default memo(SubmitIdeaScreen);