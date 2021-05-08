import { userLogin } from "@src/services/userServices";
import { Epic } from "redux-observable";
import { from, throwError } from "rxjs";
import { catchError, filter, map, switchMap } from "rxjs/operators";
import { isOfType } from "typesafe-actions";
import { IRootSate } from "@store/root";
import { Actions, initUserAction, lOGIN_ACTION } from "./actions";

export const userEpic: Epic<Actions, Actions, IRootSate> = (action$) => {
  return action$.pipe(
    filter(isOfType(lOGIN_ACTION)),
    switchMap((action) =>
      from(userLogin(action.payload)).pipe(
        map((r) => initUserAction(r.data)),
        catchError((err) => throwError(err)),
      ),
    ),
  );
};
