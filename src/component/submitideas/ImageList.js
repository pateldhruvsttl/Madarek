import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState, memo } from 'react'
import * as ImagePicker from 'react-native-image-picker';
import IcnRemoveRound from '../../assets/svg/IcnRemoveRound'
import Style from './IdeaStepStyle'

function ImageList(props) {

    let list = props?.currentList;
    const [imageList, setImageList] = useState(list ? props?.currentList : [{ assets: "selected" }]);

    const onImagePress = (item) => {
        if (item === "add") {
            let options = {
                title: 'Select Image',
                customButtons: [
                    {
                        name: 'customOptionKey',
                        title: 'Choose Photo from Custom Option'
                    },
                ],
                storageOptions: {
                    skipBackup: true,
                    path: 'downloads',
                },
            };

            ImagePicker.launchImageLibrary(options, (response) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                } else {
                    let arr = [...imageList, response]
                    setImageList(arr);
                    props.onUpdateList(arr);
                }
            });


        }
    }

    const onRemoveImage = (index) => {
        let imgList = imageList;
        imgList.splice(index, 1);
        setImageList([...imgList]);
    }
    return (

        <View>
            <View style={Style.imageContainer}>
                {
                    imageList.map((item, index) => {
                        if (item?.assets === "selected") {
                            return (
                                <TouchableOpacity key={index} onPress={() => onImagePress("add")} style={Style.addImageView}>
                                    <Text style={Style.txtPlus}>{"+"}</Text>
                                    <Text style={Style.txtTitle}>{"Add More"}</Text>
                                </TouchableOpacity>
                            )
                        }
                        else {
                            return (
                                <View style={Style.addImageView}>
                                    <Image resizeMode="cover" resizeMethod="scale" style={Style.imgStyle} source={{ uri: item?.assets[0].uri }} />
                                    <TouchableOpacity style={Style.removeIcnStyle} onPress={() => onRemoveImage(index)}>
                                        <IcnRemoveRound width={15} height={15} />
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                    })
                }
            </View>
        </View>
    )
}

export default memo(ImageList);