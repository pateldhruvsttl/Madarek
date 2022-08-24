import { View, Text, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import CommonHeader from '../../component/commonheader/CommonHeader'
import AllIdeas from '../../component/homescreen/itemList/ViewMoreIdeas'
import Style from "./IdeasListStyle";
import IdeasFilter from '../../component/filter/IdeasFilter';
import { deviceId } from '../../utils/Constant';
import { AppConfig, getLanguage } from '../../manager/AppConfig';
import { UserManager } from '../../manager/UserManager';
import { Service } from '../../service/Service';
import { EndPoints } from '../../service/EndPoints';
import { Loger } from '../../utils/Loger';
import SubmitIdeaList from '../../model/SubmitIdeaList';


const MySubmittedIdeas = () => {

    const [isFilterVisible, setFilterVisible] = useState(false);
    const [isFilter, setFilter] = useState(false);
    const [submitIdea, setSubmitIdea] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [isCategories, setCategories] = useState("");
    const [isSector, setSector] = useState("");
    const [isSortBy, setSortBy] = useState("");

    useEffect(() => {
        submitIdeaList()
    }, [])

    const submitIdeaList = (tabType = "list", pageNo = 1) => {
        const data = {
            "device_id": deviceId,
            "token": AppConfig.token,
            "language": getLanguage(),
            "frontuser_id": UserManager.userId,
            "limit": AppConfig.pageLimit,
            "type": tabType,
            "idea_id": "",
            "page": pageNo
        }
        if (pageNo == 1) {
            setSubmitIdea([]);
        }

        Service.post(EndPoints.submitIdeaList, data, (response) => {
            const idea = []
            Loger.onLog('response of submitIdeaList', response);
            response.data.map((item) => {
                let model = new SubmitIdeaList(item)
                idea.push(model)
            })
            if (pageNo === 1) setSubmitIdea(idea);
            else setSubmitIdea([...submitIdea, ...idea]);
        },
            (error) => {
                Loger.onLog('response of submitIdeaList', error);
            }
        )
    }
    const paginations = () => {
        setPageNo(pageNo + 1);
        submitIdeaList("list", pageNo + 1);
    };
    const favoriteIdea = (id) => {
        var data = {
            field_name: "idea_id",
            id: id,
            frontuser_id: UserManager.userId,
            model: "FavoriteIdeas",
        };

        Service.post(EndPoints.ideaLikeUnlike, data, (res) => {
            const likeDislike = res?.data === "dislike" ? true : false;

            let submitIdeaArr = [];
            submitIdeaArr = submitIdea;
            submitIdeaArr.map((ele, index) => {
                if (ele.id == id) {
                    submitIdeaArr[index].favorite = likeDislike;
                }
            });
            setSubmitIdea([...submitIdeaArr])
        }, (err) => { }
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

                let submitIdeaArr = [];
                submitIdeaArr = submitIdea;
                submitIdeaArr.map((ele, index) => {
                    if (ele.id == id) {
                        if (likeDislike == 1) {
                            submitIdeaArr[index].like = likeDislike;
                            submitIdeaArr[index].totalLike =
                                Number(submitIdeaArr[index].totalLike) + 1;
                        } else {
                            submitIdeaArr[index].like = likeDislike;
                            submitIdeaArr[index].totalLike =
                                Number(submitIdeaArr[index].totalLike) - 1;
                        }
                    }
                    setSubmitIdea([...submitIdeaArr])
                });

            }, (err) => { Loger.onLog("err of likeUnlike", err) }
        );
    };

    return (
        <SafeAreaView style={Style.container}>
            <CommonHeader isType={"MySubmittedIdea"} onMenuClick={() => { props.navigation.openDrawer() }}
                onFilter={() => setFilterVisible(!isFilterVisible)} />

            <AllIdeas navigateDetail={() => props.navigation.navigate('IdeaDetails')}
                isMySubmitType={true} propName={{ type: "AllIdeas", data: submitIdea, favoriteIdea: favoriteIdea,onLikeIdeas: onLikeIdeas, }}
                paginations={() => paginations()} />

            <IdeasFilter type="SubmitIdea" visible={isFilterVisible} onClose={() => setFilterVisible(!isFilterVisible)} isFilter={isFilter} />
        </SafeAreaView>
    )
}

export default MySubmittedIdeas

