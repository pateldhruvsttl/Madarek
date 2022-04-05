import React, { memo } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';
import { useNavigation } from '@react-navigation/native'

import Style from "./CommonHeaderStyle";
import { AppUtil } from "../../utils/AppUtil";

import IcnMenu from '../../assets/svg/IcnMenu'
import IcnMenuHeader from '../../assets/svg/IcnMenuHeader'
import IcnMenuDote from '../../assets/svg/IcnMenuDote'
import IcnAlert from '../../assets/svg/IcnAlert'
import IcnSearch from '../../assets/svg/IcnSearch'
import IcnFilter from '../../assets/svg/IcnFilter'
import IcnMsg from '../../assets/svg/IcnMsg'
import { Label } from "../../utils/StringUtil";
import IcnBack from "../../assets/svg/IcnBack";
import IcnMultiMsg from "../../assets/svg/IcnMultiMsg";
import IcnEdit from "../../assets/svg/IcnEdit";
import IcnShareIcon from "../../assets/svg/IcnShareIcon";
import { GetAppColor } from "../../utils/Colors";
import EditProfile from "../../assets/svg/UserProfile/EditProfile";


const CommonHeader = (props) => {

    const { themeColor } = useSelector((state) => state)
    const navigation = useNavigation();

    const onMenu = () => {
        return (
            <Menu>
                <MenuTrigger>
                    <IcnMenuDote style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                </MenuTrigger>

                <MenuOptions>
                    <MenuOption onSelect={() => alert(`Messag`)} style={Style.menuView}>
                        <IcnMsg stroke={GetAppColor.black} style={Style.headerProfileIcn} height={AppUtil.getHP(2.2)} width={AppUtil.getHP(2.2)} />
                        <Text>{Label.Message}</Text>
                    </MenuOption>
                    <MenuOption onSelect={() => alert(`Search`)} style={Style.menuView}>
                        <IcnSearch fill={GetAppColor.black} style={Style.headerProfileIcn} height={AppUtil.getHP(2.2)} width={AppUtil.getHP(2.2)} />
                        <Text>{Label.Search}</Text>
                    </MenuOption>
                </MenuOptions>
            </Menu>
        )
    }

    switch (props.isType) {

        case 'HomeScreenHeader':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={true} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <TouchableOpacity onPress={() => props.onMenuClick()} style={Style.LeftIcnView}>
                            <IcnMenu style={Style.headerProfile} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                        </TouchableOpacity>

                        <View style={Style.centerIcnView}>
                            <IcnMenuHeader style={Style.headerProfile} height={AppUtil.getHP(20)} width={AppUtil.getHP(20)} />
                        </View>

                        <View style={Style.rightIcnView}>
                            <TouchableOpacity>
                                <IcnAlert style={Style.icnProp} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>
                            {onMenu()}
                        </View>

                    </View>
                </>
            );
            break
        case 'IdeasListScreen':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={true} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <TouchableOpacity style={Style.LeftIcnView} onPress={() => props.onMenuClick()}>
                            <IcnMenu style={Style.headerProfile} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                        </TouchableOpacity>

                        <View style={Style.centerIcnView}>
                            <Text style={Style.txtHeader}>{Label.Ideas}</Text>
                        </View>

                        <View style={Style.rightIcnView}>
                            <TouchableOpacity>
                                <IcnFilter style={Style.icnProp} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <IcnSearch style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </>
            );
            break
        case 'IdeaDetails':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>
                        <TouchableOpacity onPress={() => { navigation.goBack() }} style={Style.LeftIcnView}>
                            <IcnBack style={Style.headerProfile} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                        </TouchableOpacity>

                        <View style={Style.centerIcnView}>
                            <Text style={[Style.expertHeader, { color: themeColor.headerFontColor }]}>{Label.IdeaDetails}</Text>
                        </View>

                        <View style={Style.rightIcnView}>
                            <TouchableOpacity>
                                <IcnMultiMsg style={Style.icnProp} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <IcnEdit style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>
                        </View>

                    </View>
                </>
            )
            break
        case 'ExpertDetailsScreen':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={true} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <TouchableOpacity onPress={() => { navigation.goBack() }} style={Style.LeftIcnView}>
                            <IcnBack style={Style.headerProfile} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                        </TouchableOpacity>

                        <View style={Style.centerIcnView}>
                            <Text style={Style.txtHeader}>{Label.ExpertDetails}</Text>
                        </View>

                        <View style={Style.rightSingleIcnView}>
                            <TouchableOpacity>
                                <IcnShareIcon stroke={GetAppColor.white} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </>
            );
            break
        case 'ExpertDirectoryScreen':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={true} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>
                        <TouchableOpacity style={Style.LeftIcnView} onPress={() => { navigation.goBack() }}>
                            <IcnBack style={Style.headerProfile} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                        </TouchableOpacity>

                        <View style={Style.centerIcnView}>
                            <Text style={[Style.expertHeader, { color: themeColor.headerFontColor }]}>{Label.ExpertsDirectory}</Text>
                        </View>

                        <View style={Style.rightIcnView}>
                            <TouchableOpacity>
                                <IcnFilter style={Style.icnProp} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <IcnSearch style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>
                        </View>

                    </View>
                </>
            )
            break
        case 'ExpertScreen':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={true} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <TouchableOpacity style={Style.LeftIcnView} onPress={() => props.onMenuClick()}>
                            <IcnMenu style={Style.headerProfile} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                        </TouchableOpacity>

                        <View style={Style.centerIcnView}>
                            <Text style={Style.txtHeader}>{Label.Experts}</Text>
                        </View>

                        <View style={Style.rightSingleIcnView}>
                            <TouchableOpacity>
                                <IcnSearch style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </>
            );
            break
        case 'UserDashboardScreen':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={true} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <TouchableOpacity onPress={() => props.onMenuClick()} style={Style.LeftIcnView}>
                            <IcnMenu style={Style.headerProfile} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                        </TouchableOpacity>

                        <View style={Style.centerIcnView}>
                            <Text style={Style.txtHeader}>{Label.UserDashboard}</Text>
                        </View>

                        <View style={Style.rightIcnView}>
                            <TouchableOpacity>
                                <IcnAlert style={Style.icnProp} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>
                            {onMenu()}
                        </View>

                    </View>
                </>
            );
            break

        case 'SmeDashboardScreen':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={true} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <TouchableOpacity onPress={() => props.onMenuClick()} style={Style.LeftIcnView}>
                            <IcnMenu style={Style.headerProfile} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                        </TouchableOpacity>

                        <View style={Style.centerIcnView}>
                            <Text style={Style.txtHeader}>{Label.SmeDashboard}</Text>
                        </View>

                        <View style={Style.rightIcnView}>
                            <TouchableOpacity>
                                <IcnAlert style={Style.icnProp} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>
                            {onMenu()}
                        </View>

                    </View>
                </>
            );
            break
        case 'userCategoryScreen':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={true} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <TouchableOpacity style={Style.LeftIcnView} onPress={() => props.onMenuClick()}>
                            <IcnMenu style={Style.headerProfile} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                        </TouchableOpacity>

                        <View style={Style.centerIcnView}>
                            <Text style={Style.txtHeader}>{Label.Category}</Text>
                        </View>

                        <View style={Style.rightIcnView}>
                            <TouchableOpacity>
                                <IcnFilter style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>
                        </View>
                    </View>

                </>
            );
            break
        case 'ChallengesListing':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor}  />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <TouchableOpacity style={Style.LeftIcnView} onPress={() => props.onMenuClick()}>
                            <IcnMenu style={Style.headerProfile} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                        </TouchableOpacity>

                        <View style={Style.centerIcnView}>
                            <Text style={Style.txtHeader}>{Label.Challenges}</Text>
                        </View>

                        <View style={Style.rightIcnView}>
                            <TouchableOpacity>
                                <IcnFilter style={Style.icnProp} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <IcnSearch style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </>
            );
            break
        case 'ChallengeDetail':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <TouchableOpacity onPress={() => navigation.goBack()} style={Style.LeftIcnView}>
                            <IcnBack style={Style.headerProfile} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                        </TouchableOpacity>

                        <View style={Style.centerIcnView}>
                            <Text style={Style.txtHeader}>{Label.ChallengeDetail}</Text>
                        </View>
                        <View style={Style.icnEmpty} />
                    </View>
                </>
            );
            break
        case 'SubmitIdeaScreen':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={true} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <TouchableOpacity onPress={() => navigation.goBack()} style={Style.LeftIcnView}>
                            <IcnBack style={Style.headerProfile} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                        </TouchableOpacity>

                        <View style={Style.centerIcnView}>
                            <Text style={Style.txtHeader}>{Label.SubmitYourIdeas}</Text>
                        </View>
                        <View style={Style.icnEmpty} />
                    </View>
                </>
            );
            break;
        case 'Partners':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <TouchableOpacity style={Style.LeftIcnView} onPress={() => props.onMenuClick()}>
                            <IcnMenu style={Style.headerProfile} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                        </TouchableOpacity>

                        <View style={Style.centerIcnView}>
                            <Text style={Style.txtHeader}>{Label.Parners}</Text>
                        </View>

                        <View style={Style.rightIcnView}>
                            <TouchableOpacity>
                                <IcnSearch style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>
                        </View>
                    </View>

                </>
            );
            break;
        case 'BecomeExpert':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <TouchableOpacity onPress={() => navigation.goBack()} style={Style.LeftIcnView}>
                            <IcnBack style={Style.headerProfile} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                        </TouchableOpacity>

                        <View style={Style.centerIcnView}>
                            <Text style={Style.txtHeader}>{Label.BecomeAnExpert}</Text>
                        </View>
                        <View style={Style.icnEmpty} />
                    </View>
                </>
            );
            break;

        case 'Setting':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>
                        <TouchableOpacity onPress={() => { navigation.goBack() }} style={Style.LeftIcnView}>
                            <IcnBack style={Style.headerProfile} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                        </TouchableOpacity>

                        <View style={Style.centerIcnView}>
                            <Text style={[Style.expertHeader, { color: themeColor.headerFontColor }]}>{Label.Settings}</Text>
                        </View>

                        {/* <View style={Style.rightIcnView}>
                                    <TouchableOpacity>
                                        <IcnMultiMsg style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <IcnEdit style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                                    </TouchableOpacity>
                                </View> */}

                    </View>
                </>
            )
            break;
        case 'MyAccount':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={true} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <TouchableOpacity onPress={() => props.onMenuClick()} style={Style.LeftIcnView}>
                            <IcnMenu style={Style.headerProfile} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                        </TouchableOpacity>

                        <View style={Style.centerIcnView}>
                            <Text style={Style.txtHeader}>{Label.MyAccount}</Text>
                        </View>

                        <View style={Style.rightIcnView}>
                            <TouchableOpacity>
                                <IcnAlert style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>
                            {/* {onMenu()} */}
                        </View>

                    </View>
                </>
            );
            break;
        case 'UserProfile':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={true} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <TouchableOpacity onPress={() => { navigation.goBack() }} style={Style.LeftIcnView}>
                            <IcnBack style={Style.headerProfile} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                        </TouchableOpacity>

                        <View style={Style.centerIcnView}>
                            <Text style={Style.txtHeader}>{Label.UserProfile}</Text>
                        </View>

                        <View style={Style.rightIcnView}>
                            <TouchableOpacity onPress={() => props.onEditProfile()}>
                                <EditProfile style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>
                            {/* {onMenu()} */}
                        </View>

                    </View>
                </>
            );
            break;
        case 'UserEditProfile':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={true} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <TouchableOpacity onPress={() => { navigation.goBack() }} style={Style.LeftIcnView}>
                            <IcnBack style={Style.headerProfile} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                        </TouchableOpacity>

                        <View style={Style.centerIcnView}>
                            <Text style={Style.txtHeader}>{Label.UserProfile}</Text>
                        </View>

                        {/* <View style={Style.rightIcnView}>
                                                <TouchableOpacity onPress={()=>props.onEditProfile()}>
                                                    <EditProfile style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                                                </TouchableOpacity>
                                            </View> */}

                    </View>
                </>
            );
            break;
        default: null;

    }
}

export default memo(CommonHeader);





