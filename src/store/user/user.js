import {AUTH_STATUS} from "../../const/const";
import {authStatusChange, login} from "../actions";
import {createReducer} from '@reduxjs/toolkit';


const initialState = {
  userData: {},
  authorizationStatus: AUTH_STATUS.NO_AUTH,
};


const user = createReducer(initialState, (builder) => {
  builder.addCase(authStatusChange, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(login, (state, action) => {
    state.userData = action.payload;
  });
});

export {user};
