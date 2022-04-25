import { View, Text,FlatList, TouchableOpacity , Image} from 'react-native'
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

const UserCategory = (props) => {

    const { themeColor } = useSelector((state) => state)
    const [category, setCategory]=useState([])
    const [categories, setCategories]=useState([])
    const [isSearch, setSearch] = useState(false);
    const [searchStr, setSearchStr] = useState("")

    useEffect(() => {
        var cat=[];
        Service.post(EndPoints.categories, {}, (res) => {
            Loger.onLog('User category categorylist Response of category list ========>',JSON.stringify(res.result))
            res.result.forEach(element => {
                let model = new Categories(element);
                cat.push(model)
            });
            setCategories(cat)
            setCategory(cat)
        }, (err) => {
            Loger.onLog('user category category list error ========>',err)
        })
    }, []);


    const onWriteText = (text) => {
        if (text === "") {
            setSearch(false)
        } else {
            setSearch(true)
        }
        setSearchStr(text)
        const searchData = category.filter(task => task.categoryName.includes(text))
        var cat = []
        searchData.forEach(obj => {
            cat.push(obj)
        });
        setCategories(cat)
    }
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={[Style.btnView,{borderColor:themeColor.headerColor}]}>
                <View style={Style.heartView}>
                    <Heart height={AppUtil.getHP(1.8)} width={AppUtil.getHP(1.8)} />
                </View>
                {/* <IcnInformationTechnology fill={GetAppColor.catBorder} height={AppUtil.getHP(3.6)} width={AppUtil.getHP(3.6)} /> */}
                <Image style={{height:AppUtil.getHP(3.6), width:AppUtil.getHP(3.6)}} source={{uri:item.categoryIcon}} />
                {/* {item.icon} */}
                <Text style={Style.txtBtn}>{item.categoryName}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView>
            <CommonHeader isType={"userCategoryScreen"} onMenuClick={() => { props.navigation.openDrawer() }} />
            <View style={Style.searchView}>
                <TextInput
                    style={Style.input}
                    placeholder={Label.SearchCategory}
                    placeholderTextColor={GetAppColor.grayShadeBorder}
                    onChangeText={(text)=>onWriteText(text)}
                />
                <GraySearchIcon height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} />
            </View>

            <FlatList
                data={categories}
                style={Style.flatelist}
                contentContainerStyle={Style.lisView}
                numColumns={'3'}
                scrollEnabled={false}
                renderItem={renderItem}
            // keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

export default UserCategory
