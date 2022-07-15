export default class IdeaList {

    constructor(obj = null) {

        if (obj == null) {
            return;
        }
        
        this.ideaTitle = obj?.general_title ? obj?.general_title : "No Title"
        this.categoryName = obj?.general_description ? obj?.general_description : "No Description"
        this.ideaImage = obj?.photos_image;
        
        
        this.title = obj?.contest_title ? obj?.contest_title : "No Title"
        this.id = obj?.id
        this.name = obj?.publish_by ? obj?.publish_by : "No Name"
        this.winning = obj?.winning || "0"
        this.madarekSpecial = obj?.madarek_special || "0"
        this.favoriteIdea = obj?.toatal_favorite_idea || "0"
        this.topRate = obj?.top_rated || "0"
        
        this.trophy = obj.isTrophy && obj?.isTrophy == null && obj?.isTrophy != 0 ? true : false;
        this.favorite = obj.isFavourite && obj?.isFavourite == null && obj?.isFavourite != 0 ? true : false;
        this.insight = obj.isInsight && obj?.isInsight == null && obj?.isInsight != 0 ? true : false;
        
        this.like = obj?.isLiked > 0 && obj?.isLiked != null ? true : false;
        this.totalView = obj?.totalViews > 0 && obj?.totalViews ? true : false;
        this.totalLike = obj?.totalLikes > 0 && obj?.totalLikes ? true : false;
        this.totalComment = obj?.totalComments > 0 && obj?.totalComments ? true : false;

    }
}
