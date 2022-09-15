import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CustomList from './CustomList'

import { Label } from '../../utils/StringUtil'
import Style from './IdeaStepStyle'
import { GetAppColor } from '../../utils/Colors'
import { Service } from '../../service/Service'
import { EndPoints } from '../../service/EndPoints'
import SubmitIdeaDropDownModel from '../../model/SubmitIdeaDropDownModel'
import { Loger } from '../../utils/Loger'


function SubmitIdeaStep1(props) {

    const { themeColor } = useSelector((state) => state);

    const [title, setTitle] = useState("");

    const [sectors, setSectors] = useState(Label.Selected);
    const [isSectorsId, setSectorsId] = useState("");

    const [category, setCategory] = useState(Label.Selected);
    const [isCategoryid, setCategoryId] = useState("");

    const [subCategory, setSubCategory] = useState(Label.Selected);
    const [isSubCategoryId, setSubCategoryId] = useState("");

    const [isSectorsList, setSectorsList] = useState([]);
    const [isCategoryList, setCategoryList] = useState([]);
    const [isSubCategoryList, setSubCategoryList] = useState([]);

    useEffect(() => {
        getSectors();
    }, [])

    const getSectors = () => {
        Service.get(EndPoints.sector, (res) => {

            var arr = [];
            res.data.forEach((element) => {
                let model = new SubmitIdeaDropDownModel(element);
                arr.push(model);
            });
            setSectorsList(arr);
            getCategories();
        },
            (err) => {
            }
        );
    };

    const getCategories = () => {
        Service.get(EndPoints.categorie, (res) => {
            var arr = [];
            res.data.forEach((element) => {
                let model = new SubmitIdeaDropDownModel(element);
                arr.push(model);
            });
            setCategoryList(arr);
        },
            (err) => {
            }
        );
    };

    const setCategories = (list) => {

        var arr = [];
        setSubCategoryId("");
        setSubCategory("");
        setSubCategoryList([]);

        list.forEach((element) => {
            let model = new SubmitIdeaDropDownModel(element);
            arr.push(model);
        });
        setSubCategoryList(arr);

    };
    const onCheckField = () => {

        var obj = { title: title, sectors: sectors, sectorsId: isSectorsId, category: category, categoryId: isCategoryid, subCategory: subCategory, subCategoryId: isSubCategoryId }

        if (title === "" || sectors === "Selected" || category === "Selected")
            Alert.alert(Label.FillMandatoryFieldsValidation);
        else if (isSubCategoryList.length > 0 && isSubCategoryId === "")
            Alert.alert(Label.FillMandatoryFieldsValidation);
        else
            props.onNext(obj);
    }
    return (
        <View style={Style.MainView}>

            <View style={Style.innerFirstView}>
                <Text style={Style.txtTitle}>{Label.IdeaTitle}<Text style={Style.txtStar}>*</Text></Text>
                <TextInput
                    placeholderTextColor={GetAppColor.grayBorder}
                    numberOfLines={2}
                    multiline={true}
                    style={Style.txtInputTitle}
                    value={title}
                    onChangeText={title => setTitle(title)}
                />
            </View>

            <View style={Style.innerView1}>
                <Text style={Style.txtTitle}>{Label.Sectors}<Text style={Style.txtStar}>*</Text></Text>
                <CustomList currentItem={sectors} item={isSectorsList} onSelect={(item) => { setSectors(item.itemName); setSectorsId(item.id) }} />
            </View>

            <View style={Style.innerView1}>
                <Text style={Style.txtTitle}>{Label.Category}<Text style={Style.txtStar}>*</Text></Text>
                <CustomList currentItem={category} item={isCategoryList} onSelect={(item) => { setCategories(item.subcategory); setCategory(item.itemName); setCategoryId(item.id) }} />
            </View>

            {
                isSubCategoryList.length > 0 &&
                <View style={Style.innerView1}>
                    <Text style={Style.txtTitle}>{Label.SubCategory}<Text style={Style.txtStar}>*</Text></Text>
                    <CustomList currentItem={subCategory} item={isSubCategoryList} onSelect={(item) => { setSubCategory(item.itemName); setSubCategoryId(item.id) }} />
                </View>
            }

            <TouchableOpacity style={[Style.btn, { backgroundColor: themeColor.buttonColor }]} onPress={() => onCheckField()}>
                <Text style={Style.txtBtn}>{Label.Continue}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default memo(SubmitIdeaStep1);
