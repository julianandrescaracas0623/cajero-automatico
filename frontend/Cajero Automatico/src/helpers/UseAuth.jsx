import { useContext } from "react";
import AuthContext from "./AuthProvier";

const UseAuth = () => {
  console.log(AuthContext);
  return useContext(AuthContext);
};

export default UseAuth;
