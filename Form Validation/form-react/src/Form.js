import { useState, useEffect } from "react";
import React from "react";
import Data from "./Data.js";
// const fs = require("fs");
// import { combinedData } from "./Data.js";
console.log(Data);
function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setError(true);
    } else {
      var userData = [
        {
          name: { name },
          email: { email },
          password: { password },
        },
      ];
      console.log(userData);
      console.log(combinedData);
      setError(false);
      setSubmitted(true);
    }
  };
  //sucess message
  const successMessage = () => {
    // Array.push(userData);
    console.log({ name }, { email }, { password });
    return (
      <div className="success" style={{ display: submitted ? "" : "none" }}>
        <h1>User {name} is successfully registered !</h1>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="error" style={{ display: error ? "" : "none" }}>
        <h1>Please input all the rquired fields !</h1>
      </div>
    );
  };

  //   useEffect(() => {
  //     fetch("Data.js").then((response) => console.log(response));
  //   }, []);

  // useEffect(() => {
  //   async function getData() {
  //     const actualData = await fetch({ name }, { password }, { email }).then(
  //       (response) => response.json()
  //     );

  //     console.log(actualData);
  //     userData.push(actualData);
  //   }
  //   getData();
  // }, []);

  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        <label className="label">Name</label>
        <input
          onChange={handleName}
          className="input"
          value={name}
          type="text"
        />
        <label className="label">Email</label>
        <input
          onChange={handleEmail}
          className="input"
          value={email}
          type="email"
        />
        <label className="label">Password</label>
        <input
          onChange={handlePassword}
          className="input"
          value={password}
          type="password"
        />
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Form;
