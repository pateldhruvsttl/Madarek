import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import ResourcesStyle from "./ResourcesStyle";
import IcnDownload from '../../assets/svg/IcnDownload'
import { AppUtil } from '../../utils/AppUtil'
import { Label } from '../../utils/StringUtil'
import { Loger } from '../../utils/Loger';
import { AppConfig } from '../../manager/AppConfig';


const Resources = (props) => {
    const checkPermission = async (url) => {
    
        // Function to check the platform
        // If Platform is Android then check for permissions.
     
        if (Platform.OS === 'ios') {
          downloadFile(url);
        } else {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              {
                title: 'Storage Permission Required',
                message:'Application needs access to your storage to download File',
              }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              // Start downloading
              downloadFile(url);
              console.log('Storage Permission Granted.');
            } else {
              // If permission denied then show alert
              Alert.alert('Error','Storage Permission Not Granted');
            }
          } catch (err) {
            console.log("++++"+err);
          }
        }
      };

      const downloadFile = (FILE_URL) => {
   
        // Get today's date to add the time suffix in filename
        let date = new Date();
        // File URL which we want to download
        // Function to get extention of the file url
        let file_ext = AppUtil.GetFileExtention(FILE_URL)
       
        file_ext = '.' + file_ext[0];
       
        // config: To get response by passing the downloading related options
        // fs: Root directory path to download
        const { config, fs } = RNFetchBlob;
        let RootDir = fs.dirs.PictureDir;
        let options = {
          fileCache: true,
          addAndroidDownloads: {
            path:
              RootDir+
              '/file_' + 
              Math.floor(date.getTime() + date.getSeconds() / 2) +
              file_ext,
            description: 'downloading file...',
            notification: true,
            // useDownloadManager works with Android only
            useDownloadManager: true,   
          },
        };
        config(options)
          .fetch('GET', FILE_URL)
          .then(res => {
            // Alert after successful downloading
            console.log('res -> ', JSON.stringify(res));
            alert('File Downloaded Successfully.');
          });
      };

    return (
        <View style={ResourcesStyle.contentBox}>
            <Text style={ResourcesStyle.heading}>{Label.Resources}</Text>

            {props.resource && props.resource.length !== 0 &&
                props.resource.map((item, index) => {
                    return (
                        <View style={ResourcesStyle.resourceContainer}>
                            <View style={ResourcesStyle.resourceSubTitle}>
                                <Text style={ResourcesStyle.resourceTitle}>{AppUtil.GetImageNameFromUrl(props.resource[index])}</Text>
                            </View>
                            <TouchableOpacity style={ResourcesStyle.downloadIcon} onPress={()=>checkPermission(item)}>
                                <IcnDownload height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
        </View>
    )
}

export default Resources
