export default class SignUp {

    constructor(obj = null) {
        
        this.message = obj?.message
        this.userType = obj?.user_type
        this.deviceId = obj?.device_id
        this.firstName = obj?.first_name
        this.lastName = obj?.last_name
        this.jobTitle = obj?.job_title
        this.countryId = obj?.country_id
        this.cityId = obj?.city_id
        this.email = obj?.email
        this.password = obj?.pwd
        this.mobileNumber = obj?.mobile_phone
        this.token = obj?.token
        this.status = obj?.status
        this.Id = obj?.Id

    }
    
}
