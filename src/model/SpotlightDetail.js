import { Label } from "../utils/StringUtil";

export default class SpotlightDetail {

    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.spotlightTitle = obj?.spotlight_title || Label.NoTitle
        this.spotlightDate = obj?.spotlight_created || Label.DefaultDate
        this.spotlightPublishBy = obj?.spotlight_publish_by || Label.NoName
        this.spotlightDescription = obj?.spotlight_description || Label.NoDescription
        this.spotlightKeywords = obj?.spotlight_meta_keywords || Label.NoData
        this.spotlightImage = obj?.spotlight_upload_files || ''
        this.moduleType = obj?.module_type || ''
        this.sectorName = obj?.sector_name || ''
        this.categoryName = obj?.category_name || ''
        this.hideTeamIdentity = obj?.hide_team_identity || Label.DefaultNumber
        this.publishBy = obj?.publish_by || Label.NoName
        this.publishDate = obj?.publish_date || Label.DefaultDate
        this.title = obj?.title || Label.NoTitle
        this.description = obj?.description || Label.NoDescription
        this.image = obj?.image_upload_files || ""

    }
}
