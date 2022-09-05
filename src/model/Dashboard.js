import { Label } from "../utils/StringUtil";

export default class Dashboard {
	
    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.title = obj?.text ? obj?.text :  Label.DefaultNumber
        this.count = obj?.count || Label.DefaultNumber
        this.userPhoto = obj?.user_photo ? obj?.user_photo :  Label.DefaultNumber
        this.fullName = obj?.fullname ? obj?.fullname: Label.NoName
        this.joinStatus = obj?.joinstatus ? obj?.joinstatus : Label.NoStatus
        this.categoryName = obj?.category_name ? obj?.category_name :  Label.NoCategoryName
        this.ideaTitle = obj?.idea_title ? obj?.idea_title : Label.NoTitle
        this.ideaSubTitle = obj?.idea_subtitle ? obj?.idea_subtitle : Label.NoTitle
        this.date = obj?.date ? obj?.date : Label.DefaultDate
        this.ideaCoverImage = obj?.idea_cover_image || "https://i.imgur.com/5tj6S7Ol.jpg"
        this.ideaDescription = obj?.idea_description ? obj?.idea_description : Label.NoDescription
        this.ideaCode = obj?.idea_code ? obj?.idea_code : Label.DefaultNumber
        this.expertId = obj?.expert_id ||  Label.DefaultNumber
        
    
    }
}