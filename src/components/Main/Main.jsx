import React, { useState, useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import Welcome from "./Welcome";
import Question from "./Question";
import { AiContext } from "../../context/AiContext";
import { IoIosSend } from "react-icons/io";

const Main = () => {
  const {
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
    ourSummarizer,
  } = useContext(AiContext);

  const handleTextInput = async () => {
    setWelcome(false);
    setTranslated("");
    setInputedText(textAreaText);
    const ourLanguage = await detectText(textAreaText.trim());
    console.log(ourLanguage);
    setDetectedLang(ourLanguage);
    settextAreaText("");
  };

  const handleTextArea = (e) => {
    settextAreaText(e.target.value);
  };

  return (
    <div className="main">
      <div className="nav">
        <p>AIText</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {welcome ? <Welcome /> : <Question />}
        <div className="main-bottom">
          <div className="search-box">
            <textarea
              placeholder="Enter your text"
              onChange={handleTextArea}
              value={textAreaText}
            ></textarea>
            {/* <img src={assets.send_icon} alt="" onClick={handleTextInput} /> */}
            <IoIosSend
              onClick={handleTextInput}
              style={{ color: "#fff" }}
              height={32}
              width={32}
            />
          </div>
          <p className="center">
            AItext may display inaccurate info, so double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
