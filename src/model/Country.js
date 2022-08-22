import { Label } from "../utils/StringUtil";

export default class Country {
	
    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.id = obj?.id
        this.countryName = obj?.country_name || Label.NoName
        this.countryCode = obj?.country_code ||  Label.DefaultNumber
        this.isoCode = obj?.iso_code  ||  Label.DefaultNumber
    }
}