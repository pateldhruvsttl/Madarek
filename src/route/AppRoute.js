import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MyDrawerScreen from '../screen/drawer/MyDrawer';
import SplashScreen from '../screen/splashscreen/SplashScreen';
import LoginScreen from '../screen/loginscreen/LoginScreen';
import Signup from '../screen/signup/Signup';
import SignUpVerify from '../screen/signup/SignUpVerify';
import SmeDashboardScreen from '../screen/smedashboard/SmeDashboardScreen';
import HomeScreen from '../screen/homescreen/HomeScreen';
import Category from '../screen/category/Category';
import IdeasListScreen from '../screen/ideasList/IdeasListScreen';
import IdeaDetails from '../screen/idea/IdeaDetails';
import ExpertScreen from '../screen/expertscreen/ExpertScreen';
import ExpertDetailsScreen from '../screen/expertscreen/ExpertDetailsScreen';
import ExpertDirectoryScreen from '../screen/expertscreen/ExpertDirectoryScreen';
import SubmitIdeaScreen from '../screen/submitidea/SubmitIdeaScreen';
// import UserCategory from '../screen/category/UserCategory';
import UserCategory from '../screen/category/UserCategory';
import UserDashboardScreen from '../screen/userdashboard/UserDashboardScreen';
import ChallengesListScreen from '../screen/challengesList/ChallengesListScreen';
import ChallengeDetail from '../screen/challengedetails/ChallengeDetail';
import PartnerScreen from '../screen/partnerscreen/PartnerScreen';
import Setting from '../screen/setting/Setting';
import MyAccount from '../screen/myaccount/MyAccount';
// import UserProfileView from '../screen/myaccount/UserProfileView';
// import EditUserProfileView from '../screen/myaccount/EditUserProfileView';
import Message from '../screen/message/Message';
import NotificationsScreen from '../screen/notifications/NotificationsScreen';
import BecomeAnExpert from '../screen/expertscreen/BecomeAnExpert';
import SearchLabel from '../screen/searchlabel/SearchLabel';
import VideosPlayer from '../screen/videoplayer/VideosPlayer';
import UserProfileView from '../screen/userProfile/UserProfileView';
import EditUserProfile from '../screen/userEditProfile/EditUserProfile';
import ExpertInsightScreen from '../screen/expertinsight/ExpertInsightScreen';
import ExpertInsightDetail from '../screen/expertInsightDetail/ExpertInsightDetail';
import MySubmittedIdeas from '../screen/ideasList/MySubmittedIdeas';
import CategoryList from '../screen/categoryList/CategoryList';
import LiveChat from '../screen/livechat/LiveChat';
import MyIdeaEdit from '../screen//myIdeaEdit/MyIdeaEdit';
import NotificationSetting from '../screen/notifications/NotificationSetting';
import ExpertInsightDetailWithComment from '../screen/expertInsightDetailWithComment/ExpertInsightDetailWithComment';
import IdeasFilter from '../component/filter/IdeasFilter';
import ChangePasswordScreen from '../screen/changePassword/ChangePasswordScreen'
import AllRequestStatus from '../component/dashboard/AllRequestStatus';
import CommentScreen from '../component/comment/CommentScreen';
import SpotlightDetail from '../screen/spotlightdetail/SpotlightDetail';
import SpotlightListScreen from '../screen/spotlightlist/SpotlightListScreen';
import ExpertInsightTypeDetail from '../screen/expertInsightDetailWithComment/ExpertInsightTypeDetail';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function SplashRoot() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }} >
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
        </Stack.Navigator>
    );
}

function LoginRoot() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}  >
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="SignUpVerify" component={SignUpVerify} />
        </Stack.Navigator>
    )
}
function HomeRoot() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}  >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />

            <Stack.Screen name="IdeasListScreen" component={IdeasListScreen} />
            <Stack.Screen name="IdeaDetails" component={IdeaDetails} />
            <Stack.Screen name="SubmitIdeaScreen" component={SubmitIdeaScreen} />

            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="UserCategory" component={UserCategory} />
            <Stack.Screen name="SearchLabel" component={SearchLabel} />

            <Stack.Screen name="ExpertDirectoryScreen" component={ExpertDirectoryScreen} />
            <Stack.Screen name="ExpertDetailsScreen" component={ExpertDetailsScreen} />
            <Stack.Screen name="ExpertInsightScreen" component={ExpertInsightScreen} />
            <Stack.Screen name="BecomeAnExpert" component={BecomeAnExpert} />

            <Stack.Screen name="UserDashboardScreen" component={UserDashboardScreen} />
            <Stack.Screen name="SmeDashboardScreen" component={SmeDashboardScreen} />
            <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
            <Stack.Screen name="ChallengesListScreen" component={ChallengesListScreen} />
            <Stack.Screen name="ChallengeDetail" component={ChallengeDetail} />

            <Stack.Screen name="Setting" component={Setting} />
            <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
            <Stack.Screen name="SignupComman" component={Signup} />

            <Stack.Screen name="PartnerScreen" component={PartnerScreen} />
            <Stack.Screen name="MyAccount" component={MyAccount} />
            <Stack.Screen name="UserProfileView" component={UserProfileView} />
            <Stack.Screen name="EditUserProfileView" component={EditUserProfile} />
            <Stack.Screen name="Message" component={Message} />
            <Stack.Screen name="VideoPlayer" component={VideosPlayer} />
            <Stack.Screen name="ExpertInsightDetail" component={ExpertInsightDetail} />
            <Stack.Screen name="MySubmittedIdeas" component={MySubmittedIdeas} />

            <Stack.Screen name="CategoryList" component={CategoryList} />

            <Stack.Screen name="LiveChat" component={LiveChat} />
            <Stack.Screen name="MyIdeaEdit" component={MyIdeaEdit} />
            <Stack.Screen name="NotificationSetting" component={NotificationSetting} />
            <Stack.Screen name="ExpertInsightDetailWithComment" component={ExpertInsightDetailWithComment} />
            <Stack.Screen name="IdeasFilter" component={IdeasFilter} />
            <Stack.Screen name="AllRequestStatus" component={AllRequestStatus} />
            <Stack.Screen name="CommentScreen" component={CommentScreen} />
            <Stack.Screen name="SpotlightDetail" component={SpotlightDetail} />
            <Stack.Screen name="SpotlightListScreen" component={SpotlightListScreen} />
            <Stack.Screen name="ExpertInsightTypeDetail" component={ExpertInsightTypeDetail} />


            {/* // unUsed Screen  */}
            <Stack.Screen name="ExpertScreen" component={ExpertScreen} />
        </Stack.Navigator>
    )
}

function ScreenStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, }} initialRouteName={"SplashRoot"}>

            <Stack.Screen name="SplashRoot" component={SplashRoot} />
            <Stack.Screen name="LoginRoot" component={LoginRoot} />
            <Stack.Screen name="HomeRoot" component={HomeRoot} />


        </Stack.Navigator>
    )
}


function MyDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={props => <MyDrawerScreen {...props} />}
            drawerPosition='left'
            screenOptions={{ headerShown: false, drawerStyle: { width: '85%', }, }}
            useLegacyImplementation={true}>
            <Drawer.Screen name="ScreenStack" component={ScreenStack} options={{ swipeEnabled: false, }} />
        </Drawer.Navigator>
    );
}

const AppRoute = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, }} initialRouteName={"Drawer"}>
                <Stack.Screen name="Drawer" component={MyDrawer} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}
export default AppRoute;

