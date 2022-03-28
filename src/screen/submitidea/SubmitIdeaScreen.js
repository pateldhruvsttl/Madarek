import React, { memo } from "react";
import { View, Text, ScrollView, ScrollViewBase, StatusBar, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../component/commonheader/CommonHeader";
import Style from "./SubmitIdeaScreenStyle";

function SubmitIdeaScreen() {
  return (
    <SafeAreaView style={Style.MainView}>
      <CommonHeader isType={"SubmitIdeaScreen"} onMenuClick={() => { props.navigation.openDrawer() }} />

      <View style={Style.containerView}>
            <Text>hello</Text>
      </View>
    </SafeAreaView>
  );
}
export default memo(SubmitIdeaScreen);