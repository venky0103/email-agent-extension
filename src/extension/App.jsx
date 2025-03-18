import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Search from "./components/Search";
import Login from "./components/Login";
import EmailList from "./components/EmailList";
import "./styles/extension.css";

const ExtensionApp = () => {
  return (
    <div className="extension-container">
      <div className="extension-content">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/emails" element={<EmailList />} />
        </Routes>
      </div>
    </div>
  );
};

export default ExtensionApp; 