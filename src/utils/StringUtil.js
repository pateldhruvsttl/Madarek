import { baseUrl, isRTL } from "./Constant";
import { ARlabel, USlabel} from "./Messages";

export const Label = {
    HomeTitle: isRTL ? ARlabel._homeTitle : USlabel._homeTitle,
    SubnitIdea: isRTL ? ARlabel._subnitIdea : USlabel._subnitIdea,
}


