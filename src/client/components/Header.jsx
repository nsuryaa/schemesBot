import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-router-dom";
// import "./Home.css";
import "./Header.css";
export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="landing-page-header">
      <a href="/" className="header-logo">
        Schemes Bot
      </a>
      <nav className="header-nav">
        <ul className="header-ul">
          {/* <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li> */}
          {/* <Link to="/" className="login-button">
            Home
          </Link> */}
          <Link to="/login" className="login-button">
            Log in
          </Link>
          <Link to="/quick-demo" className="login-button">
            Sign Up
          </Link>
        </ul>
      </nav>
      {toggleMenu && (
        <nav className="header-nav-two">
          <ul
            onClick={() => setToggleMenu(!toggleMenu)}
            className="header-ul-two"
          >
            {/* <li>
              <a href="/">Home</a>
            </li> */}
            {/* <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li> */}
            {/* <Link to="/" className="login-button">
              Home
            </Link> */}
            <Link to="/login" className="login-button">
              Log in
            </Link>
            <Link to="/quick-demo" className="login-button">
              Sign Up
            </Link>
          </ul>
        </nav>
      )}
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="header-button"
      >
        <Bars3Icon className="header-icon" />
      </button>
    </header>
  );
}
