import { AppConfig } from "../manager/AppConfig";

export default class IdeaList {

    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.ideaTitle = obj?.idea_title ? obj?.idea_title : "No Title";
        this.categoryName = obj?.category_name ? obj?.category_name : "No Category"
        this.createDate = obj?.created_at ? obj?.created_at : "No Date"
        this.date = obj?.date || "15 Mar 22 - 29 Mar 22"
        this.sectorName = obj?.sector_name ? obj?.sector_name : "No Sector"

        this.id = obj?.id
        this.firstName = obj?.first_name ? obj?.first_name : "No First Name"
        this.lastName = obj?.last_name ? obj?.last_name : "No Last Name"
        this.title = obj?.title ? obj?.title : "No Title"
        this.section = obj?.section || "0"
        this.ideaDescription = obj?.idea_description ? obj?.idea_description : "No Description"
        this.ideaImage = obj?.idea_cover_image ? obj?.idea_cover_image : ""
        this.winning = obj?.winning || "0"
        this.madarekSpecial = obj?.madarek_special || "0"
        this.favoriteIdea = obj?.toatal_favorite_idea || "0"
        this.topRate = obj?.top_rated || "0"

        this.trophy = obj?.isTrophy == null && obj?.isTrophy != 0 ? true : false;
        this.favorite = obj?.isFavourite == null && obj?.isFavourite != 0 ? true : false;
        this.insight = obj?.isInsight == null && obj?.isInsight != 0 ? true : false;

        this.like = obj?.isLiked > 0 ? true : false;
        this.totalView = obj?.totalViews || "0"
        this.totalLike = obj?.totalLikes || "0"
        this.totalComment = obj?.totalComments || "0"

    }
}
