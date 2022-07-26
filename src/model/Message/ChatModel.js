
export default class MessageListModel {
    
    constructor(obj = null) {
   
           if (obj == null) {
               return;
           }
           
           this.id = obj?.id
           this.full_name = obj?.full_name ?  obj?.full_name : "No Name"
           this.comment = obj?.comment ? obj?.comment : ""
           this.email = obj?.email ? obj?.email : ""
       }
   }
   