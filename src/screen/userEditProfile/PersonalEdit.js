import { View, Text, ScrollView, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState, useEffect, memo } from 'react'
import EditUserProfileStyle from './EditUserProfileStyle'
import { useSelector } from 'react-redux'
import Camera from '../../assets/svg/myaccount/Camera'
import { Label } from '../../utils/StringUtil'
import { AppUtil } from '../../utils/AppUtil'
import CountryPicker from 'react-native-country-picker-modal'
import { Service } from '../../service/Service'
import { EndPoints } from '../../service/EndPoints'
import { Loger } from '../../utils/Loger'
import Country from '../../model/Country'
import IcnUpArrow from '../../assets/svg/drawerIcon/IcnUpArrow'
import DownArrow from '../../assets/svg/DownArrow'
import { Modal } from 'react-native'
import City from '../../model/City'
import { AppConfig, getLanguage } from '../../manager/AppConfig'
import { emailValidate } from '../../utils/Constant'

const PersonalEdit = (props) => {

    const { themeColor } = useSelector((state) => state)
    const [userData, setUserData] = useState(props.data)
    const [userType, setUserType] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [organization, setOrganization] = useState()
    const [jobTitle, setJobTitle] = useState()
    const [email, setEmail] = useState()
    const [countryName, setCountryName] = useState()
    const [city, setCity] = useState()
    const [number, setNumber] = useState()
    const [userPhoto, setUserPhoto] = useState()

    const [country, setCountry] = useState([])
    const [cityName, setCityName] = useState([])
    const [countryIndex, setCountryIndex] = useState(1)
    const [cityIndex, setCityIndex] = useState(1)

    const [countryId, setCountryId] = useState(0)
    const [cityId, setCityId] = useState(0) 
    const [isSelectedLang,setSelectedLang]= useState(true)
    

    useEffect(() => {

        setUserType(userData.userType)
        setFirstName(userData.firstName)
        setLastName(userData.lastName)
        setOrganization(userData.organization)
        setJobTitle(userData.jobTitle)
        setEmail(userData.email)
        setCountryName(userData.countryName)
        setCity(userData.city)
        setNumber(userData.number)
        setUserPhoto(userData.userPhoto)
        // setCountryId(getCountryId(userData.countryName));
        // setCityId(getCityId(userData.city));


    }, [userData])

    useEffect(() => {
        if (country.length > 0) {
            setCountryId(getCountryId(userData.countryName));
        }
    }, [country])

    useEffect(() => {
        if (cityName.length > 0)
            setCityId(getCityId(userData.city));
    }, [cityName])

    useEffect(() => {
        selectCountry()
        selectCity()
    }, [])
    
    useEffect(() => {
        let _lang = getLanguage();
        setSelectedLang(_lang == "ar" ? true : false)
    }, [])

    const getCountryId = (name) => {
        let id = 0;
        country.map((ele) => {
            if (name == ele.countryName) {
                id = ele.id;
            }
        })
        return id;
    }
    const getCityId = (name) => {
        let id = 0;
        cityName.map((ele) => {
            Loger.onLog(name + ">>>>>>>>", ele)
            if (name == ele.city) {
                id = ele.id;
            }

        })
        return id;
    }

    const onCheckField = () => {
        var obj = {
            userType: userType,
            firstName: firstName,
            lastName: lastName,
            organization: organization,
            jobTitle: jobTitle,
            email: email,
            country: countryName,
            city: city,
            number: number,
            userPhoto: userPhoto,
            countryId: countryId,
            cityId: cityId
        }
        if (!firstName.trim()) {
            showMessage(Label.enterfirstname)
            return false;
        } else if (!lastName.trim()) {
            showMessage(Label.enterlastname)
            return false;
        } else if (!organization.trim()) {
            showMessage(Label.Organization)
            return false;
        } else if (!jobTitle.trim()) {
            showMessage(Label.JobTilte)
            return false;
        } else if (!email.trim() || !emailValidate(email)) {
            showMessage(Label.Email)
            return false
        } else if (!number.trim()) {
            showMessage(Label.Phone)
            return false
        } else {
            props.onNext(obj);
        }
    }

    const onSelectCountry = (index) => {
        country.map((ele) => {
            if (index == ele.id) {
                setCountryName(ele.countryName);
                setCountryId(ele.id);
            }
            else {
                return false
            }
        })
    }
    const onSelectCity = (index) => {
        cityName.map((ele) => {
            if (index == ele.id) {
                setCity(ele.city);
                setCityId(ele.id);
            }
            else {
                return false
            }
        })
    }

    const selectCountry = () => {

        Service.get(EndPoints.countries, (res) => {
            Loger.onLog('Response of countries', res)
            const countryData = []
            if (res.statusCode == "1") {
                res.data.map((item) => {
                    let model = new Country(item)
                    countryData.push(model)
                })
                setCountry(countryData)
            }
        },
            (err) => {
                Loger.onLog('Error of countries', err)
            }
        )
    }

    const selectCity = () => {
        Service.get(EndPoints.cities, (res) => {

            const cityData = []
            if (res.statusCode == "1") {
                res.data.map((item) => {
                    Loger.onLog(">>>>>>>>>>>>>>>>>>>>>", item)
                    let model = new City(item)
                    cityData.push(model)

                })
                setCityName(cityData);
            }
        },
            (err) => {
                Loger.onLog('Error of cities', err)
            }
        )
    }

    let personalEdit = {
        userType: userType,
        firstName: firstName,
        lastName: lastName,
        organization: organization,
        jobTitle: jobTitle,
        email: email,
        country: countryName,
        city: city,
        number: number,
        userPhoto: userPhoto,
        countryId: countryId,
        cityId: cityId
    }

    const renderCountry = () => {
        return (
            <View style={EditUserProfileStyle.dropDown}>
                {
                    <FlatList
                        data={country}
                        keyExtractor={(item) => item.id}
                        // contentContainerStyle={{ flexGrow: 1}}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity TouchableOpacity style={EditUserProfileStyle.selections} onPress={() => { onSelectCountry(item.id); toggleCountry() }} >
                                    <Text style={EditUserProfileStyle.label}>{item.countryName}{` (+${item.countryCode})`}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />

                }
            </View >
        )
    }
    const renderCity = () => {
        return (
            <View style={[EditUserProfileStyle.dropDown, { height: AppUtil.getHP(30) }]}>
                <FlatList
                    data={cityName}
                    scrollEnabled
                    keyExtractor={(item) => item.id}
                    style={{ flex: 1 }}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity TouchableOpacity style={EditUserProfileStyle.selections} onPress={() => { onSelectCity(item.id); toggleCity() }} >
                                <Text numberOfLines={1} style={EditUserProfileStyle.label}>{item.city}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View >
        )
    }
    const toggleCity = () => {
        setCityIndex(!cityIndex)
    }
    const toggleCountry = () => {
        setCountryIndex(!countryIndex)
    }
    return (
        <ScrollView >
            <View style={EditUserProfileStyle.cornerView} >

                <View style={EditUserProfileStyle.imageView}>
                    <Image style={EditUserProfileStyle.userEditImage}
                        source={{ uri: userPhoto }}
                    />
                    <TouchableOpacity style={[EditUserProfileStyle.cameraIconBtn, { backgroundColor: themeColor.headerColor }]}>
                        <Camera height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} />
                    </TouchableOpacity>
                </View>

                <View style={EditUserProfileStyle.contentView}>

                    <Text style={EditUserProfileStyle.titleText}>{Label.UserType}</Text>
                    <TextInput
                        style={[EditUserProfileStyle.input,{textAlign: isSelectedLang ? "right":"left"}]}
                        multiline={false}
                        value={userType}
                        onChangeText={(useType) => setUserType(useType)}
                    />

                    <View style={EditUserProfileStyle.editFlexView}>
                        <View style={EditUserProfileStyle.editPartView}>
                            <Text style={EditUserProfileStyle.titleText}>{Label.Name}<Text style={{ color: 'red' }}>*</Text></Text>
                            <TextInput
                                style={[EditUserProfileStyle.input,{textAlign: isSelectedLang ? "right":"left"}]}
                                value={firstName}
                                onChangeText={(firstName) => setFirstName(firstName)}
                            />
                        </View>

                        <View style={EditUserProfileStyle.editPartView}>
                            <Text style={EditUserProfileStyle.titleText}>{Label.lastname}<Text style={{ color: 'red' }}>*</Text></Text>
                            <TextInput
                                style={[EditUserProfileStyle.input,{textAlign: isSelectedLang ? "right":"left"}]}
                                value={lastName}
                                onChangeText={(lastName) => setLastName(lastName)}
                            />
                        </View>
                    </View>

                    <Text style={EditUserProfileStyle.titleText}>{Label.OrganizationName}<Text style={{ color: 'red' }}>*</Text></Text>
                    <TextInput
                        style={[EditUserProfileStyle.input,{textAlign: isSelectedLang ? "right":"left"}]}
                        value={organization}
                        onChangeText={(organization) => setOrganization(organization)}
                    />

                    <Text style={EditUserProfileStyle.titleText}>{Label.JobTitle}<Text style={{ color: 'red' }}>*</Text></Text>
                    <TextInput
                        style={[EditUserProfileStyle.input,{textAlign: isSelectedLang ? "right":"left"}]}
                        value={jobTitle}
                        onChangeText={(jobTitle) => setJobTitle(jobTitle)}
                    />

                    <Text style={EditUserProfileStyle.titleText}>{Label.EmailTitle}<Text style={{ color: 'red' }}>*</Text></Text>
                    <TextInput
                        style={[EditUserProfileStyle.input,{textAlign: isSelectedLang ? "right":"left"}]}
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                    />

                    <View style={EditUserProfileStyle.editFlexView}>
                        <View style={EditUserProfileStyle.editPartView}>
                            <Text style={EditUserProfileStyle.titleText}>{Label.Country}<Text style={{ color: 'red' }}>*</Text></Text>

                            <View style={[[EditUserProfileStyle.input,{textAlign: isSelectedLang ? "right":"left"}]]}>
                                {countryIndex == 0 ? renderCountry() : null}
                                <TouchableOpacity onPress={toggleCountry} style={EditUserProfileStyle.container}>

                                    <TextInput
                                        style={[EditUserProfileStyle.input,{textAlign: isSelectedLang ? "right":"left"}]}
                                        keyboardAppearance={false}
                                        value={countryName}
                                        editable={false} />

                                    {
                                        countryIndex == 0 ?
                                            <View style={EditUserProfileStyle.upArrowIcon}>
                                                <IcnUpArrow height={AppUtil.getHP(1.6)} width={AppUtil.getHP(1.6)} />
                                            </View>
                                            :
                                            <View style={EditUserProfileStyle.upArrowIcon}>
                                                <DownArrow height={AppUtil.getHP(1.6)} width={AppUtil.getHP(1.6)} />
                                            </View>
                                    }


                                </TouchableOpacity>
                            </View>
                            {/* </TextInput> */}
                        </View>

                        <View style={EditUserProfileStyle.editPartView}>
                            <Text style={EditUserProfileStyle.titleText}>{Label.City}<Text style={{ color: 'red' }}>*</Text></Text>
                            <View style={[[EditUserProfileStyle.input,{textAlign: isSelectedLang ? "right":"left"}]]}>
                                {cityIndex == 0 ? renderCity() : null}
                                <TouchableOpacity onPress={toggleCity} style={EditUserProfileStyle.container}>


                                    <TextInput
                                        style={[[EditUserProfileStyle.input,{textAlign: isSelectedLang ? "right":"left"}], EditUserProfileStyle.addWidth]}
                                        keyboardAppearance={false}
                                        value={city}
                                        editable={false}


                                    />
                                    {
                                        cityIndex == 0 ?
                                            <View style={EditUserProfileStyle.upArrowIcon}>
                                                <IcnUpArrow height={AppUtil.getHP(1.6)} width={AppUtil.getHP(1.6)} />
                                            </View>
                                            :
                                            <View style={EditUserProfileStyle.upArrowIcon}>
                                                <DownArrow height={AppUtil.getHP(1.6)} width={AppUtil.getHP(1.6)} />
                                            </View>
                                    }


                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Text style={EditUserProfileStyle.titleText}>{Label.MobileNumber}<Text style={{ color: 'red' }}>*</Text></Text>
                    <TextInput
                        style={[EditUserProfileStyle.input,{textAlign: isSelectedLang ? "right":"left"}]}
                        value={number}
                        onChangeText={(number) => setNumber(number)}
                    />

                    <TouchableOpacity onPress={() => onCheckField()} style={EditUserProfileStyle.submitButton}>
                        <Text style={EditUserProfileStyle.submitText}>{Label.SaveAndNext}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    )
}

export default memo(PersonalEdit)