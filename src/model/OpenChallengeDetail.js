export default class OpenChallengeDetail {

    constructor(obj = null) {

        if (obj == null) {
            return;
        }
        // contestDetail 
        this.submissionStatus = obj?.submissionstatus || "noStatus"
        this.contestTitle = obj?.contest_title || "No contest Title"
        this.contestImage = obj?.contest_image || "https://i.imgur.com/5tj6S7Ol.jpg"
        this.title = obj?.title || "No title"
        this.sector = obj?.sector_name || "No Sector "
        this.categoryName = obj?.category_name || "No Category "
        this.favoriteContest = obj?.my_toatal_favorite_contest || "No Favorite Contest"
        this.contestDate = obj?.contest_date || "15 Mar 22 - 29 Mar 22"
        this.totalLike = obj?.toatal_liked_contest || "0"
        this.like = obj?.toatal_liked_contest > 0 ? true : false;
        this.totalFavoriteContest = obj?.my_toatal_favorite_contest == 0 ? false : true;
        this.totalView = obj?.toatal_view_contest || "0"
        this.totalComment = obj?.toatal_contest_comments || "0"
        this.totalExpertInsight = obj?.total_expert_insight || "0"
        this.contestDescription = obj?.contest_description &&  obj?.contest_description !== " " ? obj.contest_description : "No Description"
        this.participateRowsCount = obj?.participaterowsCount || "0"
        this.evaluationPannel = obj?.evaluationPannel || "0"
        this.participateMulti = obj?.who_should_participate_multi || "no type"
        this.reward = obj?.reward || "no reward"
        this.announcementDate = obj?.announcement || "18-07-2022"
        this.startDate = obj?.start_date || "18-07-2022"
        this.endDate = obj?.end_date || "18-07-2022"
        this.publicEvaluation = obj?.public_evaluation || "18-07-2022"
        this.expertEvaluation = obj?.expert_evaluation || "18-07-2022"
        this.awardAnnouncement = obj?.award_announcement || "18-07-2022"
        this.votingMechanism = obj?.voting_mechanism_new || "no data"
        this.mixVoting = obj?.mix_voting || ""
        this.participantsCount = obj?.participantscount || "0"
        this.objective = obj?.objective || "no objective"
        
        // similarrow
        this.madarekSpecial = obj?.madarek_special || ""
        this.form_data = obj?.form_data || ""
        this.frontuserId = obj?.frontuser_id || "0"
        this.status = obj?.status || ""
        this.ideaTitle = obj?.idea_title || "no title"
        this.createdAt = obj?.created_at || "0"

        // evaluationPannel
        this.firstName = obj?.first_name || "No Name"
        this.lastName = obj?.last_name || "No Name"
        this.jobTitle = obj?.job_title || "No title"
        this.organization = obj?.organization_name || "No title"
        this.panelPhoto = obj?.user_photo || "No title"

        //participaterowsData
        this.participateImage = obj?.idea_cover_image || "https://i.imgur.com/5tj6S7Ol.jpg"
        this.participateTitle = obj?.idea_title || "No title"
        this.participateDate = obj?.idea_participate_created || "01 July 2021"
        this.participateBy = obj?.created_by || "No name"
        this.totalScore = obj?.total_vote_data || "0"
        this.rank = obj?.score || "0"
        this.totalVote = obj?.total_vote || "0"
       

    }
}
