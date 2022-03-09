import { View, Text } from 'react-native'
import React from 'react'

const MyDrawerScreen = (props) => {
  const {themeColor} = useSelector((state) => state)
  return (
    <View>
      <View style={{height:'13.13%', backgroundColor:themeColor.headerColor,}}>

      </View>
    </View>
  )
}

export default MyDrawerScreen;