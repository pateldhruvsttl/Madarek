export default class IdeaList {

    constructor(obj = null) {

        if (obj == null) {
            return;
        }
        
        this.id = obj?.id;
        this.categoryName = obj?.category_name;
        this.ideaTitle = obj?.idea_title;
        this.firstName = obj?.first_name;
        this.lastName = obj?.last_name;
        this.title = obj?.title;
        this.section = obj?.section;
        this.ideaDescription = obj?.idea_description;
        this.ideaImage = obj?.idea_cover_image;
        this.winning = obj?.winning;
        this.createDate = obj?.created_at;
        this.totalView = obj?.totalViews;
        this.madarekSpecial = obj?.madarek_special;
        this.totalLike = obj?.totalLikes;
        this.totalComment = obj?.totalComments;
        this.favoriteIdea = obj?.toatal_favorite_idea;
        this.like = obj?.isLiked;
        this.favourite = obj?.isFavourite;
        this.topRate = obj?.top_rated;
        this.trophy = obj?.isTrophy;
        this.insight = obj?.isInsight;

    }
}
