chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "authenticate") {
    authenticateUser(sendResponse);
    return true;
  }
});

// OAuth flow for Gmail access
function authenticateUser(sendResponse) {
  const clientId = "YOUR_GOOGLE_CLIENT_ID"; // Replace with your Client ID
  const redirectUri = chrome.identity.getRedirectURL();
  const authUrl =
    "https://accounts.google.com/o/oauth2/auth" +
    `?client_id=${clientId}` +
    "&response_type=token" +
    `&redirect_uri=${redirectUri}` +
    "&scope=" +
    encodeURIComponent(
      "https://mail.google.com/ https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.compose"
    ) +
    "&access_type=offline" +
    "&prompt=consent";

  chrome.identity.launchWebAuthFlow({ url: authUrl, interactive: true }, (redirectUrl) => {
    if (chrome.runtime.lastError) {
      console.error("OAuth failed:", chrome.runtime.lastError);
      sendResponse({ success: false, error: chrome.runtime.lastError });
      return;
    }

    // Extract access token from URL
    const tokenMatch = redirectUrl.match(/access_token=([^&]+)/);
    if (tokenMatch && tokenMatch[1]) {
      const token = tokenMatch[1];

      // Store token in Chrome storage
      chrome.storage.sync.set({ google_token: token }, () => {
        console.log("Google OAuth Token saved.");
        sendResponse({ success: true, token });
      });
    } else {
      sendResponse({ success: false, error: "Access token not found in URL" });
    }
  });

  return true; // Keep message channel open
}
