import { Label } from "../utils/StringUtil";

export default class IdeaList {

    constructor(obj = null) {

        if (obj == null) {
            return;
        }
        
        this.ideaTitle = obj?.general_title ? obj?.general_title : Label.NoTitle
        this.categoryName = obj?.general_description ? obj?.general_description : Label.NoDescription
        
        
        this.title = obj?.contest_title ? obj?.contest_title : Label.NoTitle
        this.id = obj?.id
        this.createDate = obj?.date || Label.DefaultDate
        this.name = obj?.publish_by ? obj?.publish_by : Label.NoName
        this.ideaImage = obj?.image_upload_filesfile || ""
        this.winning = obj?.winning || Label.DefaultNumber
        this.madarekSpecial = obj?.madarek_special || Label.DefaultNumber
        this.favoriteIdea = obj?.toatal_favorite_idea || Label.DefaultNumber
        this.topRate = obj?.top_rated || Label.DefaultNumber
        
        this.trophy = obj.isTrophy && obj?.isTrophy == null && obj?.isTrophy != 0 ? true : false;
        this.favorite = obj.isFavourite && obj?.isFavourite == null && obj?.isFavourite != 0 ? true : false;
        this.insight = obj.isInsight && obj?.isInsight == null && obj?.isInsight != 0 ? true : false;
        
        this.like = obj?.isLiked > 0 && obj?.isLiked != null ? true : false;
        this.totalView = obj?.totalViews > 0 && obj?.totalViews ? true : false;
        this.totalLike = obj?.totalLikes > 0 && obj?.totalLikes ? true : false;
        this.totalComment = obj?.totalComments > 0 && obj?.totalComments ? true : false;

    }
}
