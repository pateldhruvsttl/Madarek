import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import UserProfileStyle from './UserProfileStyle'
import { Label } from '../../utils/StringUtil'

const Personal = () => {
    return (
        <View>
            <ScrollView>
                <View style={UserProfileStyle.cornerView} >
                    <Image style={UserProfileStyle.userImage} />

                    <Text style={UserProfileStyle.titleText}>{Label.UserType}</Text>
                    <Text style={UserProfileStyle.subTitleText}>Individual</Text>
                    <View style={UserProfileStyle.flexView}>
                        <View style={UserProfileStyle.partView}>
                            <Text style={UserProfileStyle.titleText}>{Label.Name}</Text>
                            <Text style={UserProfileStyle.subTitleText}>Individual</Text>
                        </View>

                        <View style={UserProfileStyle.partView}>
                            <Text style={UserProfileStyle.titleText}>{Label.lastname}</Text>
                            <Text style={UserProfileStyle.subTitleText}>Individual</Text>
                        </View>
                    </View>
                    <Text style={UserProfileStyle.titleText}>{Label.OrganizationName}</Text>
                    <Text style={UserProfileStyle.subTitleText}>Individual</Text>

                    <Text style={UserProfileStyle.titleText}>{Label.JobTitle}</Text>
                    <Text style={UserProfileStyle.subTitleText}>Individual</Text>

                    <Text style={UserProfileStyle.titleText}>{Label.EmailTitle}</Text>
                    <Text style={UserProfileStyle.subTitleText}>Individual</Text>

                    <View style={UserProfileStyle.flexView}>
                        <View style={UserProfileStyle.partView}>
                            <Text style={UserProfileStyle.titleText}>{Label.Country}</Text>
                            <Text style={UserProfileStyle.subTitleText}>Individual</Text>
                        </View>

                        <View style={UserProfileStyle.partView}>
                            <Text style={UserProfileStyle.titleText}>{Label.City}</Text>
                            <Text style={UserProfileStyle.subTitleText}>Individual</Text>
                        </View>
                    </View>

                    <Text style={UserProfileStyle.titleText}>{Label.MobileNumber}</Text>
                    <Text style={UserProfileStyle.subTitleText}>Individual</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Personal