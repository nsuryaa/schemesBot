import React from "react";
import schemesData from "./schemesData.json";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    // console.log(typeof +message)
    let age = +message;
    console.log(typeof age);
    if (!isNaN(age)) {
      if (age > 0 && age < 100) {
        //TODO
        actions.handleAge(age);
      } else {
        let botMessage = "Please,enter a valid age!";
        actions.handleEvent(null, botMessage);
      }
    } else {
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
      let botMessage;
      const searchTerm = message.toLowerCase(); // Convert search term to lowercase for case-insensitive search
      const scheme = schemesData.find((scheme) =>
        scheme.scheme_details.title_name.toLowerCase().includes(searchTerm)
      );
      scheme
        ? (botMessage = `Description: ${scheme.description}<br>Benefit Types:${scheme.benefits_types}`)
        : (botMessage = "Scheme not found");
      actions.handleEvent(null, botMessage);
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
