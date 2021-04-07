import httpClient from "@src/common/httpClient";

interface IUser {
  userName: string;
}

export async function userRegister(): Promise<IUser> {
  const res = await httpClient.post<IUser>("/user/register");
  return res;
}
