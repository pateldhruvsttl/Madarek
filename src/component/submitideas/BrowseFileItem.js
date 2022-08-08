import React, { memo, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { GetAppColor } from '../../utils/Colors';
import { Label } from '../../utils/StringUtil';
import * as ImagePicker from 'react-native-image-picker';
import IcnRemoveRound from '../../assets/svg/IcnRemoveRound'
import Style from './IdeaStepStyle'
import { Loger } from '../../utils/Loger';

const BrowseFileItem = (props) => {

    const [isMessage, setMessage] = useState()
    const [isImage, setImage] = useState(null)

    const onImagePress = (item) => {
        if (item === "add") {
            let options = {
                title: 'Select Image',
                customButtons: [{ name: 'customOptionKey', title: 'Choose Photo from Custom Option' },],
                storageOptions: { skipBackup: true, path: 'images', },
            };

            ImagePicker.launchImageLibrary(options, (response) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                } else {

                    Loger.onLog("respiobnse", response)
                    setImage(response);
                }
            });


        }
    }

    return (
        <View style={Style.innerSecondView1}>
            <Text style={Style.txtTitle}>{props.title}{props.requered == "Y" && <Text style={Style.txtStar}>*</Text>}</Text>

            {isImage === null ?
                <TouchableOpacity onPress={() => onImagePress("add")} style={Style.addImageView}>
                    <Text style={Style.txtPlus}>{"+"}</Text>
                    {props.type == "image" && <Text style={Style.txtTitle}>{"Add Image"}</Text>}
                    {props.type == "video" && <Text style={Style.txtTitle}>{"Add Video"}</Text>}
                    {props.type == "file" && <Text style={Style.txtTitle}>{"Add File"}</Text>}
                </TouchableOpacity>
                :
                <View style={Style.addImageView}>
                    <Image resizeMode="cover" resizeMethod="scale" style={Style.imgStyle} source={{ uri: isImage?.assets[0]?.uri }} />
                    <TouchableOpacity style={Style.removeIcnStyle} onPress={() => setImage(null)}>
                        <IcnRemoveRound width={15} height={15} />
                    </TouchableOpacity>
                </View>
            }

        </View>
    )
}

export default memo(BrowseFileItem);