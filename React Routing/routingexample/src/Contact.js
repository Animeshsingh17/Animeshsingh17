import React from "react";
import { Link, Outlet } from "react-router-dom";
function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <h2>Here we have some other business </h2>
      <Link to="channel">channel</Link>
      <Outlet />
    </div>
  );
}
export default Contact;
