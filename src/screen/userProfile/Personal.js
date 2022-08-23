import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import UserProfileStyle from './UserProfileStyle'
import { Label } from '../../utils/StringUtil'
import ImageLoad from 'react-native-image-placeholder'
import { AppUtil } from '../../utils/AppUtil'

const Personal = (props) => {
    const data = props.data
    return (
        <View>
            <ScrollView>
                <View style={UserProfileStyle.cornerView} >
                    <ImageLoad style={UserProfileStyle.userImage} 
                    source={{ uri : data.userPhoto}}
                    resizeMode='cover'
                    borderRadius={AppUtil.getHP(7)}
                    />

                    <Text style={UserProfileStyle.titleText}>{Label.UserType}</Text>
                    <Text style={UserProfileStyle.subTitleText}>{data.userType}</Text>
                    
                    <View style={UserProfileStyle.flexView}>
                        <View style={UserProfileStyle.partView}>
                            <Text style={UserProfileStyle.titleText}>{Label.Name}</Text>
                            <Text style={UserProfileStyle.subTitleText}>{data.firstName}</Text>
                        </View>

                        <View style={UserProfileStyle.partView}>
                            <Text style={UserProfileStyle.titleText}>{Label.lastname}</Text>
                            <Text style={UserProfileStyle.subTitleText}>{data.lastName}</Text>
                        </View>
                    </View>
                    <Text style={UserProfileStyle.titleText}>{Label.OrganizationName}</Text>
                    <Text style={UserProfileStyle.subTitleText}>{data.organization}</Text>

                    <Text style={UserProfileStyle.titleText}>{Label.JobTitle}</Text>
                    <Text style={UserProfileStyle.subTitleText}>{data.jobTitle}</Text>

                    <Text style={UserProfileStyle.titleText}>{Label.EmailTitle}</Text>
                    <Text style={UserProfileStyle.subTitleText}>{data.email}</Text>

                    <View style={UserProfileStyle.flexView}>
                        <View style={UserProfileStyle.partView}>
                            <Text style={UserProfileStyle.titleText}>{Label.Country}</Text>
                            <Text style={UserProfileStyle.subTitleText}>{data.countryName}</Text>
                        </View>

                        <View style={UserProfileStyle.partView}>
                            <Text style={UserProfileStyle.titleText}>{Label.City}</Text>
                            <Text style={UserProfileStyle.subTitleText}>{data.city}</Text>
                        </View>
                    </View>

                    <Text style={UserProfileStyle.titleText}>{Label.MobileNumber}</Text>
                    <Text style={UserProfileStyle.subTitleText}>{data.number}</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Personal