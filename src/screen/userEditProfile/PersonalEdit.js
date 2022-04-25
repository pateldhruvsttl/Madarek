import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import EditUserProfileStyle from './EditUserProfileStyle'
import { useSelector } from 'react-redux'
import Camera from '../../assets/svg/myaccount/Camera'
import { Label } from '../../utils/StringUtil'
import { AppUtil } from '../../utils/AppUtil'

const PersonalEdit = (props) => {
    const { themeColor } = useSelector((state) => state)

    return (
        <ScrollView >
                <View style={EditUserProfileStyle.cornerView} >

            <View style={EditUserProfileStyle.imageView}>
                <Image style={EditUserProfileStyle.userEditImage} />
                <TouchableOpacity style={[EditUserProfileStyle.cameraIconBtn, { backgroundColor: themeColor.headerColor }]}>
                    <Camera height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} />
                </TouchableOpacity>
            </View>

            <View style={EditUserProfileStyle.contentView}>

                <Text style={EditUserProfileStyle.titleText}>{Label.UserType}</Text>
                <TextInput
                    style={EditUserProfileStyle.input}
                />

                <View style={EditUserProfileStyle.editFlexView}>
                    <View style={EditUserProfileStyle.editPartView}>
                        <Text style={EditUserProfileStyle.titleText}>{Label.Name}<Text style={{ color: 'red' }}>*</Text></Text>
                        <TextInput
                            style={EditUserProfileStyle.input}
                        />
                    </View>

                    <View style={EditUserProfileStyle.editPartView}>
                        <Text style={EditUserProfileStyle.titleText}>{Label.lastname}<Text style={{ color: 'red' }}>*</Text></Text>
                        <TextInput
                            style={EditUserProfileStyle.input}
                        />
                    </View>
                </View>

                <Text style={EditUserProfileStyle.titleText}>{Label.OrganizationName}<Text style={{ color: 'red' }}>*</Text></Text>
                <TextInput
                    style={EditUserProfileStyle.input}
                />

                <Text style={EditUserProfileStyle.titleText}>{Label.JobTitle}<Text style={{ color: 'red' }}>*</Text></Text>
                <TextInput
                    style={EditUserProfileStyle.input}
                />

                <Text style={EditUserProfileStyle.titleText}>{Label.EmailTitle}<Text style={{ color: 'red' }}>*</Text></Text>
                <TextInput
                    style={EditUserProfileStyle.input}
                />

                <View style={EditUserProfileStyle.editFlexView}>
                    <View style={EditUserProfileStyle.editPartView}>
                        <Text style={EditUserProfileStyle.titleText}>{Label.Country}<Text style={{ color: 'red' }}>*</Text></Text>
                        <TextInput
                            style={EditUserProfileStyle.input}
                        />
                    </View>

                    <View style={EditUserProfileStyle.editPartView}>
                        <Text style={EditUserProfileStyle.titleText}>{Label.City}<Text style={{ color: 'red' }}>*</Text></Text>
                        <TextInput
                            style={EditUserProfileStyle.input}
                        />
                    </View>
                </View>
                <Text style={EditUserProfileStyle.titleText}>{Label.MobileNumber}<Text style={{ color: 'red' }}>*</Text></Text>
                <TextInput
                    style={EditUserProfileStyle.input}
                />

                <TouchableOpacity onPress={() => { props.saveNext() }} style={EditUserProfileStyle.submitButton}>
                    <Text style={EditUserProfileStyle.submitText}>{Label.SaveAndNext}</Text>
                </TouchableOpacity>
            </View>
            </View>
        </ScrollView>

    )
}

export default PersonalEdit