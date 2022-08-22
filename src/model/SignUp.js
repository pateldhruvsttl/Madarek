import { Label } from "../utils/StringUtil";

export default class SignUp {
    
 constructor(obj = null) {
        
        if (obj == null) {
            return;
        }
        
        this.message = obj?.message ? obj?.message : Label.NoMessage
        this.deviceId = obj?.device_id
        this.firstName = obj?.first_name ? obj?.first_name : Label.NoFirstName
        this.lastName = obj?.last_name ? obj?.last_name : Label.NoLastName
        this.jobTitle = obj?.job_title ? obj?.job_title : Label.NoTitle
        this.countryId = obj?.country_id 
        this.cityId = obj?.city_id 
        this.email = obj?.email ? obj?.email :Label.NoEmail
        this.password = obj?.pwd ? obj?.pwd : Label.NoPassword
        this.mobileNumber = obj?.mobile_phone || Label.DefaultNumber
        this.id = obj?.id

    }
    
}
