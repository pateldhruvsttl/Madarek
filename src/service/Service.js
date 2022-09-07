import axios from 'axios';
import { AppConfig, getBaseURL } from '../manager/AppConfig';
import { AppUtil } from '../utils/AppUtil';
import { Loger } from '../utils/Loger';
import { Buffer } from 'buffer'

const token = Buffer.from('admin:admin123', 'utf8').toString('base64')
const axiosInstance = axios.create();
axios.defaults.headers.common['Authorization'] = "";
// axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

export const Service = {

    get: (endPoint, success, error) => {
        AppUtil.onLoding(true);
        Loger.onServerLog("Req", getBaseURL() + endPoint, "Get Method");

        axios.get(getBaseURL() + endPoint, { headers: { 'Authorization': `Basic ${token}` } }).then((response) => {
            AppUtil.onLoding(false);
            Loger.onServerLog("Res", getBaseURL() + endPoint, response.data);
            success(response.data)
        }).catch((err) => error(err));
    },

    post: (endPoint, params, success, error) => {
        AppUtil.onLoding(true);
        Loger.onServerLog("Req", getBaseURL() + endPoint, params);

        AppUtil.onLoding(true);

        axios.post(getBaseURL() + endPoint, params, { headers: { 'Authorization': `Basic ${token}` } }).then((response) => {
            AppUtil.onLoding(false);
            Loger.onServerLog("Res", getBaseURL() + endPoint, response.data);
            AppUtil.onLoding(false);
            return success(response.data)

        }).catch((err) => {
            AppUtil.onLoding(false);
            return error(err)
        });
    },


}