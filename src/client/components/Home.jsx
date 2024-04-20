import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Header from "./Header";
import Hero from "./Hero";

const Home = () => {
  return (
    // <div className="home">
    //   <h1>Welcome to SchemesBOT</h1>
    //   <div className="button-container">
    // <Link to="/login" className="button">
    //   Login
    // </Link>
    // <Link to="/quick-demo" className="button">
    //   Quick Demo
    // </Link>
    //   </div>
    // </div>
    <div className="Home">
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
