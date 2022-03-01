import { StyleSheet } from "react-native";
import { GetAppColor } from "../../utils/Colors";

const STYLES = StyleSheet.create({
    backgroundImage:{
        justifyContent: 'center',
        flex: 1 
    },
    madarekSplace: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 35
    },
    logoDetails: {
        flexDirection: 'row',
        marginBottom:12,
        
    },
    logoText:{
        fontSize:35,
        letterSpacing:10
    },
    innovationDetails: {
        marginHorizontal: 15,
    },
    innovationDetailsText:{
        fontSize:20,
        color:GetAppColor.innovationGrey
    },
    splaceLight: {
        marginTop: 30
    },
    splaceArea: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }

})
export default STYLES;