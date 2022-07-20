export default class ExpertInsightDetail {
	
    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.id = obj?.expert_id
        this.type = obj?.type || ""
        this.insightBy = obj?.insight_by || ""
        this.firstName = obj?.first_name || "No first Name"
        this.spotlightCreateDate = obj?.spotlight_created || "25 Jan 22"
        this.lastName =  obj?.last_name || "No last Name"
        this.profilePhoto =  obj?.image_upload_files || "https://i.imgur.com/5tj6S7Ol.jpg"
        this.headingTitle =  obj?.heading_title || "No Title"
        this.jobTitle =  obj?.job_title || "No job Title"
        this.metaKeywords =  obj?.meta_keywords || "No organization Name"
        this.totalViews =  obj?.totalViews || "0"
        this.totalFavoriteIdea =  obj?.toatal_favorite_idea || "0"
        this.totalComments =  obj?.toatal_idea_comment || "0"
        this.totalLikes =  obj?.toatal_liked_idea || "0"
        this.title =  obj?.title || "No title"
        this.insightDescription =  obj?.insight_description || "No Description"
        this.sectorName =  obj?.sector_name || "No sector"
        this.categoryName =  obj?.category_name || "No Category"
        this.contestTitle =  obj?.contest_title || "No contest Title"
        this.contestDescription =  obj?.contest_description || "No contest Description"
        this.ideaCreatedDate =  obj?.idea_created_date || "25 jun 22"
        this.publishBy =  obj?.publish_by || "no name"
             
        
    }
}