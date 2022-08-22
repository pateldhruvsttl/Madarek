import { Label } from "../utils/StringUtil";

export default class UserProfile {

    constructor(obj = null) {
        if (obj == null) {
            return;
        }
        this.id = obj?.id
        this.firstName =  obj?.first_name || Label.NoFirstName
        this.lastName =  obj?.last_name || Label.NoLastName
        this.organization =  obj?.organization_name || Label.NoOrganizationName
        this.jobTitle =  obj?.job_title || Label.NoTitle
        this.email =  obj?.email || Label.NoEmail
        this.countryName =  obj?.country_name || Label.NoName
        this.city =  obj?.city || Label.NoName
        this.number =  obj?.mobile_phone || Label.DefaultNumber
        this.userPhoto =  obj?.user_photo || "https://i.imgur.com/5tj6S7Ol.jpg"
        this.skills =  obj?.skills || Label.NoSkill
        this.about =  obj?.about || Label.NoAbout,
        this.biography =  obj?.biography || "-"
        this.expertiseBrief =  obj?.expertise_brief || Label.NoDescription
        this.facebookLink =  obj?.facebook_link || "-"
        this.linkdinLink =  obj?.linkdin_link || "-"
        this.twitterLink =  obj?.twitter_link || "-"
        this.SMEUserFees =  obj?.SME_User_Fees || Label.DefaultNumber
        this.feesType =  obj?.Fees_Type || Label.NoType
        this.userType =  obj?.user_type || Label.NoType
        this.categoryInfo =  obj?.category_info || [Label.NoSkill,Label.NoSkill]
        this.categoryId =  obj?.category_id || Label.DefaultNumber
        this.categoryName =  obj?.category_name || Label.NoCategoryName
        
        

    }
}