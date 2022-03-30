import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import Style from "./ResourceChallengeStyle";
import IcnDownload from '../../assets/svg/IcnDownload'
import { AppUtil } from '../../utils/AppUtil'
import { Label } from '../../utils/StringUtil'
import IcnPDF from '../../assets/svg/IcnPDF';


const ResourceChallenge = (props) => {
    return (
        <View style={Style.contentBox}>
            <Text style={Style.heading}>{Label.Resources}</Text>
            {props.resource && props.resource.length !== 0 ?
                props.resource.map((item, idx) => (

                    <View style={Style.resourceContainer}>

                        <View style={Style.resourceChallenge}>
                            <IcnPDF style={Style.icnDocument} height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
                            <Text style={Style.resourceTitle}>{item.resourceName}</Text>
                        </View>

                        <TouchableOpacity style={Style.downloadIcon}>
                            <IcnDownload isType={props.isType} height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
                        </TouchableOpacity>
                    </View>



                )) : null

            }
            {/* <View style={{ flex: 1, backgroundColor: "red", flexDirection: 'row' }}> */}
                <ScrollView contentContainerStyle={Style.imgView} horizontal={true}
                showsHorizontalScrollIndicator={false}>
                    {
                        props.resource.map((item) => (
                            <Image
                                style={Style.img}
                                resizeMode='cover'
                                source={{ uri: item.url }}
                            />
                        ))
                    }
                </ScrollView>
            {/* </View> */}

        </View>
    )
}

export default ResourceChallenge
