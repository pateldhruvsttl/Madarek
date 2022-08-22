import { Label } from "../utils/StringUtil";

export default class City {
	
    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.id = obj?.id
        this.city = obj?.city || ""
        this.country = obj?.country || ""
        this.isoCodeOne = obj?.iso2  || Label.DefaultNumber
        this.isoCodeSecond= obj?.iso3  ||  Label.DefaultNumber
    }
}