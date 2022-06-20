export default class Dashboard {
	
    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.title = obj?.text || "0"
        this.count = obj?.count || "0"
        this.userPhoto = obj?.user_photo || "0"
        this.fullName = obj?.fullname || "0"
        this.joinStatus = obj?.joinstatus || "No Status"
        this.categoryName = obj?.category_name || "No category Name"
        this.ideaTitle = obj?.idea_title || "No title"
        this.ideaSubTitle = obj?.idea_subtitle || "No Sub title"
        this.date = obj?.date || "22 Jan 22"
        this.ideaCoverImage = obj?.idea_cover_image || ""
        this.ideaDescription = obj?.idea_description || "No Description"
        this.ideaCode = obj?.idea_code || "0"
        this.id = obj?.id || "0"
        
    
    }
}