import { Label } from "../utils/StringUtil";

export default class SubmitIdeaList {
	
    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.id = obj?.id
        this.categoryName = obj?.category_name || Label.NoCategoryName
        this.ideaTitle = obj?.idea_title  || Label.NoName
        this.ideaCode = obj?.idea_code  || Label.NoName
        this.createdDate = obj?.created_date  || Label.DefaultDate
        this.ideaImage= obj?.idea_cover_image  || ""
        this.totalLike = obj?.toatal_liked_idea  || Label.DefaultNumber
        this.totalView = obj?.toatal_view_idea  || Label.DefaultNumber
        this.totalComment = obj?.toatal_idea_comment  || Label.DefaultNumber
        this.favorite = obj?.toatal_favorite_idea == null || obj?.toatal_favorite_idea == 0 ? false : true;
        this.approveStatus = obj?.approved_status  || Label.NoStatus
        this.ideaParticipateFlag = obj?.idea_participate_flag  || Label.DefaultNumber
    }
}