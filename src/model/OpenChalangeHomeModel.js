export default class IdeaList {

    constructor(obj = null) {

        if (obj == null) {
            return;
        }
        
        this.ideaTitle = obj?.title ? obj?.title : "No Title"
        this.categoryName = obj?.contest_description ? obj?.contest_description : "No Description"
        this.ideaImage = obj?.image || "https://i.imgur.com/5tj6S7Ol.jpg";
        this.createDate = obj.date?obj.date:"No Date"
        
        this.title = obj?.title ? obj?.title : "No Title"
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
        this.totalView = obj?.toatal_view_contest || "0"
        this.totalLike = obj?.toatal_liked_contest || "0"
        this.totalComment = obj?.toatal_contest_comments || "0";

    }
}
