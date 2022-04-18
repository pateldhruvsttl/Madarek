import { View, Text, SafeAreaView, StatusBar, StyleSheet, FlatList, TouchableOpacity , Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import CommonHeader from '../../component/commonheader/CommonHeader'
import { GetAppColor } from '../../utils/Colors'
import { TextInput } from 'react-native-gesture-handler'
import GraySearchIcon from '../../assets/svg/GraySearchIcon'
import { AppUtil } from '../../utils/AppUtil'
import IcnBack from '../../assets/svg/IcnBack'
import { Label } from '../../utils/StringUtil'
import { useSelector } from 'react-redux'
import FONTS from '../../utils/Fonts'
import IcnInformationTechnology from "../../assets/svg/IcnInformationTechnology"
import Heart from '../../assets/svg/Heart'
import { Service } from '../../service/Service'
import { EndPoints } from '../../service/EndPoints'
import Categories from '../../model/Categories'
import { Loger } from '../../utils/Loger'


const testData = [
    {
        title: 'Favourites landscapes 1',
        icon: <IcnBack height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} />
    },
    {
        title: 'Favourites landscapes 2',
        icon: <IcnBack height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} />
    },
    {
        title: 'Favourites landscapes 3',
        icon: <IcnBack height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} />
    },
    {
        title: 'Favourites landscapes 4',
        icon: <IcnBack height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} />
    },
    {
        title: 'Favourites landscapes 5',
        icon: <IcnBack height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} />
    },
    {
        title: 'Favourites landscapes 6',
        icon: <IcnBack height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} />
    },
    {
        title: 'Favourites landscapes 6',
        icon: <IcnBack height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} />
    }
];

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
            <TouchableOpacity style={[UserCategoryStyles.btnView,{borderColor:themeColor.headerColor}]}>
                <View style={UserCategoryStyles.heartView}>
                    <Heart height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
                </View>
                {/* <IcnInformationTechnology fill={GetAppColor.catBorder} height={AppUtil.getHP(3.6)} width={AppUtil.getHP(3.6)} /> */}
                <Image style={{height:AppUtil.getHP(3.6), width:AppUtil.getHP(3.6)}} source={{uri:item.categoryIcon}} />
                {/* {item.icon} */}
                <Text style={UserCategoryStyles.txtBtn}>{item.categoryName}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView>
            <CommonHeader isType={"userCategoryScreen"} onMenuClick={() => { props.navigation.openDrawer() }} />
            <View style={UserCategoryStyles.searchView}>
                <TextInput
                    style={UserCategoryStyles.input}
                    placeholder='Search'
                    placeholderTextColor={GetAppColor.grayBorder}
                    onChangeText={(text)=>onWriteText(text)}
                />
                <GraySearchIcon height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} />
            </View>

            <FlatList
                data={categories}
                style={UserCategoryStyles.flatelist}
                contentContainerStyle={UserCategoryStyles.lisView}
                numColumns={'3'}
                scrollEnabled={false}
                renderItem={renderItem}
            // keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

export default UserCategory

const UserCategoryStyles = StyleSheet.create({
    btnView: {
        width: AppUtil.getWP(30),
        height: AppUtil.getHP(12),
        borderWidth: 0.5,
        borderBottomWidth: AppUtil.getHP(.4),
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: "1%",
        marginVertical: '1%',
        borderRadius: 5,
        backgroundColor: GetAppColor.white,
        borderColor: GetAppColor.catBorder
    },
    heartView: { alignSelf: 'flex-end', end: 5, position:'absolute', top:5 },
    input: { width: '90%', padding: 0, height: '100%', padding:0, color:GetAppColor.textColor },
    searchView: { flexDirection: 'row', width: '100%', alignItems: 'center', paddingHorizontal: AppUtil.getWP(5), height: 50, backgroundColor: GetAppColor.white, justifyContent: 'space-between' },
    txtBtn: {
        fontSize: AppUtil.getHP(1.6),
        marginTop: AppUtil.getHP(0.9),
        color: GetAppColor.textColor,
        fontFamily: FONTS.robotRegular,
        textAlign: 'center'
    },
    lisView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    flatelist:{
        marginTop:AppUtil.getHP(1.6)
    }

})