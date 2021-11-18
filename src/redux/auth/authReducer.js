import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  signInError,
  signInRequest,
  signInSuccess,
  signUpError,
  signUpRequest,
  signUpSuccess,
} from "./authActions";

const authData = createReducer(
  {},
  {
    [signUpSuccess]: (_, action) => action.payload,
    [signInSuccess]: (_, action) => action.payload,
  }
);

const loader = createReducer(false, {
  [signUpRequest]: () => true,
  [signUpSuccess]: () => false,
  [signInRequest]: () => true,
  [signInSuccess]: () => false,
  [signUpError]: () => false,
  [signInError]: () => false,
});

const error = createReducer("", {
  [signUpError]: (_, action) => action.payload,
  [signInError]: (_, action) => action.payload,
});

const authReducer = combineReducers({
  authData,
  loader,
  error,
});
export default authReducer;
