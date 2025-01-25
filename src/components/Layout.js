import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Billing from "./Billing";
import Contact from "./Contact";

const Layout = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/billing" element={<Billing />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default Layout;
