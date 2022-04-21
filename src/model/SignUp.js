export default class SignUp {
    
 constructor(obj = null) {
        
        if (obj == null) {
            return;
        }
        
        this.message = obj?.message || "noMessage"
        this.userType = obj?.user_type || "noUsertype"
        this.deviceId = obj?.device_id || "noDeviceid"
        this.firstName = obj?.first_name || "noFirstname"
        this.lastName = obj?.last_name || "noLastname"
        this.jobTitle = obj?.job_title || "noJobtitle"
        this.countryId = obj?.country_id || "noCountryid"
        this.cityId = obj?.city_id || "noCityid"
        this.email = obj?.email || "noEmail"
        this.password = obj?.pwd || "noPassword"
        this.mobileNumber = obj?.mobile_phone || "noNumber"
        this.token = obj?.token || "noToken"
        this.id = obj?.id || "noId"

    }
    
}
