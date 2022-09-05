import React, { memo, useState } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { useSelector } from 'react-redux'
import styles from "./UserDetailsStyle";


const UserDetails = (props) => {
    const { themeColor } = useSelector((state) => state)

    const DetailRender = ({ item, screenName }) => {
        return (
            <TouchableOpacity style={[styles.btnView, { borderColor: themeColor.buttonColor }]}>
                <Text style={[styles.txtTitle, { color: themeColor.buttonColor }]}>{item.count}</Text>
                <Text numberOfLines={2} style={styles.txtBtn}>{item.title}</Text>
            </TouchableOpacity>
        )
    }
    const renderItem = ({ item }) => {
        // switch (item.title) {

        //     case "User Need SME Idea":
        //         return <DetailRender item={item} />
        //         break;

        //     case "User Join Request":
        //         return <DetailRender item={item} />
        //         break;

        //     case "Contest Panel Request":
        //         return <DetailRender item={item} />
        //         break;

        //     case "Expert Insights":
        //         return <DetailRender item={item} />
        //         break;

        //     case "My Favourite Ideas":
        //         return <DetailRender item={item} />
        //         break;

        //     case "My Submitted Ideas":
        //         return <DetailRender item={item} />
        //         break;

        //     case "Favourite Challenges":
        //         return <DetailRender item={item} />
        //         break;

        //     case "Challenge Participation":
        //         return <DetailRender item={item} />
        //         break;

        //     case "My Favourite Expert":
        //         return <DetailRender item={item} />
        //         break;

        //     case "Experts contacted by me":
        //         return <DetailRender item={item} />
        //         break;

        //     case "Expert engagement inquiry":
        //         return <DetailRender item={item} />
        //         break;

        //     case "My Grievance":
        //         return <DetailRender item={item} />
        //         break;

        //     default:
        //      null;
        // }
        return (
            <TouchableOpacity style={[styles.btnView, { borderColor: themeColor.buttonColor }]}>
                <Text style={[styles.txtTitle, { color: themeColor.buttonColor }]}>{item.count}</Text>
                <Text numberOfLines={2} style={styles.txtBtn}>{item.title}</Text>
            </TouchableOpacity>
        )

    }

    return (
        <View style={styles.MainView}>
            <FlatList
                data={props.data}
                contentContainerStyle={styles.lstView}
                numColumns={'3'}
                scrollEnabled={false}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}
export default memo(UserDetails);






