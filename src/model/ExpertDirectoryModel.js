import { Label } from "../utils/StringUtil";

export default class ExpertDirectoryModel {
	
    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.id = obj?.id
        this.profile = obj?.user_photo
        this.name = obj?.fullname || Label.NoName
        this.post = obj?.about_expert || Label.NoTitle

        this.see = obj?.toatal_views || Label.DefaultNumber
        this.like = obj?.toatal_liked_expert || Label.DefaultNumber
        this.comment = obj?.total_expert_comment || Label.DefaultNumber
        this.isjoin_requests = obj?.isjoin_requests
        this.isLike = obj?.my_total_liked_id > 0 ? true : false
       
    }
}