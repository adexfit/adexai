import detectText from "./detector";

//single function
//accept input text
//accept target language as parameters
//detect source language
//use approriate translator
//return translated text and name of detected language

const ourTranslator = async (text, target_lang) => {
  let errorM = "";
  if (!("translation" in self)) {
    errorM = "Your browser does not have the translation capabilities ";
    return errorM;
  }

  try {
    //detect source translator
    const sourceLang = await detectText(text);
    if (sourceLang[1] == target_lang) {
      let errorSelect = "You cannot translate to the same language";
      return errorSelect;
    }

    //create appropriate translator
    const translator = await self.translation.createTranslator({
      sourceLanguage: sourceLang[1],
      targetLanguage: target_lang,
    });
    //translate text
    const finalTranslatedText = await translator.translate(text);
    console.log([sourceLang, finalTranslatedText]);
    return finalTranslatedText;
  } catch (err) {
    const errorMessage = "An error occurred. Please try again.";
    return errorMessage;
  }
};

export default ourTranslator;
