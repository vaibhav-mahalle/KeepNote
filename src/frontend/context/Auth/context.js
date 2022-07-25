import { createContext, useContext, useReducer } from "react";
import { authReducer } from "./reducer";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const initialData = {
    user: {},
    isLoggedIn: localStorage.getItem("UserToken"),
  };
  console.log({initialData});
  const [authState, authDispatch] = useReducer(authReducer, initialData);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
