import axiosInstance from "@common/axiosInstance";
import { AxiosResponse } from "axios";

export async function userRegister(): Promise<AxiosResponse<unknown>> {
  const res = await axiosInstance.post("/user/register");
  return res;
}
