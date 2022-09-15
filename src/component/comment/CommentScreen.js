import { View, TextInput, SafeAreaView, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState, memo } from 'react'
import CommonHeader from '../commonheader/CommonHeader'
import Style from './CommentScreenStyle'
import { ScrollView } from 'react-native-gesture-handler'
import { Label } from '../../utils/StringUtil'
import { AppUtil } from '../../utils/AppUtil'
import ImageLoad from 'react-native-image-placeholder'
import moment from 'moment'
import IcnThumsUp from '../../assets/svg/IcnThumsUp'
import { Service } from '../../service/Service'
import { EndPoints } from '../../service/EndPoints'
import { Loger } from '../../utils/Loger'
import CommentList from '../../model/CommentList'
import { deviceId, showMessage } from '../../utils/Constant'
import { UserManager } from '../../manager/UserManager'
import { AppConfig, getLanguage } from '../../manager/AppConfig'
import { GetAppColor } from '../../utils/Colors'


const CommentScreen = (props) => {
  const [comment, setComment] = useState('')
  const [parentComment, setParentComment] = useState('')
  const [commentList, setCommentList] = useState([])
  const [isCommentVisible, setCommentVisible] = useState(false)
  const [parentId, setParentId] = useState(0)

  const fieldName = props.route.params.item.fieldName
  const model = props.route.params.item.model
  const id = props.route.params.item.id

  useEffect(() => {
    commentListing()
  }, [])

  const submitComment = (props) => {

    if (props?.isType == 'Parent' ? !parentComment.trim() : !comment.trim()) {
      showMessage('Please Enter Comment')
    }
    else {
      const data = {
        "device_id": deviceId,
        "token": AppConfig.token,
        "frontuser_id": UserManager.userId,
        "field_name": fieldName,
        "field_value": id,
        "model": model,
        "language": getLanguage(),
        "parent_id": props?.isType == 'Parent' ? props.id : '0',
        "comment": props?.isType == 'Parent' ? parentComment : comment
      }
      Service.post(EndPoints.submitComment, data, (res) => {
        Loger.onLog("res of submitComment", res)
        if (res.statusCode == 1) {
          commentListing()
          setComment('')
          setParentComment('')
          props?.isType == 'Parent' && setCommentVisible(!isCommentVisible)
        }
      },
        (error) => {
          Loger.onLog("res of submitComment", error)
        })

    }
  }
  const commentListing = () => {
    const data = {
      "frontuser_id": UserManager.userId,
      "field_name": fieldName,
      "id": id,
      "language": getLanguage(),
      "model": model

    }
    Service.post(EndPoints.commentSection, data, (res) => {
      Loger.onLog("res of CommentSection", res)
      const commentArr = []
      if (res.statusCode == 1) {
        res.data.map((ele) => {
          let model = new CommentList(ele)
          commentArr.push(model)
        })
        setCommentList(commentArr)
      }
    },
      (err) => {
        Loger.onLog('error of commentSection', err);
      })
  }

  const CommentView = (props) => {
    return (
      <View style={Style.commentView}>
        <Text style={Style.commentText}>{Label.Comment}<Text style={{ color: "red" }}>*</Text></Text>
        <TextInput
          placeholderTextColor={GetAppColor.grayBorder}
          multiline={true}
          style={Style.input}
          value={props?.isType == 'Parent' ? parentComment : comment}
          onChangeText={title => { props?.isType == 'Parent' ? setParentComment(title) : setComment(title) }}
        />
        <View style={{ flexDirection: "row", marginTop: AppUtil.getHP(1) }}>
          <TouchableOpacity style={Style.commentBtn} onPress={() => submitComment(props)}>
            <Text style={Style.commentBtnText}>
              {Label.Submit.toUpperCase()}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const CommentDetail = (props) => {
    return (
      <View style={props.isType == 'Parent' ? Style.renderComment : Style.renderChildComment}>
        <ImageLoad
          style={[Style.userImage, { marginTop: AppUtil.getHP(1) }]}
          source={{ uri: props.item.userPhoto }}
          borderRadius={AppUtil.getHP(2.5)}
          placeholderStyle={Style.userImage}
        />
        <View style={Style.leftItems1}>
          <Text numberOfLines={1} style={Style.userName}>
            {props.item.firstName} {props.item.lastName}<Text style={Style.date}> {moment(props.item.date).format("DD MMM YY")}</Text>
          </Text>
          <Text numberOfLines={0} style={Style.titleComment}>
            {props.item.comment}

          </Text>
          <View style={Style.secondInnerCalView}>
            <IcnThumsUp height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} style={Style.icnLikeUp} />
            <Text style={Style.title}>{props.item.totalLike}</Text>
            {
              props.isType == 'Parent' ?
                <TouchableOpacity style={Style.replyBtn} onPress={() => { setParentId(props.item.id); setCommentVisible(!isCommentVisible) }}>
                  <Text style={Style.replyBtnTxt}>{Label.Replay}</Text>
                </TouchableOpacity> : null
            }
          </View>
        </View>
      </View>
    )
  }
  const CommentChildDetail = (props) => {
    const renderItem = ({ item }) => {
      return (
        <View style={props.isType == 'Parent' ? Style.renderComment : Style.renderChildComment}>
          <ImageLoad
            style={[Style.userImage, { marginTop: AppUtil.getHP(1) }]}
            source={{ uri: props.item.userPhoto }}
            borderRadius={AppUtil.getHP(2.5)}
            placeholderStyle={Style.userImage}
          />
          <View style={Style.leftItems1}>
            <Text numberOfLines={1} style={Style.userName}>
              {props.item.firstName} {props.item.lastName}<Text style={Style.date}> {moment(item.created_at).format("DD MMM YY")}</Text>
            </Text>
            <Text numberOfLines={0} style={Style.titleComment}>
              {item.comment}
            </Text>
            <View style={Style.secondInnerCalView}>
              <IcnThumsUp height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} style={Style.icnLikeUp} />
              <Text style={Style.title}>{props.item.totalLike}</Text>
            </View>
          </View>
        </View>
      )
    }
    return (
      <FlatList
        data={props?.item.childCommentsData}
        renderItem={renderItem} />
    )
  }
  const renderComments = ({ item }) => {

    return (
      <View>
        <CommentDetail item={item} isType={'Parent'} />
        {item.id == parentId && isCommentVisible ? CommentView({ isType: 'Parent', id: item.id }) : null}
        {item?.childCommentsData && item.childCommentsData.length > 0 ?

          <CommentChildDetail item={item} isType={'Child'} />
          : null}
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <CommonHeader isType={"Comments"} />
      <View style={Style.MainView}>
        <ScrollView>
          <View style={Style.container}>
            {CommentView({ isType: 'Main' })}
            <View style={Style.middleView}>
              <Text style={Style.middleTitle}>{Label.Comment}</Text>
              <View style={Style.middleLine}></View>
            </View>
            <View style={Style.commentListing}>
              <FlatList
                data={commentList}
                renderItem={renderComments}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
export default memo(CommentScreen);


