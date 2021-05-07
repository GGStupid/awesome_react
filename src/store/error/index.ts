import produce from "immer";

export interface ErrorModel {
  isError: boolean;
  errorType: string;
  errorInfo: any;
}

export const errorAction = {
  ERROR_ACTION: "ERROR_ACTION",
};

export const errorModel: ErrorModel = {
  isError: false,
  errorType: "",
  errorInfo: null,
};

export const errorReducer = (
  state = errorModel,
  action: { type: any; payload: any },
) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case errorAction.ERROR_ACTION:
        draft.isError = true;
        draft.errorType = action.payload;
        draft.errorInfo = action.payload;
        break;
    }
  });
};
