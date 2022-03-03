import { StyleSheet } from "react-native";
import { GetAppColor } from "../../utils/Colors";
import FONTS from "../../utils/Fonts";

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
        letterSpacing:10,
        fontFamily:FONTS.trajanProRegular
    },
    innovationDetails: {
        marginHorizontal: 15,
        flexDirection:'column'
    },
    innovationDetailsText:{
        fontSize:20,
        color:GetAppColor.innovationGrey,
        fontFamily:FONTS.trajanProRegular
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