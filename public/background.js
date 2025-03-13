self.addEventListener("install", () => {
    console.log("Email Agent Extension Installed!");
  });
  
  self.addEventListener("activate", () => {
    console.log("Service worker activated!");
  });
      
  chrome.runtime.onInstalled.addListener(() => {
    console.log("Email Agent Extension Installed via Chrome API!");
  });
  