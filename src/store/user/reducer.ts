import produce from "immer";
import { Actions, INIT_USER_ACTION } from "./actions";
import { LoginUserModel } from "./type";

export const userModel: LoginUserModel = {
  id: "",
  userName: "",
  email: "",
};

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
