import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import UserProfileStyle from './UserProfileStyle'
import { Label } from '../../utils/StringUtil'
import { AppUtil } from '../../utils/AppUtil'

const OtherDetail = () => {
    return (
        <View>
            <ScrollView>
        
                <View style={[UserProfileStyle.cornerView,{ marginTop:AppUtil.getHP(2),}]} >
                <Text style={[UserProfileStyle.titleText,{marginTop:AppUtil.getHP(0)}]}>{Label.Categories}</Text>
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

                    <Text style={UserProfileStyle.titleText}>{Label.ShortDiscription}</Text>
                    <Text style={UserProfileStyle.subTitleText}>Lorem</Text>

                    <Text style={UserProfileStyle.titleText}>{Label.FacebookLink}</Text>
                    <Text style={UserProfileStyle.subTitleText}>Lorem</Text>

                    <Text style={UserProfileStyle.titleText}>{Label.TwitterLink}</Text>
                    <Text style={UserProfileStyle.subTitleText}>Lorem</Text>

                    <Text style={UserProfileStyle.titleText}>{Label.LinkdinLink}</Text>
                    <Text style={UserProfileStyle.subTitleText}>Lorem</Text>

                </View>

            </ScrollView>
        </View>
    )
}

export default OtherDetail