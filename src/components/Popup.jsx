import React from "react";
import Login from "./Login";
import EmailList from "./EmailList";

const Popup = () => {
  return (
    <div className="w-80 p-4">
      <h2 className="text-lg font-bold">Email Agent</h2>
      <Login />
      <EmailList />
    </div>
  );
};

export default Popup;
