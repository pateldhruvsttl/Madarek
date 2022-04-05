export default class Categories {
    // Id = null
	
    constructor(obj = null) {

        this.Id = obj?.id;
        this.parentId = obj?.parent_id
        this.categoryName = obj?.category_name;
        this.queryInfo = obj?.query_info;
        this.categoryIcon = obj?.category_icon;
        this.status = obj?.status;
    }
}