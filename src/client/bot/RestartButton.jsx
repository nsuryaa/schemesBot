import React from "react";

export default function RestartButton(props) {
//   console.log(props);
  const handleRestart = () => {
    props.setState({
      age: null,
      category: null,
      city: null,
      community: null,
      differentlyAbled: null,
      gender: null,
      isSearch: null,
      messages: [], // Clear messages array
    });
    const botName = "SchemesBot";
    const botMessage = `Hello! Welcome to ${botName}. How can I assist you today?`;
    const widget = "Options";
    // Send initial message to restart the conversation
    props.actions.handleEvent(null, botMessage, widget);
  };
  return (
    <div
      className="restart-button"
      onClick={() => {
        handleRestart();
      }}
      title="Restart Conversation"
    >
      {/* <p>Restart</p> */}
      <img src="src/client/bot/reload-arrow-svgrepo-com.svg" alt="loading" />
    </div>
  );
}
