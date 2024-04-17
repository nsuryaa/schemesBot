// import React from "react";
// import { useState, useEffect } from "react";
// export default function SchemesList(props) {
//   console.log(props);

//   // let scheme = JSON.parse(props.state.data);
//   const [isDataAvailable, setIsDataAvailable] = useState(false);
//   const [schemes, setSchemes] = useState([]);

//   useEffect(() => {
//     if (props.state.data) {
//       setIsDataAvailable(true);
//       setSchemes(JSON.parse(props.state.data));
//     }
//   }, [props.state.data]);

//   if (!isDataAvailable) {
//     // Render null if data is not available yet
//     return null;
//   }
//   return schemes.map((scheme, key) => {
//     return (
//       <div className="schemes-section" key={key}>
//         <div className="schemes-title">
//           <h1>{`${scheme.scheme_details.title_name}`}</h1>
//         </div>
//         <div className="section_container">
//           <div className="schemes-description">{`${scheme.description}`}</div>
//           <div className="other-info">
//             <ul>
//               <li>
//                 Benefits types : {`${scheme.scheme_details.benefits_types}`}
//               </li>
//               <li>Multilingual CMS solutions</li>
//               <li>Interactive applications</li>
//               <li>Portals</li>
//               <li>Platforms</li>
//               <li>Scalable backend infrastructure</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     );
//   });
// }

// import React, { useState, useEffect } from "react";

// export default function SchemesList(props) {
//   const [isDataAvailable, setIsDataAvailable] = useState(false);
//   const [schemes, setSchemes] = useState([]);

//   useEffect(() => {
//     if (props.state.data) {
//       setIsDataAvailable(true);
//       setSchemes(JSON.parse(props.state.data));
//     }
//   }, [props.state.data]);

//   const toggleAccordion = (index) => {
//     const updatedSchemes = schemes.map((scheme, i) => {
//       if (i === index) {
//         return { ...scheme, isOpen: !scheme.isOpen };
//       } else {
//         return { ...scheme, isOpen: false };
//       }
//     });
//     setSchemes(updatedSchemes);
//   };

//   if (!isDataAvailable) {
//     return null;
//   }

//   return (
//     <div>
//       {schemes.map((scheme, index) => (
//         <div className="schemes-section" key={index}>
//           <div className="schemes-title" onClick={() => toggleAccordion(index)}>
//             <h1>{scheme.scheme_details.title_name}</h1>
//           </div>
//           {scheme.isOpen && (
//             <div className="section_container">
//               <div className="schemes-description">{scheme.description}</div>
//               <div className="other-info">
//                 <ul>
//                   <li>
//                     Benefits types: {scheme.scheme_details.benefits_types}
//                   </li>
//                   <li>Multilingual CMS solutions</li>
//                   <li>Interactive applications</li>
//                   <li>Portals</li>
//                   <li>Platforms</li>
//                   <li>Scalable backend infrastructure</li>
//                 </ul>
//               </div>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function SchemesList(props) {
  const [isDataAvailable, setIsDataAvailable] = useState(false);
  const [schemes, setSchemes] = useState([]);

  useEffect(() => {
    if (props.state.data) {
      setIsDataAvailable(true);
      setSchemes(JSON.parse(props.state.data));
    }
  }, [props.state.data]);

  const toggleAccordion = (index) => {
    const updatedSchemes = schemes.map((scheme, i) => {
      if (i === index) {
        return { ...scheme, isOpen: !scheme.isOpen };
      } else {
        return { ...scheme, isOpen: false };
      }
    });
    setSchemes(updatedSchemes);
  };

  if (!isDataAvailable) {
    return null;
  }

  return (
    <div>
      {schemes.map((scheme, index) => (
        <div className="schemes-section" key={index}>
          <button
            className="schemes-title"
            onClick={() => toggleAccordion(index)}
          >
            <h1>{scheme.scheme_details.title_name}</h1>
            <FontAwesomeIcon icon={faAngleDown} size="2x" />
          </button>
          {scheme.isOpen && (
            <div className="section_container">
              <div className="schemes-description">{scheme.description}</div>
              <div className="other-info">
                <ul>
                  <li>
                    Benefits types: {scheme.scheme_details.benefits_types}
                  </li>
                  <li>Beneficiaries: {scheme.scheme_details.beneficiaries}</li>
                  <li>Interactive applications</li>
                  <li>Portals</li>
                  <li>Platforms</li>
                  <li>Scalable backend infrastructure</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
