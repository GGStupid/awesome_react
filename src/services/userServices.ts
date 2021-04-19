import httpClient from "@src/common/httpClient";

export interface IRegister {
  userName: string;
  password: string;
  email: string;
}

type UserLogin = Omit<IRegister, "email">;

export async function userLogin(data: UserLogin) {
  const res = await httpClient.post<UserLogin>("/auth/login", data);
  return res;
}

export async function userRegister(data: IRegister) {
  const res = await httpClient.post<IRegister>("/auth/register", data);
  return res;
}

export async function userLogout(data: IRegister) {
  const res = await httpClient.post<IRegister>("/auth/logout", data);
  return res;
}
