import { combineEpics, Epic } from "redux-observable";
import { combineReducers } from "redux";
import { catchError } from "rxjs/operators";

import { errorReducer, errorModel } from "./error";
import { userEpic } from "./user/epic";
import { userModel, userReducer } from "./user/reducer";
// import { userEpic, userModel, userReducer } from "./user";

const epics = [userEpic];

export const rootEpics: Epic = (action$, store$, dependencies) =>
  combineEpics(...epics)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    }),
  );

const RootState = { errorModel, userModel };
export type IRootSate = typeof RootState;

export const rootReducers = combineReducers({
  errorModel: errorReducer,
  userModel: userReducer,
});
