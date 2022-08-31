
import { Label } from "../utils/StringUtil";

export default class ExpertDetail {

    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.fullName = obj?.fullname || Label.NoName
        this.userPhoto = obj?.user_photo || ''
        this.organizationName = obj?.organization_name || Label.NoOrganizationName
        this.jobTitle = obj?.job_title || Label.NoTitle
        this.totalLikeId = obj?.my_total_liked_id || Label.DefaultNumber
        this.totalLike = obj?.toatal_liked_expert || Label.DefaultNumber
        this.totalView = obj?.toatal_views || Label.DefaultNumber
        this.totalComment = obj?.total_expert_comment || Label.DefaultNumber
        this.aboutExpert = obj?.about_expert || Label.NoDescription
        this.skill = obj?.skills || Label.NoSkill
        this.expertiseBrief = obj?.expertise_brief || Label.NoDescription
        this.facebookLink = obj?.facebook_link || ''
        this.twitterLink = obj?.twitter_link || ''
        this.linkdinLink = obj?.linkdin_link || ''
        this.callLink = obj?.callLink || ''
        this.blockChainLink = obj?.blockChainLink || ''
        this.googleLink = obj?.googleLink || ''
        this.whatsappLink = obj?.whatsappLink || ''
        this.categories = obj?.categories || Label.NoCategory
        this.madarekSpecial = obj?.madarek_special || Label.DefaultNumber
        this.joinRequest = obj?.isjoin_requests || Label.NoStatus
        this.favorite = obj?.followstatus == 0 ? false : true
        this.like = obj?.my_total_liked_id > 0 ? true : false;

        //similarExpert
        this.id = obj?.id
        this.totalFavoriteExpert = obj?.toatal_favorite_expert || Label.DefaultNumber
        this.profile = obj?.user_photo || ''
        this.name = obj?.fullname || Label.NoName
        this.ideaDescription = obj?.idea_description || Label.NoDescription
        this.like = obj?.my_total_liked_id || Label.DefaultNumber
        this.comment = obj?.total_expert_comment || Label.DefaultNumber
        this.see = obj?.total_views || Label.DefaultNumber
        this.category = obj?.category || Label.NoCategory
        this.post = obj?.idea_description || Label.NoDescription

        //ExpertInsight

        this.id = obj?.id
        this.imageFile = obj?.image_upload_files || ''
        this.title = obj?.title || Label.NoTitle
        this.generalDescription = obj?.general_description || Label.NoDescription
        this.totalLikes = obj?.toatal_liked_idea || Label.DefaultNumber
        this.totalComments = obj?.toatal_idea_comment || Label.DefaultNumber

    }
}
