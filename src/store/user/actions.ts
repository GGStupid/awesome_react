import { action, ActionType } from "typesafe-actions";
import { LoginUserModel, LoginModel } from "./type";

export const lOGIN_ACTION = "LOGIN_ACTION";
export const INIT_USER_ACTION = "INIT_USER_ACTION";

export const loginAction = (data: LoginModel) => action(lOGIN_ACTION, data);
export const initUserAction = (data: LoginUserModel) =>
  action(INIT_USER_ACTION, data);

export type Actions =
  | ActionType<typeof loginAction>
  | ActionType<typeof initUserAction>;
