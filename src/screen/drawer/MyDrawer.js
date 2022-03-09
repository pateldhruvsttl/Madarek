import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { AppUtil } from '../../utils/AppUtil'
import IcnMenuHeader from '../../assets/svg/IcnMenuHeader'
import IcnClose from '../../assets/svg/IcnClose'
import FONTS from '../../utils/Fonts'
import { GetAppColor } from '../../utils/Colors'
import HomeIcn from '../../assets/svg/drawerIcon/HomeIcn'
import IdeaIcn from '../../assets/svg/drawerIcon/IdeaIcn'
import DownArrow from '../../assets/svg/DownArrow'
import UserIcn from '../../assets/svg/drawerIcon/UserIcn'
import EnterpriseIcn from '../../assets/svg/drawerIcon/EnterpriseIcn'
import HowItWorksIcn from '../../assets/svg/drawerIcon/HowItWorksIcn'
import PartnerIcn from '../../assets/svg/drawerIcon/PartnerIcn'
import SettingIcn from '../../assets/svg/drawerIcon/SettingIcn'

const MyDrawerScreen = (props) => {
  const { themeColor } = useSelector((state) => state)
  return (
    <View style={{ flex: 1 }}>

      {/* header */}
      <View style={{ height: AppUtil.getHP(23), backgroundColor: themeColor.headerColor, }}>
        <View style={{ marginHorizontal: AppUtil.getWP(4), marginTop: AppUtil.getHP(4) }}>
          <View style={drawerStyles.centerIcnView}>
            <IcnMenuHeader height={AppUtil.getHP(5)} width={AppUtil.getHP(20)} />
            <TouchableOpacity>
              <IcnClose height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
            </TouchableOpacity>
          </View>
          <View style={{ backgroundColor: themeColor.headerFontColor, width: '100%', height: 1, opacity: 0.5, marginTop: AppUtil.getHP(1) }} />
        </View>

        <View style={{ flexDirection: "row", marginHorizontal: AppUtil.getWP(4), marginTop: AppUtil.getHP(2), alignItems: 'center' }}>
          <Image style={drawerStyles.profileImage} />
          <View style={{marginStart:5}}>
            <Text style={{ fontFamily: FONTS.robotRegular, fontSize: AppUtil.getHP(2.05), color: GetAppColor.white }}>Welcome</Text>
            <Text style={{ fontFamily: FONTS.robotMedium, fontSize: AppUtil.getHP(2.66), color: GetAppColor.white }}>Abimanyu Gayakwad</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginHorizontal: AppUtil.getWP(16), marginTop: AppUtil.getHP(1), }}>
          <TouchableOpacity style={{ borderColor: GetAppColor.white, borderWidth: 0.8, borderRadius: 5 }}>
            <Text style={{ fontFamily: FONTS.robotRegular, fontSize: AppUtil.getHP(1.5), color: GetAppColor.white, marginHorizontal: AppUtil.getHP(1), marginVertical: AppUtil.getHP(0.5) }}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ borderColor: GetAppColor.white, borderWidth: 0.8, borderRadius: 5, marginStart: 5 }}>
            <Text style={{ fontFamily: FONTS.robotRegular, fontSize: AppUtil.getHP(1.5), color: GetAppColor.white, marginHorizontal: AppUtil.getHP(1), marginVertical: AppUtil.getHP(0.5) }}>Submit Idea</Text>
          </TouchableOpacity>
        </View>
      </View>


      {/*  */}

      <TouchableOpacity style={{ marginHorizontal: AppUtil.getWP(4), height: AppUtil.getHP(6), borderBottomColor: GetAppColor.borderGray, borderBottomWidth: 1, marginTop: AppUtil.getHP(1), flexDirection: 'row', alignItems: 'center', }}>
        <HomeIcn height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
        <Text style={{ fontFamily: FONTS.robotRegular, fontSize: AppUtil.getHP(2.25), color: GetAppColor.pincolor, marginStart: AppUtil.getWP(2), marginTop: 5 }}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginHorizontal: AppUtil.getWP(4), height: AppUtil.getHP(6), borderBottomColor: GetAppColor.borderGray, borderBottomWidth: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>
          <IdeaIcn height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
          <Text style={{ fontFamily: FONTS.robotRegular, fontSize: AppUtil.getHP(2.25), color: GetAppColor.pincolor, marginStart: AppUtil.getWP(2), marginTop: 5 }}>Ideas</Text>
        </View>
        <DownArrow height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
      </TouchableOpacity>

      {/*  */}

      <TouchableOpacity style={{ marginHorizontal: AppUtil.getWP(4), height: AppUtil.getHP(6), borderBottomColor: GetAppColor.borderGray, borderBottomWidth: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>
          <IdeaIcn height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
          <Text style={{ fontFamily: FONTS.robotRegular, fontSize: AppUtil.getHP(2.25), color: GetAppColor.pincolor, marginStart: AppUtil.getWP(2), marginTop: 5 }}>Challenges</Text>
        </View>
        <DownArrow height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
      </TouchableOpacity>


{/*  */}
      <TouchableOpacity style={{ marginHorizontal: AppUtil.getWP(4), height: AppUtil.getHP(6), borderBottomColor: GetAppColor.borderGray, borderBottomWidth: 1, flexDirection: 'row', alignItems: 'center', }}>
        <UserIcn height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
        <Text style={{ fontFamily: FONTS.robotRegular, fontSize: AppUtil.getHP(2.25), color: GetAppColor.pincolor, marginStart: AppUtil.getWP(2), marginTop: 5 }}>Experts</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginHorizontal: AppUtil.getWP(4), height: AppUtil.getHP(6), borderBottomColor: GetAppColor.borderGray, borderBottomWidth: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>
          <EnterpriseIcn height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
          <Text style={{ fontFamily: FONTS.robotRegular, fontSize: AppUtil.getHP(2.25), color: GetAppColor.pincolor, marginStart: AppUtil.getWP(2), marginTop: 5 }}>Enterprises</Text>
        </View>
        <DownArrow height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
      </TouchableOpacity>

      {/*  */}

      <TouchableOpacity style={{ marginHorizontal: AppUtil.getWP(4), height: AppUtil.getHP(6), borderBottomColor: GetAppColor.borderGray, borderBottomWidth: 1, flexDirection: 'row', alignItems: 'center', }}>
        <HowItWorksIcn height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
        <Text style={{ fontFamily: FONTS.robotRegular, fontSize: AppUtil.getHP(2.25), color: GetAppColor.pincolor, marginStart: AppUtil.getWP(2), marginTop: 5 }}>How it Works</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginHorizontal: AppUtil.getWP(4), height: AppUtil.getHP(6), borderBottomColor: GetAppColor.borderGray, borderBottomWidth: 1, flexDirection: 'row', alignItems: 'center', }}>
        <PartnerIcn height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
        <Text style={{ fontFamily: FONTS.robotRegular, fontSize: AppUtil.getHP(2.25), color: GetAppColor.pincolor, marginStart: AppUtil.getWP(2), marginTop: 5 }}>Partners</Text>
      </TouchableOpacity>

      <View style={{ position: 'absolute', bottom: 0, height: AppUtil.getHP(6), backgroundColor: GetAppColor.backGround, width: '100%', flexDirection:'row' }}>
        <TouchableOpacity style={{ width: '50%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection:'row'}}>
          <SettingIcn height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} />
          <Text style={{ fontFamily: FONTS.robotRegular, fontSize: AppUtil.getHP(2.05), color: GetAppColor.pincolor, marginStart: AppUtil.getWP(2),}}>Settings</Text>
        </TouchableOpacity>
        <View style={{ width: 1, backgroundColor: GetAppColor.borderGray, height: '60%', alignSelf:'center' }} />
        <TouchableOpacity style={{ width: '50%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection:'row'}}>
          <SettingIcn height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} />
          <Text style={{ fontFamily: FONTS.robotRegular, fontSize: AppUtil.getHP(2.05), color: GetAppColor.pincolor, marginStart: AppUtil.getWP(2),}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MyDrawerScreen;


const drawerStyles = StyleSheet.create({
  centerIcnView: { width: '100%', alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'space-between', },
  profileImage: { height: AppUtil.getHP(5), width: AppUtil.getHP(5), borderRadius: AppUtil.getHP(5 / 2), borderWidth: 1, borderColor: 'white' },

})