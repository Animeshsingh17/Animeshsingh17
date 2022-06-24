import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Page404 from "./Page404";
import User from "./User";
import Filter from "./FIlter";
import Contact from "./Contact";
import Channel from "./Channel";
import Home from "./Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/user" element={<User />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/user/:name" element={<User />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="channel" element={<Channel />} />
          <Route path="/*" element={<Page404 />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
