import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {createAPI} from "../services/api";
import reducer from "./reducer";
import {initialState} from "./initialState";
import {composeWithDevTools} from "redux-devtools-extension";

const api = createAPI();

export const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);
