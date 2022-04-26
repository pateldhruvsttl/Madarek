export default class SignUp {
    
 constructor(obj = null) {
        
        if (obj == null) {
            return;
        }
        
        this.message = obj?.message || "No Message"
        this.userType = obj?.user_type || "No Usertype"
        this.deviceId = obj?.device_id || "No Deviceid"
        this.firstName = obj?.first_name || "No Firstname"
        this.lastName = obj?.last_name || "No Lastname"
        this.jobTitle = obj?.job_title || "No Jobtitle"
        this.countryId = obj?.country_id || "No Countryid"
        this.cityId = obj?.city_id || "No Cityid"
        this.email = obj?.email || "No Email"
        this.password = obj?.pwd || "No Password"
        this.mobileNumber = obj?.mobile_phone || "No Number"
        this.token = obj?.token || "No Token"
        this.id = obj?.id || "No Id"

    }
    
}
