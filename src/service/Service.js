import axios from 'axios';
import { AppUtil } from '../utils/AppUtil';
import { Loger } from '../utils/Loger';

const axiosInstance = axios.create();
const baseURL = 'http://madarek.php-staging.com/apiv1/';

axios.defaults.headers.common['Authorization'] = "";
// axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

export const Service = {
    get: (endPoint, success, error) => {
        AppUtil.onLoding(true);
        Loger.onServerLog("Req",baseURL+endPoint,"Get Method");

        axios.get(baseURL+endPoint).then((response) =>{
            AppUtil.onLoding(false);
            Loger.onServerLog("Res",baseURL+endPoint,response.data);
             success(response.data) 
            }).catch((err)=>error(err));
    },

    post: (endPoint,params, success, error) => {
        AppUtil.onLoding(true);
        Loger.onServerLog("Req",baseURL+endPoint,params);

        AppUtil.onLoding(true);

        axios.post(baseURL+endPoint, params).then((response) => {
            AppUtil.onLoding(false);
            Loger.onServerLog("Res",baseURL+endPoint,response.data);
            AppUtil.onLoding(false);
            return success(response.data)
            
        }).catch((err)=>{
            AppUtil.onLoding(false);
            return error(err)
        });  
    },
    
      
}