import React, { memo, useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ScrollViewBase,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../component/commonheader/CommonHeader";
import ListStyle from "./ChallengesListStyle";
import ViewMoreChallenges from "../../component/challengelist/listing/ViewMoreChallenges";
import { Label } from "../../utils/StringUtil";
import { Service } from "../../service/Service";
import { EndPoints } from "../../service/EndPoints";
import OpenChallenge from "../../model/OpenChallengesModel";
import IdeasFilter from "../../component/filter/IdeasFilter";
import { UserManager } from "../../manager/UserManager";

const Tab = createMaterialTopTabNavigator();

const ChallengesListScreen = (props) => {
  const [openChallenge, setOpenChallenge] = useState([]);
  const [upcomingChallenge, setUpcomingChallenge] = useState([]);
  const [closeChallenge, setCloseChallenge] = useState([]);
  const [vottingChallenge, setVottingChallenge] = useState([]);
  const [isFilterVisible, setFilterVisible] = useState(false);

  useEffect(() => {
    onOpenChallenge();
  }, []);

  const onOpenChallenge = () => {
    const data = {
      frontuser_id: UserManager.userId,
      searchkeywords: "",
      keywords: "",
      categories: "",
      statusinputdata: "",
      layout: "list",
      limit: 10,
    };
    Service.post(
      EndPoints.openChallenges,
      data,
      (res) => {
        var opChallenges = [];
        var coChallenges = [];
        var voChallenges = [];
        var clChallenges = [];
        res.data.forEach((element) => {
          switch (element.submission_status) {
            case "OPEN FOR SUBMISSION":
                opChallenges.push(new OpenChallenge(element));
              break;
            case "COMING SOON":
                coChallenges.push(new OpenChallenge(element));
              break;
            case "OPEN FOR VOTING":
                voChallenges.push(new OpenChallenge(element));
              break;
            case "CLOSED":
                clChallenges.push(new OpenChallenge(element));
              break;
            default:
              break;
          }
         
        });
        setOpenChallenge(opChallenges);
        setUpcomingChallenge(coChallenges);
        setCloseChallenge(clChallenges);
        setVottingChallenge(voChallenges);
      },
      (err) => {
        Loger.onLog("", err);
      }
    );
  };

  // const data = props?.route?.params?.data ? props?.route?.params?.data : sliderdata

  return (
    <SafeAreaView style={ListStyle.container}>
      <CommonHeader
        isType={"ChallengesListing"}
        onMenuClick={() => {
          props.navigation.openDrawer();
        }}
        onFilter={() => setFilterVisible(!isFilterVisible)}
      />

      <View style={ListStyle.MainView}>
        <NavigationContainer independent={true}>
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: ListStyle.tabHeader,
              tabBarItemStyle: ListStyle.tabBarItem,
              tabBarIndicatorStyle: ListStyle.itemBorder,
              tabBarScrollEnabled: true,
            }}
          >
            <Tab.Screen
              name={Label.Open}
              children={() => (
                <ViewMoreChallenges
                  propName={{ type: "OpenChallenge", data: openChallenge }}
                  navigateDetail={(item) =>
                    props.navigation.navigate("ChallengeDetail", item)
                  }
                />
              )}
            />
            <Tab.Screen
              name={Label.Upcoming}
              children={() => (
                <ViewMoreChallenges
                  propName={{ type: "UpcomingChallenge", data: upcomingChallenge }}
                  navigateDetail={(item) =>
                    props.navigation.navigate("ChallengeDetail", item)
                  }
                />
              )}
            />
            <Tab.Screen
              name={Label.Closed}
              children={() => (
                <ViewMoreChallenges
                  propName={{ type: "ClosedChallenge", data: closeChallenge }}
                  navigateDetail={(item) =>
                    props.navigation.navigate("ChallengeDetail", item)
                  }
                />
              )}
            />
            <Tab.Screen
              name={Label.Voting}
              children={() => (
                <ViewMoreChallenges
                  propName={{ type: "Challenge", data: vottingChallenge }}
                  navigateDetail={(item) =>
                    props.navigation.navigate("ChallengeDetail", item)
                  }
                />
              )}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
      <IdeasFilter
        visible={isFilterVisible}
        onClose={() => setFilterVisible(!isFilterVisible)}
      />
    </SafeAreaView>
  );
};

export default memo(ChallengesListScreen);
