import { View, Text } from 'react-native'
import React from 'react'
import Style from './SpotlightContentStyle'
import { Label } from '../../utils/StringUtil'
import WebViewComp from '../webview/WebViewComp'
import moment from 'moment'

const SpotlightContent = (props) => {

  const { sectorName, categoryName, publishBy, publishDate, title, description } = props.data

  return (
    <View style={Style.mainView}>
      <View style={Style.calViewOne}>
        <View style={Style.sector}>
          <Text style={Style.title}>{Label.Sector}</Text>
          <Text numberOfLines={1} style={Style.subTitle}>{sectorName}</Text>
        </View>
        <View style={Style.category}>
          <Text style={Style.title}>{Label.Category}</Text>
          <Text numberOfLines={1} style={Style.subTitle}>{categoryName}</Text>
        </View>
      </View>
      <View style={Style.calViewTwo}>
        <View style={Style.sector}>
          <Text style={Style.title}>{Label.Publishby}</Text>
          <Text numberOfLines={1} style={Style.subTitle}>{publishBy}</Text>
        </View>
        <View style={Style.category}>
          <Text style={Style.title}>{Label.PublishDate}</Text>
          <Text numberOfLines={1} style={Style.subTitle}>{moment(publishDate).format("YYYY-MM-DD")}</Text>
        </View>
      </View>
      <View style={Style.headings}>
        <Text style={Style.label}>{title}</Text>
        <WebViewComp data={description} />
      </View>
    </View>
  )
}

export default SpotlightContent