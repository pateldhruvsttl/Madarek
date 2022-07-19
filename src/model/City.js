export default class City {
	
    constructor(obj = null) {

        if (obj == null) {
            return;
        }

        this.id = obj?.id
        this.city = obj?.city || "No Name"
        this.country = obj?.country || "No Name"
        this.isoCodeOne = obj?.iso2  || "0"
        this.isoCodeSecond= obj?.iso3  || "0"
    }
}