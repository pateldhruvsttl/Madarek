export default class Country {
	
    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.id = obj?.id
        this.countryName = obj?.country_name || "No Name"
        this.countryCode = obj?.country_code || "0"
        this.isoCode = obj?.iso_code  || "0"
    }
}