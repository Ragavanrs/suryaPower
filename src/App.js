import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import theme from "./theme/theme";
import Header from "./components/Header";
import HomePage from "./pages/Home";
import ServicesPage from "./pages/Services";
import ContactPage from "./pages/Contact";
import GalleryPage from "./pages/Gallery";
import Loading from "./components/loading/Loading";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import MobileCallBar from "./components/MobileCallBar";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Show loading animation for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          {loading ? (
            <Loading />
          ) : (
            <>
              <Header />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
              </Routes>
              <Footer />
              <WhatsAppFloat />
              <MobileCallBar />
            </>
          )}
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
