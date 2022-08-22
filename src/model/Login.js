import { Label } from "../utils/StringUtil";

export default class Login {
  
    constructor(obj = null) {
        
        if (obj == null) {
            return;
        }
        
        this.id = obj?.id 
        this.firstName = obj?.first_name ? obj?.first_name : Label.NoFirstName
        this.lastName = obj?.last_name ? obj?.last_name : Label.NoLastName
        this.mobileNumber = obj?.mobile_phone || Label.DefaultNumber
        this.email = obj?.email ? obj?.email : Label.NoEmail
        this.countryId = obj?.country_id
        this.cityId = obj?.city_id 
        this.jobTitle = obj?.job_title ? obj?.job_title : Label.NoTitle

    }
    
}
