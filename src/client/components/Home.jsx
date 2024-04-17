import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to SchemesBOT</h1>
      <div className="button-container">
        <Link to="/login" className="button">
          Login
        </Link>
        <Link to="/quick-demo" className="button">
          Quick Demo
        </Link>
      </div>
    </div>
  );
};

export default Home;
