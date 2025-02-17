import React from "react";
import "./question.css";

const Question = () => {
  return (
    <div className="main-top">
      <div className="question-box">
        <textarea placeholder="Question text"></textarea>
        <div className="actions">
          <p>
            <span className="grey">300 Characters</span>
            <span className="grey">language: English</span>
          </p>
          <p>
            <button className="summarize">Summarize</button>
            <button className="translate">Translate</button>
            <select name="" id="">
              <option value="English">English(en)</option>
              <option value="Portuguese">Portuguese(pt)</option>
              <option value="Spanish">Spanish(es)</option>
              <option value="Russian">Russian(ru)</option>
              <option value="Turkish">Turkish(tr)</option>
              <option value="French">French(fr)</option>
            </select>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question;
