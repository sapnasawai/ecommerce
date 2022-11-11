import { createContext, useContext, useReducer } from "react";
import { AuthReducer } from "../Reducer/AuthReducer.js";

const authContext = createContext();
const authToken = localStorage.getItem("token");

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(AuthReducer, {
    userInfo: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    token: authToken,
  });
  return (
    <authContext.Provider
      value={{
        authState,
        authDispatch,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
