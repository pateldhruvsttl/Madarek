import { Alert, PermissionsAndroid, Platform } from 'react-native';
import FileViewer from 'react-native-file-viewer';
import RNFS from 'react-native-fs';
import { AppUtil } from '../utils/AppUtil';
import { Loger } from '../utils/Loger';

export const DownloadManager = (item, result) => {

    if (Platform.OS === 'ios') {
        downloadFile(item, (res) => {
            result(res)
        });
    } else {
        try {
            if (PermissionsAndroid.RESULTS.GRANTED === "granted") {
                downloadFile(item,(res) => {
                    result(res)
                });
            } else {
                PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'Storage Permission Required',
                        message:
                            'Application needs access to your storage to download File',
                    }
                ).then((granted) => {
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        // Start downloading
                        downloadFile(item, (res) => {
                            result(res)
                        });
                        console.log('Storage Permission Granted.');
                    } else {
                        // If permission denied then show alert
                        Alert.alert('Error', 'Storage Permission Not Granted');
                    }
                });

            }

        } catch (error) {
            // To handle permission related exception
            console.log("++++", error);
        }
    }
}

export const downloadFile = (item, result) => {
   
        const fileName = AppUtil.GetImageNameFromUrl(item.uri); //item.filename.split('/')
        const localFile = `${RNFS.DocumentDirectoryPath}/${fileName}`;

        const options = {
            fromUrl: (item.uri).replace(/ /g, '%20'),
            toFile: localFile
        };
        console.log('options', options);

        RNFS.downloadFile(options).promise.then((res) => {
                console.log('hello res1', res)
                FileViewer.open(localFile)
                result()
            }).then(() => {
                console.log('hello res2', "res")
                result()
            }).catch(error => {
                console.log('catch error', error);
                showMessage('Sorry, unable to find compatible App on your device to view this content')
                result()
            }).catch(error => {
                console.log('hello error')
                result()

            });
    // }

};

export const getFileExtention = fileUrl => {
    // To get the file extension
    return /[.]/.exec(fileUrl) ?
        /[^.]+$/.exec(fileUrl) : undefined;
};

