import axios, { AxiosRequestConfig } from "axios";

const baseURL = "/api/";

const axiosInstance = axios.create({
  baseURL,
  timeout: 3000,
});

//添加请求拦截器
axiosInstance.interceptors.request.use(
  function (config) {
    //在发送请求之前做某事
    console.log(config);
    return config;
  },
  function (error) {
    //请求错误时做些事
    return Promise.reject(error);
  },
);

//添加响应拦截器
axiosInstance.interceptors.response.use(
  function (response) {
    //对响应数据做些事
    return response.data;
  },
  function (error) {
    //请求错误时做些事
    console.log(error);
    return Promise.reject(error);
  },
);

class httpClient {
  delete<T>(url: string, params?: AxiosRequestConfig): Promise<T> {
    return axiosInstance.delete(url, params);
  }
  put<T>(url: string, params?: AxiosRequestConfig): Promise<T> {
    return axiosInstance.put(url, params);
  }
  get<T>(url: string, params?: AxiosRequestConfig): Promise<T> {
    return axiosInstance.get(url, params);
  }
  post<T>(url: string, params?: AxiosRequestConfig): Promise<T> {
    return axiosInstance.post(url, params);
  }
}

export default new httpClient();
