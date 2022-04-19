export default class Login {
    static noId = "";
    static noUserType = "";
    static noFirstName = "";
    static noLastName = "";
    static noNumber = "";
    static noEmail = "";
    static noCountryId = "";
    static noCityId = "";
    static noJobTitle = "";
    static noToken = "";



    constructor(obj = null) {
        
        if (obj == null) {
            return;
        }
        
        this.id = obj?.id ?? this.noId
        this.userType = obj?.user_type ?? this.noUserType
        this.firstName = obj?.first_name ?? this.noFirstName
        this.lastName = obj?.last_name ?? this.noLastName
        this.mobileNumber = obj?.mobile_phone ?? this.noNumber
        this.email = obj?.email ?? this.noEmail
        this.countryId = obj?.country_id ?? this.noCountryId
        this.cityId = obj?.city_id ?? this.noCityId
        this.jobTitle = obj?.job_title ?? this.noJobTitle
        this.token = obj?.token ?? this.noToken

    }
    
}
