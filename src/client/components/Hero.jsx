// import HeroImg from "../assets/hero.png";
import "./Hero.css";
import { Link } from "react-router-dom";
import React from "react";
import Right from "./right.svg?react";
import Left from "./left.svg?react";
import { useNavigate } from "react-router-dom";
import {
  // AiOutlineTwitter,
  // AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
export default function Hero() {
  const config = {
    subtitle:
      "Our chatbot remains updated with the latest government schemes and policies, ensuring users have access to the most relevant information, thus keeping them well-informed at all times.",
    social: {
      twitter: "",
      github: "",
      linkedin: "",
    },
  };

  return (
    <section className="hero-section">
      <Left className="left-logo" />

      <div className="hero-div">
        <h1 className="hero-div-h1">
          {/* Hi, <br />
          This is <span style={{ color: "white" }}>Schemes BOT</span> */}
          All your schemes information,
          <br /> accessible in one message.
          <p className="hero-div-p">{config.subtitle}</p>
        </h1>

        <Link to="/chatbot" className="hero-div-two">
          {/* <a href={config.social.twitter} className="hero-div-a">
            <AiOutlineTwitter size={40} />
          </a>
          <a href={config.social.github} className="hero-div-a">
            <AiOutlineGithub size={40} />
          </a> */}
          {/* <a href={config.social.linkedin} className="hero-div-a">
            <AiOutlineLinkedin size={40} />
          </a> */}

          <button className="hero-button">
            <span className="hero-button-content">Try it now</span>
          </button>
        </Link>
      </div>
      <Right className="right-logo" />
      {/* <img className="hero-img" src={HeroImg} alt="hero" /> */}
    </section>
  );
}
