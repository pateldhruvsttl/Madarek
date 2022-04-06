import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import CommonHeader from '../commonheader/CommonHeader'
import STYLE from './BecomeExpertStyle'
import { Label } from '../../utils/StringUtil'
import FONTS from '../../utils/Fonts'
import { useSelector } from 'react-redux'

const BecomeExpert = () => {

    const { themeColor } = useSelector((state) => state)
    const Bold = ({ children }) => <Text style={STYLE.bold}>{children}</Text>

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <CommonHeader isType={"BecomeExpert"} />

            <View style={STYLE.container}>
                <View style={STYLE.txtBox}>

                    <Text style={STYLE.title}>{Label.WantBecomeExpert}</Text>
                    <Text style={STYLE.subTitleOne}>{data.label1}</Text>

                    <Text style={STYLE.subTitleTwo}>{data.label2}
                        <Bold>{data.label3}</Bold>{data.label4}{"\n\n"}{data.lable5}</Text>

                    <TouchableOpacity style={[STYLE.btn, { backgroundColor: themeColor.buttonColor }]} >
                        <Text style={[STYLE.btnTxt, { color: themeColor.buttonFontColor }]}>{Label.ApplyNow}</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    )
}

export default BecomeExpert

const data = {

    label1: "Transforms are style properties that will help you modify the appearance and position of your components using 2D or 3D transformations. However the layouts remain the same around the transformed component hence it might overlap with the nearby components.",
    label2: "transform accepts an array of transformation objects. Each object specifies the property that will be transformed as the key, and the value to use in the transformation.",
    label3: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    label4: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    lable5: "If a user has previously turned off a permission that you prompt for, the OS will advise your app to show a rationale for needing the permission. The optional rationale argument will show a dialog prompt"

}