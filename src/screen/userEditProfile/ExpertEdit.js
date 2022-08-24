import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import IcnClose from '../../assets/svg/IcnClose'
import { GetAppColor } from '../../utils/Colors'
import { AppUtil } from '../../utils/AppUtil'
import { Label } from '../../utils/StringUtil'
import EditUserProfileStyle from './EditUserProfileStyle'
import { AppConfig, getLanguage } from '../../manager/AppConfig'

const ExpertEdit = (props) => {
    const { themeColor } = useSelector((state) => state)
    const [userData, setUserData] = useState(props?.data)
    const [skill, setSkill] = useState()
    const [biography, setBiography] = useState()
    const [description, setDescription] = useState()

    const [isSelectedLang,setSelectedLang]= useState(true)

    useEffect(() => {
      let _lang = getLanguage();
      setSelectedLang(_lang == "ar" ? true : false)
  }, [])

    useEffect(() => {

        setSkill(userData.skills)
        setDescription(userData.expertiseBrief)
        setBiography(userData.biography)

    }, [userData])

    // let expertDetail = {
    //     skill: skill,
    //     description: description
    // }
    const onCheckField = () => {
        obj = {
            skill: skill,
            description: description
        }
        props.onNext(obj);
    }


    return (
        <ScrollView >
            <View style={[EditUserProfileStyle.cornerView, { marginTop: AppUtil.getHP(2) }]} >
                {/* <Text style={[EditUserProfileStyle.titleText, { marginTop: 0 }]}>{Label.Categories}<Text style={{ color: 'red' }}>*</Text></Text>
                <View style={EditUserProfileStyle.scrollSubView}>
                    {
                        [1, 2, 3, 4, 5, 6].map((item, index) => {
                            return (
                                <View style={EditUserProfileStyle.catView1} key={index}>
                                    <Text style={EditUserProfileStyle.catText1}>Health</Text>
                                    <IcnClose color={GetAppColor.black} height={AppUtil.getHP(1)} width={AppUtil.getHP(1)} />
                                </View>
                            )
                        })
                    }
                </View>
                <TouchableOpacity style={[EditUserProfileStyle.addMoreButton, { borderColor: themeColor.headerColor }]}>
                    <Text style={[EditUserProfileStyle.addMoreText, { color: themeColor.headerColor }]}>{Label.AddMore}</Text>
                </TouchableOpacity> */}

                <Text style={EditUserProfileStyle.titleText}>{Label.Skill}</Text>
                <TextInput
                    style={[EditUserProfileStyle.input,{textAlign: isSelectedLang ? "right":"left"}]}
                    value={skill}
                    onChangeText={(skill) => setSkill(skill)}
                />

                <Text style={EditUserProfileStyle.titleText}>{Label.Biography}</Text>
                <TextInput
                    style={[EditUserProfileStyle.input,{textAlign: isSelectedLang ? "right":"left"}]}
                    value={biography}
                />

                <Text style={EditUserProfileStyle.titleText}>{Label.Description}<Text style={{ color: 'red' }}>*</Text></Text>
                <TextInput
                    style={[EditUserProfileStyle.input,{textAlign: isSelectedLang ? "right":"left"}]}
                    value={description}
                    onChangeText={(description) => setDescription(description)}
                />
                <TouchableOpacity onPress={() => onCheckField()} style={EditUserProfileStyle.submitButton}>
                    <Text style={EditUserProfileStyle.submitText}>{Label.Submit}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default ExpertEdit