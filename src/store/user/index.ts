import { Epic, ofType } from "redux-observable";
import { filter, map, switchMap } from "rxjs/operators";
import produce from "immer";
import { from } from "rxjs";
import { IRootSate } from "../root";
import { isOfType } from "typesafe-actions";
import { InitUserModel, LoginModel } from "./type";

export const userModel: InitUserModel = {
  id: "",
  userName: "",
  email: "",
};

const lOGIN_ACTION = "LOGIN_ACTION";

export const loginAction = (data: LoginModel) => {
  return <const>{ type: lOGIN_ACTION, payload: data };
};

const INIT_USER_ACTION = "INIT_USER_ACTION";

export const initUserAction = (data: InitUserModel) => {
  return <const>{ type: INIT_USER_ACTION, payload: data };
};

type Actions =
  | ReturnType<typeof loginAction>
  | ReturnType<typeof initUserAction>;

export const userReducer = (state = userModel, action: Actions) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case INIT_USER_ACTION:
        draft.id = action.payload.id;
        draft.userName = action.payload.userName;
        draft.email = action.payload.email;
        break;
    }
  });
};

export const userEpic: Epic<Actions, Actions, IRootSate> = (action$) => {
  return action$.pipe(
    filter(isOfType(lOGIN_ACTION)),
    switchMap((action) =>
      from(userLogin(action.payload)).pipe(map((r) => initUserAction(r.data))),
    ),
  );
};
