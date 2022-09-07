import React, { memo } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { AppUtil } from "../../utils/AppUtil";
import Style from "./SubIdeasListStyle";
import { Label } from "../../utils/StringUtil";
import IcnSelectedHeart from "../../assets/svg/IcnSelectedHeart"
import IcnUnSelectedHeart from "../../assets/svg/IcnUnSelectedHeard"
import IcnClander from "../../assets/svg/IcnClander"
import IcnWatchDone from "../../assets/svg/IcnWatchDone"
import IcnThumsUp from "../../assets/svg/IcnThumsUp"
import IcnThumsUpBlack from "../../assets/svg/IcnThumsUpBlack"
import IcnComment from "../../assets/svg/IcnComment"
import IcnMenuDote from "../../assets/svg/IcnMenuDote"
import IcnShareIcon from "../../assets/svg/IcnShareIcon"
import IcnTrophy from "../../assets/svg/IcnTrophy"
import IcnStar from "../../assets/svg/IcnStar"
import IcnRewordComment from "../../assets/svg/IcnRewordComment"
import IcnRewordLight from "../../assets/svg/IcnRewordLight"
import IcnAvtarBg from "../../assets/svg/IcnAvtarBg"
import IcnMenu from "../../assets/svg/IcnMenuDote"
import moment from "moment";
import { MenuTrigger, Menu, MenuOption, MenuOptions } from "react-native-popup-menu";
import { GetAppColor } from "../../utils/Colors";
import { AppConfig } from "../../manager/AppConfig";

const SubIdeasList = (props) => {

  const likeUnlike = (id) => {

    if (props?.isType == "Ideas") {
      props.onLikeIdeas(id);
    }
    else if (props?.isType == "Challenges") {
      props.onLikeIdeas(id);
    }
    else {
      props.onLikeIdeas(id)
    }
  }
  const favouriteUnfavourite = (id) => {

    if (props?.isType == "Ideas") {
      props.onFavoriteIdeas(id);
    }
    else if (props?.isType == "Challenges") {
      props.onFavoriteIdeas(id);
    }
    else {
      props.onFavoriteIdeas(id)
    }
  }

  const onGetPaginations = () => {

    if (props?.data?.length > (AppConfig.pageLimit - 1) && props?.paginations)
      props?.paginations()
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity style={Style.renderMainView} onPress={() => props.onItemPress(item)}>

      <View style={Style.itemsView}>

        <View style={Style.TitleView}>
          <Text numberOfLines={1} style={Style.title}>{item.categoryName}</Text>
          {
            (item.favorite) ?
              <TouchableOpacity style={Style.likeUnlikeBtn} onPress={() => favouriteUnfavourite(item.id)}>
                <IcnSelectedHeart style={Style.likeUnlikeIcn} height={AppUtil.getHP(2.7)} width={AppUtil.getHP(2.7)} />
              </TouchableOpacity>
              :
              <TouchableOpacity style={Style.likeUnlikeBtn} onPress={() => favouriteUnfavourite(item.id)}>
                <IcnUnSelectedHeart style={Style.likeUnlikeIcn} height={AppUtil.getHP(2.7)} width={AppUtil.getHP(2.7)} />
              </TouchableOpacity>
          }
        </View>

        <Text numberOfLines={2} style={[Style.SubTitle, { color: GetAppColor.borderRed }]}>{item.ideaTitle}</Text>

        {
          props.isType == "Ideas" ?
            <View style={Style.calView}>
              <IcnClander style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
              <Text style={Style.title}>{item.createDate ? moment(item.createDate).format("DD MMM YY") : "No date"}</Text>


              <IcnAvtarBg style={Style.callLeftIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
              <Text style={Style.title}>{`${item.firstName} ${item.lastName}`}</Text>
            </View>
            :
            <View style={Style.calView}>
              <IcnClander style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
              <Text style={Style.title}>{moment(item.createDate).format("DD MMM YYYY")}</Text>
            </View>

        }

        <View style={Style.icnView}>

          <View style={Style.rowLeftView}>

            {item.trophy && <IcnTrophy style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />}
            {item.starred && <IcnStar style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />}
            {item.topRate && <IcnRewordComment style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />}
            {item.insight && <IcnRewordLight style={Style.winningIcn} height={AppUtil.getHP(1.7)} width={AppUtil.getHP(1.7)} />}


          </View>

          <View style={Style.rowRightView}>
            <View style={Style.secondInnerCalView}>
              <IcnWatchDone style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
              <Text style={Style.title}>{item.totalView}</Text>
            </View>
            <View style={Style.secondInnerCalView}>
              {
                item.like == true ?
                  <TouchableOpacity onPress={() => { likeUnlike(item.id) }}>
                    <IcnThumsUpBlack style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={() => { likeUnlike(item.id) }}>
                    <IcnThumsUp style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                  </TouchableOpacity>
              }
              <Text style={Style.title}>{item.totalLike}</Text>
            </View>
            <View style={Style.secondInnerCalView}>
              <TouchableOpacity onPress={() => props.navigateToComment({ model: 'IdeaComments', fieldName: 'idea_id', id: item.id })}>
                <IcnComment style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
              </TouchableOpacity>
              <Text style={Style.title}>{item.totalComment}</Text>
            </View>
            <View style={Style.moreView}>
              <Menu>
                <MenuTrigger>
                  <IcnMenuDote height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} fill={GetAppColor.grayBorder} />
                </MenuTrigger>
                <MenuOptions >
                  <MenuOption style={Style.menuView}>
                    <IcnShareIcon stroke={GetAppColor.pincolor} style={Style.headerProfileIcn} height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
                    <Text style={Style.txtMenuOptions}>{"Share"}</Text>
                  </MenuOption>
                </MenuOptions>
              </Menu>
            </View>
          </View>

        </View>



      </View>

    </TouchableOpacity>
  );


  return (
    <View style={Style.MainView}>
      {
        props?.isTitle &&
        <View style={Style.titleView}>
          <Text style={Style.txtTitle}>{props?.isTitle}</Text>
          <Text style={Style.txtSeeMore}>{Label.seeMore}</Text>
        </View>
      }

      <FlatList
        data={props?.data}
        scrollEnabled={props?.scrollEnabled ? true : false}
        renderItem={renderItem}
        onEndReached={onGetPaginations}
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





