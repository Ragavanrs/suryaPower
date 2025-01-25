import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Billing from "./components/Billing";
import Contact from "./components/Contact";
import Loading from "./components/loading/Loading";
import Footer from "./components/Footer";
import Upload from "./components/upload";
import Gallery from "./components/gallery";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 8000); // Set loading duration to 5 seconds

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <Router>
      {loading ? (
        <Loading /> // Show loading animation only during the first load
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Upload" element={<Upload />} />
            <Route path="/Gallery" element={<Gallery />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
