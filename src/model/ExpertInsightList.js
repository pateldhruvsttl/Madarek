export default class ExpertInsightList {
	
    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.id = obj?.expert_id || "0"
        this.type = obj?.type || ""
        this.firstName = obj?.first_name || "No first Name"
        this.date = obj?.created_date || "25 Jan 22"
        this.lastName =  obj?.last_name || "No last Name"
        this.profilePhoto =  obj?.image_upload_files || "https://i.imgur.com/5tj6S7Ol.jpg"
        this.jobTitle =  obj?.job_title || "No job Title"
        this.metaKeywords =  obj?.meta_keywords || "No organization Name"
        this.totalViews =  obj?.totalViews || "0"
        this.totalFavoriteIdea =  obj?.toatal_favorite_idea || "0"
        this.totalComments =  obj?.toatal_idea_comment || "0"
        this.totalLikes =  obj?.toatal_liked_idea || "0"
        this.title =  obj?.title || "No title"
        this.description =  obj?.general_description || "No Description"
             
        
    }
}