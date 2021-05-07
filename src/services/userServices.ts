import httpClient from "@src/common/httpClient";
import { UserModel } from "@src/store/user";
import { IRegister, UserLogin } from "@src/store/user/type";

export async function userLogin(data: UserLogin) {
  const res = await httpClient.post<UserModel>("/auth/login", data);
  return res;
}

export async function userRegister(data: IRegister) {
  const res = await httpClient.post<UserModel>("/auth/register", data);
  return res;
}

export async function userLogout(data: IRegister) {
  const res = await httpClient.post<null>("/auth/logout", data);
  return res;
}
