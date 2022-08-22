import { Label } from "../utils/StringUtil";

export default class ExpertInsight {
	
    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.id = obj?.expert_id
        this.firstName = obj?.first_name ? obj?.first_name :Label.NoFirstName
        this.date = obj?.date || Label.DefaultDate
        this.time = obj?.time || Label.DefaultTime
        this.lastName =  obj?.last_name ? obj?.last_name : Label.NoLastName
        this.profilePhoto =  obj?.user_photo || "https://i.imgur.com/5tj6S7Ol.jpg"
        this.ideaTitle =  obj?.idea_title ? obj?.idea_title : Label.NoTitle
        this.jobTitle =  obj?.job_title ? obj?.job_title : Label.NoTitle
        this.organization_name =  obj?.organization_name ? obj?.organization_name : Label.NoOrganizationName
        this.totalViews =  obj?.totalViews || Label.DefaultNumber
        this.totalComments =  obj?.totalComments || Label.DefaultNumber
        this.totalLikes =  obj?.totalLikes || Label.DefaultNumber
        this.isLiked =  obj?.isLiked || Label.DefaultNumber
        this.madarek_special =  obj?.madarek_special ? obj?.madarek_special : Label.NoMadarekSpecial
        this.title =  obj?.title ? obj?.title : Label.NoTitle
        this.ideaDescription =  obj?.idea_description ? obj?.idea_description : Label.NoDescription
        this.message =  obj?.message ? obj?.message : Label.NoMessage
        this.categoryInfo =  obj?.category_info ? obj?.category_info : Label.NoInformation
        this.categoryId =  obj?.category_id 
        this.categoryName = obj.category_name ? obj.category_name : Label.NoCategory
        
    }
}