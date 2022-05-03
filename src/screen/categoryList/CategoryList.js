
import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import CategoryListStyle from './CategoryListStyle'
import { Label } from '../../utils/StringUtil'
import IcnClose from '../../assets/svg/IcnClose'
import { AppUtil } from '../../utils/AppUtil'
import { GetAppColor } from '../../utils/Colors'

import { useSelector, useDispatch } from 'react-redux'
import { Service } from '../../service/Service'
import { EndPoints } from '../../service/EndPoints'
import Categories from '../../model/Categories'
import { Loger } from '../../utils/Loger'


const CategoryList = (props) => {
    const [category, setCategory]=useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([])

    const {themeColor} = useSelector((state) => state)

    useEffect(() => {
        var cat=[];
        Service.post(EndPoints.categories, {}, (res) => {
            Loger.onLog('category categorylist Response of category list ========>',JSON.stringify(res.data))
            res.data.forEach(element => {
                let model = new Categories(element);
                cat.push(model)
            });
            setCategories(cat)
            setCategory(cat)
        }, (err) => {
            Loger.onLog('categoryList bannerlist error ========>',err)
        })
    }, []);

    const onPressCategory = (index) => {
        var cat = [...categories];
        var selectedCat = [...selectedCategories];
            if (!selectedCat.includes(cat[index])) {
                selectedCat.push(cat[index])
            }else{
                let idx = selectedCat.indexOf(cat[index])
                selectedCat.splice(idx, 1)
            }
        setSelectedCategories(selectedCat)
        setCategories(cat)
    }

    const renderCell = ({item, index}) => {
        return (
            <TouchableOpacity onPress={()=>onPressCategory(index)} style={selectedCategories.includes(item)?CategoryListStyle.selectedCatBtn:CategoryListStyle.catBtn}>
                <Text style={selectedCategories.includes(item)?CategoryListStyle.selectCellText:CategoryListStyle.cellText}>{item.categoryName}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView>
            <View style={CategoryListStyle.headerView}>
                <Text style={CategoryListStyle.headerText}>{Label.CatTitle}</Text>
                <TouchableOpacity>
                    <IcnClose height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} color={GetAppColor.grayBorder} />
                </TouchableOpacity>
            </View>

            <FlatList
                style={CategoryListStyle.flatStyle}
                data={categories}
                renderItem={renderCell}
            />
        </SafeAreaView>
    )
}

export default CategoryList