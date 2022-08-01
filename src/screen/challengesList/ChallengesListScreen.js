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
    onOpenChallenge("", "", "");
  }, []);

  const onOpenChallenge = (search, categories, sortBy) => {
    const data = {
      frontuser_id: UserManager.userId,
      searchkeywords: search,
      keywords: "",
      categories: categories,
      statusinputdata: "",
      layout: "list",
      limit: AppConfig.pageLimit,
      shortby: sortBy==1?"ASC":sortBy==2?"DESC":"",
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
  const favoriteChallenge = (id) => {
    var data = {
      "field_name": "contest_id",
      "id": id,
      "frontuser_id": UserManager.userId,
      "model": "FavoriteContests"
    }
    
    Service.post(EndPoints.challengeLikeUnlike, data, (res) => {
      const likeDislike = res?.data === 'dislike' ? true : false;
      let newOpenChallenge = [];
      newOpenChallenge = openChallenge;
      newOpenChallenge.map((ele, index) => {
        if (ele.id == id) {
          newOpenChallenge[index].favorite = likeDislike;
        }
      });
      setOpenChallenge([...newOpenChallenge]);

      let newUpcomingChallenge = [];
      newUpcomingChallenge = upcomingChallenge;
      newUpcomingChallenge.map((ele, index) => {
        if (ele.id == id) {
          newUpcomingChallenge[index].favorite = likeDislike;
        }
      });
      setUpcomingChallenge([...newUpcomingChallenge]);

      let newCloseChallenge = [];
      newCloseChallenge = closeChallenge;
      newCloseChallenge.map((ele, index) => {
        if (ele.id == id) {
          newCloseChallenge[index].favorite = likeDislike;
        }
      });
      setCloseChallenge([...newCloseChallenge]);

      let newVottingChallenge = [];
      newVottingChallenge = vottingChallenge;
      newVottingChallenge.map((ele, index) => {
        if (ele.id == id) {
          newVottingChallenge[index].favorite = likeDislike;
        }
      });
      setVottingChallenge([...newVottingChallenge]);

    }, (err) => {
      Loger.onLog('Error of likeUnlike', err)
    })
  }
  const likeChallenge = (id) => {
    var data = {
      field_name: "contest_id",
      id: id,
      frontuser_id: UserManager.userId,
      model: "LikedislikeContests",
    };

    Service.post(EndPoints.challengeLikeUnlike, data, (res) => {
      const likeDislike = res?.data === 'dislike' ? true : false;
      let newOpenChallenge = [];
      newOpenChallenge = openChallenge;
      newOpenChallenge.map((ele, index) => {
        if (ele.id == id) {
          if (likeDislike == 1) {
            newOpenChallenge[index].like = likeDislike
            newOpenChallenge[index].totalLike = Number(newOpenChallenge[index].totalLike) + 1;
          }
          else {
            newOpenChallenge[index].like = likeDislike
            newOpenChallenge[index].totalLike = Number(newOpenChallenge[index].totalLike) - 1;
          }
        }
      });
      setOpenChallenge([...newOpenChallenge]);

      let newUpcomingChallenge = [];
      newUpcomingChallenge = upcomingChallenge;
      newUpcomingChallenge.map((ele, index) => {
        if (ele.id == id) {
          if (likeDislike == 1) {
            newUpcomingChallenge[index].like = likeDislike
            newUpcomingChallenge[index].totalLike = Number(newUpcomingChallenge[index].totalLike) + 1;
          }
          else {
            newUpcomingChallenge[index].like = likeDislike
            newUpcomingChallenge[index].totalLike = Number(newUpcomingChallenge[index].totalLike) - 1;
          }
        }
      });
      setUpcomingChallenge([...newUpcomingChallenge]);

      let newCloseChallenge = [];
      newCloseChallenge = closeChallenge;
      newCloseChallenge.map((ele, index) => {
        if (ele.id == id) {
          if (likeDislike == 1) {
            newCloseChallenge[index].like = likeDislike
            newCloseChallenge[index].totalLike = Number(newCloseChallenge[index].totalLike) + 1;
          }
          else {
            newCloseChallenge[index].like = likeDislike
            newCloseChallenge[index].totalLike = Number(newCloseChallenge[index].totalLike) - 1;
          }
        }
      });
      setCloseChallenge([...newCloseChallenge]);

      let newVottingChallenge = [];
      newVottingChallenge = vottingChallenge;
      newVottingChallenge.map((ele, index) => {
        if (ele.id == id) {
          if (likeDislike == 1) {
            newVottingChallenge[index].like = likeDislike
            newVottingChallenge[index].totalLike = Number(newVottingChallenge[index].totalLike) + 1;
          }
          else {
            newVottingChallenge[index].like = likeDislike
            newVottingChallenge[index].totalLike = Number(newVottingChallenge[index].totalLike) - 1;
          }
        }
      });
      setVottingChallenge([...newVottingChallenge]);

    }, (err) => {
      Loger.onLog('Error of likeUnlike', err)
    })
  }

  // const data = props?.route?.params?.data ? props?.route?.params?.data : sliderdata
  onFilterClose = (categories, sortBy) => {
    console.log('====================================');
    console.log('category and sortby',categories, sortBy);
    console.log('====================================');
    setFilterVisible(!isFilterVisible);
    if (categories.toString() == "" || sortBy != 0) {
      onOpenChallenge("", categories.toString(), sortBy);
    }
  };
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
            initialRouteName={
              tab == 0
                ? Label.Open
                : tab == 1
                ? Label.Upcoming
                : tab == 2
                ? Label.Closed
                : Label.Voting
            }
            swipeEnabled={false}
            screenOptions={{
              tabBarLabelStyle: ListStyle.tabHeader,
              tabBarItemStyle: ListStyle.tabBarItem,
              tabBarIndicatorStyle: ListStyle.itemBorder,
              tabBarScrollEnabled: true,
            }}
          >
            <Tab.Screen
              name={Label.Open}
              children={() =>
                openChallenge.length > 0 ? (
                  <ViewMoreChallenges
                    propName={{ type: "OpenChallenge", data: openChallenge }}
                    favoriteChallenge={(id) => favoriteChallenge(id)}
                    likeChallenge={(id) => likeChallenge(id)}
                    navigateDetail={(id) =>
                      props.navigation.navigate("ChallengeDetail", { id: id })
                    }
                  />
                ) : (
                  <Text style={ListStyle.txtNodata}>No data found</Text>
                )
              }
            />
            <Tab.Screen
              name={Label.Upcoming}
              children={() =>
                upcomingChallenge.length > 0 ? 
                  <ViewMoreChallenges
                    favoriteChallenge={(id) => favoriteChallenge(id)}
                    likeChallenge={(id) => likeChallenge(id)}
                    navigateDetail={(item) =>
                      props.navigation.navigate("ChallengeDetail", {id: item.id})}
                  />
                 : 
                  <Text style={ListStyle.txtNodata}>No data found</Text>
                
              }
            />
            <Tab.Screen
              name={Label.Closed}
              children={() =>
                closeChallenge.length > 0 ?
                  <ViewMoreChallenges
                    propName={{ type: "ClosedChallenge", data: closeChallenge }}
                    favoriteChallenge={(id) => favoriteChallenge(id)}
                    likeChallenge={(id) => likeChallenge(id)}
                    navigateDetail={(id) => { props.navigation.navigate("ChallengeDetail", { id: id }) }}
                  />:
                  <Text style={ListStyle.txtNodata}>No data found</Text>
                
              }
            />
            <Tab.Screen
              name={Label.Voting}
              children={() =>
                vottingChallenge.length > 0 ? (
                  <ViewMoreChallenges
                    propName={{ type: "Challenge", data: vottingChallenge }}
                    favoriteChallenge={(id) => favoriteChallenge(id)}
                    likeChallenge={(id) => likeChallenge(id)}
                    navigateDetail={(item) =>
                      props.navigation.navigate("ChallengeDetail", {
                        id: item.id,
                      })
                    }
                  />
                ) : (
                  <Text style={ListStyle.txtNodata}>No data found</Text>
                )
              }
            />
          </Tab.Navigator>
        </NavigationContainer>
      </View>

      <IdeasFilter
        visible={isFilterVisible}
        type="Challange"
        onClose={(categories, sector, sortBy) =>
          onFilterClose(categories, sortBy)
        }
      />
    </SafeAreaView>
  );
};

export default memo(ChallengesListScreen);
