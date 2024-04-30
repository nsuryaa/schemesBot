import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
// import schemesData from "../bot/schemesData.json";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./usermain.css";
import AccordionItem from "./AccordionItem";
import QRScanner from "./Qrcode.jsx";

const SchemesList = () => {
  // const [schemes, setSchemes] = useState([]);
  const navigate = useNavigate();
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  // useEffect(() => {
  //   // Load schemes data on component mount
  //   const limitedSchemes = schemesData.slice(0, 5);
  //   setSchemes(limitedSchemes);
  // }, []);

  // const toggleAccordion = (index) => {
  //   // Toggle isOpen property for the clicked scheme
  //   const updatedSchemes = schemes.map((scheme, i) => ({
  //     ...scheme,
  //     isOpen: i === index ? !scheme.isOpen : false,
  //   }));
  //   setSchemes(updatedSchemes);
  // };

  const handleLogout = () => {
    // Handle logout by removing registerNumber from localStorage and redirecting to login
    localStorage.removeItem("registerNumber");
    navigate("/login"); // Redirect to the login page
  };

  const faqs = [
    {
      id: 1,
      header: "PRE-MATRIC SCHOLARSHIP SCHEME",
      text: `Tuition Fee From 6th to 8th Standard Rs.200/- at the rate of Rs.20/- per month for 10 months For 9th and 10th Standard Rs.250/- at the rate of Rs.25/- per month for 10 months Examination Fee Sanctioned in full for 10th Standard Students Conditions for Backward Classes Students.The income of the parents should not exceed Rs.1,00,000/-. There should be no graduate in the family.Most Backward Classes and Denotified Communities Students No conditions`,
    },
    {
      id: 2,
      header: "BOOK BANK",
      text: `Book Bank - Books will be purchased for Medical/ Engineering/ Law / M.B.A./Veterinary / Agri. and Polytechnic / courses and placed in the Library. On completion of the course, the students will return the books to the Library. Government of India Scholarship holder among AD/Tribal students. One set of Books will be supplied for every 2 students.`,
    },
    {
      id: 3,
      header: "AWARDS FOR BRIGHT STUDENTS",
      text: `Awards to Bright Students - First two boys and two girls in each district from each community viz., Adi Dravidar/ Tribal / Adi Dravidar Converted to Christianity who have passed 10th std., Public Examinations and continue their studies are given a sum of Rs.800/- for the first year and Rs.960/- for the next 5 years. Should have secured first and second place in the 10th Std, in the district. Continue their studies. No income limits.`,
    },
    {
      id: 4,
      header: "ASSISTANCE FOR EDUCATION",
      text: `Assistance for education is provided to son/daughter of Folk Artiste subject to a maximum of 2 children starting from Class X to Post Graduate level and Professional Courses along with Hostel Fees depending upon the Course.`,
    },
    {
      id: 5,
      header: "CHIEF MINISTER MERIT AWARD",
      text: `Chief Minister's Merit Award - First 1000 Boys and First 1000 girls Adi Dravidar/Tribal / Adi Dravidar Converted to Christianity who have passed 12th standard examination and continue their studies are given a sum of Rs.1500/- p.a. for 5 years. Should find a place in the list of first 1000 students who have passed 12th Std. Public Examination and who continue their studies among Adi Dravidar/Tribal / Adi Dravidar Converted to Christianity students.
      `,
    },
  ];

  return (
    <div className="schemes-container">
      {/* <nav>
        <ul className="header-logo">
          <li>User Profile</li>
        </ul>
        <ul className="header-nav">
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/saved">Saved List</Link>
          </li>
          <li>
            <button className="follow-btn" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </nav> */}
      <div className="user-profile-header">
        <a href="/profile" className="header-logo">
          User Profile
        </a>

        <nav className="header-nav">
          <ul className="header-ul">
            <Link to="/profile" className="login-button">
              Profile
            </Link>
            <Link to="/qrcode" className="login-button">
              Qr code
            </Link>
            <button className="login-button" onClick={handleLogout}>
              Logout
            </button>
          </ul>
        </nav>
      </div>

      {/* <div className="schemes-list">
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
                </ul>
              </div>
            )}
          </div>
        ))}
      </div> */}

      <div className="container-fluid mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-20 mt-2">
            <div className="card">
              <div className="card-body">
                <h4 className="form-heading mb-4 text-primary text-center mt-3">
                  Your Schemes
                </h4>
                {faqs.map((faq, index) => {
                  return (
                    <AccordionItem
                      key={index}
                      active={active}
                      handleToggle={handleToggle}
                      faq={faq}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemesList;
