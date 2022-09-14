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
  const [ideaPageNo, setIdeaPageNo] = useState(1)
  const [contestPageNo, setContestPageNo] = useState(1)
  const [generalPageNo, setGeneralPageNo] = useState(1)

  useEffect(() => {
    expertList();
  }, [])

  const expertList = (page = 1) => {
    const data = {
      "device_id": deviceId,
      "token": AppConfig.token,
      "frontuser_id": UserManager.userId,
      "language": getLanguage(),
      "globalkeywords": "",
      "page": page,
      "limit": AppConfig.pageLimit,
      "sector": ""

    }
    if (page == 1) {
      setIdeaData([])
      setContestData([])
      setGeneralData([])
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
              if (page === 1) setIdeaData(ideas)
              else setIdeaData([...ideaData, ...ideas])
              break;
            case 'Contest':
              contest.push(model)
              if (page === 1) setContestData(contest)
              else setContestData(...contestData, ...contest)
              break;
            case 'General':
              general.push(model)
              if (page === 1) setGeneralData(general)
              else setGeneralData(...generalData, ...general)
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
  const navigateScreen = (id, type) => {
    if (type != "General")
      return props.navigation.navigate("ExpertInsightTypeDetail", { id: id })
    else
      return props.navigation.navigate("ExpertInsightDetailWithComment", { id: id })
  }

  const navigateToComment = (item) => {
    return props.navigation.navigate("CommentScreen", { item: item })
  }

  const onLikeIdeas = (id, type) => {
    var data = {
      "field_name": "formdata_id",
      "id": id,
      "frontuser_id": UserManager.userId,
      "model": "LikedislikeGeneral"
    }

    Service.post(EndPoints.ideaLikeUnlike, data, (res) => {

      const likeDislike = res?.data === 'dislike' ? 1 : 0;
      const expertInsight = type == "Ideas" ? ideaData : type == "Contest" ? contestData : generalData
      expertInsight.map((ele, index) => {
        if (ele.id == id) {
          if (likeDislike == 1) {
            expertInsight[index].like = likeDislike
            expertInsight[index].totalLikes = Number(expertInsight[index].totalLikes) + 1;
          }
          else {
            expertInsight[index].like = likeDislike
            expertInsight[index].totalLikes = Number(expertInsight[index].totalLikes) - 1;
          }
        }
      })
      type == "Ideas" ? setIdeaData([...expertInsight]) : type == "Contest" ? setContestData([...expertInsight]) : setGeneralData([...expertInsight])

    }, (err) => {
      Loger.onLog("err of likeUnlike", err)
    })
  }

  const paginations = (type) => {

    if (type === "IdeaExpert") {
      setIdeaPageNo(ideaPageNo + 1);
      expertList(ideaPageNo + 1);
    } else if (type === "ContestExpert") {
      setContestPageNo(contestPageNo + 1);
      expertList(contestPageNo + 1);
    } else if (type === "GeneralExpert") {
      setGeneralPageNo(generalPageNo + 1);
      expertList(generalPageNo + 1);
    }
  };

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
          <Tab.Screen name={Label.Ideas} children={() => <IdeaExpert data={ideaData}
            navigateScreen={navigateScreen}
            navigateToComment={navigateToComment}
            onLikeIdeas={(id, type) => onLikeIdeas(id, type)}
            paginations={() => paginations('IdeaExpert')}
          />} />

          <Tab.Screen name={Label.Contest} children={() => <ContestExpert data={contestData}
            navigateScreen={navigateScreen}
            navigateToComment={navigateToComment}
            onLikeIdeas={(id, type) => onLikeIdeas(id, type)}
            paginations={() => paginations('ContestExpert')}
          />} />

          <Tab.Screen name={Label.General} children={() => <GeneralExpert data={generalData}
            navigateScreen={navigateScreen}
            navigateToComment={navigateToComment}
            onLikeIdeas={(id, type) => onLikeIdeas(id, type)}
            paginations={() => paginations('GeneralExpert')}
          />} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default ExpertInsightScreen;
