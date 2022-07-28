import { ActivityIndicator, Text, View, TouchableOpacity, PermissionsAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import ResourcesStyle from "./ResourcesStyle";
import IcnDownload from '../../assets/svg/IcnDownload'
import { AppUtil } from '../../utils/AppUtil'
import { Label } from '../../utils/StringUtil'
import { Loger } from '../../utils/Loger';
import { AppConfig } from '../../manager/AppConfig';
import { DownloadManager } from '../../manager/DownloadManager';
// import RNFetchBlob from 'rn-fetch-blob'


const Resources = (props) => {
    const [isDownloading, setDownloading] = useState(false);
    const [isData, setData] = useState([]);

    useEffect(()=>{
        if(props.resource && props.resource.length !== 0)    
        {
            let arr = [];
            for(var i = 0 ; i < props.resource.length ; i++)
            {
                var obj = {dowbloading:false, url : props.resource[i], uri : props.resource[i]}
                arr.push(obj)
            }
            setData(arr);
        }
    },[])

    const onDownloadFile =(item, index)=>{
        
        DownloadManager(item, (res) => {
            Loger.onLog("res", res);
        })
    }

    // const checkPermission = async (url, index) => {

    //     // Function to check the platform
    //     // If Platform is Android then check for permissions.

    //     if (Platform.OS === 'ios') {
    //         downloadFile(url, index);
    //     }
    //     else {
    //         try {
    //             const granted = await PermissionsAndroid.request(
    //                 PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    //                 {
    //                     title: 'Storage Permission Required',
    //                     message: 'Application needs access to your storage to download File',
    //                 }
    //             );
    //             if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //                 // Start downloading
    //                 downloadFile(url, index);
    //                 console.log('Storage Permission Granted.');
    //             } else {
    //                 // If permission denied then show alert
    //                 Alert.alert('Error', 'Storage Permission Not Granted');
    //             }
    //         } catch (err) {
    //             console.log("++++" + err);
    //         }
    //     }
    // };

    // const downloadFile = (FILE_URL, index) => {
    //     setDownloading(true);
    //     let dt = isData;
    //     dt[index].dowbloading = true;
    //     setData(dt);
    //     let date = new Date();
    //     let file_ext = AppUtil.GetFileExtention(FILE_URL)
    //     file_ext = '.' + file_ext[0];

    //     const { config, fs } = RNFetchBlob;
    //     let RootDir = fs.dirs.PictureDir;

    //     let options = {
    //         fileCache: true,
    //         addAndroidDownloads: {
    //             path: RootDir + '/file_' + Math.floor(date.getTime() + date.getSeconds() / 2) + file_ext, description: 'downloading file...',
    //             notification: true,
    //             // useDownloadManager works with Android only
    //             useDownloadManager: true,
    //         },
    //     };

    //     config(options).fetch('GET', FILE_URL).then(res => {
    //         setDownloading(false);

    //         let dt = isData;
    //         dt[index].dowbloading = false;
    //         setData(dt);
    //         alert('File Downloaded Successfully.');
    //     });
    // };

    return (
        <View style={ResourcesStyle.contentBox}>
            <Text style={ResourcesStyle.heading}>{Label.Resources}</Text>

            {isData.length !== 0 &&
                isData.map((item, index) => {
                    return (
                        <View style={ResourcesStyle.resourceContainer}>
                            <View style={ResourcesStyle.resourceSubTitle}>
                                <Text numberOfLines={1} style={ResourcesStyle.resourceTitle}>{AppUtil.GetImageNameFromUrl(item.url)}</Text>
                            </View>
                            <TouchableOpacity style={ResourcesStyle.downloadIcon} onPress={() => onDownloadFile(item, index)}>
                                {!item.dowbloading ?
                                    <IcnDownload height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
                                    :
                                    <ActivityIndicator size={'small'} color='blue' />
                                }
                            </TouchableOpacity>

                           
                        </View>
                    )
                })
            }
        </View>
    )
}

export default Resources
