import React, { ReactNode, useReducer } from "react";
import AuthContext from "../contexts/AuthContext";
import authReducer from "../reducers/authReducer";

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authReducer, "Moose");
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
