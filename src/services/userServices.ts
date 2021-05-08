import httpClient from "@src/common/httpClient";
import { LoginUserModel, LoginModel, RegisterModel } from "@src/store/user/type";

export async function userLogin(data: LoginModel) {
  const res = await httpClient.post<LoginUserModel>("/auth/login", data);
  return res;
}

export async function userRegister(data: RegisterModel) {
  const res = await httpClient.post<LoginUserModel>("/auth/register", data);
  return res;
}

export async function userLogout(data: RegisterModel) {
  const res = await httpClient.post<null>("/auth/logout", data);
  return res;
}
