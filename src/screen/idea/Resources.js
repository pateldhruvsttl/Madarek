import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import ResourcesStyle from './ResourcesStyle'
import IcnDownload from '../../assets/svg/IcnDownload'
import { AppUtil } from '../../utils/AppUtil'
import { Label } from '../../utils/StringUtil'


const Resources = (props) => {
    return (
        <View style={ResourcesStyle.contentBox}>
            <Text style={ResourcesStyle.heading}>{Label.Resources}</Text>
            {props.resource && props.resource.length !== 0 ?
                props.resource.map((item, idx) => (
                    <View style={ResourcesStyle.resourceContainer}>
                        <View style={{ flex: 4 }}>
                            <Text style={ResourcesStyle.resourceTitle}>{item.resourceName}</Text>
                        </View>
                        <TouchableOpacity style={{ flex: 0.5 }}>
                            <IcnDownload height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
                        </TouchableOpacity>
                    </View>)) : null
            }
        </View>
    )
}

export default Resources
