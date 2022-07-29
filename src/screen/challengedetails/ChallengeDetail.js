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
  const [similarData, setSimilarData] = useState([])
  const [evaluationData, setEvaluationData] = useState([])
  const [rowData, setRowData] = useState()
  const [resourceData, setResourceData] = useState([])
  const [participateData, setParticipateData] = useState([])


  useEffect(() => {
    Loger.onLog("id", props?.route?.params?.id);
    challengeDetail(props?.route?.params?.id);
  }, []);

  const challengeDetail = (id) => {
    const data = {
      frontuser_id: UserManager.userId,
      contest_id: id,
    };
    Service.post(EndPoints.challengedetails, data, (res) => {

      const similarRow = []
      const contestData = res.data.contestDetail
      const evaluationPannel = []
      const resources = []
      const termsRow = res.data.termsrow
      const participateRowsData = []

      if (res.statusCode) {
        let contestModel = new OpenChallengeDetail(contestData)
        setContestData(contestModel)

        res?.data?.similarrow?.map((ele) => {
          let similarModel = new OpenChallengeDetail(ele)
          similarRow.push(similarModel)
          setSimilarData(similarRow)
        })

        res?.data?.evaluationPannel?.map((ele) => {
          let evaluationModel = new OpenChallengeDetail(ele)
          evaluationPannel.push(evaluationModel)
          setEvaluationData(evaluationPannel)
        })

        res?.data?.resources?.map((ele) => {
          let resourcesModel = new OpenChallengeDetail(ele)
          resources.push(resourcesModel)
          setResourceData(resources)
        })

        res?.data?.participaterowsData?.map((ele) => {
          let participate = new OpenChallengeDetail(ele)
          participateRowsData.push(participate)
          setParticipateData(participateRowsData)
        })

        let termsModel = new OpenChallengeDetail(termsRow)
        setRowData(termsModel)
      }
      else {
        showMessage(res.message)
      }

    },
      (err) => {
        Loger.onLog("error of challange detail", err);
      }
    );
  }

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <CommonHeader isType={title} />
        <ScrollView style={PAGESTYLE.MainView}>
          <View>
            <View style={PAGESTYLE.subMainView}>
              {/* <IdeaSlider Entries={testData} />
               */}

              <View style={PAGESTYLE.imgStyle}>
                <ImageLoad style={PAGESTYLE.img} resizeMode='cover' source={{ uri: contestData?.contestImage }} />
              </View>

              {contestData && <IdeaContent data={contestData} isType={title} id={props?.route?.params?.id}/>}

              {/* <View style={PAGESTYLE.contentBoxChallenge} >
                <Text style={PAGESTYLE.heading}>{Label.Description}</Text>
                <WebViewComp data={contestData.contestDescription} />
                <Text style={PAGESTYLE.termsAndConTitle}>
                  {Label.TermsAndCondition}
                </Text>
              </View> */}

              {contestData && <CategoryChallenge isType={title} data={contestData} />}
              {contestData && <SubInformation data={contestData} />}

              {participateData && participateData.length > 0 &&
                <View style={PAGESTYLE.subIdeaList}>
                  <SubParticipateIdeas data={participateData} isType={title} />
                </View>
              }
              {/* <View style={PAGESTYLE.loadMoreView}>
              <TouchableOpacity style={PAGESTYLE.loadingMore}>
                <View style={PAGESTYLE.spacing}>
                  <IcnLoadMore
                    width={AppUtil.getHP(1.2)}
                    height={AppUtil.getHP(1.2)}
                  />
                </View>
                <Text style={PAGESTYLE.txtLoadMore}>{Label.LoadMore}</Text>
              </TouchableOpacity>
            </View> */}


              {resourceData && resourceData.length > 0 &&
                <ResourceChallenge resource={resourceData} isType={title} />}
              {evaluationData && evaluationData.length > 0 &&
                <UserProfileList profileData={evaluationData} isType={title} />}

            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default memo(ChallengeDetail);

