import { createContext, useState } from "react";
import ourTranslator from "../config/aitext";
import detectText from "../config/detector";

const AiContext = createContext();

const ContextProvider = ({ children }) => {
  const [inputedtext, setInputedText] = useState("");
  const [welcome, setWelcome] = useState(true);
  const [textAreaText, settextAreaText] = useState("");
  const [detectedlang, setDetectedLang] = useState([]);
  const [targetLang, setTargetLang] = useState("");
  const [translated, setTranslated] = useState("");

  const contextValue = {
    inputedtext,
    setInputedText,
    ourTranslator,
    welcome,
    setWelcome,
    textAreaText,
    settextAreaText,
    detectText,
    detectedlang,
    setDetectedLang,
    targetLang,
    setTargetLang,
    translated,
    setTranslated,
  };

  return (
    <AiContext.Provider value={contextValue}>{children}</AiContext.Provider>
  );
};

export { AiContext, ContextProvider };
