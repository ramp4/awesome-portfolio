import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "../reducers/index";
// import * as mySaga from "../sagas/index";
import thunk from "redux-thunk";
const sagaMiddleware = createSagaMiddleware();
// export const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk, sagaMiddleware)
// );
export const store = createStore(rootReducer, applyMiddleware(thunk));

// sagaMiddleware.run(mySaga);
