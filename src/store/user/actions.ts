import { UserLogin, UserModel } from "./type";

const lOGIN_ACTION = "LOGIN_ACTION";
const INIT_USER_ACTION = "INIT_USER_ACTION";

const loginAction = (data: UserLogin) => {
  return <const>{ type: lOGIN_ACTION, payload: data };
};

const initUserAction = (data: UserModel) => {
  return <const>{ type: INIT_USER_ACTION, payload: data };
};
