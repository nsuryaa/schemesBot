// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import QuickDemo from "./components/Quickdemo";
// import User_main from "./components/User_main";
// import "./App.css";
// import Chatbot from "react-chatbot-kit";
// import "react-chatbot-kit/build/main.css";
// import config from "./bot/config";
// import MessageParser from "./bot/MessageParser";
// import ActionProvider from "./bot/ActionProvider";
// import UserProfile from "./components/User_profile";
// import QRScanner from "./components/Qrcode";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="profile" element={<UserProfile />} />
//           <Route path="/qrcode" element={QRScanner} />
//           <Route path="/quick-demo" element={<QuickDemo />} />
//           <Route path="/user-main" element={<User_main />} />

//           <Route
//             path="/chatbot"
//             element={
//               <Chatbot
//                 config={config}
//                 messageParser={MessageParser}
//                 actionProvider={ActionProvider}
//                 headerText="SchemesBOT"
//               />
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import QuickDemo from "./components/Quickdemo";
import UserMain from "./components/User_main"; // Corrected component name
import UserProfile from "./components/User_profile"; // Corrected component name
import QRScanner from "./components/Qrcode";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./bot/config";
import MessageParser from "./bot/MessageParser";
import ActionProvider from "./bot/ActionProvider";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UserProfile />} />{" "}
          {/* Corrected path */}
          <Route path="/qrcode" element={<QRScanner />} />{" "}
          {/* Corrected path */}
          <Route path="/quick-demo" element={<QuickDemo />} />
          <Route path="/user-main" element={<UserMain />} />{" "}
          {/* Corrected component name */}
          <Route
            path="/chatbot"
            element={
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
                headerText="SchemesBOT"
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
