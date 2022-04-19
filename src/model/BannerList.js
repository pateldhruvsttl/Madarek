export default class BannerList {
    
    static noId = "";
    static noTitle = "";
    static noSubTitle = "";
    static noImg = "";

    constructor(obj = null) {

        if (obj == null) {
            return;
        }
        
        this.id = obj?.id ?? this.noId
        this.title = obj?.banner_title ?? this.noTitle
        this.subtitle = obj?.banner_desc ?? this.noSubTitle
        this.url = obj?.banner_image ?? this.noImg
    }
}
