import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import logo from "./myfile.jpeg";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import profile from "./profile.jpeg";
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img className="link" src={logo} alt=""></img>
      </div>

      <div className="header_search">
        <SearchIcon />
        <input type="text"></input>
      </div>

      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={PersonSearchIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatBubbleIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsActiveIcon} title="Notifications" />
        <HeaderOption avatar={profile} title="Me" />
      </div>
    </div>
  );
}

export default Header;
