import { Text, View, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { AppUtil } from '../../utils/AppUtil'
import { Label } from '../../utils/StringUtil'
import styles from './UserProfileListStyle'

const UserProfileList = (props) => {

    const renderItem = ({ item }) => (

        <ScrollView horizontal={true}>
            <View style={styles.profileDetails}>
            <Image
                style={styles.imgStyle}
                horizontal
                resizeMode='cover'
                source={{ uri: item.url }}
            />
            <Text style={styles.personName}>{item.name}</Text>
            </View>
        </ScrollView>

    );

    return (
        <View style={styles.profileContainer}>
            <Text style={[styles.heading, { paddingVertical: AppUtil.getHP(3) }]}>{Label.Team}</Text>
            {/* <Image source={{ uri: item.url }} /> */}
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={props.profileData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default UserProfileList






