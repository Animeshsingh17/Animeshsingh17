import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import file from "./hello.png";
function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src={file} alt="background" />
        <Avatar className="sidebar_avatar" />
        <h2>Animesh Singh</h2>
        <h4>Animesh.singh170199@gmail.com</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed your Profile :</p>
          <p className="sidebar_statNumber">3,169</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on your Post :</p>
          <p className="sidebar_statNumber">10,119</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("React js ")}
        {recentItem("FRONTEND dev")}
        {recentItem("HTML")}
        {recentItem("Angularjs")}
      </div>
    </div>
  );
}

export default Sidebar;
