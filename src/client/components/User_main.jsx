import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import schemesData from "../bot/schemesData.json";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./usermain.css";

const SchemesList = () => {
  const [schemes, setSchemes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load schemes data on component mount
    const limitedSchemes = schemesData.slice(0, 5);
    setSchemes(limitedSchemes);
  }, []);

  const toggleAccordion = (index) => {
    // Toggle isOpen property for the clicked scheme
    const updatedSchemes = schemes.map((scheme, i) => ({
      ...scheme,
      isOpen: i === index ? !scheme.isOpen : false,
    }));
    setSchemes(updatedSchemes);
  };

  const handleLogout = () => {
    // Handle logout by removing registerNumber from localStorage and redirecting to login
    localStorage.removeItem("registerNumber");
    navigate("/login"); // Redirect to the login page
  };

  return (
    <div className="schemes-container">
      <h1>User Main</h1>
      <nav>
        <ul className="main-menu">
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/saved">Saved List</Link>
          </li>
        </ul>
      </nav>
      <div className="user-profile-btn">
        <button className="follow-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="schemes-list">
        {schemes.map((scheme, index) => (
          <div className="scheme-item" key={index}>
            <button
              className="scheme-title"
              onClick={() => toggleAccordion(index)}
            >
              <h2>{scheme.scheme_details.title_name}</h2>
              <FontAwesomeIcon icon={faAngleDown} size="2x" />
            </button>
            {scheme.isOpen && (
              <div className="scheme-details">
                <p>{scheme.description}</p>
                <ul>
                  <li>
                    Benefits types: {scheme.scheme_details.benefits_types}
                  </li>
                  <li>Beneficiaries: {scheme.scheme_details.beneficiaries}</li>
                  {/* Add more details here */}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchemesList;
