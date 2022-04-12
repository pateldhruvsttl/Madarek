export default class BannerList {

    constructor(obj = null) {

        if (obj == null) {
            return;
        }
        
        this.id = obj?.id;
        this.title = obj?.banner_title;
        this.subtitle = obj?.banner_desc;
        this.url = obj?.banner_image;
    }
}
