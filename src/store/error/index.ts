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
  action: { type: any; paload: any },
) => {
  switch (action.type) {
    case errorAction.ERROR_ACTION:
      return (state = action.paload);
    default:
      return state;
  }
};
