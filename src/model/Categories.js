export default class Categories {

    static noCategory = "";
    static noId = "";
    static noParentId = "";
    static noCategoryIcon = "";
	
    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.id = obj?.id ?? this.noId
        this.parentId = obj?.parent_id ?? this.parentId
        this.categoryName = obj?.category_name ?? this.noCategory
        this.categoryIcon = obj?.category_icon ?? this.noCategoryIcon
    }
}