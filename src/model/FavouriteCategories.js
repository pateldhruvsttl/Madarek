export default class FavouriteCategories {
	
    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.id = obj?.category_id 
        this.categoryName = obj?.category_name ? obj?.category_name : "No Category"
        this.categoryIcon =  obj?.category_icon || ""
    }
}