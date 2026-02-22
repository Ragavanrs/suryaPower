import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import theme from "./theme/theme";
import Layout from "./components/layout/Layout";
import Loading from "./components/layout/Loading";
import ErrorBoundary from "./components/common/ErrorBoundary";
import ScrollToTop from "./components/common/ScrollToTop";

const HomePage = lazy(() => import("./pages/Home"));
const ServicesPage = lazy(() => import("./pages/Services"));
const ContactPage = lazy(() => import("./pages/Contact"));
const GalleryPage = lazy(() => import("./pages/Gallery"));
const GeneratorRental = lazy(() => import("./pages/services/GeneratorRental"));
const GeneratorRepair = lazy(() => import("./pages/services/GeneratorRepair"));
const GeneratorAMC = lazy(() => import("./pages/services/GeneratorAMC"));
const GeneratorSales = lazy(() => import("./pages/services/GeneratorSales"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <ScrollToTop />
          <ErrorBoundary>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/services/rental" element={<GeneratorRental />} />
                  <Route path="/services/repair" element={<GeneratorRepair />} />
                  <Route path="/services/amc" element={<GeneratorAMC />} />
                  <Route path="/services/sales" element={<GeneratorSales />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/gallery" element={<GalleryPage />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
