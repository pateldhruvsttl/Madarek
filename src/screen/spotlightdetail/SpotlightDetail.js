import { View, Text, SafeAreaView, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import CommonHeader from '../../component/commonheader/CommonHeader'
import STYLE from './SpotlightDetailStyle'
import SubDetail from '../../component/spotlight/SubDetail'
import ImageLoad from 'react-native-image-placeholder'
import SpotlightContent from '../../component/spotlight/SpotlightContent'
import { AppUtil } from '../../utils/AppUtil'
import { AppConfig, getLanguage } from '../../manager/AppConfig'
import { deviceId } from '../../utils/Constant'
import { Service } from '../../service/Service'
import { EndPoints } from '../../service/EndPoints'
import { Loger } from '../../utils/Loger'
import SpotlightDetailModel from "../../model/SpotlightDetail"

const SpotlightDetail = (props) => {

    const [spotlightDetail, setSpotlightDetail] = useState({})

    useEffect(() => {
        spotlightData()
    }, [])

    const spotlightData = () => {
        const data = {
            device_id: deviceId,
            token: AppConfig.token,
            language: getLanguage(),
            parent_id: props.route.params.id
        }

        Service.post(EndPoints.spotlightDetail, data,
            (res) => {
                if (res.statusCode == 1) {
                    Loger.onLog("Response of spotlightDetail", res)
                    const model = new SpotlightDetailModel(res.data)
                    setSpotlightDetail(model)
                }
            },
            (error) => {
                Loger.onLog("error of spotlightDetail", error)
            })
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CommonHeader isType={"SpotlightDetail"} heading={spotlightDetail.moduleType} />
            <View style={STYLE.MainView}>
                <ScrollView>
                    <View style={STYLE.container}>
                        <View style={STYLE.imgStyle}>
                            <ImageLoad style={STYLE.img} resizeMode='cover' source={{ uri: spotlightDetail?.image }} />
                        </View>
                        {spotlightDetail && <SpotlightContent data={spotlightDetail} />}
                        <View style={STYLE.imgCopyStyle}>
                            <ImageLoad style={STYLE.imgcopy}
                                resizeMode='cover'
                                source={{ uri: spotlightDetail?.spotlightImage }}
                                borderRadius={AppUtil.getHP(1)}
                            />
                        </View>
                        {spotlightDetail && <SubDetail data={spotlightDetail} id={props.route.params.id}/>}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default SpotlightDetail
