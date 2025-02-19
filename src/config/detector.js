const detectText = async (text) => {
  const languageDetectorCapabilities =
    await self.ai.languageDetector.capabilities();
  const canDetect = languageDetectorCapabilities.capabilities;
  let detector;
  if (canDetect === "no") {
    // The language detector isn't usable.
    return;
  }
  if (canDetect === "readily") {
    // The language detector can immediately be used.
    detector = await self.ai.languageDetector.create();
  } else {
    // The language detector can be used after model download.
    detector = await self.ai.languageDetector.create({
      monitor(m) {
        m.addEventListener("downloadprogress", (e) => {
          console.log(`Downloaded ${e.loaded} of ${e.total} bytes.`);
        });
      },
    });
    await detector.ready;
  }

  //Detect inputed text
  const results = await detector.detect(text);
  //Select first result
  const finalLang = await results[0].detectedLanguage;

  const decodelanguageTag = (languageTag, targetLanguage) => {
    const displayNames = new Intl.DisplayNames([targetLanguage], {
      type: "language",
    });
    return displayNames.of(languageTag);
  };
  const readableSourcelanguage = decodelanguageTag(finalLang, "en");
  // console.log(readableSourcelanguage);
  return [readableSourcelanguage, finalLang];
};

export default detectText;
