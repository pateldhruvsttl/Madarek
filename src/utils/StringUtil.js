import { baseUrl, isRTL } from "./Constant";
import { ARlabel, USlabel} from "./Messages";

export const Label = {
    HomeTitle: isRTL ? ARlabel._homeTitle : USlabel._homeTitle,
    SubnitIdea: isRTL ? ARlabel._subnitIdea : USlabel._subnitIdea,
    CatTitle: isRTL ? ARlabel._catTitle : USlabel._catTitle,
    Skip:isRTL ? ARlabel._skip : USlabel._skip,
    WhatdoyouPrefertosee:isRTL ? ARlabel._whatdoyouPrefertosee : USlabel._whatdoyouPrefertosee,
    Continue:isRTL ? ARlabel._continue : USlabel._continue,
}


