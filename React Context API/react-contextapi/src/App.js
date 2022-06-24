import About from "./About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import React from "react";
import User from "./User";
import Form from "./Form";
//create Context
export const UserContext = React.createContext();

const userdetails = [
  {
    name: "Animesh",
    id: 1,
    address: "93,Mahaveer nagar",
  },
];
function App() {
  const contextprovider = React.useContext(UserContext);
  //provide context value with Provider

  return (
    <>
      {/* <BrowserRouter>
        <Routes> */}
      <UserContext.Provider
        value={"Reed " + userdetails[0].name + " " + userdetails[0].id}
      >
        <h1>{contextprovider}</h1>
        <User />
        <About />
        <Home />
        <Form />
      </UserContext.Provider>
      {/* <Route path="/*" exact element={<Form />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<Form />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
