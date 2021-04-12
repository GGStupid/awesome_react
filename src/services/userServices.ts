import httpClient from "@src/common/httpClient";

interface IUser {
  userName: string;
  password: string;
}

export async function userLogin(from): Promise<IUser> {
  const res = await httpClient.post<IUser>("/user/login", from);
  return res;
}
export async function userRegister(from: FormData): Promise<IUser> {
  const res = await httpClient.post<IUser>("/user/register", from);
  return res;
}
