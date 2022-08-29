import { Label } from "../utils/StringUtil";

export default class ExpertDirectoryModel {
	
    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.id = obj?.expert_id
        this.profilePhoto = obj?.user_photo
        this.name = obj?.fullname
        this.post = obj?.about_expert

        this.see = obj?.toatal_views
        this.like = obj?.toatal_liked_expert
        this.comment = obj?.total_expert_comment
       
    }
}