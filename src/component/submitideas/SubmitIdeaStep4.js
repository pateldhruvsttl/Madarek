import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { memo, useState } from 'react'
import CountryPicker from 'react-native-country-picker-modal'
import ImageList from './ImageList';
import CustomList from './CustomList'
import { Label } from '../../utils/StringUtil'
import Style from './IdeaStepStyle'
import { useSelector} from 'react-redux'
import { GetAppColor } from '../../utils/Colors'
import BackIcon from '../../assets/svg/loginLogo/BackIcon'


function SubmitIdeaStep4(props) {
    const { themeColor } = useSelector((state) => state);
    const [title, setTitle] = useState(props?.step1Obj?.title);
    const [sectors, setSectors] = useState(props?.step1Obj?.sectors);
    const [category, setCategory] = useState(props?.step1Obj?.category);
    const [subCategory, setSubCategory] = useState(props?.step1Obj?.subCategory);

    const [firstName, setFirstName] = useState(props?.step2Obj?.firstName);
    const [lastName, setLastName] = useState(props?.step2Obj?.lastName);
    const [gender, setGender] = useState(props?.step2Obj?.gender);
    const [emailId, setEmailId] = useState(props?.step2Obj?.email);
    
    const [nationality, setNationality] = useState(props?.step3Obj?.nationality);
    const [countryCode, setCountryCode] = useState(props?.step3Obj?.countryCode);
    const [mobileNumber, setMobileNumber] = useState(props?.step3Obj?.mobileNumber);
    const [message, setMessage] = useState(props?.step3Obj?.message);
    const [imageList, setImageList] = useState(props?.step3Obj?.imageList);

    
    const onCheckField = () => {
        props.onNext();
    }
    const onSelect = (country) => {
        setCountryCode(country.cca2)
    }

    return (
        <View style={Style.MainView}>

            <View style={Style.innerFirstView}>
                <Text style={Style.txtTitle}>{Label.IdeaTitle}</Text>
                <TextInput
                    placeholderTextColor={GetAppColor.grayBorder}
                    numberOfLines={2}
                    multiline={true}
                    style={Style.txtIdeasTitle}
                    value={title}
                    onChangeText={title => setTitle(title)}
                />
            </View>

            <View style={Style.innerView2}>
                <Text style={Style.txtTitle}>{Label.Sectors}</Text>
                <CustomList currentItem={sectors} item={sectorsList} onSelect={(txt) => setSectors(txt)} isType={"Submit"} />
            </View>

            <View style={Style.innerView2}>
                <Text style={Style.txtTitle}>{Label.Category}</Text>
                <CustomList currentItem={category} item={sectorsList} onSelect={(txt) => setCategory(txt)} isType={"Submit"} />
            </View>

            <View style={Style.innerView2}>
                <Text style={Style.txtTitle}>{Label.SubCategory}</Text>
                <CustomList currentItem={subCategory} item={sectorsList} onSelect={(txt) => setSubCategory(txt)} isType={"Submit"} />
            </View>

            <View style={Style.txtNameView}>
                <View style={Style.txtName}>
                    <Text style={Style.txtTitle}>{Label.firstname}</Text>
                    <TextInput
                        placeholderTextColor={GetAppColor.grayBorder}
                        numberOfLines={2}
                        multiline={true}
                        style={Style.txtIdeasTitle}
                        value={firstName}
                        onChangeText={title => setFirstName(title)}
                    />
                </View>
                <View style={Style.txtName}>
                    <Text style={Style.txtTitle}>{Label.lastname}</Text>
                    <TextInput
                        placeholderTextColor={GetAppColor.grayBorder}
                        numberOfLines={2}
                        multiline={true}
                        style={Style.txtIdeasTitle}
                        value={lastName}
                        onChangeText={title => setLastName(title)}
                    />
                </View>
            </View>

            <View style={Style.txtNameView}>
                <View style={Style.txtName}>
                    <Text style={Style.txtTitle}>{Label.Gender}</Text>
                    <TextInput
                        placeholderTextColor={GetAppColor.grayBorder}
                        numberOfLines={2}
                        multiline={true}
                        style={Style.txtIdeasTitle}
                        value={gender}
                        onChangeText={title => setGender(title)}
                    />
                </View>
                <View style={Style.txtName}>
                    <Text style={Style.txtTitle}>{Label.Nationality}</Text>
                    <TextInput
                        placeholderTextColor={GetAppColor.grayBorder}
                        numberOfLines={2}
                        multiline={true}
                        style={Style.txtIdeasTitle}
                        value={nationality}
                        onChangeText={title => setNationality(title)}
                    />
                </View>
            </View>

            <View style={Style.innerSecondView2}>
                <Text style={Style.txtTitle}>{Label.emailID}</Text>
                <TextInput
                    placeholderTextColor={GetAppColor.grayBorder}
                    numberOfLines={2}
                    multiline={true}
                    style={Style.txtIdeasTitle}
                    value={emailId}
                    onChangeText={title => setEmailId(title)}
                />
            </View>

            <View style={Style.innerSecondView2}>
                <Text style={Style.txtTitle}>{Label.AlternateMobileNo}</Text>
                <View style={{ flexDirection: 'row' }}>

                    <View style={Style.numberAreaOne2}>
                        <CountryPicker
                            {...{ countryCode, onSelect, withCallingCode: true, withFlagButton: false, withCallingCodeButton: true, }}
                            visible={false}
                            containerButtonStyle={{ marginEnd: 5 }} >
                        </CountryPicker>

                        <View style={Style.codePickerArea}>
                            <BackIcon width={12} height={12} />
                        </View>

                    </View>

                    <TextInput
                        placeholderTextColor={GetAppColor.grayBorder}
                        numberOfLines={2}
                        keyboardType="number-pad"
                        style={Style.txtInputMobile2}
                        value={mobileNumber}
                        onChangeText={title => setMobileNumber(title)}
                    />
                </View>
            </View>

            <View style={Style.innerSecondView2}>
                <Text style={Style.txtTitle}>{Label.Message}</Text>
                <TextInput
                    placeholderTextColor={GetAppColor.grayBorder}
                    numberOfLines={2}
                    multiline={true}
                    style={Style.txtIdeasTitle}
                    value={message}
                    onChangeText={title => setMessage(title)}
                />
            </View>

            <View style={Style.innerView2}>
                <Text style={Style.txtTitle}>{Label.UploadedImages}</Text>
                <ImageList onUpdateList={(list)=> setImageList(list)} currentList={imageList}/>
            </View>

            <TouchableOpacity style={[Style.btn, { backgroundColor: themeColor.buttonColor }]} onPress={() => onCheckField()}>
                <Text style={Style.txtBtn}>{Label.Submit}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default memo(SubmitIdeaStep4);

const sectorsList = ["Slider", "Tab", "Challenges", "Spotlight", "ExpertInsightsSlider", "FavouriteCategories", "Button"];