import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import UserProfileStyle from './UserProfileStyle'
import { Label } from '../../utils/StringUtil'
import { AppUtil } from '../../utils/AppUtil'

const OtherDetail = (props) => {
    const data = props.data
    const categoryDetail = props?.data?.categoryInfo || []

    const getCategories = () =>
    categoryDetail && categoryDetail.map((ele) => (
            <View style={UserProfileStyle.catView}>
                <Text style={UserProfileStyle.catText}>{ele.category_name || "No Category"}</Text>
            </View>
        ))

    return (
        <View>
            <ScrollView>

                <View style={[UserProfileStyle.cornerView, { marginTop: AppUtil.getHP(2), }]} >
                    {/* <Text style={[UserProfileStyle.titleText, { marginTop: AppUtil.getHP(0) }]}>{Label.Categories}</Text>
                    <View style={UserProfileStyle.scrollSubView}>
                        {
                            data.categoryInfo.map((item, index) => {
                                return (
                                    <View style={UserProfileStyle.catView}>
                                        <Text style={UserProfileStyle.catText}>{item.category_name}</Text>
                                    </View>
                                )
                            })
                        }
                        {getCategories()}
                    </View> */}

                    <Text style={UserProfileStyle.titleText}>{Label.ShortDiscription}</Text>
                    <Text style={UserProfileStyle.subTitleText}>{data.about}</Text>

                    <Text style={UserProfileStyle.titleText}>{Label.FacebookLink}</Text>
                    <Text style={UserProfileStyle.subTitleText}>{data.facebookLink}</Text>

                    <Text style={UserProfileStyle.titleText}>{Label.TwitterLink}</Text>
                    <Text style={UserProfileStyle.subTitleText}>{data.twitterLink}</Text>

                    <Text style={UserProfileStyle.titleText}>{Label.LinkdinLink}</Text>
                    <Text style={UserProfileStyle.subTitleText}>{data.linkdinLink}</Text>

                </View>

            </ScrollView>
        </View>
    )
}

export default OtherDetail