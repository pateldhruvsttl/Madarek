export default class SubmitIdeaList {
	
    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.id = obj?.id
        this.categoryName = obj?.category_name || "No Name"
        this.ideaTitle = obj?.idea_title  || "No Title"
        this.ideaCode = obj?.idea_code  || "No Title"
        this.createdDate = obj?.created_date  || ""
        this.ideaImage= obj?.idea_cover_image  || ""
        this.totalLike = obj?.toatal_liked_idea  || "0"
        this.totalView = obj?.toatal_view_idea  || "0"
        this.totalComment = obj?.toatal_idea_comment  || "0"
        this.favorite = obj?.toatal_favorite_idea == null || obj?.toatal_favorite_idea == 0 ? false : true;
        this.approveStatus = obj?.approved_status  || "no status"
        this.ideaParticipateFlag = obj?.idea_participate_flag  || "0"
    }
}