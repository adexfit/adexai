import React, { useState, useContext, useRef, useEffect } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import Welcome from "./Welcome";
import Question from "./Question";
import { AiContext } from "../../context/AiContext";
import { IoIosSend } from "react-icons/io";

const Main = () => {
  const [error, setError] = useState("");
  const errorRef = useRef(null);

  useEffect(() => {
    errorRef.current.focus();
  }, []);

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

  const handleTextInput = async (e) => {
    const INPUT_REGEX = /^[0-9]*$/;
    setTranslated("");
    if (textAreaText == "" || INPUT_REGEX.test(textAreaText) == true) {
      setError("Please enter a valid input. Only letters are allowed");
      return;
    }
    setWelcome(false);

    setInputedText(textAreaText);
    const ourLanguage = await detectText(textAreaText.trim());
    console.log(ourLanguage);
    setDetectedLang(ourLanguage);
    settextAreaText("");
  };

  const handleTextArea = (e) => {
    setError("");
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
          <div>
            <small className="error">{error}</small>
          </div>
          <div className="search-box">
            <textarea
              placeholder="Enter your text"
              onChange={handleTextArea}
              value={textAreaText}
              ref={errorRef}
              aria-labelledby="intro-text"
            ></textarea>
            {/* <img src={assets.send_icon} alt="" onClick={handleTextInput} /> */}
            <p id="send_ico">
              <IoIosSend
                onClick={handleTextInput}
                style={{ color: "#fff", width: "32px", height: "32px" }}
              />
            </p>
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
