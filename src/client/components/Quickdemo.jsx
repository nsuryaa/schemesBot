import React from "react";
import { useNavigate } from "react-router-dom";
import "./quickdemo.css";

const QuickDemo = () => {
  const navigate = useNavigate(); // Use useNavigate hook to get the navigation function

  const handleQuickDemo = () => {
    navigate("/chatbot"); // Navigate to '/chatbot' route
  };

  return (
    <div className="quick-demo">
      <h2>Quick Demo</h2>
      <p>Try a quick demo of the chatbot.</p>
      <button onClick={handleQuickDemo}>Demo Chatbot</button>
    </div>
  );
};

export default QuickDemo;
