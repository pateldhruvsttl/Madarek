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
import { Loger } from "../../utils/Loger";
import { AppConfig } from "../../manager/AppConfig";

const Tab = createMaterialTopTabNavigator();

const ChallengesListScreen = (props) => {
  const [openChallenge, setOpenChallenge] = useState([]);
  const [upcomingChallenge, setUpcomingChallenge] = useState([]);
  const [closeChallenge, setCloseChallenge] = useState([]);
  const [vottingChallenge, setVottingChallenge] = useState([]);
  const [isFilterVisible, setFilterVisible] = useState(false);
  const tab = props.route.params;

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
      limit: AppConfig.pageLimit,
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
  const likeChallenge = (id) => {
    var data = {
      "field_name": "contest_id",
      "id": id,
      "frontuser_id": UserManager.userId,
      "model": "LikedislikeContests"
    }

    Service.post(EndPoints.challengeLikeUnlike, data, (res) => {
      const likeDislike = res?.data === 'dislike' ? false : true;
      let newOpenChallenge = [];
      newOpenChallenge = openChallenge;
      newOpenChallenge.map((ele, index) => {
        if (ele.id == id) {
          newOpenChallenge[index].favoriteChallenge = likeDislike;
        }
      });
      setOpenChallenge([...newOpenChallenge]);

      let newUpcomingChallenge = [];
      newUpcomingChallenge = upcomingChallenge;
      newUpcomingChallenge.map((ele, index) => {
        if (ele.id == id) {
          newUpcomingChallenge[index].favoriteChallenge = likeDislike;
        }
      });
      setUpcomingChallenge([...newUpcomingChallenge]);

      let newCloseChallenge = [];
      newCloseChallenge = closeChallenge;
      newCloseChallenge.map((ele, index) => {
        if (ele.id == id) {
          newCloseChallenge[index].favoriteChallenge = likeDislike;
        }
      });
      setCloseChallenge([...newCloseChallenge]);

      let newVottingChallenge = [];
      newVottingChallenge = vottingChallenge;
      newVottingChallenge.map((ele, index) => {
        if (ele.id == id) {
          newVottingChallenge[index].favoriteChallenge = likeDislike;
        }
      });
      setVottingChallenge([...newVottingChallenge]);

    }, (err) => {
      Loger.onLog('Error of likeUnlike', err)
    })
  }

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
            initialRouteName={tab == 0 ? Label.Open : tab == 1 ? Label.Upcoming : tab == 2 ? Label.Closed : Label.Voting}
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
                openChallenge.length > 0 ?
                  <ViewMoreChallenges
                    propName={{ type: "OpenChallenge", data: openChallenge }}
                    likeChallenge={(id) => likeChallenge(id)}
                    navigateDetail={(id) => props.navigation.navigate("ChallengeDetail", { id: id })}
                  />
                  :
                  <Text style={ListStyle.txtNodata}>No data found</Text>
              )}
            />
            <Tab.Screen
              name={Label.Upcoming}
              children={() => (
                upcomingChallenge.length > 0 ?
                  <ViewMoreChallenges
                    propName={{ type: "UpcomingChallenge", data: upcomingChallenge }}
                    likeChallenge={(id) => likeChallenge(id)}
                    navigateDetail={(item) =>
                      props.navigation.navigate("ChallengeDetail", { id: item.id })
                    }
                  />
                  :
                  <Text style={ListStyle.txtNodata}>No data found</Text>
              )}
            />
            <Tab.Screen
              name={Label.Closed}
              children={() => (
                closeChallenge.length > 0 ?
                  <ViewMoreChallenges
                    propName={{ type: "ClosedChallenge", data: closeChallenge }}
                    likeChallenge={(id) => likeChallenge(id)}
                    navigateDetail={(id) => {props.navigation.navigate("ChallengeDetail", { id: id })}}
                  /> :
                  <Text style={ListStyle.txtNodata}>No data found</Text>
              )}
            />
            <Tab.Screen
              name={Label.Voting}
              children={() => (
                vottingChallenge.length > 0 ?
                  <ViewMoreChallenges
                    propName={{ type: "Challenge", data: vottingChallenge }}
                    likeChallenge={(id) => likeChallenge(id)}
                    navigateDetail={(item) =>
                      props.navigation.navigate("ChallengeDetail", { id: item.id })
                    }
                  /> :
                  <Text style={ListStyle.txtNodata}>No data found</Text>

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
