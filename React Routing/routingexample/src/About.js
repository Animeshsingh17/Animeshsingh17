import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is about our page which is an awesome App</p>
      <p>And here we are learning about routers</p>
      <h2 className="hello">
        {" "}
        <Link to="/shop">Go to Shop Page </Link>
      </h2>

      <h1>
        {" "}
        <Link to="/Home">Go to Home Page </Link>
      </h1>
    </div>
  );
}

export default About;
