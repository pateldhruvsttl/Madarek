import { View, Text } from 'react-native'
import React,{useState,useRef} from 'react'
import WebView from 'react-native-webview'
import { Loger } from '../../utils/Loger'

export default function WebViewComp(props) {

    const [webViewHeight, setWebViewHeight] = useState()
    const ref = useRef()

    const onWebViewMessage = (event) => {
        setWebViewHeight(Number(event.nativeEvent.data - event.nativeEvent.data / 4.5))
    }
    return (
        <WebView
            androidLayerType="software"
            ref={ref}
            useWebKit={true}
            source={{ html: props.data }}
            scrollEnabled={false}
            originWhitelist={['*']}
            style={{ height: webViewHeight ,backgroundColor:props.backgroundColor}}
            javaScriptEnabled={true}
            onMessage={onWebViewMessage}
            injectedJavaScript={`
                  const meta = document.createElement('meta'); 
                  meta.setAttribute('content', 'width=device-width, initial-scale=0.8, maximum-scale=0.8, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta);
                  setTimeout(function() { 
                    window.ReactNativeWebView.postMessage(document.body.scrollHeight)
                  }, 500);true`}
        />
    )
}