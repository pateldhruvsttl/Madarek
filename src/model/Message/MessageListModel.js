
export default class MessageListModel {
    
 constructor(obj = null) {

        if (obj == null) {
            return;
        }
        
        this.id = obj?.id
        this.full_name = obj?.full_name ?  obj?.full_name : "No Name"
        this.user_photo = obj?.user_photo ? obj?.user_photo : ""
        this.email = obj?.email ? obj?.email : ""
    }
}
