import React, { useState } from "react";

const Login = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    // Redirect to backend for Gmail OAuth authentication
    window.open("http://localhost:5000/auth/google", "_blank");
    setAuthenticated(true);
  };

  return (
    <div className="my-4">
      {authenticated ? (
        <p className="text-green-600">✔ Authenticated with Gmail</p>
      ) : (
        <button
          onClick={handleLogin}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Login with Gmail
        </button>
      )}
    </div>
  );
};

export default Login;
