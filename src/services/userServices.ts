import httpClient from "@src/common/httpClient";
import { LoginModel, LoginUserModel, RegisterModel } from "@src/store/user";

export async function userLogin(data: LoginModel) {
  const res = await httpClient.post<LoginUserModel>("/auth/login", data);
  return res;
}

export async function userRegister(data: RegisterModel) {
  const res = await httpClient.post<LoginUserModel>("/auth/register", data);
  return res;
}

export async function userInfoGet() {
  const res = await httpClient.get<LoginUserModel>("/auth/info");
  return res;
}

export async function userTokenRefresh() {
  const res = await httpClient.get<null>("/auth/refresh");
  return res;
}

export async function userLogout() {
  const res = await httpClient.post<null>("/auth/logout");
  return res;
}
