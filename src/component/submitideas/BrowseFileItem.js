import React, { memo, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Label } from '../../utils/StringUtil';
import IcnRemoveRound from '../../assets/svg/IcnRemoveRound'
import Style from './IdeaStepStyle'
import DocumentPicker, { types } from 'react-native-document-picker'
import { showMessageWithCallBack } from '../../utils/Constant';
import Document from '../../assets/svg/Document';
import { AppUtil } from '../../utils/AppUtil';
import RNFS from 'react-native-fs';
import { useEffect } from 'react';

const BrowseFileItem = (props) => {

    const [isImage, setImage] = useState(null)
    const [isFile, setFile] = useState(null)
    const fixeSize = Number(props.size) * 1000 // In Bytes

    useEffect(() => {
        if (isFile == null)
            props.onSelectImgResponse("")
    }, [isFile])

    const addMaterial = async (item) => {
        if (item && item != "" && item != undefined) {

            let typeArr = [];
            item.forEach(key => {
                if (key === "jpg" || key === "png" || key === "jpeg")
                    typeArr.push(types.images)
                else if (key === "pdf")
                    typeArr.push(types.pdf)
                else if (key === "doc")
                    typeArr.push(types.doc)
                else if (key === "docx")
                    typeArr.push(types.docx)
                else if (key === "mp4" || key === "mp3")
                    typeArr.push(types.video)
            })

            try {
                await DocumentPicker.pickSingle({ type: typeArr }).then((results) => {

                    if (results.size > fixeSize) {
                        showMessageWithCallBack(`${Label.ErrorMessage} ${fixeSize / 1e+6} ${Label.MB}`, () => { null })
                    }
                    else {
                        props.onSelectImgResponse(results);
                        setFile(results)
                    }

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
        return (
            (isFile.type == "image/png") ?
                <View style={Style.addImageView}>
                    <Image resizeMode="cover" resizeMethod="scale" style={Style.imgStyle} source={{ uri: isFile.uri }} />
                    <TouchableOpacity style={Style.removeIcnStyle} onPress={() => { setFile(null) }}>
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

    return (
        <View style={Style.innerSecondView1}>
            <Text style={Style.txtTitle}>{props.title}{props.requered == "Y" && <Text style={Style.txtStar}>*</Text>}</Text>

            {isFile === null ?
                <TouchableOpacity onPress={() => addMaterial(props.type)} style={Style.addImageView}>
                    <Text style={Style.txtPlus}>{"+"}</Text>
                    <Text style={Style.txtTitle}>{Label.AddFile}</Text>
                    {/* {props.type == "image" && <Text style={Style.txtTitle}>{Label.AddImage}</Text>}
                    {props.type == "video" && <Text style={Style.txtTitle}>{Label.AddVideo}</Text>}
                    {props.type == "file" && <Text style={Style.txtTitle}>{Label.AddFile}</Text>} */}
                </TouchableOpacity>
                :
                renderFile()
            }

        </View>
    )
}

export default memo(BrowseFileItem);