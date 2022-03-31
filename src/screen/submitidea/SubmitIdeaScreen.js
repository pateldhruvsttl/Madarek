import React, { memo, useState } from "react";
import { View, Text, ScrollView, ScrollViewBase, StatusBar, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../component/commonheader/CommonHeader";
import SubmitIdeaStep1 from "../../component/submitideas/SubmitIdeaStep1";
import SubmitIdeaStep2 from "../../component/submitideas/SubmitIdeaStep2";
import SubmitIdeaStep3 from "../../component/submitideas/SubmitIdeaStep3";
import SubmitIdeaStep4 from "../../component/submitideas/SubmitIdeaStep4";
import { GetAppColor } from "../../utils/Colors";
import { Loger } from "../../utils/Loger";
import Style from "./SubmitIdeaScreenStyle";

function SubmitIdeaScreen(props) {
  const [selectIndex, setSelectIndex] = useState(0);

  const [step1Obj, setStep1Obj] = useState(null);
  const [step2Obj, setStep2Obj] = useState(null);
  const [step3Obj, setStep3Obj] = useState(null);

  const onSubmit = () => {

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
          {selectIndex == 1 && <SubmitIdeaStep2 onNext={(obj) => {setStep2Obj(obj); setSelectIndex(selectIndex + 1);}} />}
          {selectIndex == 2 && <SubmitIdeaStep3 onNext={(obj) => {setStep3Obj(obj); setSelectIndex(selectIndex + 1);}} />}
          {selectIndex == 3 && <SubmitIdeaStep4 onNext={() => onSubmit()} step1Obj={step1Obj} step2Obj={step2Obj} step3Obj={step3Obj}/>}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default memo(SubmitIdeaScreen);