export const AppConfig = {
    baseURL: 'http://madarek.php-staging.com/apiv1/',
    imageBaseURL: "http://madarekdev.silvertouch-staging.com/webroot/Default/assets/front/",
    token: '',
    lang: '',
    pageLimit: '10',
    isRTL:false,
    
    setLanguage: (value) => {
        lang = value;
    },
    getLanguage: () => {
        return lang;
    },
    getRTL:()=>{
        return lang == "ar" ? true : false;
    }
}


