import { AppConfig } from "../manager/AppConfig";
import { Label } from "../utils/StringUtil";

export default class BannerList {
    
 constructor(obj = null) {

        if (obj == null) {
            return;
        }
        
        this.id = obj?.id
        this.title = obj?.banner_title ?  obj?.banner_title : Label.NoTitle
        this.subtitle = obj?.banner_desc ? obj?.banner_desc : Label.NoTitle
        this.url = obj?.banner_image ? obj?.banner_image : ""
    }
}
