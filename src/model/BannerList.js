export default class BannerList {

    constructor(obj = null) {

        if (obj == null) {
            return;
        }
        
        this.id = obj?.id;
        this.bannerTitle = obj?.banner_title;
        this.bannerImage = obj?.banner_image;
    }
}
