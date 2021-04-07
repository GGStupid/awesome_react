import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { rootReducers, rootEpics } from "./root";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(epicMiddleware)),
);

epicMiddleware.run(rootEpics);

export default store;
