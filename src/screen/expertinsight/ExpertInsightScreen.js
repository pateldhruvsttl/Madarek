import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../component/commonheader/CommonHeader";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ExpertInsightStyle from "./ExpertInsightStyle";
import IdeaExpert from "./IdeaExpert";
import GeneralExpert from "./GeneralExpert";
import ContestExpert from "./ContestExpert";
import { Label } from "../../utils/StringUtil";
import IdeasFilter from "../../component/filter/IdeasFilter";
import { deviceId } from "../../utils/Constant";
import ExpertInsightList from "../../model/ExpertInsightList";
import { UserManager } from "../../manager/UserManager";
import { AppConfig, getLanguage } from "../../manager/AppConfig";
import { Service } from "../../service/Service";
import { EndPoints } from "../../service/EndPoints";
import { Loger } from "../../utils/Loger";

const Tab = createMaterialTopTabNavigator();

const ExpertInsightScreen = (props) => {
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [isFilter, setFilter] = useState(false);
  const [data, setData] = useState([])
  const [ideaData, setIdeaData] = useState([])
  const [contestData, setContestData] = useState([])
  const [generalData, setGeneralData] = useState([])
  useEffect(() => {
    expertList();
  }, [])
  const expertList = () => {
    const data = {
      "device_id": deviceId,
      "token": AppConfig.token,
      "frontuser_id": UserManager.userId,
      "language": getLanguage(),
      "globalkeywords": "",
      "page": "1",
      "limit": AppConfig.pageLimit,
      "sector": ""

    }
    Service.post(EndPoints.expertInsightsList, data, (res) => {

      const ideas = []
      const contest = []
      const general = []
      if (res.statusCode === '1') {
        res.data.map((ele) => {
          const model = new ExpertInsightList(ele)

          switch (ele.type) {
            case 'Idea':
              ideas.push(model)
              setIdeaData(ideas)
              break;
            case 'Contest':
              contest.push(model)
              setContestData(contest)
              break;
            case 'General':
              general.push(model)
              setGeneralData(general)
              break;
            default: null
          }

        })
      }
      else {
        showMessage(res.message)
      }
    })
  }
  const navigateScreen = (id) => {
    return props.navigation.navigate("ExpertInsightDetailWithComment", { expertId: id })
  }
  const navigateToComment = (item) => {
    return props.navigation.navigate("CommentScreen", { item: item })
  }

  return (
    <SafeAreaView style={{ height: '100%', paddingBottom: 30 }}>
      <CommonHeader
        isType={"ExpertInsight"}
        onFilter={() => setFilterVisible(!isFilterVisible)}
      />
      <View style={[ExpertInsightStyle.MainView, { height: "95%" }]}>
        <Tab.Navigator
          swipeEnabled={false}
          screenOptions={{
            tabBarLabelStyle: ExpertInsightStyle.tabHeader,
            tabBarItemStyle: ExpertInsightStyle.tabBarItem,
            tabBarIndicatorStyle: ExpertInsightStyle.itemBorder,
          }}
        >
          <Tab.Screen name={Label.Ideas} children={() => <IdeaExpert data={ideaData} navigateScreen={navigateScreen} navigateToComment={navigateToComment} />} />
          <Tab.Screen name={Label.Contest} children={() => <ContestExpert data={contestData} navigateScreen={navigateScreen} navigateToComment={navigateToComment} />} />
          <Tab.Screen name={Label.General} children={() => <GeneralExpert data={generalData} navigateScreen={navigateScreen} navigateToComment={navigateToComment} />} />
        </Tab.Navigator>
      </View>
      <IdeasFilter
        visible={isFilterVisible}
        onClose={() => setFilterVisible(!isFilterVisible)}
        isFilter={isFilter}
      />
    </SafeAreaView>
  );
};

export default ExpertInsightScreen;
