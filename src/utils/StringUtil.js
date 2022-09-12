import { getRTL } from "../manager/AppConfig";
import { ARlabel, USlabel } from "./Messages";

let isRTL = getRTL();

export const Label = {
  HomeTitle: isRTL ? ARlabel._homeTitle : USlabel._homeTitle,
  SubnitIdea: isRTL ? ARlabel._subnitIdea : USlabel._subnitIdea,
  seeMore: isRTL ? ARlabel._seeMore : USlabel._seeMore,
  LogoTitle: isRTL ? ARlabel._logoTitle : USlabel._logoTitle,
  Innovation: isRTL ? ARlabel._innovation : USlabel._innovation,
  InnovationDetail: isRTL ? ARlabel._innovationDetail : USlabel._innovationDetail,
  NewWay: isRTL ? ARlabel._newWay : USlabel._newWay,
  SignInTitle: isRTL ? ARlabel._signInTitle : USlabel._signInTitle,
  MobileTitle: isRTL ? ARlabel._mobileTitle : USlabel._mobileTitle,
  Dot: isRTL ? ARlabel._dot : USlabel._dot,
  EmailTitle: isRTL ? ARlabel._emailTitle : USlabel._emailTitle,
  MobileNumber: isRTL ? ARlabel._mobileNumber : USlabel._mobileNumber,
  EmailAddress: isRTL ? ARlabel._emailAddress : USlabel._emailAddress,
  EnterOtpTitle: isRTL ? ARlabel._enterOtpTitle : USlabel._enterOtpTitle,
  GetText: isRTL ? ARlabel._getText : USlabel._getText,
  ResendOtpTitle: isRTL ? ARlabel._resendOtpTitle : USlabel._resendOtpTitle,
  ReceiveOtp: isRTL ? ARlabel._receiveOtp : USlabel._receiveOtp,
  UsePinTitle: isRTL ? ARlabel._usePinTitle : USlabel._usePinTitle,
  AddAccount: isRTL ? ARlabel._addAccount : USlabel._addAccount,
  GetAccount: isRTL ? ARlabel._getAccount : USlabel._getAccount,
  EnterPinTitle: isRTL ? ARlabel._enterPinTitle : USlabel._enterPinTitle,
  ForgotPassword: isRTL ? ARlabel._forgotPassword : USlabel._forgotPassword,
  UseOtpTitle: isRTL ? ARlabel.__useOtpTitle : USlabel.__useOtpTitle,
  ToLogin: isRTL ? ARlabel._toLogin : USlabel._toLogin,
  Email: isRTL ? ARlabel._email : USlabel._email,
  Phone: isRTL ? ARlabel._phone : USlabel._phone,
  PasswordLogin: isRTL ? ARlabel._passwordLogin : USlabel._passwordLogin,
  CorporateUser: isRTL ? ARlabel._corporateUser : USlabel._corporateUser,
  Pin: isRTL ? ARlabel._pin : USlabel._pin,
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
  expertInsights: isRTL ? ARlabel._expertInsights : USlabel._expertInsights,
  viewAll: isRTL ? ARlabel._viewAll : USlabel._viewAll,
  viewMore: isRTL ? ARlabel._viewMore : USlabel._viewMore,
  renewableEnergy: isRTL ? ARlabel._renewableEnergy : USlabel._renewableEnergy,
  health: isRTL ? ARlabel._health : USlabel._health,
  education: isRTL ? ARlabel._education : USlabel._education,
  favouriteCategories: isRTL ? ARlabel._favouriteCategories : USlabel._favouriteCategories,
  constructionInfrastructure: isRTL ? ARlabel._constructionInfrastructure : USlabel._constructionInfrastructure,
  agricultureFisheriesy: isRTL ? ARlabel._agricultureFisheriesy : USlabel._agricultureFisheriesy,
  aviation: isRTL ? ARlabel._aviation : USlabel._aviation,
  informationTechnology: isRTL ? ARlabel._informationTechnology : USlabel._informationTechnology,
  readyToSubmitYourIdea: isRTL ? ARlabel._readyToSubmitYourIdea : USlabel._readyToSubmitYourIdea,
  submitIdea: isRTL ? ARlabel._submitIdea : USlabel._submitIdea,
  SignUpVerifyTitle: isRTL ? ARlabel._signUpVerifyTitle : USlabel._signUpVerifyTitle,
  VerifyNumber: isRTL ? ARlabel._verifyNumber : USlabel._verifyNumber,
  OneTimePinDetail: isRTL ? ARlabel._oneTimePinDetail : USlabel._oneTimePinDetail,
  OneTimePassword: isRTL ? ARlabel._oneTimePassword : USlabel._oneTimePassword,
  ToMessage: isRTL ? ARlabel._toMessage : USlabel._toMessage,
  DefaultPhoneCode: isRTL ? ARlabel._defaultPhoneCode : USlabel._defaultPhoneCode,
  VerifyTitle: isRTL ? ARlabel._verifyTitle : USlabel._verifyTitle,
  Home: isRTL ? ARlabel._home : USlabel._home,
  Ideas: isRTL ? ARlabel._ideas : USlabel._ideas,
  PopularIdeas: isRTL ? ARlabel._popularIdeas : USlabel._popularIdeas,
  LatestIdeas: isRTL ? ARlabel._latestIdeas : USlabel._latestIdeas,
  MadarekSpotlight: isRTL ? ARlabel._madarekSpotlight : USlabel._madarekSpotlight,
  WinningIdeas: isRTL ? ARlabel._winningIdeas : USlabel._winningIdeas,
  Challenges: isRTL ? ARlabel._challenges : USlabel._challenges,
  Experts: isRTL ? ARlabel._experts : USlabel._experts,
  Enterprises: isRTL ? ARlabel._enterprises : USlabel._enterprises,
  HowitWorks: isRTL ? ARlabel._howitWorks : USlabel._howitWorks,
  Partners: isRTL ? ARlabel._partners : USlabel._partners,
  Settings: isRTL ? ARlabel._settings : USlabel._settings,
  Logout: isRTL ? ARlabel._logout : USlabel._logout,
  Dashboard: isRTL ? ARlabel._dashboard : USlabel._dashboard,
  SubmitIdea: isRTL ? ARlabel._submitIdea : USlabel._submitIdea,


  // Ideas: isRTL ? ARlabel._ideas : USlabel._ideas,
  SocialLine: isRTL ? ARlabel._socialLine : USlabel._socialLine,
  IdeaDetails: isRTL ? ARlabel._ideaDetails : USlabel._ideaDetails,
  AcademyDetails: isRTL ? ARlabel._academyDetails : USlabel._academyDetails,
  Sector: isRTL ? ARlabel._sector : USlabel._sector,
  Category: isRTL ? ARlabel._category : USlabel._category,
  VoteNow: isRTL ? ARlabel._voteNow : USlabel._voteNow,
  Description: isRTL ? ARlabel._description : USlabel._description,
  Team: isRTL ? ARlabel._team : USlabel._team,
  Resources: isRTL ? ARlabel._resources : USlabel._resources,
  Video: isRTL ? ARlabel._video : USlabel._video,
  ExpertDetails: isRTL ? ARlabel._expertDetails : USlabel._expertDetails,
  YouAreConnected: isRTL ? ARlabel._youAreConnected : USlabel._youAreConnected,
  About: isRTL ? ARlabel._about : USlabel._about,
  Publishby: isRTL ? ARlabel._publishby : USlabel._publishby,
  SimilarExperts: isRTL ? ARlabel._similarExperts : USlabel._similarExperts,
  LearnMore: isRTL ? ARlabel._learnMore : USlabel._learnMore,
  ApplyNow: isRTL ? ARlabel._applyNow : USlabel._applyNow,
  ExpertDes: isRTL ? ARlabel._expertDes : USlabel._expertDes,
  ExpertsDirectory: isRTL ? ARlabel._expertsDirectory : USlabel._expertsDirectory,
  SeeAllIdeas: isRTL ? ARlabel._seeAllIdeas : USlabel._seeAllIdeas,
  OpenChallenges: isRTL ? ARlabel._openChallenges : USlabel._openChallenges,
  ParticipateNow: isRTL ? ARlabel._participateNow : USlabel._participateNow,
  MadarekSpotlight: isRTL ? ARlabel._madarekSpotlight : USlabel._madarekSpotlight,
  Search: isRTL ? ARlabel._search : USlabel._search,
  Message: isRTL ? ARlabel._message : USlabel._message,
  PopularIdeas: isRTL ? ARlabel._popularIdeas : USlabel._popularIdeas,
  NewIdeas: isRTL ? ARlabel._newIdeas : USlabel._newIdeas,
  WinningIdeas: isRTL ? ARlabel._winningIdeas : USlabel._winningIdeas,
  All: isRTL ? ARlabel._all : USlabel._all,
  Latest: isRTL ? ARlabel._latest : USlabel._latest,
  Popular: isRTL ? ARlabel._popular : USlabel._popular,
  Winning: isRTL ? ARlabel._winning : USlabel._winning,
  UserDashboard: isRTL ? ARlabel._userDashboard : USlabel._userDashboard,
  ConnectedExperts: isRTL ? ARlabel._connectedExperts : USlabel._connectedExperts,
  PopularExperts: isRTL ? ARlabel._popularExperts : USlabel._popularExperts,
  MyIdeaJointRequest: isRTL ? ARlabel._myIdeaJointRequest : USlabel._myIdeaJointRequest,
  IdeaMaturation: isRTL ? ARlabel._ideaMaturation : USlabel._ideaMaturation,

  Accepted: isRTL ? ARlabel._accepted : USlabel._accepted,
  Rejected: isRTL ? ARlabel._rejected : USlabel._rejected,
  Completed: isRTL ? ARlabel._completed : USlabel._completed,
  SmeDashboard: isRTL ? ARlabel._smeDashboard : USlabel._smeDashboard,
  UserJoinRequest: isRTL ? ARlabel._userJoinRequest : USlabel._userJoinRequest,
  SubmitYourIdeas: isRTL ? ARlabel._submitYourIdeas : USlabel._submitYourIdeas,


  Challenges: isRTL ? ARlabel._challenges : USlabel._challenges,
  Open: isRTL ? ARlabel._open : USlabel._open,
  Upcoming: isRTL ? ARlabel._upcoming : USlabel._upcoming,
  Closed: isRTL ? ARlabel._closed : USlabel._closed,
  Voting: isRTL ? ARlabel._voting : USlabel._voting,

  ChallengeDetail: isRTL ? ARlabel._challengesDetail : USlabel._challengesDetail,
  OpenTitle: isRTL ? ARlabel._openButtonTitle : USlabel._openButtonTitle,
  Follow: isRTL ? ARlabel._follow : USlabel._follow,
  TermsAndCondition: isRTL ? ARlabel._termsAndCondition : USlabel._termsAndCondition,
  IdeaParticipate: isRTL ? ARlabel._ideaParticipate : USlabel._ideaParticipate,
  Participate: isRTL ? ARlabel._participate : USlabel._participate,
  ExpertsEngaged: isRTL ? ARlabel._expertsEngaged : USlabel._expertsEngaged,

  Announcement: isRTL ? ARlabel._announcement : USlabel._announcement,
  OpenForSubmissiom: isRTL ? ARlabel._openForSubmissiom : USlabel._openForSubmissiom,
  CloseForSubmission: isRTL ? ARlabel._closeForSubmission : USlabel._closeForSubmission,
  PublicEvaluation: isRTL ? ARlabel._publicEvaluation : USlabel._publicEvaluation,
  AwardAnnouncement: isRTL ? ARlabel._awardAnnouncement : USlabel._awardAnnouncement,

  Objective: isRTL ? ARlabel._objective : USlabel._objective,
  WhoParticipate: isRTL ? ARlabel._whoParticipate : USlabel._whoParticipate,
  Reward: isRTL ? ARlabel._reward : USlabel._reward,
  Schedule: isRTL ? ARlabel._schedule : USlabel._schedule,
  VotingMechanisam: isRTL ? ARlabel._votingMechanisam : USlabel._votingMechanisam,
  EvaluationPanel: isRTL ? ARlabel._evaluationPanel : USlabel._evaluationPanel,
  LoadMore: isRTL ? ARlabel._loadMore : USlabel._loadMore,
  Rank: isRTL ? ARlabel._rank : USlabel._rank,
  TotalScore: isRTL ? ARlabel._totalScore : USlabel._totalScore,
  Votes: isRTL ? ARlabel._votes : USlabel._votes,

  Sponsors: isRTL ? ARlabel._sponsors : USlabel._sponsors,
  EducationResearch: isRTL ? ARlabel._educationResearch : USlabel._educationResearch,

  English: isRTL ? ARlabel._english : USlabel._english,
  Arabic: isRTL ? ARlabel._arabic : USlabel._arabic,

  MyAccount: isRTL ? ARlabel._myAccount : USlabel._myAccount,

  UserProfile: isRTL ? ARlabel._userProfile : USlabel._userProfile,
  UpgradeUserType: isRTL ? ARlabel._upgradeUserType : USlabel._upgradeUserType,
  Payment: isRTL ? ARlabel._payment : USlabel._payment,
  Help: isRTL ? ARlabel._help : USlabel._help,

  UserType: isRTL ? ARlabel._userType : USlabel._userType,
  Name: isRTL ? ARlabel._name : USlabel._name,
  OrganizationName: isRTL ? ARlabel._organizationName : USlabel._organizationName,
  Organization: isRTL ? ARlabel._organization : USlabel._organization,
  JobTitle: isRTL ? ARlabel._jobTitle : USlabel._jobTitle,
  Country: isRTL ? ARlabel._country : USlabel._country,
  City: isRTL ? ARlabel._city : USlabel._city,
  CityValidate: isRTL ? ARlabel._cityValidate : USlabel._cityValidate,
  CountryValidate: isRTL ? ARlabel._countryValidate : USlabel._countryValidate,
  Categories: isRTL ? ARlabel._categories : USlabel._categories,
  InterestedCategories: isRTL ? ARlabel._interestedCategories : USlabel._interestedCategories,
  ShortDiscription: isRTL ? ARlabel._shortDiscription : USlabel._shortDiscription,
  FacebookLink: isRTL ? ARlabel._facebookLink : USlabel._facebookLink,
  TwitterLink: isRTL ? ARlabel._twitterLink : USlabel._twitterLink,
  LinkdinLink: isRTL ? ARlabel._linkdinLink : USlabel._linkdinLink,
  AboutExpert: isRTL ? ARlabel._aboutExpert : USlabel._aboutExpert,
  Description: isRTL ? ARlabel._description : USlabel._description,

  ChallengesTheIdeaIsAddressing: isRTL ? ARlabel._challengesTheIdeaIsAddressing : USlabel._challengesTheIdeaIsAddressing,
  BenefitsOfIdeaImplementation: isRTL ? ARlabel._benefitsOfIdeaImplementation : USlabel._benefitsOfIdeaImplementation,

  AddMore: isRTL ? ARlabel._addMore : USlabel._addMore,
  Submit: isRTL ? ARlabel._submit : USlabel._submit,

  ParticipateNow: isRTL ? ARlabel._participateNow : USlabel._participateNow,
  ModalTitleChallenge: isRTL ? ARlabel._modalTitleChallenge : USlabel._modalTitleChallenge,
  SelectArea: isRTL ? ARlabel._selectArea : USlabel._selectArea,
  SubmitYourIdea: isRTL ? ARlabel._submitYourIdea : USlabel._submitYourIdea,

  SelectLanguage: isRTL ? ARlabel._selectLanguage : USlabel._selectLanguage,
  English: isRTL ? ARlabel._english : USlabel._english,
  Arabic: isRTL ? ARlabel._arabic : USlabel._arabic,

  FillMandatoryFieldsValidation: isRTL ? ARlabel._fillMandatoryFieldsValidation : USlabel._fillMandatoryFieldsValidation,
  IdeaTitle: isRTL ? ARlabel._ideaTitle : USlabel._ideaTitle,
  Sectors: isRTL ? ARlabel._sectors : USlabel._sectors,
  Category: isRTL ? ARlabel._category : USlabel._category,
  SubCategory: isRTL ? ARlabel._subCategory : USlabel._subCategory,
  Gender: isRTL ? ARlabel._gender : USlabel._gender,
  Male: isRTL ? ARlabel._male : USlabel._male,
  Female: isRTL ? ARlabel._female : USlabel._female,
  Other: isRTL ? ARlabel._other : USlabel._other,
  AlternateMobileNo: isRTL ? ARlabel._alternateMobileNo : USlabel._alternateMobileNo,
  Nationality: isRTL ? ARlabel._nationality : USlabel._nationality,
  UploadedImages: isRTL ? ARlabel._uploadedImages : USlabel._uploadedImages,

  Parners: isRTL ? ARlabel._parners : USlabel._parners,
  BecomeAnExpert: isRTL ? ARlabel._becomeAnExpert : USlabel._becomeAnExpert,
  WantBecomeExpert: isRTL ? ARlabel._wantBecomeExpert : USlabel._wantBecomeExpert,
  ApplyNow: isRTL ? ARlabel._applyNow : USlabel._applyNow,

  MarkallasRead: isRTL ? ARlabel._markallasRead : USlabel._markallasRead,
  NewNotifications: isRTL ? ARlabel._newNotifications : USlabel._newNotifications,
  ClearAll: isRTL ? ARlabel._clearAll : USlabel._clearAll,
  BecomeAnExpert: isRTL ? ARlabel._becomeAnExpert : USlabel._becomeAnExpert,
  Clear: isRTL ? ARlabel._clear : USlabel._clear,
  Notifications: isRTL ? ARlabel._notifications : USlabel._notifications,
  NotNow: isRTL ? ARlabel._notNow : USlabel._notNow,
  Update: isRTL ? ARlabel._update : USlabel._update,
  Accept: isRTL ? ARlabel._accept : USlabel._accept,
  Reject: isRTL ? ARlabel._reject : USlabel._reject,
  SignUpVerification: isRTL ? ARlabel._signUpVerification : USlabel._signUpVerification,
  SearchCategory: isRTL ? ARlabel._searchCategory : USlabel._searchCategory,
  UserCategories: isRTL ? ARlabel._userCategories : USlabel._userCategories,

  Expertise: isRTL ? ARlabel._expertise : USlabel._expertise,
  Skill: isRTL ? ARlabel._skill : USlabel._skill,
  Biography: isRTL ? ARlabel._biography : USlabel._biography,

  SaveAndNext: isRTL ? ARlabel._saveAndNext : USlabel._saveAndNext,
  MayAlsoInterested: isRTL ? ARlabel._mayAlsoInterested : USlabel._mayAlsoInterested,

  Maturation: isRTL ? ARlabel._maturation : USlabel._maturation,
  MySubmitIdea: isRTL ? ARlabel._mySubmitIdea : USlabel._mySubmitIdea,
  Filter: isRTL ? ARlabel._filter : USlabel._filter,
  WriteReply: isRTL ? ARlabel._writeReply : USlabel._writeReply,
  Online: isRTL ? ARlabel._online : USlabel._online,
  EditIdea: isRTL ? ARlabel._editIdea : USlabel._editIdea,

  NotificationsSettings: isRTL ? ARlabel._notificationsSettings : USlabel._notificationsSettings,
  AllNotifications: isRTL ? ARlabel._allNotifications : USlabel._allNotifications,
  UserNotifications: isRTL ? ARlabel._userNotifications : USlabel._userNotifications,
  CollaborateNotifications: isRTL ? ARlabel._collaborateNotifications : USlabel._collaborateNotifications,
  ExpertNotifications: isRTL ? ARlabel._expertNotifications : USlabel._expertNotifications,
  IdeaNotifications: isRTL ? ARlabel._ideaNotifications : USlabel._ideaNotifications,

  ExpertInsightsDetail: isRTL ? ARlabel._expertInsightsDetail : USlabel._expertInsightsDetail,
  OrganizationName: isRTL ? ARlabel._organizationName : USlabel._organizationName,
  JobTilte: isRTL ? ARlabel._enterJobTitle : USlabel._enterJobTitle,
  City: isRTL ? ARlabel._city : USlabel._city,
  Country: isRTL ? ARlabel._country : USlabel._country,
  UpdateProfie: isRTL ? ARlabel._updateProfie : USlabel._updateProfie,
  ExpertInsight: isRTL ? ARlabel._expertInsight : USlabel._expertInsight,
  Approved: isRTL ? ARlabel._approved : USlabel._approved,
  TeamCollaboration: isRTL ? ARlabel._teamCollaboration : USlabel._teamCollaboration,
  ParticipateIdeas: isRTL ? ARlabel._participateIdeas : USlabel._participateIdeas,
  Browse: isRTL ? ARlabel._browse : USlabel._browse,
  LibraryImage: isRTL ? ARlabel._libraryImage : USlabel._libraryImage,
  ErrorMessage: isRTL ? ARlabel._errorMessage : USlabel._errorMessage,
  MB: isRTL ? ARlabel._mB : USlabel._mB,
  SignInCorporateUser: isRTL ? ARlabel._signInCorporateUser : USlabel._signInCorporateUser,
  RestartApp: isRTL ? ARlabel._restartApp : USlabel._restartApp,
  NoDataFound: isRTL ? ARlabel._noDataFound : USlabel._noDataFound,
  ChangePassword: isRTL ? ARlabel._changePassword : USlabel._changePassword,
  Language: isRTL ? ARlabel._language : USlabel._language,
  Personal: isRTL ? ARlabel._personal : USlabel._personal,
  OtherDetail: isRTL ? ARlabel._otherDetail : USlabel._otherDetail,
  Expert: isRTL ? ARlabel._expert : USlabel._expert,
  TypeToSearch: isRTL ? ARlabel._typeToSearch : USlabel._typeToSearch,
  IdeasSearch: isRTL ? ARlabel._ideasSearch : USlabel._ideasSearch,
  ChallengeSearch: isRTL ? ARlabel._challengeSearch : USlabel._challengeSearch,
  ExpertDirectorySearch: isRTL ? ARlabel._expertDirectorySearch : USlabel._expertDirectorySearch,
  ExpertInsightSearch: isRTL ? ARlabel._expertInsightSearch : USlabel._expertInsightSearch,
  SortBy: isRTL ? ARlabel._sortBy : USlabel._sortBy,
  Default: isRTL ? ARlabel._default : USlabel._default,
  FilterAscending: isRTL ? ARlabel._filterAscending : USlabel._filterAscending,
  FilterDescending: isRTL ? ARlabel._filterDescending : USlabel._filterDescending,
  ApplyFilter: isRTL ? ARlabel._applyFilter : USlabel._applyFilter,
  Favourite: isRTL ? ARlabel._favourite : USlabel._favourite,
  Welcome: isRTL ? ARlabel._welcome : USlabel._welcome,
  Selected: isRTL ? ARlabel._selected : USlabel._selected,
  NoTitle: isRTL ? ARlabel._noTitle : USlabel._noTitle,
  NoCategoryName: isRTL ? ARlabel._noCategoryName : USlabel._noCategoryName,
  NoName: isRTL ? ARlabel._noName : USlabel._noName,
  NoStatus: isRTL ? ARlabel._noStatus : USlabel._noStatus,
  NoTitle: isRTL ? ARlabel._noTitle : USlabel._noTitle,
  NoDescription: isRTL ? ARlabel._noDescription : USlabel._noDescription,
  DefaultDate: isRTL ? ARlabel._defaultDate : USlabel._defaultDate,
  DefaultNumber: isRTL ? ARlabel._defaultNumber : USlabel._defaultNumber,
  NoFirstName: isRTL ? ARlabel._noFirstName : USlabel._noFirstName,
  NoLastName: isRTL ? ARlabel._noLastName : USlabel._noLastName,
  NoOrganizationName: isRTL ? ARlabel._noOrganizationName : USlabel._noOrganizationName,
  NoSector: isRTL ? ARlabel._noSector : USlabel._noSector,
  NoCategory: isRTL ? ARlabel._noCategory : USlabel._noCategory,
  NoInformation: isRTL ? ARlabel._noInformation : USlabel._noInformation,
  NoMadarekSpecial: isRTL ? ARlabel._noMadarekSpecial : USlabel._noMadarekSpecial,
  NoMessage: isRTL ? ARlabel._noMessage : USlabel._noMessage,
  DefaultTime: isRTL ? ARlabel._defaultTime : USlabel._defaultTime,
  NoEmail: isRTL ? ARlabel._noEmail : USlabel._noEmail,
  NoFavoriteContest: isRTL ? ARlabel._noFavoriteContest : USlabel._noFavoriteContest,
  NoType: isRTL ? ARlabel._noType : USlabel._noType,
  NoReward: isRTL ? ARlabel._noReward : USlabel._noReward,
  NoData: isRTL ? ARlabel._noData : USlabel._noData,
  NoObjective: isRTL ? ARlabel._noObjective : USlabel._noObjective,
  NoPassword: isRTL ? ARlabel._noPassword : USlabel._noPassword,
  NoAbout: isRTL ? ARlabel._noAbout : USlabel._noAbout,
  NoSkill: isRTL ? ARlabel._noSkill : USlabel._noSkill,
  URL : isRTL ? ARlabel._url : USlabel._url,
  CorporateSubDomain : isRTL ? ARlabel._corporateSubDomain : USlabel._corporateSubDomain,
  AddImage : isRTL ? ARlabel._addImage : USlabel._addImage,
  AddVideo : isRTL ? ARlabel._addVideo : USlabel._addVideo,
  AddFile : isRTL ? ARlabel._addFile : USlabel._addFile,

  IdeaCoverImage : isRTL ? ARlabel._ideaCoverImage : USlabel._ideaCoverImage,
  UploadAdditionalImage : isRTL ? ARlabel._uploadAdditionalImage : USlabel._uploadAdditionalImage,
  AllowImageSize : isRTL ? ARlabel._allowImageSize : USlabel._allowImageSize,
  IdeaName : isRTL ? ARlabel._ideaName : USlabel._ideaName,
  Private : isRTL ? ARlabel._private : USlabel._private,
  Public : isRTL ? ARlabel._public : USlabel._public,
  ChallengesIdeaAddressing : isRTL ? ARlabel._challengesIdeaAddressing : USlabel._challengesIdeaAddressing,
  AddMore : isRTL ? ARlabel._addMore : USlabel._addMore,
  AllowVideoformats : isRTL ? ARlabel._allowVideoformats : USlabel._allowVideoformats,
  Add : isRTL ? ARlabel._add : USlabel._add,
  AllowDocFormats : isRTL ? ARlabel._allowDocFormats : USlabel._allowDocFormats,
  AddMember : isRTL ? ARlabel._addMember : USlabel._addMember,
  HideTeamIdentity : isRTL ? ARlabel._hideTeamIdentity : USlabel._hideTeamIdentity,
  PostIdeaPrivately : isRTL ? ARlabel._postIdeaPrivately : USlabel._postIdeaPrivately,
  OptionWillLimit : isRTL ? ARlabel._optionWillLimit : USlabel._optionWillLimit,
  AddMember : isRTL ? ARlabel._addMember : USlabel._addMember,
  AddPhoto : isRTL ? ARlabel._addPhoto : USlabel._addPhoto,
  PlusSign : isRTL ? ARlabel._plusSign : USlabel._plusSign,

  Contest : isRTL ? ARlabel._contest : USlabel._contest,
  General : isRTL ? ARlabel._general : USlabel._general,
  RecordsFound : isRTL ? ARlabel._recordsFound : USlabel._recordsFound,
  ChangePassWordHeader : isRTL ? ARlabel._changePassWordHeader : USlabel._changePassWordHeader,
  
  OldPassword : isRTL ? ARlabel._oldPassword : USlabel._oldPassword,
  NewPassword : isRTL ? ARlabel._newPassword : USlabel._newPassword,
  ConfirmPassword : isRTL ? ARlabel._confirmPassword : USlabel._confirmPassword,

  OldPasswordIncorrect : isRTL ? ARlabel._oldPasswordIncorrect : USlabel._oldPasswordIncorrect,
  NewPasswordIncorrect : isRTL ? ARlabel._newPasswordIncorrect : USlabel._newPasswordIncorrect,
  ChangePasswordSuccess : isRTL ? ARlabel._changePasswordSuccess : USlabel._changePasswordSuccess,
  Share : isRTL ? ARlabel._share : USlabel._share,
  ExpertsProfile : isRTL ? ARlabel._expertsProfile : USlabel._expertsProfile,
  ContestDetail : isRTL ? ARlabel._contestDetail : USlabel._contestDetail,
  ExpertiseBrief : isRTL ? ARlabel._expertiseBrief : USlabel._expertiseBrief,

  RequestDone : isRTL ? ARlabel._requestDone : USlabel._requestDone,
  Connect : isRTL ? ARlabel._connect : USlabel._connect,
  RequestRejected : isRTL ? ARlabel._requestRejected : USlabel._requestRejected,
  LogOutCall : isRTL ? ARlabel._logOutCall : USlabel._logOutCall,
  UserRequest : isRTL ? ARlabel._userRequest : USlabel._userRequest,
  NoJoinRequest : isRTL ? ARlabel._noJoinRequest : USlabel._noJoinRequest,
  Comment : isRTL ? ARlabel._comment : USlabel._comment,
  CommentRequired : isRTL ? ARlabel._commentRequired : USlabel._commentRequired,
  Replay : isRTL ? ARlabel._replay : USlabel._replay,
  NoNotifications : isRTL ? ARlabel._noNotifications : USlabel._noNotifications,
  NoSubCategory : isRTL ? ARlabel._noSubCategory : USlabel._noSubCategory,
  SpotlightDetail : isRTL ? ARlabel._spotlightDetail : USlabel._spotlightDetail,
  PublishDate : isRTL ? ARlabel._publishDate : USlabel._publishDate,
  By : isRTL ? ARlabel._by : USlabel._by,
  SpotlightKeywords : isRTL ? ARlabel._spotlightKeywords : USlabel._spotlightKeywords,
  Meta : isRTL ? ARlabel._meta : USlabel._meta,
  SpotlightDescription : isRTL ? ARlabel._spotlightDescription : USlabel._spotlightDescription,
  Spotlight : isRTL ? ARlabel._spotlight : USlabel._spotlight,


}  