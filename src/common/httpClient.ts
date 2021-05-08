import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CancelTokenStatic,
} from "axios";

// class HttpClient {
//   baseUrl = process.env.BASE_URL || "/api/";
//   CancelToken: CancelTokenStatic = axios.CancelToken;
//   axiosRequestConfig: AxiosRequestConfig = {};
//   successCode: number[] = [200, 201, 204];
//   axiosInstance: AxiosInstance;

//   constructor() {
//     this.axiosInstance = axios.create({
//       baseURL: this.baseUrl,
//       timeout: 3000,
//       headers: {
//         timestamp: new Date().getTime(),
//       },
//       withCredentials: true,
//     });
//     this.interceptorsRequest();
//     this.interceptorsResponse();
//   }

//   private interceptorsRequest() {
//     if (this.axiosInstance) {
//       this.axiosInstance.interceptors.request.use(
//         function (config: AxiosRequestConfig) {
//           console.log(config);
//           config.headers["X-token"] = "adsf";
//           return config;
//         },
//         function (error) {
//           return Promise.reject(error);
//         },
//       );
//     }
//   }
//   private interceptorsResponse() {}

//   private responseLog(response: AxiosResponse) {
//     if (process.env.NODE_ENV === "development") {
//       const randomColor = `rgba(${Math.round(Math.random() * 255)},${Math.round(
//         Math.random() * 255,
//       )},${Math.round(Math.random() * 255)})`;
//       console.log(
//         "%c┍------------------------------------------------------------------┑",
//         `color:${randomColor};`,
//       );
//       console.log("| 请求地址：", response.config.url);
//       console.log("| 请求参数：", JSON.parse(response.config.data));
//       console.log("| 返回数据：", response.data);
//       console.log(
//         "%c┕------------------------------------------------------------------┙",
//         `color:${randomColor};`,
//       );
//     }
//   }

//   delete<T>(url: string, data?: any): Promise<IData<T>> {
//     return axiosInstance.delete(url, { params: data });
//   }
//   put<T>(url: string, data?: any): Promise<IData<T>> {
//     return axiosInstance.put(url, data);
//   }
//   get<T>(url: string, data?: any): Promise<IData<T>> {
//     return axiosInstance.get(url, { params: data });
//   }
//   post<T>(url: string, data?: any): Promise<IData<T>> {
//     return axiosInstance.post(url, data);
//   }
// }

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
