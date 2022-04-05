export default class BannerList {

    constructor(obj = null) {

        this.Id = obj?.id;
        this.bannerTitle = obj?.banner_title;
        this.bannerImage = obj?.banner_image;
        this.status = obj?.status;
    }
}
