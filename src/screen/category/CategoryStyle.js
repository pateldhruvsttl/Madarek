import { StyleSheet } from 'react-native'
import { GetAppColor } from '../../utils/Colors';

const CategoryStyle = StyleSheet.create({
    headerView: {
        width: '100%',
        height: 60,
        backgroundColor: GetAppColor.headerYellow,
        justifyContent: 'center',
    },
    headerText: {
        color: GetAppColor.white,
        fontWeight: '900',
        fontSize: 17,
        alignSelf: 'center'
    },
    skipBtn: {
        position: 'absolute',
        end: 10,
        alignSelf: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: GetAppColor.skipBorderColor,
        height: 25,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    skipText: {
        color: GetAppColor.white,
        fontSize: 15,
        fontWeight: '300',
    },
    searchView: {
        paddingHorizontal: 25,
        paddingVertical: 15,
        marginTop: 15,
        marginBottom: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },

    scroll: {
        width: '100%',
        height: '69%',
        backgroundColor: GetAppColor.backGround
    },

    scrollSubView: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    categoryButton: {
        borderRadius: 25,
        backgroundColor: GetAppColor.white,
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        margin: 5
    },

    continueButton: {
        width: '90.74%',
        height: '4.35%',
        backgroundColor: GetAppColor.headerYellow,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 5
    },

    input: {
        width: '70%',
        fontSize: 20,
        paddingBottom: 15,
        borderBottomColor: GetAppColor.borderGray,
        borderBottomWidth: 1
    },

});

export default CategoryStyle;