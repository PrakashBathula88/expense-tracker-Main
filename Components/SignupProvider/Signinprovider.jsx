import React, { useState } from "react";

const AuthContext = React.createContext({
  login: null,
  isloggedin: false,
  SignUp: (token) => {},
  Logout: () => {},
});

export const Signinprovider = ({ children }) => {
  const [token, settoken] = useState(null);

  const userisloggedin = !!token;
  const loginHandler = (token) => {
    settoken(token);
  };

  const logoutHandler = () => {
    settoken(null);
  };

  const Handling = {
    token: token,
    isloggedin: userisloggedin,
    Login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={Handling}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
