export default class SubmitIdeaDropDownModel {

    constructor(obj = null) {
        if (obj == null) {
            return;
        }

        this.itemName = obj?.sector_name ? obj?.sector_name : obj?.category_name;
        this.id = obj?.id ? obj?.id : obj?.category_id;
        this.subcategory = obj?.subcategory ? obj?.subcategory : [];

    }
}