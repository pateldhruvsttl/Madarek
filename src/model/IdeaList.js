export default class IdeaList {

    noSector = "No Sector";
    noCategoryName = "No category name";

    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.ideaTitle = obj?.idea_title ? obj?.idea_title : noSector;
        this.categoryName = obj?.category_name ? obj?.category_name: noCategoryName;
        this.createDate = obj?.created_at;


        this.id = obj?.id;
        this.firstName = obj?.first_name;
        this.lastName = obj?.last_name;
        this.title = obj?.title;
        this.section = obj?.section;
        this.ideaDescription = obj?.idea_description;
        this.ideaImage = obj?.idea_cover_image;
        this.winning = obj?.winning;
        this.madarekSpecial = obj?.madarek_special;
        this.favoriteIdea = obj?.toatal_favorite_idea;
        this.topRate = obj?.top_rated;

        this.trophy = obj?.isTrophy == null && obj?.isTrophy != 0 ? true : false;
        this.favorite = obj?.isFavourite == null && obj?.isFavourite != 0 ? true : false;
        this.insight = obj?.isInsight == null && obj?.isInsight != 0 ? true : false;

        this.like = obj?.isLiked > 0 ? true : false;
        this.totalView = obj?.totalViews;
        this.totalLike = obj?.totalLikes;
        this.totalComment = obj?.totalComments;

    }
}
