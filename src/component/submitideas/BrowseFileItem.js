import React, { memo, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { GetAppColor } from '../../utils/Colors';
import { Label } from '../../utils/StringUtil';
import * as ImagePicker from 'react-native-image-picker';
import IcnRemoveRound from '../../assets/svg/IcnRemoveRound'
import Style from './IdeaStepStyle'
import { Loger } from '../../utils/Loger';
import DocumentPicker, { types } from 'react-native-document-picker'
import { showMessageWithCallBack } from '../../utils/Constant';
import Document from '../../assets/svg/Document';
import { AppUtil } from '../../utils/AppUtil';



const BrowseFileItem = (props) => {

    const [isMessage, setMessage] = useState()
    const [isImage, setImage] = useState(null)
    const [isFile, setFile] = useState(null)
    const fixeSize = Number(props.size) * 1000 // In Bytes

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

    const addMaterial = async (item) => {
        if (item == "image" || item == "file" || item == "video") {
            try {
                await DocumentPicker.pickSingle(
                    item == "image" ? { type: [types.images] }
                        :
                        item == "file" ?
                            { type: [types.pdf, types.doc, types.docx, types.images] }
                            :
                            { type: [types.video] }

                ).then((results) => {
                    setFile(results)
                    console.log('res',results);
                });

            } catch (err) {
                if (DocumentPicker.isCancel(err)) {
                } else {
                    throw err;
                }
            }
        }
    }
    const renderFile = () => {
        if (isFile.size <= fixeSize) {
            return (
                (isFile.type == "image/png" || isFile.type == "image/jpg" || isFile.type == "image/jpeg" || isFile.type == "video/mp4") ?
                    <View style={Style.addImageView}>
                        <Image resizeMode="cover" resizeMethod="scale" style={Style.imgStyle} source={{ uri: isFile.uri }} />
                        <TouchableOpacity style={Style.removeIcnStyle} onPress={() => setFile(null)}>
                            <IcnRemoveRound width={15} height={15} />
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={Style.addFileView}>
                        <Document height={AppUtil.getHP(8)} width={AppUtil.getWP(25)} />
                        <TouchableOpacity style={Style.removeIcnFile} onPress={() => setFile(null)}>
                            <IcnRemoveRound width={15} height={15} />
                        </TouchableOpacity>
                    </View>
            )
        }
        else {
            showMessageWithCallBack(`${Label.ErrorMessage} ${fixeSize / 1e+6} ${Label.MB}`,
                () => { setFile(null) })
        }
    }
    return (
        <View style={Style.innerSecondView1}>
            <Text style={Style.txtTitle}>{props.title}{props.requered == "Y" && <Text style={Style.txtStar}>*</Text>}</Text>

            {isFile === null ?
                <TouchableOpacity onPress={() => addMaterial(props.type)} style={Style.addImageView}>
                    <Text style={Style.txtPlus}>{"+"}</Text>
                    {props.type == "image" && <Text style={Style.txtTitle}>{"Add Image"}</Text>}
                    {props.type == "video" && <Text style={Style.txtTitle}>{"Add Video"}</Text>}
                    {props.type == "file" && <Text style={Style.txtTitle}>{"Add File"}</Text>}
                </TouchableOpacity>
                :
                renderFile()
            }

        </View>
    )
}

export default memo(BrowseFileItem);