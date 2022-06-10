import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Page404 from "./Page404";
import User from "./User";
import Filter from "./FIlter";
import Contact from "./Contact";
import Channel from "./Channel";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/user" element={<User />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/user/:name" element={<User />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="channel" element={<Channel />} />
          <Route path="/*" element={<Page404 />} />
          {/* <Route path="/*" element={<Navigate to="/"/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
const Home = () => {
  const navigate = useNavigate();
  const navToPage = () => {
    navigate("/about");
  };
  return (
    <div>
      <h1>Home page</h1>
      <p>This is a home page of our awesome App</p>
      <p>And here we are learning about routers</p>
      <br />
      <button onClick={() => navToPage()}>Go to About page </button>
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
  );
};

export default App;
