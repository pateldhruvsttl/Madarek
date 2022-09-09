import { Label } from "../../utils/StringUtil";

export default class MessageListModel {
    
 constructor(obj = null) {

        if (obj == null) {
            return;
        }
        
        this.id = obj?.id
        this.fullName = obj?.full_name ?  obj?.full_name : Label.NoName
        this.userPhoto = obj?.user_photo ? obj?.user_photo : "https://i.imgur.com/5tj6S7Ol.jpg"
        this.email = obj?.email ? obj?.email : Label.NoEmail
    }
}
