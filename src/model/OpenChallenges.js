export default class OpenChallenge {

    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.title = obj?.contest_title || "No title"
        this.categoryDetails= obj?.contest_description || "No Description"
        this.subTitle = obj?.general_title || "No title"
        this.sector = obj?.sector || "No Sector "
        this.categoryName = obj?.category || "No Category "
        this.id = obj?.id
        this.date = obj?.date || "15 Mar 22 - 29 Mar 22"
        this.firstName = obj?.first_name || "No name"
        this.ideaImage = obj?.contest_image_upload_files || ""
        this.winning = obj?.winning || "0"
        this.madarekSpecial = obj?.madarek_special || "0"
        this.favoriteIdea = obj?.toatal_favorite_idea || "0"
        this.topRate = obj?.top_rated || "0"
        this.image = obj?.photos_image || "https://i.imgur.com/5tj6S7Ol.jpg"
        this.ideaParticipate = obj?.ideaParticipated || "0"
        this.participants= obj?.participants || "0"
        this.expertEngage = obj?.expertEngage || "0"
        this.trophy = obj?.isTrophy == null && obj?.isTrophy != 0 ? true : false;
        this.favorite = obj?.isFavourite == null && obj?.isFavourite != 0 ? true : false;
        this.insight = obj?.isInsight == null && obj?.isInsight != 0 ? true : false;

        this.like = obj?.isLiked > 0 ? true : false;
        this.totalView = obj?.totalViews || "0"
        this.totalLike = obj?.totalLikes || "0"
        this.totalComment = obj?.totalComments || "0"

    }
}
