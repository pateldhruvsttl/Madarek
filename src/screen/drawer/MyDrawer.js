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
import drawerStyles from './DrawerStyles'

const MyDrawerScreen = (props) => {
  const { themeColor } = useSelector((state) => state)

  const renderCollapseView = () => {
    return (
      <View>
        {
          ["Popular Ideas", "Latest Ideas", "Madarek Spotlight,", "Winning Ideas"].map((item, indes) => {
            return (
              <TouchableOpacity style={[drawerStyles.subMenuButton,{marginVertical: AppUtil.getHP(1),}]}>
                <Text style={drawerStyles.menuText}>{item}</Text>
              </TouchableOpacity>
            )
          })
        }
        <View style={drawerStyles.greyLine}></View>

      </View>
    )
  }
  return (
    <View style={{ flex: 1 }}>

      {/* header */}
      <View style={{ height: AppUtil.getHP(23), backgroundColor: themeColor.headerColor, }}>
        <View style={drawerStyles.headerView}>
          <View style={drawerStyles.centerIcnView}>
            <IcnMenuHeader height={AppUtil.getHP(5)} width={AppUtil.getHP(20)} />
            <TouchableOpacity>
              <IcnClose height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
            </TouchableOpacity>
          </View>
          <View style={[drawerStyles.yellowLineView,{backgroundColor: themeColor.headerFontColor,}]} />
        </View>

        <View style={[drawerStyles.profileView]}>
          <Image style={drawerStyles.profileImage} />
          <View style={{ marginStart: 5 }}>
            <Text style={drawerStyles.welcomeText}>Welcome</Text>
            <Text style={drawerStyles.userNameText}>Abimanyu Gayakwad</Text>
          </View>
        </View>
        <View style={drawerStyles.dsButtonView}>
          <TouchableOpacity style={drawerStyles.dashBoardButton}>
            <Text style={drawerStyles.dashText}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[drawerStyles.dashBoardButton,{  marginStart: 5 }]}>
            <Text style={drawerStyles.dashText}>Submit Idea</Text>
          </TouchableOpacity>
        </View>
      </View>


      {/*  */}

      <TouchableOpacity style={[drawerStyles.menuButton,{ marginTop: AppUtil.getHP(1)}]}>
        <HomeIcn height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
        <Text style={drawerStyles.menuText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[drawerStyles.menuButton,{justifyContent: 'space-between' }]}>
        <View style={{ flexDirection: 'row' }}>
          <IdeaIcn height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
          <Text style={drawerStyles.menuText}>Ideas</Text>
        </View>
        <DownArrow height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
      </TouchableOpacity>

      {/*  */}
      {renderCollapseView()}

      <TouchableOpacity style={[drawerStyles.menuButton,{justifyContent: 'space-between' }]}>
        <View style={{ flexDirection: 'row' }}>
          <IdeaIcn height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
          <Text style={drawerStyles.menuText}>Challenges</Text>
        </View>
        <DownArrow height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
      </TouchableOpacity>


      {/*  */}
      <TouchableOpacity style={drawerStyles.menuButton}>
        <UserIcn height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
        <Text style={drawerStyles.menuText}>Experts</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[drawerStyles.menuButton,{justifyContent: 'space-between' }]}>
        <View style={{ flexDirection: 'row' }}>
          <EnterpriseIcn height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
          <Text style={drawerStyles.menuText}>Enterprises</Text>
        </View>
        <DownArrow height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
      </TouchableOpacity>

      {/*  */}

      <TouchableOpacity style={drawerStyles.menuButton}>
        <HowItWorksIcn height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
        <Text style={drawerStyles.menuText}>How it Works</Text>
      </TouchableOpacity>

      <TouchableOpacity style={drawerStyles.menuButton}>
        <PartnerIcn height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
        <Text style={drawerStyles.menuText}>Partners</Text>
      </TouchableOpacity>

      <View style={drawerStyles.bottomView}>
        <TouchableOpacity style={drawerStyles.settingButton}>
          <SettingIcn height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} />
          <Text style={drawerStyles.settingText}>Settings</Text>
        </TouchableOpacity>
        <View style={drawerStyles.line} />
        <TouchableOpacity style={drawerStyles.settingButton}>
          <SettingIcn height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} />
          <Text style={drawerStyles.settingText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MyDrawerScreen;



