export default class UserProfile {

    constructor(obj = null) {
        if (obj == null) {
            return;
        }
        this.id = obj?.id || "0"
        this.firstName =  obj?.first_name || "No firstName"
        this.lastName =  obj?.last_name || "No lastName"
        this.organization =  obj?.organization_name || "No Organization Name"
        this.jobTitle =  obj?.job_title || "No JobTitle"
        this.email =  obj?.email || "No Email"
        this.countryName =  obj?.country_name || "No countryName"
        this.city =  obj?.city || "No city"
        this.number =  obj?.mobile_phone || "0"
        this.userPhoto =  obj?.user_photo || "https://i.imgur.com/5tj6S7Ol.jpg"
        this.skills =  obj?.skills || "No Skill"
        this.about =  obj?.about || "No about",
        this.biography =  obj?.biography || "-"
        this.expertiseBrief =  obj?.expertise_brief || "No Description"
        this.facebookLink =  obj?.facebook_link || "-"
        this.linkdinLink =  obj?.linkdin_link || "-"
        this.twitterLink =  obj?.twitter_link || "-"
        this.SMEUserFees =  obj?.SME_User_Fees || "0"
        this.feesType =  obj?.Fees_Type || "No Type"
        this.userType =  obj?.user_type || "No Type"
        this.categoryInfo =  obj?.category_info || ['One','Two']
        this.categoryId =  obj?.category_id || "0"
        this.categoryName =  obj?.category_name || "No Category Name"
        
        

    }
}