import { View, Text, TouchableOpacity } from "react-native";
import React, { memo, useEffect, useState } from "react";
import CommonHeader from "../../component/commonheader/CommonHeader";
import ImageLoad from "react-native-image-placeholder";
import { ScrollView } from "react-native-gesture-handler";
import IdeaSlider from "../../component/detailsidea/IdeaSlider";
import { Label } from "../../utils/StringUtil";
import IdeaContent from "../../component/detailsidea/IdeaContent";
import { AppUtil } from "../../utils/AppUtil";
import UserProfileList from "../../component/detailsidea/UserProfileList";
import PAGESTYLE from "./ChallengeDetailStyle";
import CategoryChallenge from "../../component/challengedetail/CategoryChallenge";
import SubInformation from "../../component/challengedetail/SubInformation";
import SubParticipateIdeas from "../../component/challengedetail/SubParticipateIdeas";
import IcnLoadMore from "../../assets/svg/IcnLoadMore";
import ResourceChallenge from "../../component/challengedetail/ResourceChallenges";
import { SafeAreaView } from "react-native-safe-area-context";
import { Service } from "../../service/Service";
import { EndPoints } from "../../service/EndPoints";
import { UserManager } from "../../manager/UserManager";
import { Loger } from "../../utils/Loger";
import OpenChallengeDetail from "../../model/OpenChallengeDetail";
import { showMessage } from "../../utils/Constant";
import IdeasListScreen from "../ideasList/IdeasListScreen";
import { PixelRatio } from "react-native";
import WebViewComp from "../../component/webview/WebViewComp";

const ChallengeDetail = (props) => {
  const title = "ChallengeDetail";
  const [contestData, setContestData] = useState({})
  const [evaluationData, setEvaluationData] = useState([])
  const [rowData, setRowData] = useState()
  const [resourceData, setResourceData] = useState([])
  const [participateData, setParticipateData] = useState([])

  useEffect(() => {
    challengeDetail(props?.route?.params?.id);
  }, []);

  const challengeDetail = (id) => {
    const data = {
      frontuser_id: UserManager.userId,
      contest_id: id,
    };
    Service.post(EndPoints.challengedetails, data, (res) => {

      const evaluationPannel = [];
      const resources = [];
      const participateRowsData = [];

      if (res.statusCode === "1") {

        let model = new OpenChallengeDetail(res.data.contestDetail)
        setContestData(model)

        res.data.evaluationPannel.map((ele) => {
          let model = new OpenChallengeDetail(ele)
          evaluationPannel.push(model)
          setEvaluationData(evaluationPannel)
        })

        res?.data?.participaterowsData.map((ele) => {
          let model = new OpenChallengeDetail(ele)
          participateRowsData.push(model)
          setParticipateData(participateRowsData)
        })

        res?.data?.resources.map((ele) => {
          let model = new OpenChallengeDetail(ele)
          resources.push(model)
          setResourceData(resources)
        })

      }
      else {
        showMessage(res.message)
      }

    },
      (err) => {
      }
    );
  }

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <CommonHeader isType={title} onRefresh={props.route.params.onRefresh}/>
        <ScrollView style={PAGESTYLE.MainView}>
          <View>
            <View style={PAGESTYLE.subMainView}>

              <View style={PAGESTYLE.imgStyle}>
                <ImageLoad style={PAGESTYLE.img} resizeMode='cover' source={{ uri: contestData?.contestImage }} />
              </View>

              {contestData && <IdeaContent data={contestData}
                isType={title}
                id={props?.route?.params?.id}
                navigateToComment={(item) => props.navigation.navigate('CommentScreen', { item: item })}
              />}

              {contestData && <CategoryChallenge isType={title} data={contestData} />}
              {contestData && <SubInformation data={contestData} />}


              {participateData && participateData.length > 0 &&
                <View style={PAGESTYLE.subIdeaList}>
                  <SubParticipateIdeas data={participateData} isType={title} />
                </View>
              }

              {resourceData && resourceData.length > 0 && <ResourceChallenge resource={resourceData} isType={title} />}
              {evaluationData && evaluationData.length > 0 && <UserProfileList profileData={evaluationData} isType={title} />}

            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default memo(ChallengeDetail);

