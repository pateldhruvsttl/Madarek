import { Label } from "../utils/StringUtil";

export default class ExpertInsight {
	
    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.id = obj?.expert_id
        
        this.profilePhoto =  obj?.image_upload_files || ""
        this.firstName = obj?.first_name ? obj?.first_name :""
        this.jobTitle =  obj?.job_title ? obj?.job_title : ""
        this.ideaTitle =  obj?.idea_title ? obj?.idea_title : obj?.title ? obj?.title : "";
        this.ideaDescription =  obj?.idea_description ? obj?.idea_description : obj.general_description ? obj.general_description : ""

        this.date = obj?.date || Label.DefaultDate
        this.time = obj?.time || Label.DefaultTime
        this.type = obj?.type || ""
        this.lastName =  obj?.last_name ? obj?.last_name : Label.NoLastName
        this.organization_name =  obj?.organization_name ? obj?.organization_name : Label.NoOrganizationName
        this.totalViews =  obj?.totalViews || Label.DefaultNumber
        this.totalComments =  obj?.toatal_idea_comment || Label.DefaultNumber
        this.totalLike =  obj?.toatal_liked_idea || Label.DefaultNumber
        this.isLiked =  obj?.isLiked || Label.DefaultNumber
        this.madarek_special =  obj?.madarek_special ? obj?.madarek_special : Label.NoMadarekSpecial
        this.title =  obj?.title ? obj?.title : Label.NoTitle
        this.message =  obj?.message ? obj?.message : Label.NoMessage
        this.categoryInfo =  obj?.category_info ? obj?.category_info : Label.NoInformation
        this.categoryId =  obj?.category_id 
        this.categoryName = obj.category_name ? obj.category_name : Label.NoCategory
        this.like = obj.my_total_liked_id  > 0 ? true : false;
        
    }
}