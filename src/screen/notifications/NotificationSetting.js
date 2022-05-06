import { Text, View, SafeAreaView } from 'react-native'
import React,{ useState } from 'react'
import Style from './NotificationSettingStyle'
import CommonHeader from '../../component/commonheader/CommonHeader'
import { Switch } from 'react-native-switch'
import { AppUtil } from '../../utils/AppUtil'
import { GetAppColor } from '../../utils/Colors'
import { Label } from '../../utils/StringUtil'

const NotificationSetting = () => {

    const [first, setFirst] = useState(true)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(true)
    const [fourth, setFourth] = useState(false)
    const [fifth, setFifth] = useState(true)
    const [sixth, setSixth] = useState(false)
    const [seventh, setSeventh] = useState(false)

    const SwitchRender = (props) => (

        <Switch
            value={props.value}
            onValueChange={() => props.toggleSwitch()}
            disabled={false}
            circleSize={AppUtil.getHP(2.8)}
            barHeight={AppUtil.getHP(2.3)}
            circleBorderWidth={0}
            backgroundActive={GetAppColor.switchOnColor}
            backgroundInactive={GetAppColor.switchOffColor}
            circleActiveColor={GetAppColor.catBorder}
            circleInActiveColor={GetAppColor.grayBorder}
            renderActiveText={false}
            renderInActiveText={false}
        />
    )

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CommonHeader isType={"NotificationSetting"} />
            <View style={Style.container}>
                <View style={Style.items}>
                    <Text style={Style.itemTxt}>{Label.AllNotifications}</Text>
                    <SwitchRender value={first} toggleSwitch={() => setFirst(!first)}/>
                </View>
                <View style={Style.items}>
                    <Text style={Style.itemTxt}>{Label.UserNotifications}</Text>
                    <SwitchRender value={second} toggleSwitch={() => setSecond(!second)}/>
                </View>
                <View style={Style.items}>
                    <Text style={Style.itemTxt}>{Label.IdeaNotifications}</Text>
                    <SwitchRender value={third} toggleSwitch={() => setThird(!third)}/>
                </View>
                <View style={Style.items}>
                    <Text style={Style.itemTxt}>{Label.CollaborateNotifications}</Text>
                    <SwitchRender value={fourth} toggleSwitch={() => setFourth(!fourth)}/>
                </View>
                <View style={Style.items}>
                    <Text style={Style.itemTxt}>{Label.ExpertNotifications}</Text>
                    <SwitchRender value={fifth} toggleSwitch={() => setFifth(!fifth)}/>
                </View>
                <View style={Style.items}>
                    <Text style={Style.itemTxt}>{Label.CollaborateNotifications}</Text>
                    <SwitchRender value={sixth} toggleSwitch={() => setSixth(!sixth)}/>
                </View>
                <View style={Style.items}>
                    <Text style={Style.itemTxt}>{Label.CollaborateNotifications}</Text>
                    <SwitchRender value={seventh} toggleSwitch={() => setSeventh(!seventh)}/>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default NotificationSetting

