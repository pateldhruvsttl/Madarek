export default class BannerList {
    
 constructor(obj = null) {

        if (obj == null) {
            return;
        }
        
        this.id = obj?.id || "No Id"
        this.title = obj?.banner_title || "No Title"
        this.subtitle = obj?.banner_desc || "No SubTitle"
        this.url = obj?.banner_image || ""
    }
}
