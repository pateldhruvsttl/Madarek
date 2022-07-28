import React, { memo, useState, useEffect } from "react";
import { View, Text, ScrollView, ScrollViewBase, StatusBar, TouchableOpacity } from "react-native";
import { useSelector } from 'react-redux'

import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../component/commonheader/CommonHeader";
import { GetAppColor } from "../../utils/Colors";
import Style from ".//ExpertScreenStyle";

import ExpertInsightsSlider from '../../component/homescreen/ExpertInsightsSlider'
import FavouriteCategories from "../../component/homescreen/FavouriteCategories";
import { Label } from "../../utils/StringUtil";
import { AppUtil } from "../../utils/AppUtil";

import ExpertInsight from "../../model/ExpertInsights";
import SimilarExperts from "../../component/expertscreen/SimilarExperts";
import { Service } from "../../service/Service";
import { EndPoints } from "../../service/EndPoints";
import { Loger } from "../../utils/Loger";
import Categories from "../../model/Categories";
import { UserManager } from "../../manager/UserManager";
import { AppConfig } from "../../manager/AppConfig";
import DeviceInfo from "react-native-device-info";
export const deviceId = DeviceInfo.getUniqueId()

const ExpertScreen = (props) => {
    const [category, setCategory] = useState([])
    const [categories, setCategories] = useState([])
    const { themeColor } = useSelector((state) => state)
    const [expertInsight, setExpertInsight] = useState([]);

    useEffect(() => {
        var cat = [];
        Service.post(EndPoints.categories, {}, (res) => {
            Loger.onLog('category expert categorylist Response of category list ========>', JSON.stringify(res.data))
            res.data.forEach(element => {
                let model = new Categories(element);
                if (cat.length < 6) {
                    cat.push(model)
                }else{
                    return;
                }
            });
            setCategories(cat)
            setCategory(cat)
        }, (err) => {
            Loger.onLog('category bannerlist error ========>', err)
        })

        const data = {
            "frontuser_id": UserManager.userId,
            "language": AppConfig.lang,
            "device_id": deviceId,
        }
        Service.post(EndPoints.expertInsights, data, (res) => {
            if (res?.statusCode === "1") {
                const expertInsightArr = [];
                res.data.map((ele) => {
                    const model = new ExpertInsight(ele)
                    expertInsightArr.push(model);

                })
                setExpertInsight(expertInsightArr)
            }

        }, (err) => {
            Loger.onLog('expertInsights  error ========>', err)
        })

    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            
            <CommonHeader isType={"ExpertScreen"} onMenuClick={() => { props.navigation.openDrawer() }} />
            <View style={Style.MainView}>
                <ScrollView>
                    <View style={{ height: '100%', backgroundColor: GetAppColor.greyBg }}>

                        <View style={Style.favouriteCategoriesView}>
                            <FavouriteCategories data={categories}/>
                        </View>

                        <View style={Style.similarExpertView}>
                            <SimilarExperts data={expertInsightsData} 
                            navigateDetail={() => props.navigation.navigate("ExpertDetailsScreen")}
                            maxLimit={2} title={Label.ConnectedExperts} type={"ExpertScreen"}/>
                        </View>

                        <View style={Style.popularExpertView}>
                            <SimilarExperts data={populerExpertData}
                            navigateDetail={() => props.navigation.navigate("ExpertDetailsScreen")}
                            maxLimit={3} title={Label.PopularExperts} type={"ExpertScreen"}/>
                        </View>

                        <View style={Style.similarExpertView}>
                            <ExpertInsightsSlider Entries={expertInsight} />
                        </View>

                        <View style={Style.footerView}>
                            <Text style={Style.txtTitle}>{Label.ExpertDes}</Text>
                            <View style={Style.btnView}>
                                <TouchableOpacity style={[Style.btnLearMore, { borderColor: themeColor.buttonColor }]}>
                                    <Text style={[Style.txt, { color: themeColor.buttonColor }]}>{Label.LearnMore}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[Style.btnApplyNow, { backgroundColor: themeColor.buttonColor }]}>
                                    <Text style={[Style.txt, { color: GetAppColor.white }]}>{Label.ApplyNow}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </ScrollView >
            </View>
        </SafeAreaView>
    );
}

export default memo(ExpertScreen);


const expertInsightsData = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        firstName: "Khalid",
        lastName:"AI Rahbi",
        post: 'Senior Manager, Insights',
        jobTitle: 'Special Education',
        subTitle: 'Supporting Autism Children Development Development Development Development Development Development Development Development',
        ideaDescription: "Innovation and Creativty Private Sector Quality of Living, Remewable Energy",
        profilePhoto: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "25 Jan 22",
        min: "57 min read",
        totalViews: '700',
        totalLikes: '200',
        totalComments: '80',
        isLike: true,
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        firstName: "Khalid",
        lastName:"AI Rahbi",
        post: 'Senior Manager, Insights',
        jobTitle: 'Special Education',
        subTitle: 'Supporting Autism Children Development Development Development Development Development Development Development Development',
        ideaDescription: "Innovation and Creativty Private Sector Quality of Living, Remewable Energy",
        profilePhoto: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "25 Jan 22",
        min: "57 min read",
        totalViews: '700',
        totalLikes: '200',
        totalComments: '80',
        isLike: true,
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        firstName: "Khalid",
        lastName:"AI Rahbi",
        post: 'Senior Manager, Insights',
        jobTitle: 'Special Education',
        subTitle: 'Supporting Autism Children Development Development Development Development Development Development Development Development',
        ideaDescription: "Innovation and Creativty Private Sector Quality of Living, Remewable Energy",
        profilePhoto: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "25 Jan 22",
        min: "57 min read",
        totalViews: '700',
        totalLikes: '200',
        totalComments: '80',
        isLike: true,
    },
]

const populerExpertData = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        firstName: "Khalid",
        lastName:"AI Rahbi",
        post: 'Senior Manager, Insights',
        jobTitle: 'Special Education',
        subTitle: 'Supporting Autism Children Development Development Development Development Development Development Development Development',
        ideaDescription: "Innovation and Creativty Private Sector Quality of Living, Remewable Energy",
        profilePhoto: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "25 Jan 22",
        min: "57 min read",
        totalViews: '700',
        totalLikes: '200',
        totalComments: '80',
        isLike: false,
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        firstName: "Khalid",
        lastName:"AI Rahbi",
        post: 'Senior Manager, Insights',
        jobTitle: 'Special Education',
        subTitle: 'Supporting Autism Children Development Development Development Development Development Development Development Development',
        ideaDescription: "Innovation and Creativty Private Sector Quality of Living, Remewable Energy",
        profilePhoto: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "25 Jan 22",
        min: "57 min read",
        totalViews: '700',
        totalLikes: '200',
        totalComments: '80',
        isLike: false,
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        firstName: "Khalid",
        lastName:"AI Rahbi",
        post: 'Senior Manager, Insights',
        jobTitle: 'Special Education',
        subTitle: 'Supporting Autism Children Development Development Development Development Development Development Development Development',
        ideaDescription: "Innovation and Creativty Private Sector Quality of Living, Remewable Energy",
        profilePhoto: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "25 Jan 22",
        min: "57 min read",
        totalViews: '700',
        totalLikes: '200',
        totalComments: '80',
        isLike: false,
    },
]