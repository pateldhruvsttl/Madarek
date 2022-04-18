import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, { memo } from 'react'
import CommonHeader from '../../component/commonheader/CommonHeader'
import MyAccountStyle from './MyAccountStyle'
import Camera from '../../assets/svg/myaccount/Camera'
import { AppUtil } from '../../utils/AppUtil'
import { Label } from '../../utils/StringUtil'
import IcnClose from '../../assets/svg/IcnClose'
import { GetAppColor } from '../../utils/Colors'
import { useSelector } from 'react-redux'

const EditUserProfileView = (props) => {
const { themeColor } = useSelector((state) => state)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CommonHeader isType={"UserEditProfile"} onEditProfile={() => props.navigation.navigate('EditUserProfileView')} onMenuClick={() => { props.navigation.openDrawer() }} />
      <ScrollView >
        <View style={MyAccountStyle.imageView}>
          <Image style={MyAccountStyle.userEditImage} />
          <TouchableOpacity style={[MyAccountStyle.cameraIconBtn,{backgroundColor:themeColor.headerColor}]}>
            <Camera height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} />
          </TouchableOpacity>
        </View>

        <View style={MyAccountStyle.contentView}>

          <Text style={MyAccountStyle.titleText}>{Label.UserType}</Text>
          <TextInput
            style={MyAccountStyle.input}
          />

          <View style={MyAccountStyle.editFlexView}>
            <View style={MyAccountStyle.editPartView}>
              <Text style={MyAccountStyle.titleText}>{Label.Name}<Text style={{ color: 'red' }}>*</Text></Text>
              <TextInput
                style={MyAccountStyle.input}
              />
            </View>

            <View style={MyAccountStyle.editPartView}>
              <Text style={MyAccountStyle.titleText}>{Label.lastname}<Text style={{ color: 'red' }}>*</Text></Text>
              <TextInput
                style={MyAccountStyle.input}
              />
            </View>
          </View>

          <Text style={MyAccountStyle.titleText}>{Label.OrganizationName}<Text style={{ color: 'red' }}>*</Text></Text>
          <TextInput
            style={MyAccountStyle.input}
          />

          <Text style={MyAccountStyle.titleText}>{Label.JobTitle}<Text style={{ color: 'red' }}>*</Text></Text>
          <TextInput
            style={MyAccountStyle.input}
          />

          <Text style={MyAccountStyle.titleText}>{Label.Email}<Text style={{ color: 'red' }}>*</Text></Text>
          <TextInput
            style={MyAccountStyle.input}
          />

          <View style={MyAccountStyle.editFlexView}>
            <View style={MyAccountStyle.editPartView}>
              <Text style={MyAccountStyle.titleText}>{Label.Country}<Text style={{ color: 'red' }}>*</Text></Text>
              <TextInput
                style={MyAccountStyle.input}
              />
            </View>

            <View style={MyAccountStyle.editPartView}>
              <Text style={MyAccountStyle.titleText}>{Label.City}<Text style={{ color: 'red' }}>*</Text></Text>
              <TextInput
                style={MyAccountStyle.input}
              />
            </View>
          </View>
          <Text style={MyAccountStyle.titleText}>{Label.MobileNumber}<Text style={{ color: 'red' }}>*</Text></Text>
          <TextInput
            style={MyAccountStyle.input}
          />

          <Text style={MyAccountStyle.titleText}>{Label.Categories}<Text style={{ color: 'red' }}>*</Text></Text>
          <View style={MyAccountStyle.scrollSubView}>
            {
              [1, 2, 3, 4, 5, 6].map((item, index) => {
                return (
                  <View style={MyAccountStyle.catView1}>
                    <Text style={MyAccountStyle.catText1}>Health</Text>
                    <IcnClose color={GetAppColor.black} height={AppUtil.getHP(1)} width={AppUtil.getHP(1)} />
                  </View>
                )
              })
            }
          </View>
          <TouchableOpacity style={[MyAccountStyle.addMoreButton,{borderColor:themeColor.headerColor}]}>
            <Text style={[MyAccountStyle.addMoreText,{color:themeColor.headerColor}]}>{Label.AddMore}</Text>
          </TouchableOpacity>

          <Text style={MyAccountStyle.titleText}>{Label.ShortDiscription}</Text>
          <TextInput
            style={MyAccountStyle.input}
          />

          <Text style={MyAccountStyle.titleText}>{Label.FacebookLink}</Text>
          <TextInput
            style={MyAccountStyle.input}
          />

          <Text style={MyAccountStyle.titleText}>{Label.TwitterLink}</Text>
          <TextInput
            style={MyAccountStyle.input}
          />

          <Text style={MyAccountStyle.titleText}>{Label.LinkdinLink}</Text>
          <TextInput
            style={MyAccountStyle.input}
          />


          <Text style={MyAccountStyle.titleText}>{Label.AboutExpert}</Text>
          <TextInput
            style={MyAccountStyle.input}
          />

          <Text style={MyAccountStyle.titleText}>{Label.Description}<Text style={{ color: 'red' }}>*</Text></Text>
          <TextInput
            style={MyAccountStyle.input}
          />

          <TouchableOpacity onPress={() => { props.navigation.goBack()}} style={MyAccountStyle.submitButton}>
            <Text style={MyAccountStyle.submitText}>{Label.Submit}</Text>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default memo(EditUserProfileView);