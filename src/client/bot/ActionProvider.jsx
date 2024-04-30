import { createClientMessage, createCustomMessage } from "react-chatbot-kit";
import React from "react";
import schemesData from "./schemesData.json";
import { GoogleGenerativeAI } from "@google/generative-ai";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const genAI = new GoogleGenerativeAI(
    "AIzaSyBy-6n17sz4uwPOODfkfY-jitanttRIdz8"
  );
  const updateState = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleEvent = (
    choice = null,
    botMessage = "",
    widget = null,
    custom = ""
  ) => {
    if (choice != null) {
      const userMessage = createClientMessage(`Your choice: ${choice}`);
      updateState(userMessage);
    }
    if (botMessage.length != 0 && custom.length == 0) {
      const message = createChatBotMessage(botMessage, { widget: widget });
      updateState(message);
    }
    if (custom.length != 0) {
      const message = createCustomMessage(botMessage, custom);
      updateState(message);
    }
  };

  const handleAge = (value) => {
    setState((state) => ({ ...state, age: value }));
    const message = createChatBotMessage("Your city", { widget: "City" });
    updateState(message);
  };

  const handleSearch = (schemeName) => {
    const searchTerm = schemeName.toLowerCase(); // Convert search term to lowercase for case-insensitive search
    const scheme = schemesData.find((scheme) =>
      scheme.scheme_details.title_name.toLowerCase().includes(searchTerm)
    );
    let searchresult = scheme
      ? { ...scheme, isfound: true }
      : { isfound: false };
    // handleGemini(scheme);
    const message = createCustomMessage("hi", "SchemeCard", {
      delay: 3000,
      payload: searchresult,
    });
    updateState(message);
  };

  const handleGemini = async (scheme) => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
    Summarize the following government scheme details in a brief  and with 5 bullet points about features:
    Scheme Name: ${scheme.scheme_details.title_name}\n
    Scheme Description: ${scheme.description}\n
    Key Features:\n
    - Beneficiaries: ${scheme.scheme_details.beneficiaries}\n
    - Eligibility Criteria:\n
    - Income: ${scheme.scheme_details.eligibility_criteria.income}\n
    - Age: ${scheme.scheme_details.eligibility_criteria.age}\n
    - Community: ${scheme.scheme_details.eligibility_criteria.community}\n
    - Other Details: ${scheme.scheme_details.eligibility_criteria.other_details}\n
    - How to Avail: ${scheme.how_to_avail}\n
    - Validity of the Scheme:\n
    - Introduced on: ${scheme.validity_of_the_scheme.introduced_on}\n
    - Valid up to: ${scheme.validity_of_the_scheme.valid_upto}\n`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    setState((state) => ({ ...state, searchresult: text }));
  };

  const handleDb = (state) => {
    fetch("http://localhost:3001/suggest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the response data
        handleSchemesList2(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSchemesList2 = (data) => {
    setState((state) => ({ ...state, data: JSON.stringify(data) }));
  };

  // const message = createChatBotMessage(
  //   `${data[0].scheme_details.title_name}`
  // );
  // updateState(message);

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleEvent,
            handleAge,
            handleSearch,
            // handleSuggest,
            // handleGender,
            // handleError,
            // handleCommunity,
            // handleDiffAbled,
            // handleStudent,
            handleDb,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;

// old code

// const handleSuggest = (choice) => {
//   const userMessage = createClientMessage(`Your choice: ${choice}`);
//   const message = createChatBotMessage(
//     "Let's start with the details.\nYour Gender",
//     { widget: "Gender" }
//   );
//   updateState(userMessage);
//   updateState(message);
// };
// const handleGender = (choice) => {
//   const userMessage = createClientMessage(`Your choice: ${choice}`);
//   const message = createChatBotMessage("Enter you age:");
//   updateState(userMessage);
//   updateState(message);
// };

// const handleDiffAbled = (value) => {
//   const userMessage = createClientMessage(`You choice:${value}`);
//   const message = createChatBotMessage("Are you Differently abled ?", {
//     widget: "DiffAbled",
//   });
//   updateState(userMessage);
//   updateState(message);
// };
// const handleStudent = (value) => {
//   const userMessage = createClientMessage(`You choice:${value}`);
//   const message = createChatBotMessage("Are you a student ?", {
//     widget: "Student",
//   });
//   updateState(userMessage);
//   updateState(message);
// };
// const handleCommunity = () => {
//   const message = createChatBotMessage("Your Community", {
//     widget: "Community",
//   });
//   updateState(message);
// };

// const handleDb = (value) => {
//   const userMessage = createClientMessage(`You choice:${value}`);
//   const message = createChatBotMessage("Let me gather the schmes for you.");
//   updateState(userMessage);
//   updateState(message);
// };

//TODO
// const handleError = () => {
//   const message = createChatBotMessage("Please,enter a valid age!");
//   updateState(message);
// };

//old schemes list code
// const handleSchemesList = (data) => {
//   data.map((scheme, index) => {
//     const message = createChatBotMessage(
//       `${index + 1}) ${scheme.scheme_details.title_name}`
//     );
//     updateState(message);
//   });
//   // const message = createChatBotMessage(
//   //   `${data[0].scheme_details.title_name}`
//   // );
//   // updateState(message);
// };
