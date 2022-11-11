import React from "react";
import "../Auth.css";
import { Header } from "../../Header/Header";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";
import axios from "axios";
import  toast from "react-hot-toast";
import { ToastStyle } from "../../ToastStyle/ToastStyle";
import { AUTH_TOKEN, USER_EMAIL, USER_PASSWORD } from "../../../Constants/AuthConstants";

const Login = () => {
  const { authState, authDispatch } = useAuth();
  const { error } = authState;
  const { email, password } = authState.userInfo;
  const navigator = useNavigate();

  const logInHandler = async (e, emailId, passwordId) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: emailId,
        password: passwordId,
      });
      localStorage.setItem("token", response.data.encodedToken);
      authDispatch({
        type: AUTH_TOKEN,
        payload: response.data.encodedToken,
      });
      navigator("/");
      toast.success("Logged in successfully", ToastStyle)
    } catch (error) {
      toast.error("Failed to login. Please check email & password", ToastStyle)
    }
  };

  return (
    <div className="auth-page">
      <Header />
      <div className="log-in-wrapper flex-center">
        <form
          className="form-container"
          onSubmit={(e) => logInHandler(e, email, password)}
        >
          <h1 className="form-title primary">Log In</h1>
          <div className="input-container">
            <label htmlFor="email">Email*</label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@xyz.com"
              onChange={(e) =>
                authDispatch({ type: USER_EMAIL, payload: e.target.value })
              }
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password*</label>
            <input
              required
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                authDispatch({ type: USER_PASSWORD, payload: e.target.value })
              }
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
          <button
            className="btn btn-secondary"
            onClick={(e) =>
              logInHandler(e, "sanjayjatti@gmail.com", "sanjay123")
            }
          >
            Guest LogIn
          </button>
          <p className="text-medium">
            Don't have an account?
            <Link to="/signup" className="text-medium text-primary">
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export { Login };
