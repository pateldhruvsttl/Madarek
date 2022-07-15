import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Label } from '../../utils/StringUtil'
import UserProfileStyle from './UserProfileStyle'
import { AppUtil } from '../../utils/AppUtil'

const Expert = (props) => {
    const data = props.data
    return (
        <View>
            <ScrollView>
                <View style={[UserProfileStyle.cornerView,{ marginTop:AppUtil.getHP(2)}]} >
                <Text style={[UserProfileStyle.titleText,{marginTop:AppUtil.getHP(0)}]}>{Label.Expertise}</Text>
                    <View style={UserProfileStyle.scrollSubView}>
                        {
                            [1, 2, 3, 4, 5, 6].map((item, index) => {
                                return (
                                    <View style={UserProfileStyle.catView}>
                                        <Text style={UserProfileStyle.catText}>Health</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                    <Text style={[UserProfileStyle.titleText]}>{Label.Skill}</Text>
                    <Text style={UserProfileStyle.subTitleText}>{data.skills}</Text>

                    <Text style={[UserProfileStyle.titleText]}>{Label.Biography}</Text>
                    <Text style={UserProfileStyle.subTitleText}>{data.biography}</Text>

                    <Text style={UserProfileStyle.titleText}>{Label.Description}</Text>
                    <Text style={UserProfileStyle.subTitleText}>{data.expertiseBrief}</Text>
                </View>

            </ScrollView>
        </View>
    )
}

export default Expert