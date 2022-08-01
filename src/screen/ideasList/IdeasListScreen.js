import React, { memo, useEffect } from "react";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../component/commonheader/CommonHeader";
import Style from "./IdeasListStyle";

import AllIdeas from "../../component/homescreen/itemList/ViewMoreIdeas";
import { Label } from "../../utils/StringUtil";
import { useState } from "react";
import IdeaList from "../../model/IdeaList";
import { EndPoints } from "../../service/EndPoints";
import { Service } from "../../service/Service";
import { Loger } from "../../utils/Loger";
import { AppConfig } from "../../manager/AppConfig";
import IdeasFilter from "../../component/filter/IdeasFilter";
import { UserManager } from "../../manager/UserManager";

const Tab = createMaterialTopTabNavigator();

const IdeasListScreen = (props) => {
  const [allIdeaArr, setaAllIdeaArr] = useState([]);
  const [newIdeaArr, setNewIdeaArr] = useState([]);
  const [popularIdeaArr, setPopularIdeaArr] = useState([]);
  const [winningIdeaArr, setWinningIdeaArr] = useState([]);
  const [isFilterVisible, setFilterVisible] = useState(false);

  // const [allIdeaArr, setaAllIdeaArr] = useState([]);
  const [allIdeaArrPageNo, setAllIdeaArrPageNo] = useState(1);

  // const [newIdeaArr, setNewIdeaArr] = useState([]);
  const [newIdeaArrPageNo, setNewIdeaArrPageNo] = useState(1);

  // const [popularIdeaArr, setPopularIdeaArr] = useState([]);
  const [popularIdeaArrPageNo, setPopularIdeaArrPageNo] = useState(1);

  // const [winningIdeaArr, setWinningIdeaArr] = useState([]);
  const [winningIdeaArrPageNo, setWinningIdeaArrPageNo] = useState(1);

  // const [isFilterVisible, setFilterVisible] = useState(false);

  const tab = props.route.params;
  useEffect(() => {
    if (tab === undefined || tab === 0)
      onIdeas("all", "", "", "", allIdeaArrPageNo);
    else if (tab === 1) onIdeas("latest", "", "", "", newIdeaArrPageNo);
    else if (tab === 2) onIdeas("popular", "", "", "", popularIdeaArrPageNo);
    else if (tab === 3) onIdeas("winning", "", "", "", winningIdeaArrPageNo);
    else onIdeas("all", "", "", "", allIdeaArrPageNo);
  }, []);

  onFilterClose = (categories, sector, sortBy) => {
    setFilterVisible(!isFilterVisible);
    if (categories.toString() != "" || sortBy != 0 || sector.toString() != "") {
      if (tab === undefined || tab === 0)
        onIdeas("all", categories.toString(), sector.toString(), sortBy);
      else if (tab === 1)
        onIdeas("latest", categories.toString(), sector.toString(), sortBy);
      else if (tab === 2)
        onIdeas("popular", categories.toString(), sector.toString(), sortBy);
      else if (tab === 3)
        onIdeas("winning", categories.toString(), sector.toString(), sortBy);
      else onIdeas("all", categories.toString(), sector.toString(), sortBy);
    }
  };

  // setaAllIdeaArr([]);
  // setNewIdeaArr([]);
  // setPopularIdeaArr([]);
  // setWinningIdeaArr([]);

  const onIdeas = (tabType = "all", categories="", sector="", sortBy="", cpage = 1) => {
    const data = {
      frontuser_id: UserManager.userId,
      limit: AppConfig.pageLimit,
      page: cpage,
      categories: categories,
      sectors: sector,
      listtype: tabType,
      language: AppConfig.lang,
      shortby: sortBy == 1 ? "ASC" : sortBy == 2 ? "DESC" : "",
    };

    if (cpage == 1) {
      setaAllIdeaArr([]);
      setNewIdeaArr([]);
      setPopularIdeaArr([]);
      setWinningIdeaArr([]);
    }

    Service.post(
      EndPoints.ideaList,
      data,
      (res) => {
        if (tabType === "all") {
          const allIdeaArrTmp = [];
          res?.data?.allIdea.map((element) => {
            let model = new IdeaList(element);
            allIdeaArrTmp.push(model);
          });
          if (cpage === 1) setaAllIdeaArr(allIdeaArrTmp);
          else setaAllIdeaArr([...allIdeaArr, ...allIdeaArrTmp]);
        } else if (tabType === "latest") {
          const newIdeaArrTmp = [];
          res?.data?.newIdea.map((element) => {
            let model = new IdeaList(element);
            newIdeaArrTmp.push(model);
          });
          if (cpage === 1) setNewIdeaArr(newIdeaArrTmp);
          else setNewIdeaArr([...newIdeaArr, ...newIdeaArrTmp]);
        } else if (tabType === "popular") {
          const popularIdeaArrTmp = [];
          res?.data?.popularIdea.map((element) => {
            let model = new IdeaList(element);
            popularIdeaArrTmp.push(model);
          });
          if (cpage === 1) setPopularIdeaArr(popularIdeaArrTmp);
          else setPopularIdeaArr([...popularIdeaArr, ...popularIdeaArrTmp]);
        } else if (tabType === "winning") {
          const winningIdeaArrTmp = [];
          res?.data?.winningIdea.map((element) => {
            let model = new IdeaList(element);
            winningIdeaArrTmp.push(model);
          });
          if (cpage === 1) setWinningIdeaArr(winningIdeaArrTmp);
          else setWinningIdeaArr([...winningIdeaArr, ...winningIdeaArrTmp]);
        }
      },
      (err) => {
        // Loger.onLog(" ideaList error ------->", err)
      }
    );
  };

  const favoriteIdea = (id) => {
    var data = {
      field_name: "idea_id",
      id: id,
      frontuser_id: UserManager.userId,
      model: "FavoriteIdeas",
    };

    Service.post(
      EndPoints.ideaLikeUnlike,
      data,
      (res) => {
        const likeDislike = res?.data === "dislike" ? true : false;

        let newAllIdeasArr = [];
        newAllIdeasArr = allIdeaArr;
        newAllIdeasArr.map((ele, index) => {
          if (ele.id == id) {
            newAllIdeasArr[index].favorite = likeDislike;
          }
        });
        setaAllIdeaArr([...newAllIdeasArr]);

        let updateNewIdeaArr = [];
        updateNewIdeaArr = newIdeaArr;
        updateNewIdeaArr.map((ele, index) => {
          if (ele.id == id) {
            updateNewIdeaArr[index].favorite = likeDislike;
          }
        });
        setNewIdeaArr([...updateNewIdeaArr]);

        let updatePopularIdeaArr = [];
        updatePopularIdeaArr = popularIdeaArr;
        updatePopularIdeaArr.map((ele, index) => {
          if (ele.id == id) {
            updatePopularIdeaArr[index].favorite = likeDislike;
          }
        });
        setPopularIdeaArr([...updatePopularIdeaArr]);

        let updateWinningIdeaArr = [];
        updateWinningIdeaArr = winningIdeaArr;
        updateWinningIdeaArr.map((ele, index) => {
          if (ele.id == id) {
            updateWinningIdeaArr[index].favorite = likeDislike;
          }
        });
        setWinningIdeaArr([...updateWinningIdeaArr]);
      },
      (err) => {}
    );
  };
  const onLikeIdeas = (id) => {
    var data = {
      field_name: "idea_id",
      id: id,
      frontuser_id: UserManager.userId,
      model: "LikedislikeIdeas",
    };
    Service.post(
      EndPoints.ideaLikeUnlike,
      data,
      (res) => {
        const likeDislike = res?.data === "dislike" ? 1 : 0;

        let newAllIdeasArr = [];
        newAllIdeasArr = allIdeaArr;
        newAllIdeasArr.map((ele, index) => {
          if (ele.id == id) {
            if (likeDislike == 1) {
              newAllIdeasArr[index].like = likeDislike;
              newAllIdeasArr[index].totalLike =
                Number(newAllIdeasArr[index].totalLike) + 1;
            } else {
              newAllIdeasArr[index].like = likeDislike;
              newAllIdeasArr[index].totalLike =
                Number(newAllIdeasArr[index].totalLike) - 1;
            }
          }
        });

        let updateNewIdeaArr = [];
        updateNewIdeaArr = newIdeaArr;
        updateNewIdeaArr.map((ele, index) => {
          if (ele.id == id) {
            if (likeDislike == 1) {
              updateNewIdeaArr[index].like = likeDislike;
              updateNewIdeaArr[index].totalLike =
                Number(updateNewIdeaArr[index].totalLike) + 1;
            } else {
              updateNewIdeaArr[index].like = likeDislike;
              updateNewIdeaArr[index].totalLike =
                Number(updateNewIdeaArr[index].totalLike) - 1;
            }
          }
        });
        setNewIdeaArr([...updateNewIdeaArr]);

        let updatePopularIdeaArr = [];
        updatePopularIdeaArr = popularIdeaArr;
        updatePopularIdeaArr.map((ele, index) => {
          if (ele.id == id) {
            if (likeDislike == 1) {
              updatePopularIdeaArr[index].like = likeDislike;
              updatePopularIdeaArr[index].totalLike =
                Number(updatePopularIdeaArr[index].totalLike) + 1;
            } else {
              updatePopularIdeaArr[index].like = likeDislike;
              updatePopularIdeaArr[index].totalLike =
                Number(updatePopularIdeaArr[index].totalLike) - 1;
            }
          }
        });
        setPopularIdeaArr([...updatePopularIdeaArr]);

        let updateWinningIdeaArr = [];
        updateWinningIdeaArr = winningIdeaArr;
        updateWinningIdeaArr.map((ele, index) => {
          if (ele.id == id) {
            if (likeDislike == 1) {
              updateWinningIdeaArr[index].like = likeDislike;
              updateWinningIdeaArr[index].totalLike =
                Number(updateWinningIdeaArr[index].totalLike) + 1;
            } else {
              updateWinningIdeaArr[index].like = likeDislike;
              updateWinningIdeaArr[index].totalLike =
                Number(updateWinningIdeaArr[index].totalLike) - 1;
            }
          }
        });
        setWinningIdeaArr([...updateWinningIdeaArr]);
      },
      (err) => {
        Loger.onLog("err of likeUnlike", err);
      }
    );
  };

  const navigateDetail = (item) => {
    props.navigation.navigate("IdeaDetails", item);
  };

  const paginations = (type) => {
    if (type === "AllIdeas") {
      setAllIdeaArrPageNo(allIdeaArrPageNo + 1);
      onIdeas("all","","","", allIdeaArrPageNo + 1);
    } else if (type === "LatestIdeas") {
      setNewIdeaArrPageNo(newIdeaArrPageNo + 1);
      onIdeas("latest","","","", newIdeaArrPageNo + 1);
    } else if (type === "PopularIdeas") {
      setPopularIdeaArrPageNo(popularIdeaArrPageNo + 1);
      onIdeas("popular","","","", popularIdeaArrPageNo + 1);
    } else if (type === "WinningIdeas") {
      setWinningIdeaArrPageNo(winningIdeaArrPageNo + 1);
      onIdeas("winning","","","", winningIdeaArrPageNo + 1);
    }
  };

  const likeIdea = (id) => {
    var data = {
      field_name: "idea_id",
      id: id,
      frontuser_id: UserManager.userId,
      model: "FavoriteIdeas",
    };

    Service.post(
      EndPoints.ideaLikeUnlike,
      data,
      (res) => {
        const likeDislike = res?.data === "dislike" ? false : true;

        let newAllIdeasArr = [];
        newAllIdeasArr = allIdeaArr;
        newAllIdeasArr.map((ele, index) => {
          if (ele.id == id) {
            newAllIdeasArr[index].favorite = likeDislike;
          }
        });
        setaAllIdeaArr([...newAllIdeasArr]);

        let updateNewIdeaArr = [];
        updateNewIdeaArr = newIdeaArr;
        updateNewIdeaArr.map((ele, index) => {
          if (ele.id == id) {
            updateNewIdeaArr[index].favorite = likeDislike;
          }
        });
        setNewIdeaArr([...updateNewIdeaArr]);

        let updatePopularIdeaArr = [];
        updatePopularIdeaArr = popularIdeaArr;
        updatePopularIdeaArr.map((ele, index) => {
          if (ele.id == id) {
            updatePopularIdeaArr[index].favorite = likeDislike;
          }
        });
        setPopularIdeaArr([...updatePopularIdeaArr]);

        let updateWinningIdeaArr = [];
        updateWinningIdeaArr = winningIdeaArr;
        updateWinningIdeaArr.map((ele, index) => {
          if (ele.id == id) {
            updateWinningIdeaArr[index].favorite = likeDislike;
          }
        });
        setWinningIdeaArr([...updateWinningIdeaArr]);
      },
      (err) => {}
    );
  };

  return (
    <SafeAreaView style={Style.container}>
      <CommonHeader
        isType={"IdeasListScreen"}
        onMenuClick={() => {
          props.navigation.openDrawer();
        }}
        onFilter={() => setFilterVisible(!isFilterVisible)}
      />
      <View style={Style.MainView}>
        <NavigationContainer independent={true}>
          <Tab.Navigator
            initialRouteName={
              tab == 0
                ? Label.All
                : tab == 1
                ? Label.Latest
                : tab == 2
                ? Label.Popular
                : Label.Winning
            }
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
                  setAllIdeaArrPageNo(1), onIdeas("all","","","", 1);
                },
              }}
              name={Label.All}
              children={() => (
                <AllIdeas
                  propName={{
                    type: "AllIdeas",
                    data: allIdeaArr,
                    onLikeIdeas: onLikeIdeas,
                    favoriteIdea: favoriteIdea,
                    navigateDetail: navigateDetail,
                  }}
                  paginations={() => paginations("AllIdeas")}
                />
              )}
            />
            <Tab.Screen
              listeners={{
                tabPress: (e) => {
                  setNewIdeaArrPageNo(1), onIdeas("latest","","","", 1);
                },
              }}
              name={Label.Latest}
              children={() => (
                <AllIdeas
                  propName={{
                    type: "LatestIdeas",
                    data: newIdeaArr,
                    onLikeIdeas: onLikeIdeas,
                    favoriteIdea: favoriteIdea,
                    navigateDetail: navigateDetail,
                  }}
                  paginations={() => paginations("LatestIdeas")}
                />
              )}
            />
            <Tab.Screen
              listeners={{
                tabPress: (e) => {
                  setPopularIdeaArrPageNo(1), onIdeas("popular","","","", 1);
                },
              }}
              name={Label.Popular}
              children={() => (
                <AllIdeas
                  propName={{
                    type: "PopularIdeas",
                    data: popularIdeaArr,
                    onLikeIdeas: onLikeIdeas,
                    favoriteIdea: favoriteIdea,
                    navigateDetail: navigateDetail,
                  }}
                  paginations={() => paginations("PopularIdeas")}
                />
              )}
            />
            <Tab.Screen
              listeners={{
                tabPress: (e) => {
                  setWinningIdeaArrPageNo(1), onIdeas("winning","","","", 1);
                },
              }}
              name={Label.Winning}
              children={() => (
                <AllIdeas
                  propName={{
                    type: "WinningIdeas",
                    data: winningIdeaArr,
                    onLikeIdeas: onLikeIdeas,
                    favoriteIdea: favoriteIdea,
                    navigateDetail: navigateDetail,
                  }}
                  paginations={() => paginations("WinningIdeas")}
                />
              )}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
      <IdeasFilter
        type="Ideas"
        visible={isFilterVisible}
        onClose={(categories, sector, sortBy) =>
          onFilterClose(categories, sector, sortBy)
        }
      />
    </SafeAreaView>
  );
};

export default memo(IdeasListScreen);
