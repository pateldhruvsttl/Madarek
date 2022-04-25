export default class BannerList {
    
 constructor(obj = null) {

        if (obj == null) {
            return;
        }
        
        this.id = obj?.id || "noId"
        this.title = obj?.banner_title || "noTitle"
        this.subtitle = obj?.banner_desc || "noSubTitle"
        this.url = obj?.banner_image || ""
    }
}
