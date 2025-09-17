import React from "react";
import "./index.css";
import MobileServicesList from "./Component/MobileServicesList";
import AdvisoryTeamSection from "./Component/AdvisoryTeamSection";
import HomePageFooter from "./Component/HomePageFooter";

// Main App component that combines all components
const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MobileServicesList />
      <AdvisoryTeamSection />
      <HomePageFooter />
    </div>
  );
};

export default App;
