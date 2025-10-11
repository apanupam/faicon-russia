import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import PageLayout from "./Layouts/PageLayout";
import OurTeam from "./Pages/ourTeam.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import About from "./Pages/About.jsx";

function App() {

  return (
    <Router>
      <Routes>
        {/* Main layout route */}
        <Route path="/" element={<PageLayout />}>
          {/* Default route (index) */}
          <Route index element={<Home />} />
          <Route path="/services" element={<OurTeam />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
