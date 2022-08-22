import { Label } from "../utils/StringUtil";

export default class Partners {
	
    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.id = obj?.id
        // this.photoTitle = obj?.photo_title || "No Title"
        this.photoCategoriesId = obj?.photo_categories_id || Label.DefaultNumber
        this.photoDesc = obj?.photo_desc  || Label.NoDescription
        this.photoImage= obj?.photo_image  || ""
        this.categoryName=obj?.category_name  || ""
        this.items=obj?.items  || []
    }
}