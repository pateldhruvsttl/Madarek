import { View, Text, ScrollView, Image } from 'react-native'
import React, { memo } from 'react'
import CommonHeader from '../../component/commonheader/CommonHeader'
import MyAccountStyle from './MyAccountStyle'
import { Label } from '../../utils/StringUtil'
import { SafeAreaView } from 'react-native-safe-area-context'

const UserProfileView = (props) => {
    return (
        <View style={{flex:1}}>
        <SafeAreaView>
            <CommonHeader isType={"UserProfile"} onEditProfile={()=>props.navigation.navigate('EditUserProfileView')} onMenuClick={() => { props.navigation.openDrawer() }} />

            <ScrollView>
                <View style={MyAccountStyle.cornerView} >
                    <Image style={MyAccountStyle.userImage} />

                    <Text style={MyAccountStyle.titleText}>{Label.UserType}</Text>
                    <Text style={MyAccountStyle.subTitleText}>Individual</Text>
                    <View style={MyAccountStyle.flexView}>
                        <View style={MyAccountStyle.partView}>
                            <Text style={MyAccountStyle.titleText}>{Label.Name}</Text>
                            <Text style={MyAccountStyle.subTitleText}>Individual</Text>
                        </View>

                        <View style={MyAccountStyle.partView}>
                            <Text style={MyAccountStyle.titleText}>{Label.lastname}</Text>
                            <Text style={MyAccountStyle.subTitleText}>Individual</Text>
                        </View>
                    </View>
                    <Text style={MyAccountStyle.titleText}>{Label.OrganizationName}</Text>
                    <Text style={MyAccountStyle.subTitleText}>Individual</Text>

                    <Text style={MyAccountStyle.titleText}>{Label.JobTitle}</Text>
                    <Text style={MyAccountStyle.subTitleText}>Individual</Text>

                    <Text style={MyAccountStyle.titleText}>{Label.Email}</Text>
                    <Text style={MyAccountStyle.subTitleText}>Individual</Text>

                    <View style={MyAccountStyle.flexView}>
                        <View style={MyAccountStyle.partView}>
                            <Text style={MyAccountStyle.titleText}>{Label.Country}</Text>
                            <Text style={MyAccountStyle.subTitleText}>Individual</Text>
                        </View>

                        <View style={MyAccountStyle.partView}>
                            <Text style={MyAccountStyle.titleText}>{Label.City}</Text>
                            <Text style={MyAccountStyle.subTitleText}>Individual</Text>
                        </View>
                    </View>

                    <Text style={MyAccountStyle.titleText}>{Label.MobileNumber}</Text>
                    <Text style={MyAccountStyle.subTitleText}>Individual</Text>

                    <Text style={MyAccountStyle.titleText}>{Label.Categories}</Text>
                    <View style={MyAccountStyle.scrollSubView}>
                        {
                            [1, 2, 3, 4, 5, 6].map((item, index) => {
                                return (
                                    <View style={MyAccountStyle.catView}>
                                        <Text style={MyAccountStyle.catText}>Health</Text>
                                    </View>
                                )
                            })
                        }
                    </View>

                    <Text style={MyAccountStyle.titleText}>{Label.ShortDiscription}</Text>
                    <Text style={MyAccountStyle.subTitleText}>Lorem</Text>

                    <Text style={MyAccountStyle.titleText}>{Label.FacebookLink}</Text>
                    <Text style={MyAccountStyle.subTitleText}>Lorem</Text>

                    <Text style={MyAccountStyle.titleText}>{Label.TwitterLink}</Text>
                    <Text style={MyAccountStyle.subTitleText}>Lorem</Text>

                    <Text style={MyAccountStyle.titleText}>{Label.LinkdinLink}</Text>
                    <Text style={MyAccountStyle.subTitleText}>Lorem</Text>

                    <Text style={MyAccountStyle.titleText}>{Label.AboutExpert}</Text>
                    <Text style={MyAccountStyle.subTitleText}>Lorem</Text>

                    <Text style={MyAccountStyle.titleText}>{Label.Description}</Text>
                    <Text style={MyAccountStyle.subTitleText}>Lorem</Text>

                  

                </View>
            </ScrollView>

        </SafeAreaView>
        </View>
    )
}

export default memo(UserProfileView);