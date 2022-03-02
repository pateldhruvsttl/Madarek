import { baseUrl, isRTL } from "./Constant";
import { ARlabel, USlabel } from "./Messages";

export const Label = {
    HomeTitle: isRTL ? ARlabel.homeTitle : USlabel._homeTitle,
    SubnitIdea: isRTL ? ARlabel._subnitIdea : USlabel._subnitIdea,
    CatTitle: isRTL ? ARlabel._catTitle : USlabel._catTitle,
    Skip: isRTL ? ARlabel._skip : USlabel._skip,
    WhatdoyouPrefertosee: isRTL ? ARlabel._whatdoyouPrefertosee : USlabel._whatdoyouPrefertosee,
    Continue: isRTL ? ARlabel._continue : USlabel._continue,
    SignupTitle: isRTL ? ARlabel._signupTitle : USlabel._signupTitle,
    selectusertype: isRTL ? ARlabel._selectusertype : USlabel._selectusertype,
    individual: isRTL ? ARlabel._individual : USlabel._individual,
    corporate: isRTL ? ARlabel._corporate : USlabel._corporate,
    subjectexpert: isRTL ? ARlabel._subjectexpert : USlabel._subjectexpert,
    partner: isRTL ? ARlabel._partner : USlabel._partner,
    firstname: isRTL ? ARlabel._firstname : USlabel._firstname,
    lastname: isRTL ? ARlabel._lastname : USlabel._lastname,
    mobilenumber: isRTL ? ARlabel._mobilenumber : USlabel._mobilenumber,
    emailID: isRTL ? ARlabel._emailID : USlabel._emailID,
    password: isRTL ? ARlabel._password : USlabel._password,
    retypepassword: isRTL ? ARlabel._retypepassword : USlabel._retypepassword,

    enterfirstname: isRTL ? ARlabel._enterfirstname : USlabel._enterfirstname,
    enterlastname: isRTL ? ARlabel._enterlastname : USlabel._enterlastname,
    entermobilenumber: isRTL ? ARlabel._entermobilenumber : USlabel._entermobilenumber,
    enteremail: isRTL ? ARlabel._enteremail : USlabel._enteremail,
    enterpassword: isRTL ? ARlabel._enterpassword : USlabel._enterpassword,
    enterretypePassword: isRTL ? ARlabel._enterretypePassword : USlabel._enterretypePassword,
    enterSamePassword: isRTL ? ARlabel._enterSamePassword : USlabel._enterSamePassword,
}


