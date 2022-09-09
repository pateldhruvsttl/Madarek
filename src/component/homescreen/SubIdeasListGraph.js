import { View, StyleSheet, TouchableOpacity, Text, Platform } from 'react-native'
import React, { useState, useEffect, memo } from 'react'
import BubbleChart from 'rn-bubble-chart'
import { AppUtil } from '../../utils/AppUtil';
import IcnSelectedHeart from "../../assets/svg/IcnSelectedHeart"
import IcnUnSelectedHeart from "../../assets/svg/IcnUnSelectedHeard"
import IcnClander from "../../assets/svg/IcnClander"
import IcnWatchDone from "../../assets/svg/IcnWatchDone"
import IcnThumsUp from "../../assets/svg/IcnThumsUp"
import IcnThumsUpBlack from "../../assets/svg/IcnThumsUpBlack"
import IcnComment from "../../assets/svg/IcnComment"
import IcnTrophy from "../../assets/svg/IcnTrophy"
import IcnStar from "../../assets/svg/IcnStar"
import IcnRewordComment from "../../assets/svg/IcnRewordComment"
import IcnRewordLight from "../../assets/svg/IcnRewordLight"
import IcnAvtarBg from "../../assets/svg/IcnAvtarBg"
import { GetAppColor } from "../../utils/Colors";
import moment from "moment";
import { MenuTrigger, Menu, MenuOption, MenuOptions } from "react-native-popup-menu";
import IcnMenuDote from "../../assets/svg/IcnMenuDote"
import IcnShareIcon from "../../assets/svg/IcnShareIcon"
import Style from './SubIdeasListStyle'
import { Label } from '../../utils/StringUtil';
import { onShare } from '../share/ShareContent';

const SubIdeasListGraph = (props) => {
  const [isSelected, setSelected] = useState(0)
  const [detail, setDetail] = useState(0)

  // useEffect(() => {
  //   setSelected(0)
  // }, [])

  const generateRandomColor = () => {
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`
  }
  
  const message = (id) => {
    return `idea-details/${id}`
  }
  const likeUnlike = (id) => {
    props.onLikeIdeas(id);
  }
  const favouriteUnfavourite = (id) => {
    props.onFavoriteIdeas(id);
  }
  const navigateToComment = (id) => {
    props.navigateToComment({ model: 'IdeaComments', fieldName: 'idea_id', id: id })
  }
  const SubIdeaGraphDetail = (props) => {

    return (
      <TouchableOpacity style={Style.renderMainView} onPress={() => props.onItemPress(props.item)}>
        <View style={Style.itemsView}>
          <View style={Style.TitleView}>
            <Text numberOfLines={1} style={Style.title}>{props.item.categoryName}</Text>

            {(props.item.favorite) ?
              <TouchableOpacity style={Style.likeUnlikeBtn} onPress={() => favouriteUnfavourite(props.item.id)}>
                <IcnSelectedHeart style={Style.likeUnlikeIcn} height={AppUtil.getHP(2.7)} width={AppUtil.getHP(2.7)} />
              </TouchableOpacity>
              :
              <TouchableOpacity style={Style.likeUnlikeBtn} onPress={() => favouriteUnfavourite(props.item.id)}>
                <IcnUnSelectedHeart style={Style.likeUnlikeIcn} height={AppUtil.getHP(2.7)} width={AppUtil.getHP(2.7)} />
              </TouchableOpacity>}
          </View>
          <Text numberOfLines={2} style={[Style.SubTitle, { color: GetAppColor.borderRed }]}>{props.item.ideaTitle}</Text>

          {props.isType == "Ideas" ?
            <View style={Style.calView}>
              <IcnClander style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
              <Text style={Style.title}>{props.item.createDate ? moment(props.item.createDate).format("DD MMM YY") : "No date"}</Text>


              <IcnAvtarBg style={Style.callLeftIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
              <Text style={Style.title}>{`${props.item.firstName} ${props.item.lastName}`}</Text>
            </View>
            :
            <View style={Style.calView}>
              <IcnClander style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
              <Text style={Style.title}>{moment(props.item.createDate).format("DD MMM YYYY")}</Text>
            </View>}
          <View style={Style.icnView}>

            <View style={Style.rowLeftView}>
              {props.item.trophy && <IcnTrophy style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />}
              {props.item.starred && <IcnStar style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />}
              {props.item.topRate && <IcnRewordComment style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />}
              {props.item.insight && <IcnRewordLight style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />}
            </View>

            <View style={Style.rowRightView}>
              <View style={Style.secondInnerCalView}>
                <IcnWatchDone style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                <Text style={Style.title}>{props.item.totalView}</Text>
              </View>
              <View style={Style.secondInnerCalView}>

                {props.item.like == true ?
                  <TouchableOpacity onPress={() => { likeUnlike(props.item.id) }}>
                    <IcnThumsUpBlack style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={() => { likeUnlike(props.item.id) }}>
                    <IcnThumsUp style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                  </TouchableOpacity>}
                <Text style={Style.title}>{props.item.totalLike}</Text>
              </View>

              <View style={Style.secondInnerCalView}>
                <TouchableOpacity onPress={() => { navigateToComment(props.item.id) }}>
                  <IcnComment style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                </TouchableOpacity>
                <Text style={Style.title}>{props.item.totalComment}</Text>
              </View>

              <View style={Style.moreView}>
                <Menu>
                  <MenuTrigger>
                    <IcnMenuDote height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} fill={GetAppColor.grayBorder} />
                  </MenuTrigger>
                  <MenuOptions >
                    <MenuOption style={Style.menuView} onSelect={() => onShare(message(props.item.id))}>
                      <IcnShareIcon stroke={GetAppColor.pincolor} style={Style.headerProfileIcn} height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
                      <Text style={Style.txtMenuOptions}>{Label.Share}</Text>
                    </MenuOption>
                  </MenuOptions>
                </Menu>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  const colors = ["#dcc26f", '#dd8888', '#c0a9fe', '#90ca66', '#70bc9f', '#e39f64', '#6b9dc6', "#dcc26f", '#dd8888', '#c0a9fe']
  const RenderBubble = () => {
    const data = []
    props.data.map((ele, index) => {
      data.push({ color: colors[index], value: ele.totalView, item: ele })
    })

    return (
      data.length > 0 ?
        <BubbleChart
          width={350}
          height={Platform.OS == 'ios' ? AppUtil.getHP(58) : AppUtil.getHP(60)}
          data={data}
          onClick={(item) => { setDetail(item) }}
        />
        : null)
  }

  return (
    <View style={STYLE.container}>
      <View>
        <RenderBubble />
      </View>
      <View >
        {detail ?
          <SubIdeaGraphDetail item={detail} onItemPress={props.onItemPress} />
          : null}
      </View>
    </View>
  )
}

export default memo(SubIdeasListGraph)
const STYLE = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  }
})