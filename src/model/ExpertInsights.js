export default class ExpertInsight {
	
    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.id = obj?.expert_id
        this.firstName = obj?.first_name || "No first Name"
        this.date = obj?.date || "25 Jan 22"
        this.time = obj?.time || "57 min read"
        this.lastName =  obj?.last_name || "No last Name"
        this.profilePhoto =  obj?.user_photo || "https://i.imgur.com/5tj6S7Ol.jpg"
        this.ideaTitle =  obj?.idea_title || "No Title"
        this.jobTitle =  obj?.job_title || "No job Title"
        this.organization_name =  obj?.organization_name || "No organization Name"
        this.totalViews =  obj?.totalViews || "0"
        this.totalComments =  obj?.totalComments || "0"
        this.totalLikes =  obj?.totalLikes || "0"
        this.isLiked =  obj?.isLiked || "0"
        this.madarek_special =  obj?.madarek_special || "No madarek Special"
        this.title =  obj?.title || "No title"
        this.ideaDescription =  obj?.idea_description || "No Description"
        this.message =  obj?.message || "No message"
        this.categoryInfo =  obj?.category_info || "No information"
        this.categoryId =  obj?.category_id 
        this.categoryName = obj.category_name || "No Category"
        
    }
}