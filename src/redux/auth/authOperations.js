import axios from "axios";
import { signUpError, signUpRequest, signUpSuccess } from "./authActions";

const API_KEY = "AIzaSyCbZ7rJc80DaWw5A0VmWWUv7D5p8_lLzDo";
// credentials {email: "fcghj", password: "dfghj"}
const signUpOperation = (credentials) => async (dispatch, getState) => {
  dispatch(signUpRequest());
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      { ...credentials, returnSecureToken: true }
    );
    dispatch(signUpSuccess(response.data));
    console.log(response);
  } catch (error) {
    dispatch(signUpError(error.response.data.error.message));
  }
};

const signInOperation = (credentials) => async (dispatch, getState) => {
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
      { ...credentials, returnSecureToken: true }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export { signUpOperation, signInOperation };
