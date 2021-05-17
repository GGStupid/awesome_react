import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CancelTokenStatic,
} from "axios";
import Toast from "@src/components/Toast";

interface IData<T> {
  success: boolean;
  data: T;
}
class HttpClient {
  baseUrl = "/api/";
  CancelToken: CancelTokenStatic = axios.CancelToken;
  axiosRequestConfig: AxiosRequestConfig = {};
  successCode: number[] = [200, 201, 204];
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
      timeout: 3000,
      headers: {
        timestamp: new Date().getTime(),
      },
      withCredentials: true,
    });
    this.interceptorsRequest();
    this.interceptorsResponse();
  }

  private interceptorsRequest() {
    if (this.axiosInstance) {
      this.axiosInstance.interceptors.request.use(
        (config: AxiosRequestConfig) => {
          return config;
        },
        (error) => {
          return Promise.reject(error);
        },
      );
    }
  }
  private interceptorsResponse() {
    if (this.axiosInstance) {
      this.axiosInstance.interceptors.response.use(
        (response: AxiosResponse) => {
          this.responseLog(response);

          if (!this.successCode.includes(response.status)) {
            throw response;
          }

          if (!response.data.success) {
            console.log(!response.data.success, response.data);
            Toast.warning(response.data.message);
            // Promise.reject(response.data);
            throw new Error(response.data.message);
          }

          return response.data;
        },
        (error) => {
          console.log(">>>>>>", error);
          Toast.error(error.message || "出错了，请稍后再试");
          return Promise.reject(error);
        },
      );
    }
  }

  private responseLog(response: AxiosResponse) {
    if (process.env.NODE_ENV === "development") {
      const randomColor = `rgba(${Math.round(Math.random() * 255)},${Math.round(
        Math.random() * 255,
      )},${Math.round(Math.random() * 255)})`;
      console.log(
        "%c┍------------------------------------------------------------------┑",
        `color:${randomColor};`,
      );
      console.log("| 请求地址：", response.config.url);
      console.log("| 请求方式：", response.config.method);
      console.log("| 返回数据：", response.data);
      console.log(
        "%c┕------------------------------------------------------------------┙",
        `color:${randomColor};`,
      );
    }
  }

  delete<T>(url: string, data?: any): Promise<IData<T>> {
    return this.axiosInstance.delete(url, { params: data });
  }
  put<T>(url: string, data?: any): Promise<IData<T>> {
    return this.axiosInstance.put(url, data);
  }
  get<T>(url: string, data?: any): Promise<IData<T>> {
    return this.axiosInstance.get(url, { params: data });
  }
  post<T>(url: string, data?: any): Promise<IData<T>> {
    return this.axiosInstance.post(url, data);
  }
}

export default new HttpClient();
