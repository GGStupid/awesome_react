import { Epic, ofType } from "redux-observable";
import { delay, map } from "rxjs/operators";

export interface UserModel {
  userName: string;
  phone: string;
}

const START = "START";
const USERNAME = "USERNAME";

interface UserAction {
  type: typeof USERNAME;
  payload: string;
}

interface StartAction {
  type: typeof START;
  payload: string;
}

export const userAction = (username: string): UserAction => ({
  type: USERNAME,
  payload: username,
});

export const startAction = (username: string): StartAction => ({
  type: START,
  payload: username,
});

export type Actions = UserAction | StartAction;

export const userModel: UserModel = {
  userName: "",
  phone: "",
};

export const userReducer = (state = userModel, action: Actions) => {
  switch (action.type) {
    case "USERNAME":
      return { userName: action.payload };

    default:
      return state;
  }
};

export const userEpic: Epic<Actions, UserAction> = (action$) => {
  return action$.pipe(
    ofType("START"),
    delay(1000),
    map((res) => userAction(res.payload)),
  );
};
