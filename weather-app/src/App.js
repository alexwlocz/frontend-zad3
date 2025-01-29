import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CityPage from "./pages/CityPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/city/:cityName" element={<CityPage />} />
      </Routes>
    </Router>
  );
}

export default App;
