import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import CommonHeader from "../../component/commonheader/CommonHeader";
import IdeaSlider from "../../component/detailsidea/IdeaSlider";
import IdeaContent from "../../component/detailsidea/IdeaContent";
import UserProfileList from "../../component/detailsidea/UserProfileList";
import VideoPlayer from "../../component/detailsidea/VideoPlayer";
import Resources from "../../component/detailsidea/Resources";
import ExpertInsightsSlider from "../../component/homescreen/ExpertInsightsSlider";
import SubIdeasListWithImage from "../../component/homescreen/SubIdeasListWithImage";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { Label } from "../../utils/StringUtil";
import ExpertInsightDetailStyle from "./ExpertInsightDetailWithCommentStyle";

import IcnWatchDone from "../../assets/svg/IcnWatchDone";
import IcnThumsUp from "../../assets/svg/IcnThumsUp";
import IcnComment from "../../assets/svg/IcnComment";
import IcnClander from "../../assets/svg/IcnClander";
import IcnDownload from "../../assets/svg/IcnDownload";

import { AppUtil } from "../../utils/AppUtil";
import { TextInput } from "react-native-gesture-handler";
import ImageLoad from "react-native-image-placeholder";
import { deviceId } from "../../utils/Constant";
import { AppConfig } from "../../manager/AppConfig";
import { UserManager } from "../../manager/UserManager";
import { Service } from "../../service/Service";
import { EndPoints } from "../../service/EndPoints";
import ExpertInsightDetail from "../../model/ExpertInsightDetail";
import { Loger } from "../../utils/Loger";

const ExpertInsightDetailWithComment = (props) => {
  const navigation = useNavigation();
  const { themeColor } = useSelector((state) => state);

  const [detail, setDetail] = useState({})
  const id = props.route.params.expertId

  useEffect(() => {
    expertList();
  }, [])
  const expertList = () => {
    const data = {
      "device_id": deviceId,
      "token": AppConfig.token,
      "language": "en",
      "frontuser_id": UserManager.userId,
      "insight_id": id
    }
    Service.post(EndPoints.expertsInsiteDetail, data, (res) => {
      Loger.onLog('response of expertsInsiteDetail', res)
      if (res.statusCode == 1) {
        let model = new ExpertInsightDetail(res.data)
        setDetail(model)
      }
      else {
        showMessage(res.message)
      }
    },
      (error) => {
        Loger.onLog('error of expertInsightDetail', error)
      }
    )
  }

  const testData = [
    {
      url: "https://i.imgur.com/SsJmZ9jl.jpg",
    },
    {
      url: "https://i.imgur.com/5tj6S7Ol.jpg",
    },
    {
      url: "https://i.imgur.com/pmSqIFZl.jpg",
    },
    {
      url: "https://i.imgur.com/cA8zoGel.jpg",
    },
    {
      url: "https://i.imgur.com/pewusMzl.jpg",
    },
    {
      url: "https://i.imgur.com/l49aYS3l.jpg",
    },
  ];
  const DATA = {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Academy of Development Research and Training Consulting Pvt Ltd",
    sector: "Sector A",
    category: "Banking and Finance",
    url: "https://i.imgur.com/5tj6S7Ol.jpg",
    date: "25 Nov 21",
    name: "Mitansh Bhavsar",
    see: "700",
    like: "200",
    comment: "80",
    favourite: "2",
    isLike: true,
    Description:
      "Idea description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at iaculis eu at Idea description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at iaculis eu at Idea description Lorem ipsum dolor sit amet, consectetur adielit. Ultricies at iaculis eu at Idea description Lorem ipsudjm dolor sit amet, consectetur adipiscing elit. Ultricies at iaculis eu at description. Lorem ipsum dolor sit amet. consectetur adipiscing elit. Ultricies at iaculis eu at Idea description Lorem ipsum dolor sit amet. consectetur adipiscing elit. Ultricies at iaculis eu at Idea description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at iaculis eu at Idea description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at iaculis eu at description.",
  };

  const userProfile = [
    {
      url:
        "https://ath2.unileverservices.com/wp-content/uploads/sites/3/2017/09/professional-mens-hairstyles-combed-min-1024x683.jpg",
      name: "Yashpal Sinha",
    },
    {
      url:
        "https://ath2.unileverservices.com/wp-content/uploads/sites/3/2017/09/professional-mens-hairstyles-light-styling-min-532x355.jpg",
      name: "Aadrsh Acharya",
    },
    {
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9QdsoL3XdTix4C40wyn5XpV3nUoC2phXcxQ&usqp=CAU",
      name: "Abhimayu Laghari",
    },
  ];

  const resource = [
    {
      resourceName: "Idea module lorem ipsum",
    },
    {
      resourceName: "Idea module lorem",
    },
    {
      resourceName: "Idea module lorem ipsum doler",
    },
    {
      resourceName: "Idea module lorem ipsum",
    },
  ];

  const expertData = [
    {
      name: "Naredra Modi",
      job: "Game Tester",
      title: "Clean ocena plastic with HP SS",
      subTitle:
        "harvesting Hydroelectric Power and Cleaning up Ocean Plastic Global climate change isn't the",
      profilePic: "https://i.imgur.com/5tj6S7Ol.jpg",
      see: "700",
      like: "210",
      comment: "180",
    },
    {
      name: "Bhupendra Patel",
      job: "App Tester",
      title: "Clean ocena plastic with HP SS",
      subTitle:
        "harvesting Hydroelectric Power and Cleaning up Ocean Plastic Global climate change isn't the",
      profilePic: "https://i.imgur.com/5tj6S7Ol.jpg",
      see: "700",
      like: "200",
      comment: "80",
    },
  ];
  const DATAPERSON = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Family business",
      subTitle: "Children Omani Dress Competition",
      url: "https://i.imgur.com/5tj6S7Ol.jpg",
      date: "25 Dec 21 - 29 Dec 21",
      see: "700",
      like: "200",
      comment: "80",
      isLike: true,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
      subTitle: "Children Omani Dress Competition",
      url: "https://i.imgur.com/5tj6S7Ol.jpg",
      date: "25 Dec 21 - 29 Dec 21",
      see: "700",
      like: "200",
      comment: "80",
      isLike: false,
    },
  ];
  const renderComentCell = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: AppUtil.getWP(5),
          marginTop: AppUtil.getHP(2),
        }}
      >
        <ImageLoad
          style={[
            ExpertInsightDetailStyle.userImage,
            { marginTop: AppUtil.getHP(1) },
          ]}
          source={{ uri: 'https://i.imgur.com/pewusMzl.jpg' }}
          borderRadius={AppUtil.getHP(2.5)}
          placeholderStyle={ExpertInsightDetailStyle.userImage}
        />
        <View style={ExpertInsightDetailStyle.leftItems1}>
          <Text numberOfLines={1} style={ExpertInsightDetailStyle.title}>
            {"Lorem Ipsum is simply dummy"}
          </Text>
          <Text numberOfLines={0} style={ExpertInsightDetailStyle.SubTitle}>
            {
              "We aim to clean up 90% of floating ocean plastic pollution. The Ocean Cleanup is a non-profit organization developing and scaling technologies to rid the oceans"
            }{" "}
          </Text>

          <View style={ExpertInsightDetailStyle.calView}>
            <IcnThumsUp height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />

            <Text style={ExpertInsightDetailStyle.icnTitle}>{'589'}</Text>

            <TouchableOpacity>
              <Text style={ExpertInsightDetailStyle.icnTitle}>{"Replay"}</Text>
            </TouchableOpacity>

            <IcnClander
              height={AppUtil.getHP(1.5)}
              width={AppUtil.getHP(1.5)}
            />
            <Text style={ExpertInsightDetailStyle.icnTitle}>
              {"25 Apr 22 at 15:30 PM"}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  const renderSubCell = (props) => {
    return (
      <View style={ExpertInsightDetailStyle.leftItems}>
        <Text numberOfLines={1} style={ExpertInsightDetailStyle.title}>
        {props.ideaTitle}
        </Text>
        <Text numberOfLines={0} style={ExpertInsightDetailStyle.SubTitle}>
          {props.ideaDescription}
        </Text>

        <View style={ExpertInsightDetailStyle.calView}>
          <IcnWatchDone
            height={AppUtil.getHP(1.5)}
            width={AppUtil.getHP(1.5)}
          />
          <Text style={ExpertInsightDetailStyle.icnTitle}>{589}</Text>

          <IcnThumsUp height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
          <Text style={ExpertInsightDetailStyle.icnTitle}>{25}</Text>

          <IcnComment height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
          <Text style={ExpertInsightDetailStyle.icnTitle}>{45}</Text>

          <IcnClander height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
          <Text style={ExpertInsightDetailStyle.icnTitle}>
            {"25 Apr 22 at 15:30 PM"}
          </Text>
        </View>
        <View style={ExpertInsightDetailStyle.resourceContainer}>
          <View style={ExpertInsightDetailStyle.resourceSubTitle}>
            <Text style={ExpertInsightDetailStyle.resourceTitle}>
              {"Idea module lorem ipsum"}
            </Text>
          </View>
          <TouchableOpacity style={ExpertInsightDetailStyle.downloadIcon}>
            <IcnDownload height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
          </TouchableOpacity>
        </View>
        <ScrollView
          contentContainerStyle={ExpertInsightDetailStyle.imgView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {DATAPERSON.map((item) => (
            <ImageLoad
              style={ExpertInsightDetailStyle.img}
              resizeMode="cover"
              source={{ uri: item.url }}
            />
          ))}
        </ScrollView>
        {/* <View style={ExpertInsightDetailStyle.line} /> */}
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CommonHeader isType={"ExpertInsightDetailWithComment"} />
      <View style={ExpertInsightDetailStyle.MainView}>
        <ScrollView>
          <View style={ExpertInsightDetailStyle.container}>
            <IdeaSlider Entries={testData} />
            <IdeaContent data={detail} isMyIdeaDetail={false} isExpert={true} isType={'ExpertInsightDetailWithComment'}/>
            <View style={ExpertInsightDetailStyle.userFlexView}>
              <ImageLoad
                style={[
                  ExpertInsightDetailStyle.userImage,
                  { marginTop: AppUtil.getHP(1) },
                ]}
                source={{ uri: 'https://i.imgur.com/pewusMzl.jpg' }}
                borderRadius={AppUtil.getHP(2.5)}
                placeholderStyle={ExpertInsightDetailStyle.userImage}
              />
              <View>
                <Text style={ExpertInsightDetailStyle.userName}>
                  Abhimanyu Ramanuj
                </Text>
                <Text style={ExpertInsightDetailStyle.userCatName}>
                  Subject Matter Expert
                </Text>
              </View>
            </View>
            {renderSubCell(detail)}
            <View style={ExpertInsightDetailStyle.commentView}>
              <Text style={ExpertInsightDetailStyle.commentText}>Comments</Text>
              <TextInput style={ExpertInsightDetailStyle.input} />
              <View
                style={{ flexDirection: "row", marginTop: AppUtil.getHP(1) }}
              >
                <TouchableOpacity style={ExpertInsightDetailStyle.commentBtn}>
                  <Text style={ExpertInsightDetailStyle.commentBtnText}>
                    Comment
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={ExpertInsightDetailStyle.cancelBtn}>
                  <Text style={ExpertInsightDetailStyle.cancelBtnText}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <FlatList data={[1, 2]} renderItem={renderComentCell} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ExpertInsightDetailWithComment;
