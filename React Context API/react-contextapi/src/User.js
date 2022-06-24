import { UserContext } from "./App";
import React from "react";


function User() {
  const value = React.useContext(UserContext);

  return <h1>{value}</h1>;
}
export default User;
