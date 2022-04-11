import {
    View, Text, TouchableOpacity, FlatList, TextInput,
    SectionList, SafeAreaView
} from 'react-native'
import React, { useRef, useEffect } from 'react'
import Style from './SearchLabelStyle'
import IcnBack from '../../assets/svg/IcnBack'
import IcnSearch from '../../assets/svg/IcnSearch'
import { AppUtil } from '../../utils/AppUtil'
import { GetAppColor } from '../../utils/Colors'
import IcnRecentIcon from '../../assets/svg/IcnRecentIcon'
import { useState } from 'react'
import IcnClose from '../../assets/svg/IcnClose'
import { Label } from '../../utils/StringUtil'



const Item = ({ title, index }) => (


    <View style={Style.seachView}>
        {
            index == 0 ?
                <IcnRecentIcon style={Style.recent} height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
                :
                null
        }
        <Text style={Style.subLabel} >{title}</Text>
    </View>

)
const RenderItem = ({ item, index, clearData }) => (

    <View style={Style.subListing}>
        <SectionList
            sections={item}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item} index={index} />}
            renderSectionHeader={({ section: { title } }) => (
                <View style={Style.header}>
                    <Text style={Style.title}>{title}</Text>

                    {
                        index == 0 ? <TouchableOpacity onPress={clearData}>
                            <Text style={[Style.title, Style.clear]}>{Label.Clear}</Text>
                        </TouchableOpacity> :
                            null
                    }
                </View>
            )}
        />

    </View>

)

const SearchLabel = () => {
    const [isSearchActive, setSearchActive] = useState(false)
    const textInput = useRef(null);
    const [searchStr, setSearchStr] = useState("")
    const [labels, setLabels] = useState(search)
    

    // const onWriteText = (text) => {
    //     if (text === "") {
    //         setSearchActive(false)
    //     } else {
    //         setSearchActive(true)
    //     }

    //     let text1 = text.toLowerCase()
    //     let searchData = labels
    //     searchData.filter((item) => {
    //         return item.includes(text1)
    //     })


    //     setSearchStr(text)
    // }

    let arr = labels.map((ele) => ele.map((element) => { return element.data }))
    let masterData = arr


    const onPressSearchButton = () => {
        setSearchActive(true)
    }
    const onPressCloseButton = () => {
        setSearchActive(false)
        setTimeout(() => {
            setSearchStr('')
            textInput.current.clear()
        }, 500)
    }
    const clearData = () => {
        setLabels([])
    }

    
    return (
        <SafeAreaView>
            <View style={Style.MainView}>
                <View style={Style.centerIcnView}>
                    <TouchableOpacity style={Style.LeftIcnView} >
                        <IcnBack color={GetAppColor.black} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                    </TouchableOpacity>

                    <TextInput
                        ref={textInput}
                        placeholder={"Information Technology"}
                        value={searchStr}
                        style={Style.txtHeader}
                        placeholderTextColor={GetAppColor.pincolor}
                        onChangeText={text => setSearchStr(text)}
                    />
                </View>

                <View style={Style.rightSingleIcnView}>

                    {isSearchActive ?
                        <TouchableOpacity onPress={() => { onPressCloseButton() }} >
                            <IcnClose color={GetAppColor.black} height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
                        </TouchableOpacity> :

                        <TouchableOpacity onPress={() => { onPressSearchButton() }}>
                            <IcnSearch color={GetAppColor.black} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                        </TouchableOpacity>}
                </View>
            </View>
            <View style={Style.listing}>
                <FlatList
                    data={labels}
                    renderItem={({ item, index }) => <RenderItem item={item} index={index} clearData={clearData} />}
                    keyExtractor={item => item.key}
                />
            </View>
        </SafeAreaView>
    )
}

export default SearchLabel


const search = [

    [{

        title: "Recent Searches",
        data: [
            "Technology Equipment Service",
            "IT Support Company",
            "Internet Infrastructure Building",
            "Mobile Wallet Payment Solution Company",
            "SEO Specialist Company"
        ],
    }],

    [{

        title: "Popular Searches",
        data: [
            "Banking and Finance",
            "Vikash Agrawal",
            "Corporate",
            "Renewable Energy",
            "Quality of Living",
        ]
    }]

]