import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, memo } from 'react'
import CommonHeader from '../../component/commonheader/CommonHeader'
import STYLE from './ExpertInsightTypeStyle'
import { ScrollView } from 'react-native-gesture-handler'
import ImageLoad from 'react-native-image-placeholder'
import { AppUtil } from '../../utils/AppUtil'
import { Label } from '../../utils/StringUtil'
import { deviceId } from '../../utils/Constant'
import { AppConfig, getLanguage } from '../../manager/AppConfig'
import { UserManager } from '../../manager/UserManager'
import { Service } from '../../service/Service'
import { EndPoints } from '../../service/EndPoints'
import { Loger } from '../../utils/Loger'
import ExpertInsightDetail from '../../model/ExpertInsightDetail'
import moment from 'moment'
import WebViewComp from '../../component/webview/WebViewComp'
import IcnThumsUpBlack from '../../assets/svg/IcnThumsUpBlack'
import IcnThumsUp from '../../assets/svg/IcnThumsUp'
import IcnComment from '../../assets/svg/IcnComment'
import ExpertInsightSubDetail from '../../component/expertscreen/ExpertInsightSubDetail'

const ExpertInsightTypeDetail = (props) => {

    const [detail, setDetail] = useState({})

    useEffect(() => {
        expertList();
    }, [])
    console.log('props', props);
    const id = props.route.params.id

    const expertList = () => {
        const data = {
            "device_id": deviceId,
            "token": AppConfig.token,
            "language": getLanguage(),
            "frontuser_id": UserManager.userId,
            "insight_id": id
        }
        Service.post(EndPoints.expertsInsiteDetail, data, (res) => {
            console.log('res of idea', res);
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

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CommonHeader isType={"ExpertInsightTypeDetail"} heading={detail.title} />
            <View style={STYLE.MainView}>
                <ScrollView>
                    <View style={STYLE.container}>
                        <View style={STYLE.imgStyle}>
                            <ImageLoad style={STYLE.img} resizeMode='cover' source={{ uri: detail?.ideaCoverImage }} />
                        </View>
                        <ExpertInsightSubDetail detail={detail}
                            navigateToComment={(item) => props.navigation.navigate("CommentScreen", { item: item })}
                        />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default memo(ExpertInsightTypeDetail)
