import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Search from "./components/Search";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
};

export default App;
