import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home.jsx";
import PageLayout from "./Layouts/PageLayout";

import ContactUs from "./Pages/ContactUs.jsx";
import About from "./Pages/About.jsx";
import OurTeam from "./Pages/ourTeam.jsx";
import PrivacyPolicy from "./Pages/PrivacyPolicy.jsx";
import ProductList from "./Pages/ProductList.jsx";
import TermsService from "./Pages/TermsService.jsx";

function App() {

  return (
    <Router>
      <Routes>
        {/* Main layout route */}
        <Route path="/" element={<PageLayout />}>
          {/* Default route (index) */}
          <Route index element={<Home />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-service" element={<TermsService />} />
          <Route path="/product-list" element={<ProductList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
