import { Label } from "../utils/StringUtil";

export default class ExpertInsightList {
	
    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.id = obj?.expert_id 
        this.type = obj?.type || ""
        this.firstName = obj?.first_name || Label.NoFirstName
        this.date = obj?.created_date || Label.DefaultDate
        this.lastName =  obj?.last_name || Label.NoLastName
        this.profilePhoto =  obj?.image_upload_files || "https://i.imgur.com/5tj6S7Ol.jpg"
        this.jobTitle =  obj?.job_title || Label.NoTitle
        this.metaKeywords =  obj?.meta_keywords || Label.NoOrganizationName
        this.totalViews =  obj?.totalViews || Label.DefaultNumber
        this.totalFavoriteIdea =  obj?.toatal_favorite_idea || Label.DefaultNumber
        this.totalComments =  obj?.toatal_idea_comment || Label.DefaultNumber
        this.totalLikes =  obj?.toatal_liked_idea || Label.DefaultNumber
        this.title =  obj?.title || Label.NoTitle
        this.description =  obj?.general_description || Label.NoDescription
             
        
    }
}