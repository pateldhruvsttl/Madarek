import { Label } from "../utils/StringUtil";

export default class IdeaLikeUnlike {
    
    constructor(obj = null) {
   
           if (obj == null) {
               return;
           }
           
           this.id = obj?.totalcount || Label.DefaultNumber
           this.likeUnlike = obj?.data || "false"
           this.message = obj?.message ? obj?.message : Label.NoMessage
       }
   }
  