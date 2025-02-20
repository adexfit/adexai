import React, { useState, useContext } from "react";
import "../Sidebar/Sidebar.css";
import { assets } from "../../assets/assets";
import { IoIosMenu } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { AiContext } from "../../context/AiContext";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
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

  const handleToggle = () => {
    setExtended((prev) => {
      return !prev;
    });
  };

  const handleNew = () => {
    setWelcome(true);
    setInputedText("");
    settextAreaText("");
    setTranslated("");
    setDetectedLang([]);
  };

  return (
    <div className="sidebar">
      <div className="top">
        {/* <img
          onClick={handleToggle}
          className="menu"
          src={assets.menu_icon}
          alt="M"
        /> */}
        <IoIosMenu
          onClick={handleToggle}
          style={{ color: "#fff", width: "32px", height: "32px" }}
          // width={60}
          // height={60}
        />
        <div className="new-chat">
          {/* <img src={assets.plus_icon} alt="" /> */}
          <FaPlus
            onClick={handleNew}
            style={{ color: "#fff", width: "24px", height: "24px" }}
          />
          {extended ? <p>New Chat</p> : ""}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>What is react ...</p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="bottom">
        {/* <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : ""}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : ""}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : ""}
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
