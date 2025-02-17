import React, { useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import Welcome from "./Welcome";
import Question from "./Question";

const Main = () => {
  const [welcome, setWelcome] = useState(false);
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
            <textarea placeholder="Enter your text"></textarea>
            <img src={assets.send_icon} alt="" />
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
