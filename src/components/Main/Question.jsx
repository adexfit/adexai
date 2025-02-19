import React, { useState, useContext, useEffect } from "react";
import "./question.css";
import { AiContext } from "../../context/AiContext";

const Question = () => {
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
  } = useContext(AiContext);

  useEffect(() => {
    console.log(targetLang);
    setTranslated("");
  }, [targetLang]);

  const handleTranslation = async () => {
    const translated = await ourTranslator(inputedtext, targetLang);
    setTranslated(translated);
  };

  return (
    <div className="main-top">
      <div className="question-box">
        <div className="reflected_question">{inputedtext}</div>
        <div className="translated_text">{translated}</div>
        <div className="operations">
          <div>
            <span className="grey">{inputedtext?.length} Characters</span>
            <span className="grey">language: {detectedlang[0]}</span>
          </div>
          {/* <div className="question">Summarized text</div> */}
          <div className="btn-wrapper">
            <button
              className="btn-primary"
              disabled={inputedtext?.length < 150}
            >
              Summarize
            </button>
            <button className="btn-sec" onClick={handleTranslation}>
              Translate
            </button>
            <select
              name="target-lang"
              id="target-lang"
              onChange={(e) => setTargetLang(e.target.value)}
              value={targetLang}
            >
              <option value="en">English(en)</option>
              <option value="pt">Portuguese(pt)</option>
              <option value="es">Spanish(es)</option>
              <option value="ru">Russian(ru)</option>
              <option value="tr">Turkish(tr)</option>
              <option value="fr">French(fr)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
