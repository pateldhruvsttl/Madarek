export default class FavouriteCategories {
	
    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.id = obj?.category_id || "No Category Id"
        this.categoryName = obj?.category_name || "No Category Name"
        this.categoryIcon =  obj?.category_icon || "No Category Icon"
    }
}