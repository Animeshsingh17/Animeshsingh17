import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [fake, setFake] = useState([]);
  console.log(fake);
  useEffect(() => {
    fakestore();
  }, []);

  const fakestore = async () => {
    // const response = await fetch("https://fakestoreapi.com/products");
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response);
    const jsonData = await response.data;
    // console.log(jsonData);
    setFake(jsonData);
  };
  return (
    <div className="App">
      <h2>Fake API Store</h2>
      <div className="container">
        {fake.map((values) => {
          return (
            <>
              <div className="box">
                <div className="content">
                  <h5>{values.title}</h5>
                  <p>{values.description}</p>
                </div>
                <img className="image" src={values.image} alt="" />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
