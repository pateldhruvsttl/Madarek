import { AppConfig } from "../manager/AppConfig";
import { Label } from "../utils/StringUtil";

export default class CommentList {
    
 constructor(obj = null) {

        if (obj == null) {
            return;
        }
        
        this.id = obj?.id
        this.parentId = obj?.parent_id
        this.ideaId = obj?.idea_id
        this.frontuserId = obj?.frontuser_id
        this.status = obj?.status || Label.NoStatus
        this.comment = obj?.comment || Label.NoStatus
        this.date = obj?.created_at || Label.DefaultDate
        this.firstName = obj?.first_name || Label.NoName
        this.lastName = obj?.last_name || Label.NoName
        this.userPhoto = obj?.user_photo || ""
        this.detail = obj?.title || Label.NoTitle
        this.totalLike = obj?.totallike || Label.DefaultNumber

        //childCommentsData
        this.childCommentsData = obj?.childCommentsData || []
    }
}