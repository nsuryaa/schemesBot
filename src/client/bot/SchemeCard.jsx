import React from "react";
import Loader from "react-js-loader";
export default function SchemeCard(props) {
  let scheme = props.payload;
  // props.scrollIntoView("end");
  // console.log(props.payload);
  // let scheme = props.state.searchresult;
  return (
    <div className="scheme-card">
      <div className="react-chatbot-kit-chat-bot-avatar">
        <div className="react-chatbot-kit-chat-bot-avatar-container">
          <p className="react-chatbot-kit-chat-bot-avatar-letter">B</p>
        </div>
      </div>
      {scheme.isfound ? (
        <div className="react-chatbot-kit-chat-bot-message">
          {/* {scheme?scheme:<Loader type="ping-cube" size={60}/>} */}
          <div>
            <p>
              <span className="schemecard-heading">Scheme Name:</span>{" "}
              {scheme.scheme_details.title_name}
            </p>
            <br />
            <p>
              <span className="schemecard-heading">Scheme Description: </span>
              {scheme.description}
            </p>
            <br />
          </div>
          <div>
            <p>
              <span className="schemecard-heading">Key Features:</span>
            </p>
            <p>
              - <span className="schemecard-heading">Beneficiaries:</span>{" "}
              {scheme.scheme_details.beneficiaries}
            </p>
            <p>
              -{" "}
              <span className="schemecard-heading">Eligibility Criteria:</span>
            </p>
            <p>
              - <span className="schemecard-heading">Income:</span>{" "}
              {scheme.scheme_details.eligibility_criteria.income}
            </p>
            <p>
              - <span className="schemecard-heading">Age:</span>{" "}
              {scheme.scheme_details.eligibility_criteria.age}
            </p>
            <p>
              - <span className="schemecard-heading">Community:</span>{" "}
              {scheme.scheme_details.eligibility_criteria.community}
            </p>
            <p>
              - <span className="schemecard-heading">Other Details:</span>{" "}
              {scheme.scheme_details.eligibility_criteria.other_details}
            </p>
            <p>
              - <span className="schemecard-heading">How to Avail:</span>{" "}
              {scheme.how_to_avail}
            </p>
            <p>
              -{" "}
              <span className="schemecard-heading">
                Validity of the Scheme:
              </span>
            </p>
            <p>
              - <span className="schemecard-heading">Introduced on:</span>{" "}
              {scheme.validity_of_the_scheme.introduced_on}
            </p>
            <p>
              - <span className="schemecard-heading">Valid up to: </span>
              {scheme.validity_of_the_scheme.valid_upto}
            </p>
          </div>
        </div>
      ) : (
        <div className="react-chatbot-kit-chat-bot-message">
          Scheme not found
        </div>
      )}
      <div
        className="react-chatbot-kit-chat-bot-message-arrow"
        style={{ borderRightColor: "rgb(110, 0, 255)" }}
      ></div>
    </div>
  );
}

// Scheme Name: {scheme_data['scheme_details']['title_name']}

// Scheme Description:{scheme_data['description']}

// Key Features:
// - Beneficiaries: {scheme_data['scheme_details']['beneficiaries']}
// - Eligibility Criteria:
// - Income: {scheme_data['scheme_details']['eligibility_criteria']['income']}
// - Age: {scheme_data['scheme_details']['eligibility_criteria']['age']}
// - Community: {scheme_data['scheme_details']['eligibility_criteria']['community']}
// - Other Details: {scheme_data['scheme_details']['eligibility_criteria']['other_details']}
// - How to Avail: {scheme_data['how_to_avail']}
// - Validity of the Scheme:
// - Introduced on: {scheme_data['validity_of_the_scheme']['introduced_on']}
// - Valid up to: {scheme_data['validity_of_the_scheme']['valid_upto']}
