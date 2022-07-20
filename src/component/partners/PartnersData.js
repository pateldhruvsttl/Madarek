import { View, Text, Image } from 'react-native'
import React from 'react'
import STYLE from './PartnersDataStyle'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'

const PartnersData = (props) => {

    // {
    //  props.propName.type ? 

    // code here : //code here
    // }
    const renderData = ({ item, index }) => {
        return (
          
                <TouchableOpacity style={STYLE.renderView(index + 1)}>
                    <Image
                        style={STYLE.img}
                        resizeMode='cover'
                        source={{ uri: item.photo_image }}
                    />
                    <View style={STYLE.line}></View>
                    <View style={STYLE.labelView}>
                    <Text style={STYLE.labelTxt}>{item.photo_title}</Text>
                    </View>
                </TouchableOpacity>
        
        )
    }
    return (
        <View style={STYLE.mainView}>
            <FlatList
                data={props.propName.data}
                renderItem={renderData}
                numColumns={'2'}
                contentContainerStyle={STYLE.listing}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default PartnersData