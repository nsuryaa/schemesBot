// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useCookies } from "react-cookie";
// import "./OfficialLoginElements.css";
// import { loginsvg } from "../assets/login.svg";

// const Login = () => {
//   const navigate = useNavigate();
//   const [error, setError] = useState(null);
//   const [cookies, setCookie, removeCookie] = useCookies(["access_token"]); // Use useCookies hook to manage cookies
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const registerNumber = formData.get("registerNumber");
//     const dob = formData.get("dob");

//     try {
//       const response = await axios.post("http://localhost:3001/api/login", {
//         registerNumber,
//         dob,
//       });
//       localStorage.setItem("registerNumber", registerNumber);
//       if (response.data.success) {
//         // Assuming the response contains token and userID
//         const { token, userID } = response.data;

//         // Set access_token cookie (expires in 1 day)
//         setCookie("access_token", token, { path: "/", maxAge: 86400 });

//         // Store userID in localStorage
//         localStorage.setItem("userID", userID);

//         // Redirect to '/profile' after successful login
//         navigate("/user-main");
//       } else {
//         setError("Invalid credentials. Please try again.");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       setError("An error occurred. Please try again.");
//     }
//   };
//   return (
//     <div className="OfficialLoginContainer">
//       <div className="OfficialLoginLeftContainer">
//         <div className="OfficialLoginLogo">
//           <Link to="/">Schemes BOT</Link>
//         </div>
//         <img className="Officialform-imgL" src={loginsvg} alt="login" />
//         <div className="NeedAndAccount">
//           Need an account?{" "}
//           <Link to="/">
//             <strong>Sign Up!</strong>
//           </Link>
//         </div>
//       </div>
//       <div className="OfficialLoginRightContainer">
//         <form className="OfficialLoginForm" onSubmit={handleLogin} noValidate>
//           <div className="OfficialLoginTitle">Log In</div>
//           <div className="OfficialLoginTitleSubTitle">Welcome Back!</div>
//           {error && <p className="OfficialerrorL">{error}</p>}

//           <div className="Officialform-inputsL">
//             <label className="Officialform-labelL">Register Number</label>
//             <input
//               className="Officialform-inputL"
//               type="number"
//               name="registerNumber"
//               id="email"
//               placeholder="Enter your register number"
//             />
//           </div>
//           <div className="Officialform-inputsL">
//             <label className="Officialform-labelL">
//               Date of Birth(DD-MM-YYYY)
//             </label>
//             <input
//               className="Officialform-inputL"
//               //   ref={passwordRef}
//               type="text"
//               name="password"
//               id="password"
//               value={password}
//               //   onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your Date of Birth"
//             />
//           </div>
//           <button
//             disabled={loading}
//             className="Officialform-input-btnL"
//             type="submit"
//           >
//             Login
//           </button>
//           <div
//             className="Officialform-input-btn-googleL"
//             // onClick={signInGoogle}
//           >
//             <div className="OfficialgooglebtntextL">Continue with Google</div>
//           </div>
//           <div className="OfficialforgotpassL">
//             <Link to="/" style={{ textDecoration: "none" }}>
//               <p className="OfficialforgotpasstextL">Forgot Password?</p>
//             </Link>
//             <Link to="/" style={{ textDecoration: "none" }}>
//               <p className="OfficialNeedAccounttextL">Sign Up?</p>
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
