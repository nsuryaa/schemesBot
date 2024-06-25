import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./Options";
import Gender from "./Gender";
import City from "./City";
import Community from "./Community";
import DiffAbled from "./DiffAbled";
import Student from "./Stundent";
import SchemesList from "./SchemesList";
import SchemeCard from "./SchemeCard";
import LatestSchemes from "./LatestSchemes";
import FAQ from "./FAQ";
import RestartButton from "./RestartButton";
const botName = "SchemesBot";
const config = {
  initialMessages: [
    createChatBotMessage(
      `Hello! Welcome to ${botName}. How can I assist you today?`,
      {
        widget: "Options",
      }
    ),
  ],

  state: {
    gender: null,
    age: null,
    city: null,
    community: null,
    differentlyAbled: null,
    category: null,
    isSearch: null,
    isAge: null,
  },
  widgets: [
    {
      widgetName: "Options",
      widgetFunc: (props) => (
        <>
          <Options {...props} />
          <RestartButton {...props} />
        </>
      ),
    },
    {
      widgetName: "Gender",
      widgetFunc: (props) => <Gender {...props} />,
      mapStateToProps: ["gender"],
    },
    {
      widgetName: "City",
      widgetFunc: (props) => <City {...props} />,
      mapStateToProps: ["city"],
    },
    {
      widgetName: "Community",
      widgetFunc: (props) => <Community {...props} />,
      mapStateToProps: ["community"],
    },
    {
      widgetName: "DiffAbled",
      widgetFunc: (props) => <DiffAbled {...props} />,
      mapStateToProps: ["differentlyAbled"],
    },
    {
      widgetName: "Student",
      widgetFunc: (props) => <Student {...props} />,
      mapStateToProps: ["category"],
    },
    {
      widgetName: "SchemesList",
      widgetFunc: (props) => <SchemesList {...props} />,
      // mapStateToProps: ["category"],
    },
    {
      widgetName: "LatestSchemes",
      widgetFunc: (props) => <LatestSchemes {...props} />,
    },
    {
      widgetName: "FAQ",
      widgetFunc: (props) => <FAQ {...props} />,
    },
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#6E00FF",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  // customComponents: {
  //   header: (props) => <Header {...props} />,
  // },
  customMessages: {
    SchemeCard: (props) => <SchemeCard {...props} />,
  },
};

export default config;
