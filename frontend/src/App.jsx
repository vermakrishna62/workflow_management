import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestAuthentication from "./components/TestAuthentication";
import HomeAuth from "./components/HomeAuth";
import LogoutAuth from "./components/LogoutAuth";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<TestAuthentication />} />
          <Route path="/home" element={<HomeAuth />} />
          <Route path="/logout" element={<LogoutAuth />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
