export default class IdeaList {

    constructor(obj = null) {

        if (obj == null) {
            return;
        }
        
        this.ideaTitle = obj?.contest_title || "No title"
        this.categoryName = obj?.contest_description || "No Description"
        this.title = obj?.contest_title || "No title" 
        this.id = obj?.id
        this.firstName = obj?.first_name || "No name"
        this.ideaImage = obj?.contest_image_upload_files || ""
        this.winning = obj?.winning || "0"
        this.madarekSpecial = obj?.madarek_special || "0"
        this.favoriteIdea = obj?.toatal_favorite_idea || "0"
        this.topRate = obj?.top_rated || "0"
        
        this.trophy = obj?.isTrophy == null && obj?.isTrophy != 0 ? true : false;
        this.favorite = obj?.isFavourite == null && obj?.isFavourite != 0 ? true : false;
        this.insight = obj?.isInsight == null && obj?.isInsight != 0 ? true : false;
        
        this.like = obj?.isLiked > 0 ? true : false;
        this.totalView = obj?.totalViews > 0 ? true : false;
        this.totalLike = obj?.totalLikes > 0 ? true : false;
        this.totalComment = obj?.totalComments > 0 ? true : false;

    }
}
