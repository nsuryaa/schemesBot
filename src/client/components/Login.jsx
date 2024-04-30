import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import "./OfficialLoginElements.css";
import { Link } from "react-router-dom";
// import loginsvg from "../assets/login.svg"; // Import SVG directly
import ReactLogo from "./login.svg?react";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [cookies, setCookie] = useCookies(["access_token"]); // Use useCookies hook to manage cookies
  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const registerNumber = formData.get("registerNumber");
    const dob = formData.get("dob");

    try {
      const response = await axios.post("http://localhost:3001/api/login", {
        registerNumber,
        dob,
      });

      if (response.data.success) {
        const { token, userID } = response.data;

        setCookie("access_token", token, { path: "/", maxAge: 86400 });

        localStorage.setItem("userID", userID);

        navigate("/user-main");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="OfficialLoginContainer">
      <div className="OfficialLoginLeftContainer">
        <div className="OfficialLoginLogo">
          <Link to="/">Schemes AI BOT</Link>
        </div>
        {/* <img src={loginsvg} className="Officialform-imgL" alt="login" />{" "} */}
        <ReactLogo className="Officialform-imgL" />
        {/* Use the imported SVG */}
      </div>
      <div className="OfficialLoginRightContainer">
        <form className="OfficialLoginForm" onSubmit={handleLogin} noValidate>
          <div className="OfficialLoginTitle">Log In</div>
          <div className="OfficialLoginTitleSubTitle">Welcome Back!</div>
          {error && <p className="OfficialerrorL">{error}</p>}

          <div className="Officialform-inputsL">
            <label htmlFor="registerNumber" className="Officialform-labelL">
              Register Number
            </label>
            <input
              className="Officialform-inputL"
              required
              type="text"
              name="registerNumber"
              placeholder="Enter your register number"
            />
          </div>
          <div className="Officialform-inputsL">
            <label htmlFor="dob" className="Officialform-labelL">
              Date of Birth(DD-MM-YYYY)
            </label>
            <input
              className="Officialform-inputL"
              required
              type="text"
              name="dob"
              placeholder="Enter your Date of Birth"
            />
          </div>
          <button className="Officialform-input-btnL" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
