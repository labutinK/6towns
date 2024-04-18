import {createStore} from "redux";
import reducer from "./reducer";
import {initialState} from "./initialState";
import {composeWithDevTools} from "redux-devtools-extension";

export const store = createStore(reducer, initialState, composeWithDevTools());
