export default class Categories {
    // Id = null
	
    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.id = obj?.id;
        this.parentId = obj?.parent_id
        this.categoryName = obj?.category_name;
        this.categoryIcon = obj?.category_icon;
    }
}