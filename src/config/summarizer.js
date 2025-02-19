const ourSummarizer = async (text) => {
  if (("ai" in self && "summarizer" in self.ai) == false) {
    console.log("Your browser does not support the Summarizer API");
  }

  try {
    const available = (await self.ai.summarizer.capabilities()).available;
    let summarizer;
    if (available === "no") {
      // The Summarizer API isn't usable.
      console.log("Your browser does not support the Summarizer API");
      return;
    }
    if (available === "readily") {
      // The Summarizer API can be used immediately .
      summarizer = await self.ai.summarizer.create();
      console.log("loading 1");

      const summary = await summarizer.summarize(text);
      console.log(summary);
      return summary;
    } else {
      console.log("loading 2");
      // The Summarizer API can be used after the model is downloaded.
      summarizer = await self.ai.summarizer.create();
      summarizer.addEventListener("downloadprogress", (e) => {
        console.log(e.loaded, e.total);
      });
      await summarizer.ready;

      const summary = await summarizer.summarize(text);
      console.log(summary);
      return summary;
    }
  } catch (err) {
    console.log(err.name, err.message);
    const errorMessage = "An error occurred. Please try again.";
    return errorMessage;
  }
};

export default ourSummarizer;

/*
const available = (await self.ai.summarizer.capabilities()).available;
  let summarizer;
  if (available === "no") {
    // The Summarizer API isn't usable.
    console.log("Your browser does not support the Summarizer API");
    
  }
  if (available === "readily") {
    // The Summarizer API can be used immediately .
    summarizer = await self.ai.summarizer.create();
    console.log("loading 1");

    const summary = await summarizer.summarize(text);
    console.log(summary);
    
  } else {
    console.log("loading 2");
    // The Summarizer API can be used after the model is downloaded.
    summarizer = await self.ai.summarizer.create();
    summarizer.addEventListener("downloadprogress", (e) => {
      console.log(e.loaded, e.total);
    });
    await summarizer.ready;

    const summary = await summarizer.summarize(text);
    console.log(summary);
    
  }


  */
