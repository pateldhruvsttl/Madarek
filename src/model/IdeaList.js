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
        this.totalView = obj?.toatal_views;
        this.madarekSpecial = obj?.madarek_special;
        this.totalLike = obj?.toatal_liked_idea;
        this.totalComment = obj?.toatal_idea_comment;
        this.favoriteIdea = obj?.toatal_favorite_idea;
        this.myLike = obj?.my_like;
        this.topRate = obj?.top_rated;
        this.ideaWinner = obj?.idea_winner;

    }
}
