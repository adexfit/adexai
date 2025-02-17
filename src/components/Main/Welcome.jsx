import React from "react";
import { MdOutlineTranslate } from "react-icons/md";
import { MdOutlineLanguage } from "react-icons/md";
import { MdOutlineSummarize } from "react-icons/md";
import { TbPrompt } from "react-icons/tb";

const Welcome = () => {
  return (
    <div>
      <div className="greet">
        <p>
          <span>Hello, friend</span>
        </p>
        <p>How can I help you today?</p>
      </div>
      <div className="cards">
        <div className="card">
          <p>
            Live translate text in the browser using local AI models. Now, users
            can contribute in their first language.{" "}
          </p>

          <MdOutlineTranslate className="icom" />
        </div>
        <div className="card">
          <p>
            Identify the language used in any given text with the Language
            Detector API.{" "}
          </p>

          <MdOutlineLanguage className="icom" />
        </div>
        <div className="card">
          <p>
            Generate different types of summaries in varied lengths and formats.{" "}
          </p>

          <MdOutlineSummarize className="icom" />
        </div>
        <div className="card">
          <p>
            Discover the infinite possibilities of the Prompt API in Chrome
            Extensions.{" "}
          </p>

          <TbPrompt className="icom" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
