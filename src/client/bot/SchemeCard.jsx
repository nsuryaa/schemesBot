import React from "react";
import Loader from "react-js-loader";
export default function SchemeCard(props) {
  let scheme = JSON.parse(props.state.searchresult);
  // let scheme = props.state.searchresult;
  return (
    <div className="react-chatbot-kit-chat-bot-message">
      {/* {scheme?scheme:<Loader type="ping-cube" size={60}/>} */}
      <div>
        <p>Scheme Name: {scheme.scheme_details.title_name}</p><br/>
        <p>Scheme Description: {scheme.description}</p><br/>
      </div>
      <div>
        <p>Key Features:</p>
        <p>- Beneficiaries: {scheme.scheme_details.beneficiaries}</p>
        <p>- Eligibility Criteria:</p>
        <p>- Income: {scheme.scheme_details.eligibility_criteria.income}</p>
        <p>- Age: {scheme.scheme_details.eligibility_criteria.age}</p>
        <p>- Community: {scheme.scheme_details.eligibility_criteria.community}</p>
        <p>- Other Details: {scheme.scheme_details.eligibility_criteria.other_details}</p>
        <p>- How to Avail: {scheme.how_to_avail}</p>
        <p>- Validity of the Scheme:</p>
        <p>- Introduced on: {scheme.validity_of_the_scheme.introduced_on}</p>
        <p>- Valid up to: {scheme.validity_of_the_scheme.valid_upto}</p>
      </div>
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
