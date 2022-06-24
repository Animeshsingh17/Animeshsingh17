import React from "react";
import { UserContext } from "./App";
function About() {
  const value = React.useContext(UserContext);
  return (
    <div>
      About
      <h1>{value}</h1>
    </div>
  );
}

export default About;
