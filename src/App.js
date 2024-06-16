// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './widgets/navbar.js';
import Home from './pages/Home.js';
import Design from './pages/Design.js';
import Portofolio from './pages/Portofolio.js';
import Lainnya from './pages/Lainnya.js';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/design" element={<Design />} />
            <Route path="/portofolio" element={<Portofolio />} />
            <Route path="/lainnya" element={<Lainnya />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
