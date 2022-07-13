export default class Login {
  
    constructor(obj = null) {
        
        if (obj == null) {
            return;
        }
        
        this.id = obj?.id 
        this.firstName = obj?.first_name ? obj?.first_name : "No First name"
        this.lastName = obj?.last_name ? obj?.last_name : "No Last name"
        this.mobileNumber = obj?.mobile_phone || "0"
        this.email = obj?.email ? obj?.email : "No Email"
        this.countryId = obj?.country_id
        this.cityId = obj?.city_id 
        this.jobTitle = obj?.job_title ? obj?.job_title : "No Job title"

    }
    
}
