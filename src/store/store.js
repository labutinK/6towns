import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {createAPI} from "../services/api";
import reducer from "./reducer";
import {initialState} from "./initialState";
import {composeWithDevTools} from "redux-devtools-extension";
import {ActionsCreator} from "./actions";
import {AUTH_STATUS} from "../const/const";

const api = createAPI(() => {
  store.dispatch(ActionsCreator.authStatusChange(AUTH_STATUS.NO_AUTH));
});

export const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);
