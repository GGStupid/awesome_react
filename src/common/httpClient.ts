import store from "@src/store";
import axios, { AxiosRequestConfig } from "axios";

const baseURL = "/api/";

const axiosInstance = axios.create({
  baseURL,
  timeout: 3000,
});

//添加请求拦截器
axiosInstance.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    console.log(config);
    config.headers["X-token"] = "adsf";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

//添加响应拦截器
axiosInstance.interceptors.response.use(
  function (response: AxiosRequestConfig) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);

interface IData<T> {
  success: boolean;
  data: T;
}

class httpClient {
  delete<T>(url: string, data?: any): Promise<IData<T>> {
    return axiosInstance.delete(url, { params: data });
  }
  put<T>(url: string, data?: any): Promise<IData<T>> {
    return axiosInstance.put(url, data);
  }
  get<T>(url: string, data?: any): Promise<IData<T>> {
    return axiosInstance.get(url, { params: data });
  }
  post<T>(url: string, data?: any): Promise<IData<T>> {
    return axiosInstance.post(url, data);
  }
}

export default new httpClient();
