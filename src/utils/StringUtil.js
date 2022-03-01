import { baseUrl, isRTL } from "./Constant";
import { ARlabel, USlabel} from "./Messages";

export const Label = {
    HomeTitle: isRTL ? ARlabel._homeTitle : USlabel._homeTitle,
    SubnitIdea: isRTL ? ARlabel._subnitIdea : USlabel._subnitIdea,
    LogoTitle: isRTL ?  ARlabel._logoTitle : USlabel._logoTitle,
    InnovationDetail: isRTL ? ARlabel._innovationDetail : USlabel._innovationDetail,
    SignInTitle: isRTL ? ARlabel._signInTitle : USlabel._signInTitle,
    MobileTitle: isRTL ? ARlabel._mobileTitle : USlabel._mobileTitle,
    EmailTitle: isRTL ? ARlabel._emailTitle : USlabel._emailTitle,
    MobileNumber: isRTL ? ARlabel._mobileNumber : USlabel._mobileNumber,
    EmailAddress: isRTL ? ARlabel._emailAddress : USlabel._emailAddress,
    EnterOtpTitle: isRTL ? ARlabel._enterOtpTitle : USlabel._enterOtpTitle,
    GetOtpTitle: isRTL ? ARlabel._getOtpTitle : USlabel._getOtpTitle,
    ResendOtpTitle: isRTL ? ARlabel._resendOtpTitle : USlabel._resendOtpTitle,
    ReceiveOtp: isRTL ? ARlabel._receiveOtp : USlabel._receiveOtp,
    UsePinTitle: isRTL ? ARlabel._usePinTitle : USlabel._usePinTitle,
    AddAccount: isRTL ? ARlabel._addAccount : USlabel._addAccount,
    GetAccount: isRTL ? ARlabel._getAccount : USlabel._getAccount,
    EnterPinTitle: isRTL ? ARlabel._enterPinTitle : USlabel._enterPinTitle,
    NumberCode: isRTL ? ARlabel._numberCode : USlabel._numberCode,
}



