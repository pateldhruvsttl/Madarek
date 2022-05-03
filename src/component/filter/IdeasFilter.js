import { View, Text, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Modal from "react-native-modal";
import { GetAppColor } from '../../utils/Colors';
import CloseIcon from '../../assets/svg/CloseIcon';
import { Label } from '../../utils/StringUtil';
import Style from './IdeasFilterStyle'
import { AppUtil } from '../../utils/AppUtil';


export default function IdeasFilter(props) {

    const [selectedIndex, setSelectedIndex] = useState(0);

    radioButton =(index, value)=>{

        return(
            <View style={Style.userTypeButtonView}>
                        <TouchableOpacity onPress={() => setSelectedIndex(index)} style={{ alignItems: 'center' }}>
                            {
                                selectedIndex == index ?
                                    <View style={Style.yellowBorderView}>
                                        <View style={Style.yellowFillView} />
                                    </View>
                                    :
                                    <View style={Style.grayBorderView} />
                            }
                            <Text style={[Style.userTypeText, { marginTop: 0 }]} >{value}</Text>
                        </TouchableOpacity>
                    </View>
        )
    }

    return (
        <View>
            <Modal isVisible={props.visible}>
                <View style={Style.MainView}>

                    <View style={Style.headerView}>
                        <Text style={Style.txtTitle}>{Label.Filter}</Text>
                        <TouchableOpacity onPress={() => props.onClose()}>
                        <Text style={Style.txtClose}>{'X'}</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text>{"Sort By"}</Text>
                    </View>
                    {radioButton(0, "Default")}
                    {radioButton(1, "Name(A-Z)")}
                    {radioButton(2, "Name(Z-a)")}
                    {radioButton(3, "Rating(Highest)")}
                    {radioButton(4, "Rating(Lowest)")}

                </View>
            </Modal>
        </View>
    );
}