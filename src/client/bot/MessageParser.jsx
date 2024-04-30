import React from "react";
// import schemesData from "./schemesData.json";
// import SchemeCard from "./SchemeCard";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    // console.log(children.props.state.isAge);
    // console.log(typeof +message)
    let age = +message;
    // console.log(typeof age);
    if (children.props.state.isAge && age > 0 && age < 100) {
      actions.handleAge(age);
      children.props.setState((state) => ({ ...state, isAge: null }));
    } else if (children.props.state.isAge) {
      let botMessage = "Please,enter a valid age!";
      actions.handleEvent(null, botMessage);
    }
    if (children.props.state.isSearch) {
      actions.handleSearch(message);
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;

//search code for db
// fetch("http://localhost:3001/search", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ value: message }),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data); // Handle the response data
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
// let botMessage;
// const searchTerm = message.toLowerCase(); // Convert search term to lowercase for case-insensitive search
// const scheme = schemesData.find((scheme) =>
//   scheme.scheme_details.title_name.toLowerCase().includes(searchTerm)
// );
// scheme
//   ? (botMessage = `Description: ${scheme.description}Benefit Types:${scheme.benefits_types}`)
//   : (botMessage = "Scheme not found");
// actions.handleEvent(null, botMessage, null, "SchemeCard");
