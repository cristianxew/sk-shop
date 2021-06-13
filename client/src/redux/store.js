import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const composeEnhancers = composeWithDevTools({
  name: "Redux",
  realtime: true,
  trace: true,
  traceLimit: 20
})


export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middlewares)
  )
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistStore };
