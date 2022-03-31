import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import CustomList from './CustomList'

import { Label } from '../../utils/StringUtil'
import Style from './IdeaStepStyle'
import { GetAppColor } from '../../utils/Colors'


function SubmitIdeaStep1(props) {

    const { themeColor } = useSelector((state) => state);
    
    const [title, setTitle] = useState("");
    const [sectors, setSectors] = useState("Selected");
    const [category, setCategory] = useState("Selected");
    const [subCategory, setSubCategory] = useState("Selected");

    const onCheckField = () => {
        var obj = { title: title, sectors: sectors, category: category, subCategory: subCategory }

        if(title === "" || sectors === "Selected" || category === "Selected" || subCategory === "Selected")
            Alert.alert("please fill all mandatory fields");
        else     
            props.onNext(obj);
    }
    return (
        <View style={Style.MainView}>

            <View style={Style.innerFirstView}>
                <Text style={Style.txtTitle}>{"Idea Title"}<Text style={Style.txtStar}>*</Text></Text>
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
                <Text style={Style.txtTitle}>{"Sectors"}<Text style={Style.txtStar}>*</Text></Text>
                <CustomList currentItem={sectors} item={sectorsList} onSelect={(txt) => setSectors(txt)} />
            </View>

            <View style={Style.innerView1}>
                <Text style={Style.txtTitle}>{"Category"}<Text style={Style.txtStar}>*</Text></Text>
                <CustomList currentItem={sectors} item={sectorsList} onSelect={(txt) => setCategory(txt)} />
            </View>

            <View style={Style.innerView1}>
                <Text style={Style.txtTitle}>{"Sub Category"}<Text style={Style.txtStar}>*</Text></Text>
                <CustomList currentItem={sectors} item={sectorsList} onSelect={(txt) => setSubCategory(txt)} />
            </View>

            <TouchableOpacity style={[Style.btn, { backgroundColor: themeColor.buttonColor }]} onPress={() => onCheckField()}>
                <Text style={Style.txtBtn}>{Label.Continue}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default memo(SubmitIdeaStep1);

const sectorsList = ["Slider", "Tab", "Challenges", "Spotlight", "ExpertInsightsSlider", "FavouriteCategories", "Button"];