export const AppConfig = {
    baseURL:'http://madarek.php-staging.com/apiv1/',
    imageBaseURL: "http://madarekdev.silvertouch-staging.com/webroot/Default/assets/front/",
    token: '',
    lang: '',
    pageLimit: '10',
    isRTL:false,
    
}
export const  setLanguage = (value) => {
    AppConfig.lang = value;
}
export const getLanguage = () => {
    return AppConfig.lang;
}
export const getRTL = ()=>{
    return AppConfig.lang == "ar" ? true : false;
}
export const setBaseURL = (value) => {
    AppConfig.baseURL = value;
}
export const getBaseURL = () => {
    return AppConfig.baseURL;
}


