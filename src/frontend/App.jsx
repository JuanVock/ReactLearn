import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import NumberGuesser from "./NumberGuesser.jsx";
import Wordle from "./WordleGame.jsx";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NumberGuesser" element={<NumberGuesser />} />
          <Route path="/wordle" element={<Wordle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
