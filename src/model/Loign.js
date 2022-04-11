export default class Login {

    constructor(obj = null) {
        
        if (obj == null) {
            return;
        }
        
        this.id = obj?.id
        this.userType = obj?.user_type
        this.firstName = obj?.first_name
        this.lastName = obj?.last_name
        this.mobileNumber = obj?.mobile_phone
        this.email = obj?.email
        this.countryId = obj?.country_id
        this.cityId = obj?.city_id
        this.userType = obj?.user_type
        this.jobTitle = obj?.job_title
        this.token = obj?.token

    }
    
}
