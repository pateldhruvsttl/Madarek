export default class BannerList {
    
 constructor(obj = null) {

        if (obj == null) {
            return;
        }
        
        this.id = obj?.id
        this.title = obj?.banner_title ?  obj?.banner_title : "No Title"
        this.subtitle = obj?.banner_desc ? obj?.banner_desc : "No Sub Title"
        this.url = obj?.banner_image || ""
    }
}
