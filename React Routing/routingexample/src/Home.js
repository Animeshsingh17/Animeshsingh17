import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navToPage = () => {
    navigate("/about");
  };
  return (
    <>
      <div>
        <h1>Home page</h1>
        <p>This is a home page of our awesome App</p>
        <p>And here we are learning about routers</p>
        <br />
        <button onClick={navToPage}>Go to About page </button>
        <br />
        <button onClick={() => navigate("/filter")}>Go to Filter page </button>
        <br />
        <Link to="/about"> Go to about Page </Link>
        <br />
        <ul>
          <li>
            <Link to="/user/animesh">Animesh</Link>
          </li>
          <li>
            <Link to="/user/shyam">Shayam</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
