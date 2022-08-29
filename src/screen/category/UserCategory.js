import { View, Text, FlatList, TouchableOpacity, Image, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import CommonHeader from '../../component/commonheader/CommonHeader'
import { GetAppColor } from '../../utils/Colors'
import { TextInput } from 'react-native-gesture-handler'
import GraySearchIcon from '../../assets/svg/GraySearchIcon'
import { AppUtil } from '../../utils/AppUtil'
import { Label } from '../../utils/StringUtil'
import { useSelector } from 'react-redux'
import Heart from '../../assets/svg/Heart'
import { Service } from '../../service/Service'
import { EndPoints } from '../../service/EndPoints'
import Categories from '../../model/Categories'
import { Loger } from '../../utils/Loger'
import { SafeAreaView } from 'react-native-safe-area-context'
import Style from './UserCategoryStyle'
import CloseIcon from '../../assets/svg/CloseIcon'
import IcnClose from '../../assets/svg/IcnClose'
import IdeasFilter from '../../component/filter/IdeasFilter'
import { AppConfig, getLanguage } from '../../manager/AppConfig'

const UserCategory = (props) => {

    const { themeColor } = useSelector((state) => state)
    const [isCategories, setCategories] = useState([])
    const [isSearch, setSearch] = useState(false);
    const [searchStr, setSearchStr] = useState("")
    const [isFilterVisible, setFilterVisible] = useState(false);
    const [isPageNo, setPageNo] = useState(1);

    useEffect(() => {
        onGetData(isPageNo);
    }, []);

    const onGetData = (pageNo) => {

        var cat = [];
        var data = { "language": getLanguage(), "limit": AppConfig.catPageLimit, "page": pageNo }

        Service.post(EndPoints.categorie, data, (res) => {

            if (res.data == "")
                setPageNo(pageNo - 1)

            res.data.forEach(element => {
                let model = new Categories(element);
                cat.push(model)
            });

            if (pageNo == 1) setCategories(cat);
            else setCategories([...isCategories, ...cat]);



        }, (err) => {
        })

    }
    const onWriteText = (text) => {
        if (text === "") {
            setSearch(false)
        } else {
            setSearch(true)
        }
        setSearchStr(text)
        const searchData = isCategories.filter(task => task.categoryName.includes(text))
        var cat = []
        searchData.forEach(obj => {
            cat.push(obj)
        });
        setCategories(cat)
    }
    const onCloseSearch = () => {

        onWriteText("")
        Keyboard.dismiss()
    }

    const onGetPaginations = () => {

        if (isCategories.length > (AppConfig.pageLimit - 1)) {
            onGetData(isPageNo + 1);
            setPageNo(isPageNo + 1);
        }
    }

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={[Style.btnView, { borderColor: themeColor.headerColor }]} onPress={() => props.navigation.navigate("ExpertDirectoryScreen", { id: item.category_id })}>
                <View style={Style.heartView}>
                </View>
                <Image style={{ height: AppUtil.getHP(3.6), width: AppUtil.getHP(3.6) }} source={{ uri: item.categoryIcon }} />
                <Text numberOfLines={2} style={Style.txtBtn}>{item.categoryName}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CommonHeader isType={"userCategoryScreen"} onMenuClick={() => { props.navigation.openDrawer() }} onFilter={() => setFilterVisible(!isFilterVisible)} />
            <View style={Style.searchView}>
                <TextInput
                    style={Style.input}
                    placeholder={Label.SearchCategory}
                    placeholderTextColor={GetAppColor.grayShadeBorder}
                    value={searchStr}
                    onChangeText={(text) => onWriteText(text)}
                />
                {
                    isSearch ?
                        <TouchableOpacity onPress={() => onCloseSearch()}>
                            <IcnClose height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} color={GetAppColor.grayBorder} />
                        </TouchableOpacity> :
                        <GraySearchIcon height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} />

                }

            </View>

            <FlatList
                data={isCategories}
                style={Style.flatelist}
                contentContainerStyle={Style.lisView}
                numColumns={'3'}
                renderItem={renderItem}
                onEndReached={onGetPaginations}

            />
            <IdeasFilter type="UserCategory" visible={isFilterVisible} onClose={() => setFilterVisible(!isFilterVisible)} />

        </SafeAreaView>
    )
}

export default UserCategory
