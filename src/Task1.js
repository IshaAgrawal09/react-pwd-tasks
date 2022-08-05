import React from "react";
import { Link } from "react-router-dom";
import "./Task1.css";
const Task1 = () => {
  return (
    <div className="task1">
        <div id="image">
            <img src="background.jpg" alt=""/>
        </div>
      <div className="header">
        <Link to="/signin">Sign In</Link>
        <Link to="/">Sign up</Link>
      </div>
    </div>
  );
};

export default Task1;
