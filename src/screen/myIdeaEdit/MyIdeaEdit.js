import React, { memo, useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, Image } from 'react-native';
import ImageLoad from 'react-native-image-placeholder';
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from 'react-redux'


import IcnBulb from '../../assets/svg/IcnBulb';
import IcnTrophy from "../../assets/svg/IcnTrophy"
import IcnStar from "../../assets/svg/IcnStar"
import IcnMessage from "../../assets/svg/settingIcon/IcnMessage"

import IcnThumsUp from "../../assets/svg/IcnThumsUp"
import IcnComment from "../../assets/svg/IcnComment"
import IcnWatchDone from "../../assets/svg/IcnWatchDone"
import IcnMenu from "../../assets/svg/IcnMenu"
import IcnHandle from "../../assets/svg/IcnHandle"
import IcnCalende from "../../assets/svg/IcnCalende"
import IcnbuttonBg from "../../assets/svg/IcnbuttonBg"
import IcnChekCircle from "../../assets/svg/IcnChekCircle"
import IcnRactangle from "../../assets/svg/IcnRactangle"
import IcnShareIcon from "../../assets/svg/IcnShareIcon"
import IcnScreenClose from "../../assets/svg/IcnScreenClose"
import IcnDeletRed from "../../assets/svg/IcnDeletRed"
import IcnSelect from "../../assets/svg/IcnSelect"


import MyEditIdeaCustomList from './MyEditIdeaCustomList'
import CommonHeader from '../../component/commonheader/CommonHeader';
import { AppUtil } from '../../utils/AppUtil';
import { Loger } from '../../utils/Loger';
import Styles from './Style';
import { GetAppColor } from '../../utils/Colors';
import IdeasFilter from '../../component/filter/IdeasFilter';
import IcnRemoveItem from '../../assets/svg/IcnRemoveItem';
import Loader from '../../component/Loader';
import { Label } from '../../utils/StringUtil';


const myIdeaEdit = () => {

    const { themeColor } = useSelector((state) => state)

    const [publicBtn, setPubicBtn] = useState(false);
    const [sectors, setSectors] = useState("Selected");
    const [sector, setSector] = useState("sector");
    const [selectItemList, setSlectItemList] = useState("");
    const [CurremtItem, setCurremtItem] = useState("");
    const [selectedItemList, setSelectedItemList] = useState(["abc", "bcd", "cde", "anbcd", "Ultrices", "accumsan fermentum. "]);

    const renderItem1 = ({ item }) => {

        return (
            <TouchableOpacity style={Styles.btnView1} >
                <ImageLoad style={Styles.bgImage} source={{ uri: item }} isShowActivity={false} />
            </TouchableOpacity>
        )
    }
    const renderItem2 = ({ item }) => {

        return (
            item == "emty" ?
                <TouchableOpacity style={[Styles.btnView2]} >
                    <Text style={Styles.btnAdd1}>+</Text>
                    <Text style={Styles.btnAdd2}>ADD THOTO</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={Styles.btnView1} >
                    <ImageLoad style={Styles.bgImage} source={{ uri: item }} isShowActivity={false} />
                </TouchableOpacity>
        )
    }
    const renderItem3 = ({ item }) => {

        return (
            item == "emty" ?
                <TouchableOpacity style={[Styles.btnView2]} >
                    <Text style={Styles.btnAdd1}>+</Text>
                    <Text style={Styles.btnAdd2}>ADD Vedeo</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={Styles.btnView1} >
                    <ImageLoad style={Styles.bgImage} source={{ uri: item }} isShowActivity={false} />
                </TouchableOpacity>
        )
    }
    const renderItem4 = ({ item }) => {

        return (
            <TouchableOpacity style={Styles.btnView3} >
                <Text>hello</Text>
                <IcnDeletRed height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
            </TouchableOpacity>
        )
    }
    const renderItem5 = ({ index, item }) => {
        return (
            <View style={Styles.profileDetails}>
                <Image
                    style={Styles.imgChallengeListStyle}
                    horizontal
                    resizeMode='cover'
                    source={{ uri: item.url }}
                />
                <TouchableOpacity style={Styles.removeIcnStyle} onPress={() => onRemoveImage(index, index)}>
                    <IcnRemoveItem width={30} height={30} />
                </TouchableOpacity>

                <Text style={Styles.personName}>{item.name}</Text>

            </View>
        )
    }
    const onRemoveImage = (index) => {
        Loger.onLog("index", index)
    }

    const onCheckSelectItem = () => {

        if (CurremtItem == 0)
            true;
        else if (CurremtItem == 1)
            true;
        else if (CurremtItem == "Hide Team Identity")
            true;
        else if (CurremtItem == "Post Idea Privately (This option will limit the view of the Idea only to the selected team members and will not be visible on the public site)")
            true;
    }



    const onSetMultiItems1 = (index, _selectItemList) => {

        if (_selectItemList == "Hide Team Identity" && 0 == index) {

            if (_selectItemList == "Hide Team Identity") {
                setCurremtItem("0");
            }
            else {
                if (_selectItemList == "") {
                    setCurremtItem("Hide Team Identity");
                }
            }
        }
    }
    const onSetMultiItems2 = (index, _selectItemList) => {

        if (_selectItemList == "Post Idea Privately (This option will limit the view of the Idea only to the selected team members and will not be visible on the public site)" && 1 == index) {

            if (_selectItemList == "Post Idea Privately (This option will limit the view of the Idea only to the selected team members and will not be visible on the public site)") {
                setCurremtItem("1");
            }
            else {
                if (_selectItemList == "") {
                    setCurremtItem("Post Idea Privately (This option will limit the view of the Idea only to the selected team members and will not be visible on the public site)");
                }
            }
        }
    }
    const userTypeButtonView = () => {

    }


    const addItem = (item) => {
        switch (item) {

            case 'Item Cover Image':
                return (
                    <View>
                        <Text style={Styles.txtIdeaCoverImage}>{"Idea Cover Image"}</Text>
                        <FlatList
                            data={dtList1}
                            numColumns={'3'}
                            scrollEnabled={false}
                            renderItem={(url) => renderItem1(url)}
                            keyExtractor={item => item.id}
                            style={Styles.FlatListStyle}
                        />
                    </View>)
                break;
            case 'Upload Additional Image':
                return (
                    <View>

                        <Text style={Styles.txtIdeaCoverImage}>{"Upload Additional Image"}</Text>
                        <FlatList
                            data={dtList2}
                            numColumns={'3'}
                            scrollEnabled={false}
                            renderItem={(url) => renderItem2(url)}
                            keyExtractor={item => item.id}
                            style={Styles.FlatListStyle}
                        />
                        <Text style={Styles.txtIdeaCover}>{"Allowed jpg, png, jpeg formats.Optimal Size : 2MBAllowed jpg, png, jpeg formats.Optimal Size : 2MB"}</Text>
                        <Text style={Styles.txt1}>{"Idea Name"}</Text>
                        <Text style={Styles.txt2}>{"Academy of Development Research and Training Consulting Pvt Ltd"}</Text>
                    </View>
                )
                break;
            case 'line':
                return (
                    <View style={Styles.line} />
                )
                break;
            case 'sector':
                return (
                    <>
                        <View>
                            <View style={Styles.line} />
                            <View style={Styles.selectorSty}>

                                <View style={Styles.selectorSty}>
                                    <IcnCalende height={AppUtil.getHP(2.6)} width={AppUtil.getHP(2.6)} />
                                    <Text style={[Styles.title, { marginStart: 5 }]}>15 April 22</Text>
                                </View>

                                <View style={[Styles.selectorSty, { marginHorizontal: 10 }]}>
                                    <Text style={[Styles.title, { marginEnd: AppUtil.getWP(2), color: publicBtn ? GetAppColor.catBorder : GetAppColor.pincolor }]}>Private</Text>

                                    <TouchableOpacity onPress={() => setPubicBtn(publicBtn ? false : true)}>
                                        <View >
                                            <IcnbuttonBg height={AppUtil.getHP(5)} width={AppUtil.getHP(5)} />
                                        </View>
                                        <View style={!publicBtn ? { marginStart: -10, position: 'absolute' } : { end: -10, position: 'absolute' }}>
                                            <IcnHandle height={AppUtil.getHP(5)} width={AppUtil.getHP(5)} />
                                        </View>
                                    </TouchableOpacity>

                                    <Text style={[Styles.title, { marginStart: AppUtil.getWP(1), color: !publicBtn ? GetAppColor.catBorder : GetAppColor.pincolor }]}>Public</Text>

                                </View >

                            </View >

                        </View>

                        <View style={Styles.innerView1}>
                            <MyEditIdeaCustomList currentItem={sectors} sector={sector} item={sectorsList} onSelect={(txt) => setSectors(txt)} />
                        </View>
                        <View style={Styles.innerView1}>
                            <MyEditIdeaCustomList currentItem={sectors} sector={sector} item={sectorsList} onSelect={(txt) => setSectors(txt)} />
                        </View>
                        <View style={Styles.innerView1}>
                            <MyEditIdeaCustomList currentItem={sectors} sector={sector} item={sectorsList} onSelect={(txt) => setSectors(txt)} />
                        </View>

                    </>
                )
                break;
            case 'star':
                return (
                    <>
                        <View style={Styles.dateStyle1}>
                            <View style={[Styles.dateStyle2, { marginTop: AppUtil.getHP(1.6) }]}>
                                <IcnTrophy height={AppUtil.getHP(2.6)} width={AppUtil.getHP(2.6)} />
                                <IcnStar height={AppUtil.getHP(2.6)} width={AppUtil.getHP(2.6)} style={{ marginStart: AppUtil.getWP(3) }} />
                                <IcnMessage height={AppUtil.getHP(2.6)} width={AppUtil.getHP(2.6)} style={{ marginStart: AppUtil.getWP(3) }} fill={GetAppColor.acedemyRedtitle} />
                                <IcnBulb height={AppUtil.getHP(2.6)} width={AppUtil.getHP(2.6)} style={{ marginStart: AppUtil.getWP(3) }} />
                            </View>
                            <View style={Styles.dateStyle2}>
                                <View style={Styles.secondCalView}>
                                    <View style={Styles.secondInnerCalView}>
                                        <IcnWatchDone style={Styles.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                                        <Text style={Styles.title}>{10}</Text>
                                    </View>
                                    <View style={Styles.secondInnerCalView}>
                                        <IcnThumsUp style={Styles.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                                        <Text style={Styles.title}>{9}</Text>
                                    </View>
                                    <View style={Styles.secondInnerCalView}>
                                        <IcnComment style={Styles.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                                        <Text style={Styles.title}>{20}</Text>
                                    </View>
                                    <View style={Styles.secondInnerCalView}>
                                        <IcnComment style={Styles.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                                        <Text style={Styles.title}>{20}</Text>
                                    </View>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }}>
                                        <IcnMenu fill={GetAppColor.textColor} height={AppUtil.getHP(1.8)} width={AppUtil.getHP(1.8)} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={Styles.butView}>
                            <TouchableOpacity style={Styles.btnMaturation1}>
                                <Text style={Styles.txtMaturation}>{"Maturation"}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.btnMaturation2}>
                                <IcnChekCircle height={AppUtil.getHP(2.6)} width={AppUtil.getHP(2.6)} />
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.btnMaturation3}>
                                <IcnRactangle height={AppUtil.getHP(2.6)} width={AppUtil.getHP(2.6)} stroke={"#fff"} />
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.btnMaturation4}>
                                <IcnShareIcon height={AppUtil.getHP(2.6)} width={AppUtil.getHP(2.6)} stroke={"#fff"} />
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.txtDescriptionView}>
                            <Text style={Styles.txtDescription1}>Description</Text>
                            <Text style={Styles.txtDescription2}>Idea description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at iaculis eu at Idea description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at iaculis eu at Idea description Lorem ipsum dolor sit amet, consectetur adielit. Ultricies at iaculis eu at Idea description Lorem ipsudjm dolor sit amet, consectetur adipiscing elit. Ultricies at iaculis eu at description. Lorem ipsum dolor sit amet. consectetur adipiscing elit. Ultricies at iaculis eu at Idea description Lorem ipsum dolor sit amet. consectetur adipiscing elit. Ultricies at iaculis eu at Idea description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at iaculis eu at Idea description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at iaculis eu at description.</Text>
                        </View>
                        <View style={Styles.line} />
                    </>
                )
                break;
            case 'Callange':
                return (
                    <>
                        <View style={Styles.txtDescriptionView}>
                            <Text style={Styles.txtDescription1}>Challenges The Idea is Addressing</Text>
                        </View>
                        <View style={Styles.selectItemButtonView}>
                            {
                                selectedItemList.map((ele) => (
                                    <TouchableOpacity style={Styles.selectItemBtn} onPress={() => onSetMultiItem(ele)}>
                                        <Text style={Styles.categoryLabel}>{ele}</Text>
                                        <IcnScreenClose height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
                                    </TouchableOpacity>

                                ))
                            }
                        </View>
                        <View>
                            <TouchableOpacity style={Styles.btnAddMor} onPress={() => addItem()}>
                                <Text style={Styles.categoryLabel1}>{"+Add More"}</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )
                break;
            case 'BenifitOfidea':
                return (
                    <>
                        <View style={Styles.txtDescriptionView}>
                            <Text style={Styles.txtDescription1}>Benefits of Idea Implementation</Text>
                            <Text style={Styles.txtDescription2}>Ultrices nibh auctor nunc ipsum volutpat accumsan fermentum. Nisl, id nulla in mauris cursus egestas velit. Nunc malesuada vestibulum mauris id volutpat, donec vel, sed. Sed faucibus praesent tristique cursus nascetur habitant nunc sed. Placerat tempus sagittis tempor quam turpis volutpat tincidunt commodo. Ut mauris feugiat in eu habitant eu pulvinar sed condimentum.</Text>
                        </View>
                        <View style={Styles.line} />
                    </>
                )
                break;
            case 'Video':
                return (
                    <>
                        <View style={Styles.txtvedioView}>
                            <Text style={Styles.txtDescription1}>Video</Text>
                        </View>
                        <View>
                            {/* <FlatList
                            data={dtList2}
                            horizontal
                            contentContainerStyle={Styles.lisView}
                            scrollEnabled={false}
                            renderItem={(url) => renderItem3(url)}
                            keyExtractor={item => item.id}
                            style={Styles.FlatListStyle}
                        /> */}
                            <FlatList
                                // horizontal={true}
                                data={dtList3}
                                numColumns={"3"}
                                renderItem={(url) => renderItem3(url)}
                                keyExtractor={(item) => item.id}
                                style={Styles.FlatListStyle}
                            />

                            <Text style={Styles.txtIdeaCover}>{"Allowed mp4 formats. Optimal Size : 5MB"}</Text>

                        </View>
                        {/* <View style={Styles.line} /> */}
                    </>
                )
                break;
            case 'Resources':
                return (
                    <>
                        <View style={[Styles.txtvedioView, { flexDirection: 'row', justifyContent: 'space-between', marginTop: AppUtil.getHP(4) },]}>
                            <Text style={Styles.txtDescription1}>Resources</Text>
                            <TouchableOpacity style={Styles.btnAddMore} onPress={() => addItem()}>
                                <Text style={Styles.categoryLabel1}>{"+Add"}</Text>
                            </TouchableOpacity>
                        </View>

                        <FlatList
                            // horizontal={true}
                            data={dtList3}
                            renderItem={(url) => renderItem4(url)}
                            keyExtractor={(item) => item.id}
                            style={Styles.FlatListStyle}
                        />
                        <Text style={Styles.txtIdeaCover}>{"Allowed pdf, jpg, png, jpeg, doc, docx formats. Optimal Size : 2MB"}</Text>

                    </>
                )
                break;
            case 'team':
                return (
                    <>
                        <View style={[Styles.txtvedioView, { flexDirection: 'row', justifyContent: 'space-between', marginTop: AppUtil.getHP(4) },]}>
                            <Text style={Styles.txtDescription1}>team</Text>
                            <TouchableOpacity style={Styles.btnAddMore1} onPress={() => addItem()}>
                                <Text style={Styles.categoryLabel1}>{"+Add Member"}</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={dtList4}
                                renderItem={(item, index) => renderItem5(item, index)}
                                keyExtractor={item => item.name}
                                contentContainerStyle={Styles.lisView}

                            />
                        </View>

                        <View style={Styles.line} />

                        <View style={{
                            marginHorizontal: "2.5%", marginVertical: "5%", marginTop: AppUtil.getHP(1.6)

                        }}>
                            <TouchableOpacity onPress={() => onSetMultiItems1(0, "Hide Team Identity")} style={{ alignItems: 'center', flexDirection: 'row', }}>
                                <View style={Styles.userTypeButtonView}></View>
                                {
                                    onCheckSelectItem() ?
                                        <View style={Styles.multiSelectYellowBorderView}>
                                            <IcnSelect height={AppUtil.getHP(1.4)} width={AppUtil.getHP(1.4)} />
                                        </View>
                                        :
                                        <View style={Styles.multiSelectBorderView} />
                                }
                                <Text style={{ marginStart: AppUtil.getWP(2), paddingRight: AppUtil.getWP(3), }}>{"Hide Team Identity"}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => onSetMultiItems2(1, item)} style={{ flexDirection: 'row', marginTop: AppUtil.getWP(2), }}>
                                <View style={Styles.userTypeButtonView}></View>
                                {
                                    onCheckSelectItem() ?
                                        <View style={Styles.multiSelectYellowBorderView}>
                                            <IcnSelect height={AppUtil.getHP(1.4)} width={AppUtil.getHP(1.4)} />
                                        </View>
                                        :
                                        <View style={Styles.multiSelectBorderView} />
                                }
                                <Text style={{ marginStart: AppUtil.getWP(2), paddingRight: AppUtil.getWP(3), }}>{"Post Idea Privately (This option will limit the view of the Idea only to the selected team members and will not be visible on the public site)"}</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={Styles.btnView}>
                            <TouchableOpacity style={[Styles.btnLearMore, { borderColor: themeColor.buttonColor }]} onPress={()=> navigation.navigate("BecomeAnExpert")}>
                                <Text style={[Styles.txt, { color: themeColor.buttonColor }]}>{Label.LearnMore}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[Styles.btnApplyNow, { backgroundColor: themeColor.buttonColor }]}>
                                <Text style={[Styles.txt, { color: GetAppColor.white }]}>{Label.ApplyNow}</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )
                break;
            default: null;

        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CommonHeader isType={"Edit Idea"} />

            <FlatList
                data={itemList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => addItem(item)}
            />

        </SafeAreaView >
    );
}
export default memo(myIdeaEdit);

// const itemList = ["Resources", "team"];
const itemList = ["Item Cover Image", "Upload Additional Image", "line", "sector", "star", "Callange", "BenifitOfidea", "Video", "Resources","team"];

const dtList1 = ['https://i.imgur.com/5tj6S7Ol.jpg',];

const dtList2 = ['https://i.imgur.com/5tj6S7Ol.jpg', 'https://i.imgur.com/5tj6S7Ol.jpg', 'https://i.imgur.com/5tj6S7Ol.jpg',
    'https://i.imgur.com/5tj6S7Ol.jpg', 'emty'];
const sectorsList = ["Slider", "Tab", "Challenges", "Spotlight", "ExpertInsightsSlider", "FavouriteCategories", "Button"];
const dtList3 = ['https://i.imgur.com/5tj6S7Ol.jpg', 'https://i.imgur.com/5tj6S7Ol.jpg', 'emty',];


const dtList4 = [
    {
        name: 'Children Omani ',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        remove: "true",
    },
    {
        name: 'Dress Competition',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        remove: "false",
    },
    {
        name: 'Competition',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        remove: "true",
    },
    {
        name: 'Children Omani',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        remove: "false",
    },
]
const selectItemList = ["Sector Sector 1", "Sector Ipsm lorem 2", "Sector A", "Aviation", "Banking and Finance", "Child Level Cat", "Constuctuion and Infrastucture", "Corporate Category"];
