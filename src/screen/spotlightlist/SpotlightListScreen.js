import React, { memo, useEffect, useState } from "react";
import {
  View,
  Text,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../component/commonheader/CommonHeader";
import ViewMoreSpotlights from "../../component/spotlightList/ViewMoreSpotlights";
import { Label } from "../../utils/StringUtil";
import { Service } from "../../service/Service";
import { EndPoints } from "../../service/EndPoints";
import expertSpotlight from "../../model/OpenChallengesModel";
import IdeasFilter from "../../component/filter/IdeasFilter";
import { UserManager } from "../../manager/UserManager";
import { Loger } from "../../utils/Loger";
import { AppConfig } from "../../manager/AppConfig";
import Style from './SpotlightListStyle'
import MadarekSportlight from "../../model/MadarekSportlight";

const Tab = createMaterialTopTabNavigator();

const SpotlightListScreen = (props) => {


  const [isTab, setTab] = useState(props?.route?.params);
  const [expertSpotlight, setExpertSpotlight] = useState([]);
  const [challengeSpotlight, setChallengeSpotlight] = useState([]);
  const [ideaSpotlight, setIdeaSpotlight] = useState([]);
  const [IdeaPageNo, setIdeaPageNo] = useState(1);
  const [ChallengePageNo, setChallengePageNo] = useState(1);
  const [ExpertPageNo, setExpertPageNo] = useState(1);


  useEffect(() => {
    if (isTab == 0)
      onSpotlight("Idea", IdeaPageNo);
    else if (isTab == 1)
      onSpotlight("Contest", ChallengePageNo);
    else if (isTab == 2)
      onSpotlight("Expert", ExpertPageNo);
  }, []);

  const onSpotlight = (type, cpage = 1) => {
    const data = {
      frontuser_id: UserManager.userId,
      searchkeywords: "",
      limit: AppConfig.pageLimit,
      page: cpage,
      spotlight_type: type,
    }

    if (cpage == 1) {
      setIdeaSpotlight([]);
      setChallengeSpotlight([]);
      setExpertSpotlight([]);
    }

    Service.post(EndPoints.madarekSpotlight, data, (res) => {

      if (type === "Idea") {
        const arr = [];
        res?.data?.map((element) => {
          let model = new MadarekSportlight(element);
          arr.push(model);
        });
        if (cpage === 1) setIdeaSpotlight(arr);
        else setIdeaSpotlight([...ideaSpotlight, ...arr]);
      }
      else if (type === "Contest") {
        const arr = [];
        res?.data?.map((element) => {
          let model = new MadarekSportlight(element);
          arr.push(model);
        });
        if (cpage === 1) setChallengeSpotlight(arr);
        else setChallengeSpotlight([...challengeSpotlight, ...arr]);
      }
      else if (type === "Expert") {
        const arr = [];
        res?.data?.map((element) => {
          let model = new MadarekSportlight(element);
          arr.push(model);
        });
        if (cpage === 1)
          setExpertSpotlight(arr);
        else
          setExpertSpotlight([...expertSpotlight, ...arr]);
      }

    },
      (err) => {
        Loger.onLog("", err);
      }
    );
  };

  const paginations = (type) => {

    if (type === "Idea") {
      setIdeaPageNo(IdeaPageNo + 1);
      onSpotlight("Idea", IdeaPageNo + 1);
    }
    else if (type === "Contest") {
      setChallengePageNo(ChallengePageNo + 1);
      onSpotlight("Contest", ChallengePageNo + 1);
    }
    else if (type === "expert") {
      setExpertPageNo(ExpertPageNo + 1);
      onSpotlight("expert", ExpertPageNo + 1);
    }
  };

  return (
    <SafeAreaView style={Style.container}>
      <CommonHeader
        isType={"SpotlightListing"}
        onMenuClick={() => {
          props.navigation.openDrawer();
        }}
      />

      <View style={Style.MainView}>
        <NavigationContainer independent={true}>
          <Tab.Navigator
            initialRouteName={isTab == 0 ? "Idea" : isTab == 1 ? "Contest" : isTab == 2 ? Label.Expert : null}
            swipeEnabled={false}
            screenOptions={{
              tabBarLabelStyle: Style.tabHeader,
              tabBarItemStyle: Style.tabBarItem,
              tabBarIndicatorStyle: Style.itemBorder,
              tabBarScrollEnabled: true,
            }}
          >
            <Tab.Screen
              listeners={{
                tabPress: (e) => {
                  setTab(0);
                  setIdeaPageNo(1);
                  onSpotlight("Idea", 1);
                },
              }}
              name={Label.Ideas}
              children={() =>
                ideaSpotlight.length > 0 ? (
                  <ViewMoreSpotlights
                    propName={{ type: "Idea", data: ideaSpotlight }}
                    navigateDetail={(id) => props.navigation.navigate("SpotlightDetail", { id: id })}
                    paginations={() => paginations("Idea")}
                  />
                ) : (
                  <Text style={Style.txtNodata}>{Label.NoDataFound}</Text>
                )
              }
            />
            <Tab.Screen
              listeners={{
                tabPress: (e) => {
                  setTab(1);
                  setChallengePageNo(1)
                  onSpotlight("Contest", 1);
                },
              }}
              name={Label.Challenges}
              children={() =>
                challengeSpotlight.length > 0 ?
                  <ViewMoreSpotlights
                    propName={{ type: "Contest", data: challengeSpotlight }}
                    navigateDetail={(item) => props.navigation.navigate("SpotlightDetail", { id: item.id })}
                    paginations={() => paginations("Contest")}
                  />
                  :
                  <Text style={Style.txtNodata}>{Label.NoDataFound}</Text>

              }
            />
            <Tab.Screen
              listeners={{
                tabPress: (e) => {
                  setTab(2);
                  setExpertPageNo(1)
                  onSpotlight("Expert", 1);
                },
              }}
              name={Label.Experts}
              children={() =>
                expertSpotlight.length > 0 ?
                  <ViewMoreSpotlights
                    propName={{ type: "expert", data: expertSpotlight }}
                    navigateDetail={(id) => { props.navigation.navigate("SpotlightDetail", { id: id }) }}
                    paginations={() => paginations("expert")}
                  /> :
                  <Text style={Style.txtNodata}>{Label.NoDataFound}</Text>

              }
            />

          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
};

export default memo(SpotlightListScreen);
