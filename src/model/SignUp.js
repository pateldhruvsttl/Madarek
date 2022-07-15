export default class SignUp {
    
 constructor(obj = null) {
        
        if (obj == null) {
            return;
        }
        
        this.message = obj?.message ? obj?.message : "No Message"
        this.deviceId = obj?.device_id
        this.firstName = obj?.first_name ? obj?.first_name : "No First name"
        this.lastName = obj?.last_name ? obj?.last_name : "No Last name"
        this.jobTitle = obj?.job_title ? obj?.job_title : "No Job title"
        this.countryId = obj?.country_id 
        this.cityId = obj?.city_id 
        this.email = obj?.email ? obj?.email : "No Email"
        this.password = obj?.pwd ? obj?.pwd : "No Password"
        this.mobileNumber = obj?.mobile_phone || "0"
        this.id = obj?.id

    }
    
}
