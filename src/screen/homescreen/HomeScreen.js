import React, { memo, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../component/commonheader/CommonHeader";
import EventSlider from "../../component/homescreen/EventSlider";
import IdealList from "../../component/homescreen/itemList/IdeaList";
import SubIdeasListWithImage from "../../component/homescreen/SubIdeasListWithImage";
import { GetAppColor } from "../../utils/Colors";
import Style from "./HomeScreenStyle";

import ExpertInsightsSlider from "../../component/homescreen/ExpertInsightsSlider";
import FavouriteCategories from "../../component/homescreen/FavouriteCategories";
import { Label } from "../../utils/StringUtil";
import { AppUtil } from "../../utils/AppUtil";
import { Loger } from "../../utils/Loger";
import { Service } from "../../service/Service";
import { EndPoints } from "../../service/EndPoints";
import BannerList from "../../model/BannerList";
import MadarekSportlight from "../../model/MadarekSportlight";
import ParticipateModal from "../../component/challengedetail/ParticipateModal";
import ExpertInsight from "../../model/ExpertInsights";
import category from "../../model/FavouriteCategories";
import { UserManager } from "../../manager/UserManager";
import { AppConfig, getLanguage } from "../../manager/AppConfig";
import DeviceInfo from "react-native-device-info";
import OpenChallengeModel from "../../model/OpenChallengesModel";
export const deviceId = DeviceInfo.getUniqueId();

const HomeScreen = (props) => {
  const { themeColor } = useSelector((state) => state);
  const [modalVisible, setModalVisible] = useState(false);
  const [bannerList, setBannerList] = useState([]);
  const [openChallenges, setOpenChallenges] = useState([]);
  const [spotLight, setSpotLight] = useState([]);
  const [expertInsight, setExpertInsight] = useState([]);
  const [favouriteCategories, setFavouriteCategories] = useState([]);

  useEffect(() => {
    onSlider();
    onOpenChallenge();
    onSpotlight();
    onFavouriteCategories();
    onExpertInsights();
  }, []);

  const onSlider = () => {
    var banner = [];
    Service.get(
      EndPoints.bannerList,
      (res) => {
        res.data.forEach((element) => {
          let model = new BannerList(element);

          if (banner.length < 5) {
            banner.push(model);
          } else {
            return;
          }
        });
        setBannerList(banner);
      },
      (err) => {
        Loger.onLog("bannerList error ------>", err);
      }
    );
  };
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
    Service.post(EndPoints.openChallenges, data, (res) => {
      var opChallenges = [];
      (res.data).slice(0, 2).forEach((element) => {
        let model = new OpenChallengeModel(element);
        opChallenges.push(model);
      });
      setOpenChallenges(opChallenges);
    },
      (err) => {
        Loger.onLog("###", err);
      }
    );
  };
  const onSpotlight = () => {
    const data = {
      frontuser_id:UserManager.userId
  }
    Service.post(
      EndPoints.madarekSpotlight,data,
      (res) => {
        var spotLight = [];
        Loger.onLog("res madarekSpotlight", res);
        res.data.forEach((element) => {
          let model = new MadarekSportlight(element);
          spotLight.push(model);
        });

        setSpotLight(spotLight);
      },
      (err) => {
        Loger.onLog("", err);
      }
    );
  };
  const onFavouriteCategories = () => {
    const data = { id: UserManager.userId };
    Service.post(
      EndPoints.favouriteCategories,
      data,
      (res) => {
        Loger.onLog(
          "favouriteCategories Response ========>",
          res.data[0].category_info
        );
        if (res?.statusCode === "1") {
          const favouriteCategoriesArr = [];
          res?.data[0]?.category_info.map((ele) => {
            const model = new category(ele);
            favouriteCategoriesArr.push(model);
          });
          setFavouriteCategories(favouriteCategoriesArr);
        }
      },
      (err) => {
        Loger.onLog("favouriteCategories  error ========>", err);
      }
    );
  };
  const onExpertInsights = () => {
    const data = {
      device_id: deviceId,
      token: AppConfig.token,
      frontuser_id: UserManager.userId,
      idea_id: "146",
      language: getLanguage(),
    };
    Service.post(
      EndPoints.expertInsights,
      data,
      (res) => {
        if (res?.statusCode === "1") {
          const expertInsightArr = [];
          res.data.map((ele) => {
            const model = new ExpertInsight(ele);
            expertInsightArr.push(model);
          });
          setExpertInsight(expertInsightArr);
        }
      },
      (err) => {
        Loger.onLog("expertInsights  error ========>", err);
      }
    );
  };

  const onLikeIdeas = (id) => {
    var data = {
      "field_name": "contest_id",
      "id": id,
      "frontuser_id": UserManager.userId,
      "model": 'LikedislikeContests'
    }
    Service.post(EndPoints.ideaLikeUnlike, data, (res) => {

      const likeDislike = res?.data === 'dislike' ? 1 : 0;
      const challengeArr = openChallenges;
      challengeArr.map((ele, index) => {
        if (ele.id == id) {

          if (likeDislike == 1) {
            challengeArr[index].like = likeDislike
            challengeArr[index].totalLike = Number(challengeArr[index].totalLike) + 1;
          }
          else {
            challengeArr[index].like = likeDislike
            challengeArr[index].totalLike = Number(challengeArr[index].totalLike) - 1;
          }
        }
      });
      setOpenChallenges([...challengeArr]);

    }, (err) => {
      Loger.onLog("err of likeUnlike", err)
    })
  }
  const onFavoriteIdeas = (id) => {
    var data = {
      "field_name": "contest_id",
      "id": id,
      "frontuser_id": UserManager.userId,
      "model": 'FavoriteContests'
    }
    Service.post(
      EndPoints.challengeLikeUnlike,
      data,
      (res) => {
        const likeDislike = res?.data === 'dislike' ? true : false;
        const challengeArr = openChallenges;

        challengeArr.map((ele, index) => {
          if (ele.id == id) {
            challengeArr[index].favorite = likeDislike;
          }
        });
        setOpenChallenges([...challengeArr]);


      },
      (err) => {
        Loger.onLog("err of challengeLikeUnlike", err);
      }
    );
  }

  const likeSpotLight = (id) => {
    var data = {
      field_name: "formdata_id",
      id: id,
      frontuser_id: UserManager.userId,
      model: "LikedislikeGeneral",
      general_status: "spotlight",
    };

    Service.post(
      EndPoints.spotlightLikeUnlike,
      data,
      (res) => {
        const likeDislike = res?.data === "dislike" ? false : true;
        const spotLightArr = spotLight;
        spotLightArr.map((ele, index) => {
          if (ele.id == id) {
            spotLightArr[index].like = likeDislike;
          }
        });
        setSpotLight([...spotLight, spotLightArr]);
      },
      (err) => {
        Loger.onLog("err of spotlightLikeUnlike", err);
      }
    );
  };
  const onSetItem = (item) => {

    switch (item) {
      case "Slider":
        return bannerList.length > 0 && <EventSlider Entries={bannerList} />;
        break;

      case "Tab":
        return <IdealList />;
        break;

      case "Challenges":
        return (
          openChallenges.length > 0 && (
            <View style={{ backgroundColor: GetAppColor.lightWhite, paddingVertical: AppUtil.getHP(2), }}>
              <SubIdeasListWithImage
                data={openChallenges}
                isTitle={Label.OpenChallenges}
                isType={"Challenges"}
                onFavoriteIdeas={(id) => onFavoriteIdeas(id)}
                onLikeIdeas={(id) => onLikeIdeas(id)}
                onButtonPress={() => { setModalVisible(true); }}
                onSeeMorePress={() => { props.navigation.navigate("ChallengesListScreen", 0, { data: openChallenges, }); }}
                onItemPress={(id) => { props.navigation.navigate("ChallengeDetail", { id: id }); }}
                navigateToComment={(item) => { props.navigation.navigate("CommentScreen", { item: item }) }}
                isComment={"Challenges"}
              />
            </View>
          )
        );
        break;

      case "Spotlight":
        return (
          spotLight.length > 0 && (
            <View style={{ paddingVertical: AppUtil.getHP(2) }}>
              <SubIdeasListWithImage
                data={spotLight.slice(0, 2)}
                isTitle={Label.MadarekSpotlight}
                isType={"Spotlight"}
                likeSpotLight={likeSpotLight}
                onButtonPress={() => {
                  setModalVisible(true);
                }}
                onSeeMorePress={() => { }} //props.navigation.navigate("ChallengesListScreen")
                // onSeeMorePress={() => { props.navigation.navigate("SpotlightListScreen", 0, { data: openChallenges, }); }}
                onItemPress={(id) => {
                  props.navigation.navigate("SpotlightDetail", { id: id });
                }}
              />
            </View>
          )
        );
        break;
      case "ExpertInsightsSlider":
        return (
          expertInsight && expertInsight.length > 0 &&
          (<View
            style={{
              backgroundColor: GetAppColor.lightWhite,
              paddingVertical: AppUtil.getHP(2),
            }}>
            <ExpertInsightsSlider Entries={expertInsight}
              navigateToComment={(item) => { props.navigation.navigate("CommentScreen", { item: item }) }}
            />
          </View>)
        );
        break;
      case "FavouriteCategories":
        return (
          favouriteCategories && favouriteCategories.length > 0 &&
          (<View
            style={{
              backgroundColor: GetAppColor.white,
              paddingVertical: AppUtil.getHP(2),
            }}
          >
            <FavouriteCategories
              data={favouriteCategories.slice(0, 6)}
              Entries={expertInsight}
            />
          </View>)
        );
        break;
      case "Button":
        return (
          <View style={Style.bottomBarView}>
            <Text style={Style.txtBtnTitle}>{Label.readyToSubmitYourIdea}</Text>
            <TouchableOpacity
              style={[Style.btn, { backgroundColor: themeColor.buttonColor }]}
              onPress={() => props.navigation.navigate("SubmitIdeaScreen")}
            >
              <Text style={Style.txtBtn}>{Label.submitIdea}</Text>
            </TouchableOpacity>
          </View>
        );
        break;

      default:
        null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CommonHeader isType={"HomeScreenHeader"} />

      <View style={Style.MainView}>
        <FlatList
          data={dtList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => onSetItem(item)}
        />
        <ParticipateModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </View>
    </SafeAreaView>
  );
};

export default memo(HomeScreen);

const dtList = [
  "Slider",
  "Tab",
  "Challenges",
  "Spotlight",
  "ExpertInsightsSlider",
  "FavouriteCategories",
  "Button",
];
