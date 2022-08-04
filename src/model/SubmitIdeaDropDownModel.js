export default class SubmitIdeaDropDownModel {

    constructor(obj = null) {
        if (obj == null) {
            return;
        }

        this.itemName = obj?.sector_name ? obj?.sector_name :  obj?.category_name;
        this.id =  obj?.id;

    }
}