import React, { useState, useEffect } from "react";

const Login = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    chrome.storage.sync.get(["google_token"], (data) => {
      if (data.google_token) {
        setAuthenticated(true);
      }
    });
  }, []);

  const handleLogin = () => {
    chrome.runtime.sendMessage({ type: "authenticate" }, (response) => {
      if (response?.success) {
        setAuthenticated(true);
      } else {
        console.error("Login failed:", response?.error);
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {authenticated ? (
        <p className="text-green-600 font-medium">✔ Gmail Access Granted</p>
      ) : (
        <button
          onClick={handleLogin}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
        >
          Grant Gmail Access
        </button>
      )}
    </div>
  );
};

export default Login;
