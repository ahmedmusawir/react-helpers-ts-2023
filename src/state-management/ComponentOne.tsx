import { useContext, useReducer, useState } from "react";
import AuthContext from "./contexts/AuthContext";
import useAuth from "./hooks/useAuth";

const ComponentOne = () => {
  // const { user, dispatch } = useContext(AuthContext);
  const { user, dispatch } = useAuth();

  return (
    <>
      <h3>Other List</h3>
      <span className="badge">{user}</span>
    </>
  );
};

export default ComponentOne;
