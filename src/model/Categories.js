export default class Categories {
	
    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.id = obj?.id || "noId"
        this.parentId = obj?.parent_id || "noParentId"
        this.categoryName = obj?.category_name || "noCategoryName"
        this.categoryIcon = obj?.category_icon || "noIcon"
    }
}