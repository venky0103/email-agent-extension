self.addEventListener("install", () => {
    console.log("FlexiEmail Extension Installed!");
  });
  
  self.addEventListener("activate", () => {
    console.log("Service worker activated!");
  });
      
  chrome.runtime.onInstalled.addListener(() => {
    console.log("FlexiEmail Extension Installed via Chrome API!");
  });
  