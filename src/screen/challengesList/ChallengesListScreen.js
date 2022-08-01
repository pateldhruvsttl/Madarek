import React, { memo, useEffect, useState } from "react";
import {
  View,
  Text,
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


  const [isTab, setTab] = useState(props?.route?.params);

  const [isFilterVisible, setFilterVisible] = useState(false);
  const [isCategories, setCategories] = useState("");
  const [isSortBy, setSortBy] = useState("");

  const [openChallenge, setOpenChallenge] = useState([]);
  const [upcomingChallenge, setUpcomingChallenge] = useState([]);
  const [closeChallenge, setCloseChallenge] = useState([]);

  const [isOpenChallengePageNo, setOpenChallengePageNo] = useState(1);
  const [isUpCommingChallengePageNo, setUpCommingChallengePageNo] = useState(1);
  const [isCloseChallengePageNo, setCloseChallengePageNo] = useState(1);


  useEffect(() => {

    if (isTab == 0)
      onOpenChallenge("open_submission", isCategories, isSortBy, isOpenChallengePageNo);
    else if (isTab == 1)
      onOpenChallenge("coming_soon", isCategories, isSortBy, isUpCommingChallengePageNo);
    else if (isTab == 2)
      onOpenChallenge("closed", isCategories, isSortBy, isCloseChallengePageNo);
  }, []);

  const onOpenChallenge = (type, categories, sortBy, cpage = 1) => {

    const data = {
      frontuser_id: UserManager.userId,
      searchkeywords: "",
      keywords: "",
      categories: categories,
      statusinputdata: type,
      layout: "list",
      limit: AppConfig.pageLimit,
      page: cpage,
      shortby: sortBy == 1 ? "ASC" : sortBy == 2 ? "DESC" : "",
    };

    if (cpage == 1) {
      setCloseChallenge([]);
      setUpcomingChallenge([]);
      setOpenChallenge([]);
    }

    Service.post(EndPoints.openChallenges, data, (res) => {

      if (type === "closed") {
        const arr = [];
        res?.data?.map((element) => {
          let model = new OpenChallenge(element);
          arr.push(model);
        });
        if (cpage === 1) setCloseChallenge(arr);
        else setCloseChallenge([...closeChallenge, ...arr]);
      }
      else if (type === "coming_soon") {
        const arr = [];
        res?.data?.map((element) => {
          let model = new OpenChallenge(element);
          arr.push(model);
        });
        if (cpage === 1) setUpcomingChallenge(arr);
        else setUpcomingChallenge([...upcomingChallenge, ...arr]);
      }
      else if (type === "open_submission") {
        const arr = [];
        res?.data?.map((element) => {
          let model = new OpenChallenge(element);
          arr.push(model);
        });
        if (cpage === 1)
          setOpenChallenge(arr);
        else
          setOpenChallenge([...openChallenge, ...arr]);
      }

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

  onFilterClose = (categories, sortBy) => {

    setCategories(categories.toString());
    setSortBy(sortBy);

    setFilterVisible(!isFilterVisible);

    Loger.onLog("=======>", isTab);
    if (categories.toString() == "" || sortBy != 0) {
      if (isTab === undefined || isTab === 0)
        onOpenChallenge("open_submission", categories.toString(), sortBy, 1);
      else if (isTab === 1)
        onOpenChallenge("coming_soon", categories.toString(), sortBy, 1);
      else if (isTab === 2)
        onOpenChallenge("closed", categories.toString(), sortBy, 1);

      setOpenChallengePageNo(1);
      setUpCommingChallengePageNo(1);
      setCloseChallengePageNo(1);
    }
  };

  const paginations = (type) => {

    if (type === "open_submission") {
      setOpenChallengePageNo(isOpenChallengePageNo + 1);
      onOpenChallenge("open_submission", isCategories, isSortBy, isOpenChallengePageNo + 1);
    }
    else if (type === "coming_soon") {
      setUpCommingChallengePageNo(isUpCommingChallengePageNo + 1);
      onOpenChallenge("coming_soon", isCategories, isSortBy, isUpCommingChallengePageNo + 1);
    }
    else if (type === "closed") {
      setCloseChallengePageNo(isCloseChallengePageNo + 1);
      onOpenChallenge("closed", isCategories, isSortBy, isCloseChallengePageNo + 1);
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
            initialRouteName={isTab == 0 ? Label.Open : isTab == 1 ? Label.Upcoming : isTab == 2 ? Label.Closed : null}
            swipeEnabled={false}
            screenOptions={{
              tabBarLabelStyle: ListStyle.tabHeader,
              tabBarItemStyle: ListStyle.tabBarItem,
              tabBarIndicatorStyle: ListStyle.itemBorder,
              tabBarScrollEnabled: true,
            }}
          >
            <Tab.Screen
              listeners={{
                tabPress: (e) => {
                  setTab(0);
                  setOpenChallengePageNo(1);
                  onOpenChallenge("open_submission", isCategories, isSortBy, 1);
                },
              }}
              name={Label.Open}
              children={() =>
                openChallenge.length > 0 ? (
                  <ViewMoreChallenges
                    propName={{ type: "OpenChallenge", data: openChallenge }}
                    favoriteChallenge={(id) => favoriteChallenge(id)}
                    likeChallenge={(id) => likeChallenge(id)}
                    navigateDetail={(id) => props.navigation.navigate("ChallengeDetail", { id: id })}
                    paginations={() => paginations("open_submission")}
                  />
                ) : (
                  <Text style={ListStyle.txtNodata}>No data found</Text>
                )
              }
            />
            <Tab.Screen
              listeners={{
                tabPress: (e) => {
                  setTab(1);
                  setUpCommingChallengePageNo(1)
                  onOpenChallenge("coming_soon", isCategories, isSortBy, 1);
                },
              }}
              name={Label.Upcoming}
              children={() =>
                upcomingChallenge.length > 0 ?
                  <ViewMoreChallenges
                    propName={{ type: "UpCommingChallenge", data: upcomingChallenge }}
                    favoriteChallenge={(id) => favoriteChallenge(id)}
                    likeChallenge={(id) => likeChallenge(id)}
                    navigateDetail={(item) => props.navigation.navigate("ChallengeDetail", { id: item.id })}
                    paginations={() => paginations("coming_soon")}
                  />
                  :
                  <Text style={ListStyle.txtNodata}>No data found</Text>

              }
            />
            <Tab.Screen
              listeners={{
                tabPress: (e) => {
                  setTab(2);
                  setCloseChallengePageNo(1)
                  onOpenChallenge("closed", isCategories, isSortBy, 1);
                },
              }}
              name={Label.Closed}
              children={() =>
                closeChallenge.length > 0 ?
                  <ViewMoreChallenges
                    propName={{ type: "ClosedChallenge", data: closeChallenge }}
                    favoriteChallenge={(id) => favoriteChallenge(id)}
                    likeChallenge={(id) => likeChallenge(id)}
                    navigateDetail={(id) => { props.navigation.navigate("ChallengeDetail", { id: id }) }}
                    paginations={() => paginations("closed")}
                  /> :
                  <Text style={ListStyle.txtNodata}>No data found</Text>

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
