import React from "react";
import { UserContext } from "./App";

function Home() {
  const value = React.useContext(UserContext);
  return (
    <div>
      Home
      <h1>{value}</h1>
    </div>
  );
}

export default Home;
