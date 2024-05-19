// import {createStore, applyMiddleware} from "redux";
// import thunk from "redux-thunk";
import {createAPI} from "../services/api";
import rootReducer from "./root-reducer";
import {configureStore} from "@reduxjs/toolkit";
// import {composeWithDevTools} from "redux-devtools-extension";
import {ActionsCreator} from "./actions";
import {AUTH_STATUS} from "../const/const";

const api = createAPI(() => {
  store.dispatch(authStatusChange(AUTH_STATUS.NO_AUTH));
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    })
});
