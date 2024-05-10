import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from "./Pages/Landing";
import { PrivacyPage } from './Pages/Privacy/PrivacyPage'; 
import { TermsPage } from './Pages/Terms/TermsPage'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        {/* Redirect all other paths to LandingPage or a NotFoundComponent */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;