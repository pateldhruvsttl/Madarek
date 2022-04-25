export default class Login {
  
    constructor(obj = null) {
        
        if (obj == null) {
            return;
        }
        
        this.id = obj?.id || "noId"
        this.userType = obj?.user_type || "noUsertype"
        this.firstName = obj?.first_name || "noFirstname"
        this.lastName = obj?.last_name || "noLastname"
        this.mobileNumber = obj?.mobile_phone || "noNumber"
        this.email = obj?.email || "noEmail"
        this.countryId = obj?.country_id || "noCountryid"
        this.cityId = obj?.city_id || "noCityid"
        this.jobTitle = obj?.job_title || "noJobtitle"
        this.token = obj?.token || "noToken"

    }
    
}
