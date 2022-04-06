import axios from 'axios';

const axiosInstance = axios.create();
const baseURL = 'http://madarek.php-staging.com/apiv1/';
axios.defaults.headers.common['Authorization'] = "";
axios.defaults.headers.post['Content-Type'] = 'application/json';


export const Service = {
    get: (endPoint, success, error) => {
        axios.get(baseURL+endPoint).then((response) => success(response.data)).catch((err)=>error(err));
    },
    post: (endPoint,params, success, error) => {
        // console.log("base url", axios.defaults.baseURL);
        axios.post(baseURL+endPoint, params).then((response) => {
           return success(response.data)
        }).catch((err)=>{
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