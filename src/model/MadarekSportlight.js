export default class IdeaList {

    constructor(obj = null) {

        if (obj == null) {
            return;
        }
        
        this.ideaTitle = obj?.general_title;
        this.categoryName = obj?.general_description;
        
        
        this.title = obj?.contest_title;
        this.id = obj?.id;
        this.firstName = obj?.first_name;
        this.lastName = obj?.last_name;
        this.section = obj?.section;
        this.ideaDescription = obj?.idea_description;
        this.ideaImage = obj?.idea_cover_image;
        this.winning = obj?.winning;
        this.createDate = obj?.created_at;
        this.madarekSpecial = obj?.madarek_special;
        this.favoriteIdea = obj?.toatal_favorite_idea;
        this.topRate = obj?.top_rated;
        
        this.trophy = obj.isTrophy && obj?.isTrophy == null && obj?.isTrophy != 0 ? true : false;
        this.favorite = obj.isFavourite && obj?.isFavourite == null && obj?.isFavourite != 0 ? true : false;
        this.insight = obj.isInsight && obj?.isInsight == null && obj?.isInsight != 0 ? true : false;
        
        this.like = obj?.isLiked > 0 && obj?.isLiked != null ? true : false;
        this.totalView = obj?.totalViews > 0 && obj?.totalViews ? true : false;
        this.totalLike = obj?.totalLikes > 0 && obj?.totalLikes ? true : false;
        this.totalComment = obj?.totalComments > 0 && obj?.totalComments ? true : false;

    }
}
