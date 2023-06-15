import { useState } from "react";
import { useAuthStore } from "./store";

const LoginStatus = () => {
  //   const [user, setUser] = useState("");
  const { user, login, logout } = useAuthStore();

  if (user)
    return (
      <>
        <div className="mt-5 bg-gray-300">
          <span className="mx-2 badge badge-success text-white">{user}</span>
          <a className="btn btn-error" onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div className="mt-5 bg-gray-300">
      <a className="btn btn-success" onClick={() => login("Moose")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
