import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home.jsx";
import PageLayout from "./Layouts/PageLayout";

function App() {

  return (
    <Router>
      <Routes>
        {/* Main layout route */}
        <Route path="/" element={<PageLayout />}>
          {/* Default route (index) */}
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
