export default class Dashboard {
	
    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.title = obj?.text ? obj?.text : "0"
        this.count = obj?.count ? obj?.count : "0"
        this.userPhoto = obj?.user_photo ? obj?.user_photo : "0"
        this.fullName = obj?.fullname ? obj?.fullname: "No name"
        this.joinStatus = obj?.joinstatus ? obj?.joinstatus : "No Status"
        this.categoryName = obj?.category_name ? obj?.category_name :  "No category Name"
        this.ideaTitle = obj?.idea_title ? obj?.idea_title : "No title"
        this.ideaSubTitle = obj?.idea_subtitle ? obj?.idea_subtitle : "No Sub title"
        this.date = obj?.date ? obj?.date : "22 Jan 22"
        this.ideaCoverImage = obj?.idea_cover_image || "https://i.imgur.com/5tj6S7Ol.jpg"
        this.ideaDescription = obj?.idea_description ? obj?.idea_description : "No Description"
        this.ideaCode = obj?.idea_code ? obj?.idea_code : "0"
        this.expertId = obj?.expert_id || "0"
        
    
    }
}