import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import CommonHeader from '../../component/commonheader/CommonHeader'
import MyAccountStyle from './MyAccountStyle'

const UserProfileView = (props) => {
    return (
        <SafeAreaView>
            <CommonHeader isType={"UserProfile"} onEditProfile={()=>props.navigation.navigate('EditUserProfileView')} onMenuClick={() => { props.navigation.openDrawer() }} />

            <ScrollView>
                <View style={MyAccountStyle.cornerView} >
                    <Image style={MyAccountStyle.userImage} />

                    <Text style={MyAccountStyle.titleText}>User Type</Text>
                    <Text style={MyAccountStyle.subTitleText}>Individual</Text>
                    <View style={MyAccountStyle.flexView}>
                        <View style={MyAccountStyle.partView}>
                            <Text style={MyAccountStyle.titleText}>Name</Text>
                            <Text style={MyAccountStyle.subTitleText}>Individual</Text>
                        </View>

                        <View style={MyAccountStyle.partView}>
                            <Text style={MyAccountStyle.titleText}>Last Name</Text>
                            <Text style={MyAccountStyle.subTitleText}>Individual</Text>
                        </View>
                    </View>
                    <Text style={MyAccountStyle.titleText}>Oraganization Name</Text>
                    <Text style={MyAccountStyle.subTitleText}>Individual</Text>

                    <Text style={MyAccountStyle.titleText}>Job Title(optional)</Text>
                    <Text style={MyAccountStyle.subTitleText}>Individual</Text>

                    <Text style={MyAccountStyle.titleText}>Email ID</Text>
                    <Text style={MyAccountStyle.subTitleText}>Individual</Text>

                    <View style={MyAccountStyle.flexView}>
                        <View style={MyAccountStyle.partView}>
                            <Text style={MyAccountStyle.titleText}>Country</Text>
                            <Text style={MyAccountStyle.subTitleText}>Individual</Text>
                        </View>

                        <View style={MyAccountStyle.partView}>
                            <Text style={MyAccountStyle.titleText}>City</Text>
                            <Text style={MyAccountStyle.subTitleText}>Individual</Text>
                        </View>
                    </View>

                    <Text style={MyAccountStyle.titleText}>Mobile Number</Text>
                    <Text style={MyAccountStyle.subTitleText}>Individual</Text>

                    <Text style={MyAccountStyle.titleText}>Categories</Text>
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

                    <Text style={MyAccountStyle.titleText}>Short Description</Text>
                    <Text style={MyAccountStyle.subTitleText}>Lorem</Text>

                    <Text style={MyAccountStyle.titleText}>Facebook Link</Text>
                    <Text style={MyAccountStyle.subTitleText}>Lorem</Text>

                    <Text style={MyAccountStyle.titleText}>Twitter Link</Text>
                    <Text style={MyAccountStyle.subTitleText}>Lorem</Text>

                    <Text style={MyAccountStyle.titleText}>Linkdin Link</Text>
                    <Text style={MyAccountStyle.subTitleText}>Lorem</Text>

                    <Text style={MyAccountStyle.titleText}>About Expert</Text>
                    <Text style={MyAccountStyle.subTitleText}>Lorem</Text>

                    <Text style={MyAccountStyle.titleText}>Description</Text>
                    <Text style={MyAccountStyle.subTitleText}>Lorem</Text>

                  

                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default UserProfileView