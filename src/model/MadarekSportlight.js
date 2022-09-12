import { Label } from "../utils/StringUtil";

export default class IdeaList {

    constructor(obj = null) {

        if (obj == null) {
            return;
        }
        
        this.ideaTitle = obj?.title ? obj?.title : Label.NoTitle
        this.categoryName = obj?.general_title ? obj?.general_title : Label.NoDescription
        
        
        this.title = obj?.contest_title ? obj?.contest_title : Label.NoTitle
        this.id = obj?.id
        this.parentId = obj?.parent_id
        this.remarks = obj?.remarks || Label.NoData
        this.createDate = obj?.created_at || Label.DefaultDate
        this.name = obj?.publish_by ? obj?.publish_by : Label.NoName
        this.ideaImage = obj?.image_upload_file || ""
        this.spotlighUrl = obj?.spotlight_url || ""
     

    }
}
