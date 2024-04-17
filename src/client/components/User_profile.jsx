import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import "./userprofile.css";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate(); // Use useNavigate hook to access navigation functionality

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const registerNumber = localStorage.getItem("registerNumber");
        const response = await axios.get(
          `http://localhost:3001/api/user/${registerNumber}`
        );
        setUserData(response.data.user); // Assuming response.data contains 'user' object
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("registerNumber"); // Clear registerNumber from localStorage
    navigate("/login"); // Use navigate function to redirect to the login page after logout
  };

  return (
    
    <div className="user-profile-container">
      {userData ? (
        <div className="profile-name">{userData.name}</div>
      ) : (
        <p>Loading user profile...</p>
      )}
      {userData && (
        <>
          <div className="profile-about">
            <p>Register Number: {userData.registerNumber}</p>
            <p>Gender: {userData.gender}</p>
            <p>Age: {userData.age}</p>
            <p>City: {userData.city}</p>
            <p>Community: {userData.community}</p>
            <p>Differently Abled: {userData.differentlyAbled ? "Yes" : "No"}</p>
          </div>
          <div className="user-profile-btn">
            <button className="follow-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfile;
