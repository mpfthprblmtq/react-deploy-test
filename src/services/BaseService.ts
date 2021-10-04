import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {defer, Observable} from "rxjs";

declare module 'axios' {
    interface AxiosRequestConfig {
        genericUrl?: string;
    }
}

const init = (
    config: AxiosRequestConfig,
    requestInterceptors?: ((value: AxiosRequestConfig) => AxiosRequestConfig)[]
): AxiosInstance => {
    const instance = axios.create(config);

    if (requestInterceptors && requestInterceptors.length > 0) {
        for (const interceptor of requestInterceptors) {
            instance.interceptors.request.use(interceptor);
        }
    }
    return instance;
}

const get = <T>(
    axiosInstance: AxiosInstance,
    url: string,
    config?: AxiosRequestConfig
): Observable<AxiosResponse<T>> => {
    return defer(() => axiosInstance.get<T>(url, config));
};

export { get, init };
