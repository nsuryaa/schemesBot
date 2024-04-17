import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import schemesData from "../bot/schemesData.json"; // Import the JSON file
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import "./userprofile.css";
import { Link } from "react-router-dom";
import "./userprofile.css"



// const SchemesList = () => {
//   const [schemes, setSchemes] = useState([]);

//   useEffect(() => {
//     const fetchSchemesData = async () => {
//       try {
//         // Simulate fetching data (since it's local, no need for async operation)
//         // Set the schemes state with the imported JSON data
//         setSchemes(schemesData);
//       } catch (error) {
//         console.error("Error fetching schemes data:", error);
//       }
//     };

//     fetchSchemesData(); // Invoke the function to load schemes data
//   }, []); // Empty dependency array to run once on component mount

//   const toggleAccordion = (index) => {
//     const updatedSchemes = schemes.map((scheme, i) => ({
//       ...scheme,
//       isOpen: i === index ? !scheme.isOpen : false,
//     }));
//     setSchemes(updatedSchemes);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("registerNumber"); // Clear registerNumber from localStorage
//     navigate("/login"); // Use navigate function to redirect to the login page after logout
//   };

//   return (
//     <div>
//        <h1>User Main</h1>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/profile">Profile</Link>
//           </li>
//           <li>
//             <Link to="/saved">Saved List</Link>
//           </li>
//         </ul>
//       </nav>
//       <div className="user-profile-btn">
//             <button className="follow-btn" onClick={handleLogout}>
//               Logout
//             </button>
//           </div>
          
//       {schemes.map((scheme, index) => (
//         <div className="schemes-section" key={index}>
//           <button
//             className="schemes-title"
//             onClick={() => toggleAccordion(index)}
//           >
//             <h1>{scheme.scheme_details.title_name}</h1>
//             <FontAwesomeIcon icon={faAngleDown} size="2x" />
//           </button>
//           {scheme.isOpen && (
//             <div className="section_container">
//               <div className="schemes-description">{scheme.description}</div>
//               <div className="other-info">
//                 <ul>
//                   <li>
//                     Benefits types: {scheme.scheme_details.benefits_types}
//                   </li>
//                   <li>Beneficiaries: {scheme.scheme_details.beneficiaries}</li>
//                   {/* Add more details as needed */}
//                 </ul>
//               </div>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SchemesList;



// import React
// import { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
// import schemesData from "../bot/schemesData.json";
// import { Link, useNavigate } from "react-router-dom";
// import "./userprofile.css";

const SchemesList = () => {
  const [schemes, setSchemes] = useState([]);
  const navigate = useNavigate(); // Use useNavigate to enable programmatic navigation

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
            <button className="scheme-title" onClick={() => toggleAccordion(index)}>
              <h2>{scheme.scheme_details.title_name}</h2>
              <FontAwesomeIcon icon={faAngleDown} size="2x" />
            </button>
            {scheme.isOpen && (
              <div className="scheme-details">
                <p>{scheme.description}</p>
                <ul>
                  <li>Benefits types: {scheme.scheme_details.benefits_types}</li>
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
