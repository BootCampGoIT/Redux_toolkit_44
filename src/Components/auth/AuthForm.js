import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpError } from "../../redux/auth/authActions";
import {
  signInOperation,
  signUpOperation,
} from "../../redux/auth/authOperations";
import { authErrorSelector } from "../../redux/auth/authSelectors";

const AuthForm = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const error = useSelector(authErrorSelector);
  const dispatch = useDispatch();
  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpOperation(credentials));
    // dispatch(signInOperation(credentials));
  };
  const onHandleChange = (e) => {
    error && dispatch(signUpError(""));
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form onSubmit={onHandleSubmit}>
      {error && <p>{error}</p>}
      <label>
        Email:
        <input
          type='text'
          value={credentials.email}
          name='email'
          onChange={onHandleChange}
        />
      </label>
      <label>
        Password:{" "}
        <input
          type='text'
          value={credentials.password}
          name='password'
          onChange={onHandleChange}
        />
      </label>
      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default AuthForm;
