import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AboutTeamSection from "./pages/AboutTeamSection.jsx";
import Layout from "./Component/Layout.jsx";
import OutsourcedManagement from "./pages/OutsourcedManagement.jsx";
import ConsulenzaDirezionale from "./pages/ConsulenzaDirezionale";
import Marketing from "./pages/Marketing.jsx";
import LoginEducationSection from "./Component/LoginEducationSection.jsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import SignUpComponent from "./pages/SignUpComponent.jsx";

createRoot(document.getElementById("root")).render(
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/chi-siamo" element={<AboutTeamSection />} />
          <Route path="/management" element={<Navigate to="/consulenza-direzionale" replace />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/digital" element={<OutsourcedManagement />} />
          <Route path="/consulenza-direzionale" element={<ConsulenzaDirezionale />} />
          <Route path="/e-learning" element={<LoginEducationSection />} />
          <Route path="/signup" element={<SignUpComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </I18nextProvider>
);
