import httpClient from "@src/common/httpClient";

export interface IUser {
  userName: string;
  password: string;
  email: string;
}

export async function userLogin(data: IUser): Promise<IUser> {
  const res = await httpClient.post<IUser>("/user/login", data);
  return res;
}
export async function userRegister(data: IUser): Promise<IUser> {
  const res = await httpClient.post<IUser>("/user/register", data);
  return res;
}
