import { Label } from "../utils/StringUtil";

export default class Categories {
	
    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.id = obj?.id
        this.parentId = obj?.parent_id
        this.categoryName = obj?.category_name ?obj?.category_name : Label.NoCategoryName
        this.categoryIcon = obj?.category_icon || ""
    }
}