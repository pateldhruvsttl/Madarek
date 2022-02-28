import { StyleSheet } from 'react-native'
import { GetAppColor } from '../../utils/Colors';

const HomeStyle = StyleSheet.create({
    MainView: { width: '100%', height: '100%', justifyContent:'center', alignItems:'center', 
    backgroundColor: GetAppColor.white },
});

export default HomeStyle;