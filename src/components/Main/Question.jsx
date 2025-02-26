import React, { useState, useContext, useEffect } from "react";
import "./question.css";
import { AiContext } from "../../context/AiContext";
import { assets } from "../../assets/assets";
// import ourSummarizer from "../../config/summarizer";

const Question = () => {
  const [loading, setLoading] = useState(false);
  const {
    inputedtext,
    setInputedText,
    setWelcome,
    settextAreaText,
    ourTranslator,
    setDetectedLang,
    detectedlang,
    targetLang,
    setTargetLang,
    translated,
    setTranslated,
    ourSummarizer,
  } = useContext(AiContext);

  useEffect(() => {
    // console.log(targetLang);
    setTargetLang(targetLang);
    setTranslated("");

    if (inputedtext.length > 150 && detectedlang[1] !== "en") {
      setTranslated(
        "You can only translate any text that has less then 150 characters and only summarize English text that has more than 150 characters"
      );
    }
  }, [targetLang, inputedtext, setInputedText, detectedlang]);

  const handleTranslation = async () => {
    setLoading(true);
    const translated = await ourTranslator(inputedtext, targetLang);
    setTranslated(translated);
    setLoading(false);
  };
  const handleSummary = async () => {
    try {
      setLoading(true);
      const summarized = await ourSummarizer(inputedtext);
      setTranslated(summarized);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setTranslated(error);
    }
  };

  const handleClear = () => {
    setInputedText("");
    settextAreaText("");
    setTranslated("");
    setDetectedLang([]);
    setWelcome(true);
  };

  return (
    <div className="main-top">
      <div className="question-box" id="scrollDiv">
        <div className="reflected_question">{inputedtext}</div>
      </div>
      <div className="output">
        {loading ? (
          <>
            <div className="center">
              {" "}
              <img src={assets.load} alt="" height={60} width={60} />
            </div>
          </>
        ) : (
          <>
            {translated == "" ? (
              ""
            ) : (
              <div
                className="translated_text"
                id="type"
                style={{ animation: "myAnim 2s ease 0s 1 normal forwards" }}
              >
                {translated}
              </div>
            )}
          </>
        )}
      </div>
      <div className="operations">
        <div className="language_detector">
          <span className="grey">{inputedtext?.length} Characters</span>
          <span className="grey" style={{ color: "#a5a4ff" }}>
            {detectedlang[0]}
          </span>
          <button className="btn-sec" onClick={handleClear}>
            Clear
          </button>
        </div>
        {/* <div className="question">Summarized text</div> */}
        <div className="btn-wrapper">
          {inputedtext?.length > 150 && detectedlang[1] == "en" ? (
            <>
              <button className="btn-sec" onClick={handleSummary}>
                Summarize
              </button>
            </>
          ) : (
            ""
          )}

          {inputedtext?.length < 150 ? (
            <>
              <p>Translate to:</p>

              <select
                name="target-lang"
                id="target-lang"
                onChange={(e) => setTargetLang(e.target.value)}
                value={targetLang}
              >
                <option value="en">English(en)</option>
                <option value="fr">French(fr)</option>
                <option value="pt">Portuguese(pt)</option>
                <option value="es">Spanish(es)</option>
                <option value="ru">Russian(ru)</option>
                <option value="tr">Turkish(tr)</option>
              </select>
              <button className="btn-primary" onClick={handleTranslation}>
                Translate
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;
