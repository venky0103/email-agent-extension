import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import ExtensionApp from "./extension/App";
import WebsiteApp from "./website/WebsiteApp";

// Determine if we're running in extension or website context
const isExtension = window.location.pathname.includes('index.html');

const App = () => {
  if (isExtension) {
    return (
      <HashRouter>
        <ExtensionApp />
      </HashRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <WebsiteApp />
      </BrowserRouter>
    );
  }
};

// Get the root element
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Root element not found");
}
