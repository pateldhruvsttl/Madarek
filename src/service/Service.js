import axios from 'axios';
import { AppUtil } from '../utils/AppUtil';
import { Loger } from '../utils/Loger';

const axiosInstance = axios.create();
const baseURL = 'http://madarek.php-staging.com/apiv1/';
axios.defaults.headers.common['Authorization'] = "";
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';


export const Service = {
    get: (endPoint, success, error) => {
        Loger.onServerLog("Req",baseURL+endPoint,"");
        axios.get(baseURL+endPoint).then((response) =>{
            Loger.onServerLog("Res",baseURL+endPoint,success(response.data));
             success(response.data)
            }).catch((err)=>error(err));
    },
    post: (endPoint,params, success, error) => {
        Loger.onServerLog("Req",baseURL+endPoint,params);

        AppUtil.onLoding(true);

        axios.post(baseURL+endPoint, params).then((response) => {
            Loger.onServerLog("Res",baseURL+endPoint,response.data);
            AppUtil.onLoding(false);
            return success(response.data)
        }).catch((err)=>{
            AppUtil.onLoding(false);
            return error(err)
        });  
    },
    
      
}
// axios.interceptors.request.use(config => {
//     // perform a task before the request is sent
//     console.log('Request was sent',config);
  
//     return config;
//   }, error => {
//     // handle the error
//     console.log('Request was errror', error);

//     return Promise.reject(error);
//   });

//   axios.interceptors.response.use((response) => {
//     // do something with the response data
//     console.log('Response was received', response);
  
//     return response;
//   }, error => {
//     // handle the response error
//     console.log('Response was error', error);

//     return Promise.reject(error);
//   });