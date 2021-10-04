import {AxiosRequestConfig} from "axios";
import {init} from '../BaseService';

const basicConfig: AxiosRequestConfig = {
    responseType: 'json',
};

export const dogAxiosInstance = init(basicConfig, []);