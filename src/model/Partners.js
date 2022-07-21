export default class Partners {
	
    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.id = obj?.id
        // this.photoTitle = obj?.photo_title || "No Title"
        this.photoCategoriesId = obj?.photo_categories_id || "0"
        this.photoDesc = obj?.photo_desc  || "no desctiption"
        this.photoImage= obj?.photo_image  || ""
        this.categoryName=obj?.category_name  || ""
        this.items=obj?.items  || []
    }
}