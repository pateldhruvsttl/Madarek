import React, { memo } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { AppUtil } from "../../utils/AppUtil";
import Style from "./SubIdeasListStyle";

import IcnSelectedHeart from "../../assets/svg/IcnSelectedHeart"
import IcnUnSelectedHeart from "../../assets/svg/IcnUnSelectedHeart"
import IcnClander from "../../assets/svg/IcnClander"
import IcnWatchDone from "../../assets/svg/IcnWatchDone"
import IcnThumsUp from "../../assets/svg/IcnThumsUp"
import IcnComment from "../../assets/svg/IcnComment"

import IcnTrophy from "../../assets/svg/IcnTrophy"
import IcnStar from "../../assets/svg/IcnStar"
import IcnRewordComment from "../../assets/svg/IcnRewordComment"
import IcnRewordLight from "../../assets/svg/IcnRewordLight"
import IcnAvtarBg from "../../assets/svg/IcnAvtarBg"
import IcnMenu from "../../assets/svg/IcnMenuDote"

import { GetAppColor } from "../../utils/Colors";
import { Label } from "../../utils/StringUtil";

const SubIdeasList = (props) => {

  const renderItem = ({ item }) => (
    <View style={Style.renderMainView}>

      <View style={Style.itemsView}>

        <View style={Style.TitleView}>
          <Text numberOfLines={1} style={Style.title}>{item.title}</Text>
          {
            item.isLike ?
              <IcnSelectedHeart height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
              :
              <IcnUnSelectedHeart fill={GetAppColor.textColor} stroke={GetAppColor.textColor} height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
          }
        </View>

        <Text numberOfLines={2} style={[Style.SubTitle, { color: GetAppColor.borderRed }]}>{item.subTitle}</Text>

        {
          props.isType == "Ideas" ?
            <View style={Style.calView}>
              <IcnClander style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
              <Text style={Style.title}>{item.date}</Text>

              <IcnAvtarBg style={Style.callLeftIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
              <Text style={Style.title}>{item.name}</Text>
            </View>
            :
            <View style={Style.calView}>
              <IcnClander style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
              <Text style={Style.title}>{item.date}</Text>
            </View>

        }

        <View style={Style.icnView}>

          <View style={Style.rowLeftView}>
            <IcnTrophy style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />
            <IcnStar style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />
            <IcnRewordComment style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />
            <IcnRewordLight style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />
          </View>

          <View style={Style.rowRightView}>
            <View style={Style.secondInnerCalView}>
              <IcnWatchDone style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
              <Text style={Style.title}>{item.see}</Text>
            </View>
            <View style={Style.secondInnerCalView}>
              <IcnThumsUp style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
              <Text style={Style.title}>{item.like}</Text>
            </View>
            <View style={Style.secondInnerCalView}>
              <IcnComment style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
              <Text style={Style.title}>{item.comment}</Text>
            </View>
            <TouchableOpacity style={Style.secondInnerCalView}>
              <IcnMenu fill={GetAppColor.textColor} height={AppUtil.getHP(1.8)} width={AppUtil.getHP(1.8)} />
            </TouchableOpacity>
          </View>

        </View>



      </View>

    </View>
  );


  return (
    <View style={Style.MainView}>
      {
        props?.isTitle &&
        <View style={Style.titleView}>
          <Text style={props.screen ? Style.titleAnotherScreen : Style.txtTitle}>{props?.isTitle}</Text>
          <Text style={props.screen ? Style.seeMoreAnotherScreen : Style.txtSeeMore}>{Label.seeMore}</Text>
        </View>
      }

      <FlatList
        data={props.data}
        scrollEnabled={props?.scrollEnabled ? true : false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      {
        props?.btn &&
        <TouchableOpacity style={Style.bottomBtn}>
          <Text style={Style.txtBottomBtn}> {props.btn}</Text>
        </TouchableOpacity>
      }
    </View>
  );
}
export default memo(SubIdeasList);





