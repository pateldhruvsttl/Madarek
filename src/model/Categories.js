export default class Categories {
	
    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.id = obj?.id
        this.parentId = obj?.parent_id
        this.categoryName = obj?.category_name || "No Category Name"
        this.categoryIcon = obj?.category_icon || ""
    }
}