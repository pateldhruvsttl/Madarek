import React, { memo } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { onShare } from "../share/ShareContent";
import { AppUtil } from "../../utils/AppUtil";
import { Label } from "../../utils/StringUtil";
import IcnClander from "../../assets/svg/IcnClander"
import IcnAvtarBg from "../../assets/svg/IcnAvtarBg"
import IcnMenuDote from "../../assets/svg/IcnMenuDote"
import IcnShareIcon from "../../assets/svg/IcnShareIcon"
import { GetAppColor } from "../../utils/Colors";
import ImageLoad from "react-native-image-placeholder";
import { AppConfig } from "../../manager/AppConfig";
import { MenuTrigger, Menu, MenuOption, MenuOptions } from "react-native-popup-menu";
import STYLE from './SpotlightListImageStyle'
import moment from "moment";
import MenuFile from "../menu/MenuFile";

const SpotlightListImage = (props) => {

    const onGetPaginations = () => {

        if (props?.data?.length > (AppConfig.pageLimit - 1) && props?.paginations)
            props?.paginations()
    }

    const renderItem = ({ item }) => (

        <TouchableOpacity onPress={() => props.navigateDetail(item.parentId)} style={STYLE.renderMainView}>

            <View style={STYLE.rightItems}>

                <View style={STYLE.imgView}>
                    <ImageLoad style={STYLE.img} source={{ uri: item.ideaImage }} isShowActivity={false} />
                </View>
            </View>

            <View style={STYLE.leftItems}>

                <Text numberOfLines={1} style={STYLE.SubTitle}>{item.ideaTitle}</Text>
                <Text numberOfLines={2} style={STYLE.title}>{item.categoryName}</Text>
                <View style={STYLE.calView}>
                    <IcnClander style={STYLE.callIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                    <Text style={STYLE.title}>{moment(item.createDate).format("YYYY-MM-DD")}</Text>
                    <IcnAvtarBg style={STYLE.callLeftIcn} height={AppUtil.getHP(1.5)} width={AppUtil.getHP(1.5)} />
                    <Text style={STYLE.title}>{item.name}</Text>
                </View>

                <View style={[STYLE.secondCalView]}>
                    <View style={STYLE.moreView}>
                        <MenuFile onMessage={`spotlights/${item.id}`} />
                    </View>
                </View>
            </View>

        </TouchableOpacity>
    );

    return (
        <View style={STYLE.MainView}>
            <FlatList
                data={props.data}
                scrollEnabled={props?.scrollEnabled ? true : false}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                onEndReached={onGetPaginations}
            />
        </View>
    );
}
export default memo(SpotlightListImage);





