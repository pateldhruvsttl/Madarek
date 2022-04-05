import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
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
import IcnUpArrow from '../../assets/svg/drawerIcon/IcnUpArrow'
import { Label } from '../../utils/StringUtil'
import MyAccount from '../../assets/svg/drawerIcon/MyAccount'

const MyDrawerScreen = (props) => {
  const { themeColor } = useSelector((state) => state)
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  const onSelectMenu = (index) => {
    if (index == selectedIndex) {
      setSelectedIndex(0)
    } else {
      setSelectedIndex(index)
    }

  }

  const onselectButtonMenu = (index, screen) => {
    setSelectedButtonIndex(index)

    if(screen)
      props.navigation.navigate(screen);
  
  }

  const renderCollapseView = () => {
    return (
      <View>
        {
          [Label.PopularIdeas,Label.LatestIdeas,Label.MadarekSpotlight,Label.WinningIdeas].map((item, index) => {
            return (
              <TouchableOpacity style={[drawerStyles.subMenuButton, { marginVertical: AppUtil.getHP(1), }]} onPress={()=>onselectButtonMenu(2, "IdeasListScreen")}>
                <Text style={drawerStyles.menuText}>{item}</Text>
              </TouchableOpacity>
            )
          })
        }
        <View style={drawerStyles.greyLine}></View>

      </View>
    )
  }

  const renderChallangeCollapseView = () => {
    return (
      <View>
        {
          [Label.Open,Label.Upcoming,Label.Closed,Label.Voting].map((item, index) => {
            return (
              <TouchableOpacity style={[drawerStyles.subMenuButton, { marginVertical: AppUtil.getHP(1), }]} onPress={()=>onselectButtonMenu(3, "ChallengesListScreen")}>
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
          <View style={[drawerStyles.yellowLineView, { backgroundColor: themeColor.headerFontColor, }]} />
        </View>

        <View style={[drawerStyles.profileView]}>
          <Image style={drawerStyles.profileImage} />
          <View style={{ marginStart: 5 }}>
            <Text style={drawerStyles.welcomeText}>Welcome</Text>
            <Text style={drawerStyles.userNameText}>Abimanyu Gayakwad</Text>
          </View>
        </View>
        <View style={drawerStyles.dsButtonView}>
          <TouchableOpacity onPress={()=>props.navigation.navigate('UserDashboardScreen')} style={drawerStyles.dashBoardButton}>
            <Text style={drawerStyles.dashText}>{Label.Dashboard}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>props.navigation.navigate('SubmitIdeaScreen')} style={[drawerStyles.dashBoardButton, { marginStart: 5 }]}>
            <Text style={drawerStyles.dashText}>{Label.SubmitIdea}</Text>
          </TouchableOpacity>
        </View>
      </View>


      {/*  */}

      <TouchableOpacity onPress={()=>{onSelectMenu(0);onselectButtonMenu(1, "HomeScreen")}} style={[drawerStyles.menuButton, { marginTop: AppUtil.getHP(1) }]}>
        <HomeIcn height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
        <Text style={[drawerStyles.menuText,{fontFamily: selectedButtonIndex==1? FONTS.robotBold :FONTS.robotRegular,}]}>{Label.Home}</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => { onSelectMenu(1);onselectButtonMenu(2) }} style={[drawerStyles.menuButton, { justifyContent: 'space-between' }]}>
        <View style={{ flexDirection: 'row' }}>
          <IdeaIcn height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
          <Text style={[drawerStyles.menuText,{fontFamily: selectedButtonIndex==2? FONTS.robotBold :FONTS.robotRegular,}]}>{Label.Ideas}</Text>
        </View>
        {
          selectedIndex == 1 ?
            <IcnUpArrow height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
            :
            <DownArrow height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
        }

      </TouchableOpacity>

      {/*  */}
      {
        selectedIndex == 1 ? renderCollapseView() : null
      }


      <TouchableOpacity onPress={() => { onSelectMenu(2);onselectButtonMenu(3) }} style={[drawerStyles.menuButton, { justifyContent: 'space-between' }]}>
        <View style={{ flexDirection: 'row' }}>
          <IdeaIcn height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
          <Text style={[drawerStyles.menuText,{fontFamily: selectedButtonIndex==3? FONTS.robotBold :FONTS.robotRegular,}]}>{Label.Challenges}</Text>
        </View>
        {
          selectedIndex == 2 ?
            <IcnUpArrow height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
            :
            <DownArrow height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
        }
      </TouchableOpacity>

      {
        selectedIndex == 2 ? renderChallangeCollapseView() : null
      }
      {/*  */}
      <TouchableOpacity onPress={()=>onselectButtonMenu(4, "ExpertScreen")} style={drawerStyles.menuButton}>
        <UserIcn height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
        <Text style={[drawerStyles.menuText,{fontFamily: selectedButtonIndex==4? FONTS.robotBold :FONTS.robotRegular,}]}>{Label.Experts}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { onSelectMenu(3);onselectButtonMenu(5) }} style={[drawerStyles.menuButton, { justifyContent: 'space-between' }]}>
        <View style={{ flexDirection: 'row' }}>
          <EnterpriseIcn height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
          <Text style={[drawerStyles.menuText,{fontFamily: selectedButtonIndex==5? FONTS.robotBold :FONTS.robotRegular,}]}>{Label.Enterprises}</Text>
        </View>
        {
          selectedIndex == 3 ?
            <IcnUpArrow height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
            :
            <DownArrow height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
        }
      </TouchableOpacity>
      {
        selectedIndex == 3 ? renderCollapseView() : null
      }
      {/*  */}

      <TouchableOpacity onPress={()=>onselectButtonMenu(6)} style={drawerStyles.menuButton}>
        <HowItWorksIcn height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
        <Text style={[drawerStyles.menuText,{fontFamily: selectedButtonIndex==6? FONTS.robotBold :FONTS.robotRegular,}]}>{Label.HowitWorks}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>onselectButtonMenu(7,'Partner')} style={drawerStyles.menuButton}>
        <PartnerIcn height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
        <Text style={[drawerStyles.menuText,{fontFamily: selectedButtonIndex==7? FONTS.robotBold :FONTS.robotRegular,}]}>{Label.Partners}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>onselectButtonMenu(8,'MyAccount')} style={drawerStyles.menuButton}>
        <MyAccount height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
        <Text style={[drawerStyles.menuText,{fontFamily: selectedButtonIndex==7? FONTS.robotBold :FONTS.robotRegular,}]}>{Label.MyAccount}</Text>
      </TouchableOpacity>

      <View style={drawerStyles.bottomView}>
        <TouchableOpacity onPress={()=>onselectButtonMenu(9,'Setting')} style={drawerStyles.settingButton}>
          <SettingIcn height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} />
          <Text style={drawerStyles.settingText}>{Label.Settings}</Text>
        </TouchableOpacity>
        <View style={drawerStyles.line} />
        <TouchableOpacity style={drawerStyles.settingButton}>
          <SettingIcn height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} />
          <Text style={drawerStyles.settingText}>{Label.Logout}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MyDrawerScreen;



