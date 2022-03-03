import React, { memo } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { AppUtil } from "../../utils/AppUtil";
import { Label } from "../../utils/StringUtil";
import Style from "./SubIdeasListStyle";
import IcnClander from "../../assets/svg/IcnClander"



const SubIdeasList = (props) => {

    const renderItem = ({ item }) => (
        <View style={Style.renderMainView}>
           
            <View style={Style.rightItems}>
                <Image
                    style={Style.img}
                    resizeMode='cover'
                    source={{ uri: item.url }}
                />
            </View>
            <View style={Style.leftItems}>

                <Text numberOfLines={1} style={Style.title}>{item.title}</Text>
                <Text numberOfLines={2} style={Style.SubTitle}>{item.subTitle}</Text>

                <View style={Style.calView}>
                    <IcnClander style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                    <Text style={Style.title}>{item.date}</Text>
                </View>

                <View style={Style.secondCalView}>

                    <View style={Style.secondInnerCalView}>
                        <IcnClander style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={Style.title}>{item.see}</Text>
                    </View>
                    <View style={Style.secondInnerCalView}>
                        <IcnClander style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={Style.title}>{item.like}</Text>
                    </View>
                    <View style={Style.secondInnerCalView}>
                        <IcnClander style={Style.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                        <Text style={Style.title}>{item.comment}</Text>
                    </View>
                </View>
            </View>
        </View>
    );

    return (
        <View style={Style.MainView}>
            <View style={Style.titleView}>
                {props?.isTitle && <Text style={Style.txtTitle}>{props?.isTitle}</Text>}
                <Text style={Style.txtSeeMore}>{Label.seeMore}</Text>
            </View>

            <FlatList
                data={props.data}
                scrollEnabled={false}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            {
                props?.btn &&
                <TouchableOpacity style={Style.bottomBtn}>
                        <Text style={Style.txtBottomBtn}> {props.btn}</Text>
                </TouchableOpacity>
            }
        </View>
    );
}
export default memo(SubIdeasList);





