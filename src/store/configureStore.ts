import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers/index";
// import * as mySaga from "../sagas/index";
import thunk from "redux-thunk";
// export const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk, sagaMiddleware)
// );
export const store = createStore(rootReducer, applyMiddleware(thunk));

// sagaMiddleware.run(mySaga);
