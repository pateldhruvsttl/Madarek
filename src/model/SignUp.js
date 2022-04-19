export default class SignUp {

    static noMessage = "";
    static noUserType = "";
    static noDeviceId = "";
    static noFirstName = "";
    static noLastName = "";
    static noJobTitle = "";
    static noCountryId = "";
    static noCityId = "";
    static noEmail = "";
    static noPassword = "";
    static noMobileNumber = "";
    static noToken = "";
    static noId = "";


    constructor(obj = null) {
        
        if (obj == null) {
            return;
        }
        
        this.message = obj?.message ?? this.noMessage
        this.userType = obj?.user_type ?? this.noUserType
        this.deviceId = obj?.device_id ?? this.noDeviceId
        this.firstName = obj?.first_name ?? this.noFirstName
        this.lastName = obj?.last_name ?? this.noLastName
        this.jobTitle = obj?.job_title ?? this.noJobTitle
        this.countryId = obj?.country_id ?? this.noCountryId
        this.cityId = obj?.city_id ?? this.noCityId
        this.email = obj?.email ?? this.noEmail
        this.password = obj?.pwd ?? this.noPassword
        this.mobileNumber = obj?.mobile_phone ?? this.noMobileNumber
        this.token = obj?.token ?? this.noToken
        this.id = obj?.id ?? this.noId

    }
    
}
