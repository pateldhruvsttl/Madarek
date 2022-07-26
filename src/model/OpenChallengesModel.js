export default class OpenChallengeModel {

    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.ideaTitle = obj?.title ? obj?.title : "No Title"
        this.ideaImage = obj?.image || "https://i.imgur.com/5tj6S7Ol.jpg";
        this.createDate = obj.date?obj.date:"No Date"
        this.title = obj?.title ? obj?.title : "No title"
        this.categoryDetails= obj?.contest_description ? obj?.contest_description : "No Description"
        this.subTitle = obj?.contest_description ? obj?.contest_description : "No title"
        this.image = obj?.image || "https://i.imgur.com/5tj6S7Ol.jpg"
        this.sector = obj?.sector ? obj?.sector : "No Sector "
        this.categoryName = obj?.category_name ? obj?.category_name : "No Category "
        this.id = obj?.id
        this.date = obj?.date || "15 Mar 22 - 29 Mar 22"
        this.firstName = obj?.first_name ? obj?.first_name : "No name"
        this.winning = obj?.winning || "0"
        this.madarekSpecial = obj?.madarek_special || "0"
        this.favoriteIdea = obj?.toatal_favorite_idea || "0"
        this.topRate = obj?.top_rated || "0"
        this.ideaParticipate = obj?.ideaParticipated || "0"
        this.participants= obj?.participants || "0"
        this.expertEngage = obj?.expertEngage || "0"
        this.trophy = obj?.isTrophy == null && obj?.isTrophy != 0 ? true : false;
        this.favorite = obj?.isFavourite == null && obj?.isFavourite != 0 ? true : false;
        this.insight = obj?.isInsight == null && obj?.isInsight != 0 ? true : false;

        this.like = obj?.isLiked > 0 ? true : false;
        this.totalView = obj?.toatal_view_contest || "0"
        this.totalLike = obj?.toatal_liked_contest || "0"
        this.totalComment = obj?.toatal_contest_comments || "0"

    }
}
