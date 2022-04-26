export default class Categories {
	
    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.id = obj?.id || "No Id"
        this.parentId = obj?.parent_id || "No ParentId"
        this.categoryName = obj?.category_name || "No CategoryName"
        this.categoryIcon = obj?.category_icon || "No Icon"
    }
}