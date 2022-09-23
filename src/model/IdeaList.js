import { AppConfig } from "../manager/AppConfig";
import { Label } from "../utils/StringUtil";

export default class IdeaList {

    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.ideaTitle = obj?.idea_title ? obj?.idea_title :Label.NoTitle;
        this.categoryName = obj?.category_name ? obj?.category_name : Label.NoCategory
        this.sub_category_name = obj?.sub_category_name ? obj?.sub_category_name : Label.NoSubCategory
        
        this.createDate = obj?.created_at ? obj?.created_at :Label.DefaultDate
        this.date = obj?.date || Label.DefaultDate
        this.sectorName = obj?.sector_name ? obj?.sector_name : Label.NoSector

        this.id = obj?.id
        this.firstName = obj?.first_name ? obj?.first_name : Label.NoFirstName
        this.lastName = obj?.last_name ? obj?.last_name : Label.NoLastName
        this.title = obj?.title ? obj?.title : Label.NoTitle
        this.section = obj?.section || Label.DefaultNumber
        this.ideaDescription = obj?.idea_description ? obj?.idea_description : Label.NoDescription
        
        this.challengesAddressing = obj?.challenges_addressing ? obj?.challenges_addressing : Label.NoDescription
        this.benefitIdea = obj?.benefit_idea ? obj?.benefit_idea : Label.NoDescription
        
        this.ideaImage = obj?.idea_cover_image ? obj?.idea_cover_image : ""
        this.winning = obj?.winning || Label.DefaultNumber
        this.madarekSpecial = obj?.madarek_special || Label.DefaultNumber
        this.favoriteIdea = obj?.toatal_favorite_idea || Label.DefaultNumber
        this.favoriteChallenge = obj?.totalFavoriteContest == null || obj?.totalFavoriteContest == 0 ? false : true;
        this.topRate = obj?.top_rated != null && obj?.top_rated != 0 ? true : false;
       
        this.trophy = obj?.isTrophy != null && obj?.isTrophy != 0 ? true : false;
        this.favorite = obj?.isFavourite == null || obj?.isFavourite == 0 ? false : true;
        this.insight = obj?.isInsight != null && obj?.isInsight != 0 ? true : false;
        this.starred = obj?.isStarred != null && obj?.isStarred != 0 ? true : false;
        this.like = obj?.isLiked > 0 ? true : false;
        this.totalView = obj?.totalViews || Label.DefaultNumber
        this.totalLike = obj?.totalLikes || Label.DefaultNumber
        this.totalComment = obj?.totalComments || Label.DefaultNumber

        this.team = obj?.team;
        this.resources = obj?.resources;
        this.ideaVideo = obj?.idea_upload_videos || ""
        this.additionalImages = obj?.additional_images || ""
        this.userPhoto = obj?.user_photo || "https://i.imgur.com/5tj6S7Ol.jpg"
        this.expertInsightData = obj?.expert_insight_data || []


    }
}
