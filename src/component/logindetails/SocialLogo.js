import React from 'react'
import { View, Text,TouchableOpacity} from 'react-native'
import GoogleIcon from '../../assets/svg/loginLogo/GoogleIcon'
import FacebookIcon from '../../assets/svg/loginLogo/FacebookIcon'
import TwitterIcon from '../../assets/svg/loginLogo/TwitterIcon'
import LinkedInIcon from '../../assets/svg/loginLogo/LinkedInIcon'
import NewsIcon from '../../assets/svg/loginLogo/NewsIcon'
import { AppUtil } from '../../utils/AppUtil'
import IconStyle from './SocialLogoStyle'
import { Label } from '../../utils/StringUtil'

const SocialLogo = () => {
    return (
        <View style={IconStyle.iconsArea}>
            <Text style={IconStyle.textTitle}>{Label.SocialLine}</Text>
            <View style={IconStyle.logoContainer}>
                <TouchableOpacity style={IconStyle.socialIconn}>
                    <GoogleIcon width={AppUtil.getWP(11)} height={AppUtil.getWP(11)} />
                </TouchableOpacity>
                <TouchableOpacity style={IconStyle.socialIconn}>
                    <FacebookIcon width={AppUtil.getWP(11)} height={AppUtil.getWP(11)} />
                </TouchableOpacity>
                <TouchableOpacity style={IconStyle.socialIconn}>
                    <TwitterIcon width={AppUtil.getWP(11)} height={AppUtil.getWP(11)} />
                </TouchableOpacity>
                <TouchableOpacity style={IconStyle.socialIconn}>
                    <LinkedInIcon width={AppUtil.getWP(11)} height={AppUtil.getWP(11)} />
                </TouchableOpacity>
                <TouchableOpacity style={IconStyle.socialIconn}>
                    <NewsIcon width={AppUtil.getWP(11)} height={AppUtil.getWP(11)} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SocialLogo