export default class ExpertInsight {
	
    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.id = obj?.expert_id || "No expert Id"
        this.firstName = obj?.first_name || "No first Name"
        this.lastName =  obj?.last_name || "No last Name"
        this.profilePhoto =  obj?.user_photo || "No user Photo"
        this.ideaTitle =  obj?.idea_title || "No idea Title"
        this.jobTitle =  obj?.job_title || "No job Title"
        this.organization_name =  obj?.organization_name || "No organization Name"
        this.totalViews =  obj?.totalViews || "No Total Views"
        this.totalComments =  obj?.totalComments || "No total Comments"
        this.totalLikes =  obj?.totalLikes || "No total Likes"
        this.isLiked =  obj?.isLiked || "No Like"
        this.madarek_special =  obj?.madarek_special || "No madarek Special"
        this.title =  obj?.title || "No title"
        this.ideaDescription =  obj?.idea_description || "No idea Description"
        this.message =  obj?.message || "No message"
        this.categoryInfo =  obj?.category_info || "No category information"
        this.categoryName = obj.category_name || "no name"
        
    }
}