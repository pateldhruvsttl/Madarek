import { Label } from "../utils/StringUtil";

export default class OpenChallengeDetail {

    constructor(obj = null) {

        if (obj == null) {
            return;
        }
        // contestDetail 
        this.submissionStatus = obj?.submissionstatus || Label.NoTitle
        this.contestTitle = obj?.contest_title || Label.NoTitle
        this.contestImage = obj?.contest_image || "https://i.imgur.com/5tj6S7Ol.jpg"
        this.title = obj?.title || Label.NoTitle
        this.sector = obj?.sector_name || Label.NoSector
        this.categoryName = obj?.category_name || Label.NoCategoryName
        this.favoriteContest = obj?.my_toatal_favorite_contest || Label.NoFavoriteContest
        this.contestDate = obj?.contest_date || Label.DefaultDate
        this.totalLike = obj?.toatal_liked_contest || Label.DefaultNumber
        this.like = obj?.toatal_liked_contest > 0 ? true : false;
        this.totalFavoriteContest = obj?.my_toatal_favorite_contest == 0 ? false : true;
        this.totalView = obj?.toatal_view_contest || Label.DefaultNumber
        this.totalComment = obj?.toatal_contest_comments || Label.DefaultNumber
        this.totalExpertInsight = obj?.total_expert_insight || Label.DefaultNumber
        this.contestDescription = obj?.contest_description &&  obj?.contest_description !== " " ? obj.contest_description : "No Description"
        this.participateRowsCount = obj?.participaterowsCount || Label.DefaultNumber
        this.evaluationPannel = obj?.evaluationPannel || Label.DefaultNumber
        this.participateMulti = obj?.who_should_participate_multi || Label.NoType
        this.reward = obj?.reward || Label.NoReward
        this.announcementDate = obj?.announcement || Label.DefaultDate
        this.startDate = obj?.start_date || Label.DefaultDate
        this.endDate = obj?.end_date || Label.DefaultDate
        this.publicEvaluation = obj?.public_evaluation || Label.DefaultDate
        this.expertEvaluation = obj?.expert_evaluation || Label.DefaultDate
        this.awardAnnouncement = obj?.award_announcement || Label.DefaultDate
        this.votingMechanism = obj?.voting_mechanism_new || Label.NoData
        this.mixVoting = obj?.mix_voting || ""
        this.participantsCount = obj?.participantscount || Label.DefaultNumber
        this.objective = obj?.objective || Label.NoObjective
        
        // similarrow
        this.madarekSpecial = obj?.madarek_special || ""
        this.form_data = obj?.form_data || ""
        this.frontuserId = obj?.frontuser_id || Label.DefaultNumber
        this.status = obj?.status || ""
        this.ideaTitle = obj?.idea_title || Label.NoTitle
        this.createdAt = obj?.created_at || Label.DefaultNumber

        // evaluationPannel
        this.firstName = obj?.first_name ||Label.NoName
        this.lastName = obj?.last_name ||Label.NoName
        this.jobTitle = obj?.job_title || Label.NoTitle
        this.organization = obj?.organization_name || Label.NoTitle
        this.panelPhoto = obj?.user_photo || Label.NoTitle

        //participaterowsData
        this.participateImage = obj?.idea_cover_image || "https://i.imgur.com/5tj6S7Ol.jpg"
        this.participateTitle = obj?.idea_title || Label.NoTitle
        this.participateDate = obj?.idea_participate_created || Label.DefaultDate
        this.participateBy = obj?.created_by ||Label.NoName
        this.totalScore = obj?.total_vote_data || Label.DefaultNumber
        this.rank = obj?.score || Label.DefaultNumber
        this.totalVote = obj?.total_vote || Label.DefaultNumber
       

    }
}
