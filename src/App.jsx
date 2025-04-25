import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/Home.jsx";
import Terms from "./pages/Terms.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import "./i18n";
import "./App.css";

const LanguageWrapper = ({ children }) => {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    const [, lang] = pathname.split("/");
    i18n.changeLanguage(["en", "hr", "it", "de"].includes(lang) ? lang : "en");
  }, [pathname, i18n]);

  return children;
};

export default function App() {
  return (
    <Router>
      <LanguageWrapper>
      <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:lang" element={<HomePage />} />
          <Route path="/terms-conditions" element={<Terms />} />
          <Route path="/:lang/terms-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/:lang/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </LanguageWrapper>
    </Router>
  );
}
