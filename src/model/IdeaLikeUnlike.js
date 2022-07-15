export default class IdeaLikeUnlike {
    
    constructor(obj = null) {
   
           if (obj == null) {
               return;
           }
           
           this.id = obj?.totalcount || "0"
           this.likeUnlike = obj?.data || "false"
           this.message = obj?.message ? obj?.message : "No message"
       }
   }
  