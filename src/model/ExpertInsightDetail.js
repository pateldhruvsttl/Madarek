import { Label } from "../utils/StringUtil";

export default class ExpertInsightDetail {
	
    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.id = obj?.id
        this.type = obj?.type || ""
        this.insightBy = obj?.insight_by || ""
        this.firstName = obj?.first_name || Label.NoFirstName
        this.spotlightCreateDate = obj?.spotlight_created || Label.DefaultDate
        this.lastName =  obj?.last_name || Label.NoLastName
        this.profilePhoto =  obj?.image_upload_files || "https://i.imgur.com/5tj6S7Ol.jpg"
        this.title =  obj?.heading_title || Label.NoTitle
        this.jobTitle =  obj?.job_title || Label.NoTitle
        this.metaKeywords =  obj?.meta_keywords || Label.NoOrganizationName
        this.totalView =  obj?.totalViews || Label.DefaultNumber
        this.totalFavoriteIdea =  obj?.toatal_favorite_idea || Label.DefaultNumber
        this.totalComment =  obj?.toatal_idea_comment || Label.DefaultNumber
        this.totalLike =  obj?.toatal_liked_idea || Label.DefaultNumber
        this.like =  obj?.my_total_liked_id > 0 ? true : false
        this.insightTitle =  obj?.title || "No title"
        this.insightDescription =  obj?.insight_description || Label.NoDescription
        this.sectorName =  obj?.sector_name || Label.NoSector
        this.categoryName =  obj?.category_name || Label.NoCategory
        this.contestTitle =  obj?.contest_title || Label.NoTitle
        this.contestDescription =  obj?.contest_description || Label.NoDescription
        this.ideaCreatedDate =  obj?.idea_created_date ||Label.DefaultDate
        this.publishBy =  obj?.publish_by || Label.NoName
        this.ideaTitle =  obj?.idea_title || Label.NoTitle
        this.ideaDescription =  obj?.idea_description || Label.NoDescription
        this.ideaCoverImage =  obj?.idea_cover_image || "https://i.imgur.com/5tj6S7Ol.jpg"
             
        
    }
}