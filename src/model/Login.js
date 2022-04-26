export default class Login {
  
    constructor(obj = null) {
        
        if (obj == null) {
            return;
        }
        
        this.id = obj?.id || "No Id"
        this.userType = obj?.user_type || "No Usertype"
        this.firstName = obj?.first_name || "No Firstname"
        this.lastName = obj?.last_name || "No Lastname"
        this.mobileNumber = obj?.mobile_phone || "No Number"
        this.email = obj?.email || "No Email"
        this.countryId = obj?.country_id || "No Countryid"
        this.cityId = obj?.city_id || "No Cityid"
        this.jobTitle = obj?.job_title || "No Jobtitle"
        this.token = obj?.token || "No Token"

    }
    
}
