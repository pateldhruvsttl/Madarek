import { Label } from "../utils/StringUtil";

export default class OpenChallengeModel {

    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.ideaTitle = obj?.title ? obj?.title : Label.NoTitle
        this.ideaImage = obj?.image || "https://i.imgur.com/5tj6S7Ol.jpg";
        this.createDate = obj.date?obj.date:Label.DefaultDate
        this.title = obj?.title ? obj?.title : Label.NoTitle
        this.categoryDetails= obj?.contest_description ? obj?.contest_description :Label.NoDescription
        this.subTitle = obj?.contest_description ? obj?.contest_description : Label.NoTitle
        this.image = obj?.image || "https://i.imgur.com/5tj6S7Ol.jpg"
        this.sector = obj?.sector ? obj?.sector : Label.NoSector
        this.categoryName = obj?.category_name ? obj?.category_name : Label.NoCategory
        this.id = obj?.id
        this.date = obj?.date || Label.DefaultDate
        this.firstName = obj?.first_name ? obj?.first_name :Label.NoName
        this.winning = obj?.winning ||Label.DefaultNumber
        this.madarekSpecial = obj?.madarek_special ||Label.DefaultNumber
        this.favoriteIdea = obj?.toatal_favorite_idea ||Label.DefaultNumber
        this.topRate = obj?.top_rated ||Label.DefaultNumber
        this.ideaParticipate = obj?.ideaParticipated ||Label.DefaultNumber
        this.participants= obj?.participants ||Label.DefaultNumber
        this.expertEngage = obj?.expertEngage ||Label.DefaultNumber
        this.trophy = obj?.isTrophy == null && obj?.isTrophy != 0 ? true : false;
        // this.favorite = obj?.isFavourite == null && obj?.isFavourite != 0 ? true : false;
        this.insight = obj?.isInsight == null && obj?.isInsight != 0 ? true : false;

        this.like = obj?.toatal_liked_contest > 0 ? true : false;
        this.totalView = obj?.toatal_view_contest ||Label.DefaultNumber
        this.totalLike = obj?.toatal_liked_contest ||Label.DefaultNumber
        this.totalComment = obj?.toatal_contest_comments ||Label.DefaultNumber
        this.favorite = obj?.toatal_favorite_contest == null || obj?.toatal_favorite_contest == 0 ? false : true;

    }
}
